import matter from 'gray-matter';

const GITHUB_REPO = 'wp-graphql/wp-graphql';
const GITHUB_BRANCH = 'develop';
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents`;
const GITHUB_RAW_CONTENT_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}`;
const GITHUB_EDIT_URL = `https://github.com/${GITHUB_REPO}/edit/${GITHUB_BRANCH}`;

export function getGitHubHeaders() {
  return {
    'Accept': 'application/vnd.github.v3.raw',
    ...(process.env.GITHUB_TOKEN ? {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
    } : {})
  };
}

interface GitHubFile {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
}

export interface DocFile {
  title: string;
  slug: string;
  path: string;
  download_url: string;
  editUrl: string;
  frontmatter: Record<string, any>;
}

export async function fetchDocsIndex(): Promise<DocFile[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/docs?ref=${GITHUB_BRANCH}`,
      { 
        headers: {
          ...getGitHubHeaders(),
          'Accept': 'application/vnd.github.v3+json' // Override for directory listing
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );
    
    if (!response.ok) {
      if (response.status === 403) {
        console.error('GitHub API rate limit exceeded. Set GITHUB_TOKEN in .env.local to increase limit.');
        throw new Error('GitHub API rate limit exceeded');
      }
      const error = await response.json().catch(() => ({ 
        message: `HTTP ${response.status}: ${response.statusText}` 
      }));
      throw new Error(`Failed to fetch docs index: ${error.message}`);
    }

    const files: GitHubFile[] = await response.json();
    const markdownFiles = files.filter(file => file.name.endsWith('.md'));
    
    const docFiles = await Promise.all(
      markdownFiles.map(async file => {
        try {
          const response = await fetch(file.download_url, {
            headers: getGitHubHeaders(),
            next: { revalidate: 3600 }
          });
          if (!response.ok) {
            if (response.status === 403) {
              console.error('GitHub API rate limit exceeded. Set GITHUB_TOKEN in .env.local to increase limit.');
              throw new Error('GitHub API rate limit exceeded');
            }
            const error = await response.json().catch(() => ({ 
              message: `HTTP ${response.status}: ${response.statusText}` 
            }));
            throw new Error(`Failed to fetch ${file.name}: ${error.message}`);
          }
          
          const content = await response.text();
          const { data: frontmatter } = matter(content);
          
          // Generate slug from filename
          const slug = file.path
            .replace(/^docs\//, '') // Remove leading docs/
            .replace(/\.md$/, '') // Remove .md extension
            .toLowerCase(); // Ensure lowercase for consistency
            
          // Use frontmatter title, or generate from filename
          const title = frontmatter.title || 
            slug
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');

          return {
            title,
            slug,
            path: file.path,
            download_url: file.download_url,
            editUrl: `${GITHUB_EDIT_URL}/${file.path}`,
            frontmatter
          };
        } catch (error) {
          console.warn(`Failed to process ${file.name}:`, error);
          return null;
        }
      })
    );

    return docFiles
      .filter((result): result is DocFile => result !== null);
      
  } catch (error) {
    console.error('Error fetching docs index:', error);
    return [];
  }
}