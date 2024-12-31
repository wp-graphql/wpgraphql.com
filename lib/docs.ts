import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { markedHighlight } from 'marked-highlight';
import matter from 'gray-matter';
import { getHighlighter } from 'shiki';
import { estimateReadingTime } from '@/lib/reading-time';
import docsContent from '@/content/docs.json';
import { fetchDocsIndex } from './github';
import { getGitHubHeaders } from './github';

export interface DocNavigation {
  prev: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
}

export function getDocNavigation(currentSlug: string): DocNavigation {
  // Flatten all pages into a single array
  const allPages = docsContent.sections.flatMap(section => section.pages);
  
  // Find the current page index
  const currentIndex = allPages.findIndex(page => page.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  
  return {
    prev: currentIndex > 0 ? allPages[currentIndex - 1] : null,
    next: currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null
  };
}
// Initialize the highlighter
let highlighter: any = null;

async function initHighlighter() {
  if (!highlighter) {
    highlighter = await getHighlighter({
      themes: ['github-dark'],
      theme: 'github-dark', 
      langs: ['typescript', 'javascript', 'jsx', 'tsx', 'json', 'bash', 'php', 'graphql']
    });
  }
  return highlighter;
}

// Sample content for development/fallback
const SAMPLE_CONTENT = `
# Introduction

Welcome to the documentation. This is placeholder content while the actual documentation is being loaded or if it fails to load.

## Getting Started

This section would normally contain getting started information.

## Features

This section would list key features.

## Next Steps

This section would guide you to the next steps.
`;

// Configure marked with plugins
marked.use(gfmHeadingId());
marked.use(markedHighlight({
  highlight: async (code, lang) => {
    const hl = await initHighlighter();
    try {
      return hl.codeToHtml(code, { lang: lang || 'text' });
    } catch (error) {
      console.warn('Failed to highlight code:', error);
      return code;
    }
  }
}));

// Configure marked options
marked.setOptions({
  headerIds: true,
  mangle: false,
  gfm: true
});

export interface DocPage {
  title: string;
  slug: string;
  content: string;
  readingTime: number;
  githubUrl: string;
  frontmatter?: Record<string, any>;
}

export async function getDocContent(slug: string): Promise<DocPage | null> {
  try {
    const docFiles = await fetchDocsIndex();
    const doc = docFiles.find(d => d.slug === slug);
    
    if (!doc) {
      return null;
    }

    let content: string;

    try {
      // Fetch the markdown content from GitHub
      const response = await fetch(doc.download_url, {
        headers: getGitHubHeaders(),
        next: { revalidate: 3600 } // Cache for 1 hour
      });
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: response.statusText }));
        throw new Error(`Failed to fetch: ${error.message}`);
      }

      const markdown = await response.text();
      const parsed = matter(markdown);
      content = marked.parse(parsed.content);
      
      return {
        title: doc.title,
        slug: doc.slug,
        content,
        frontmatter: doc.frontmatter,
        readingTime: estimateReadingTime(parsed.content),
        githubUrl: doc.editUrl
      };
    } catch (fetchError) {
      console.warn(`Using fallback content for ${slug}:`, fetchError);
      // Use sample content as fallback
      const content = marked.parse(SAMPLE_CONTENT);
      return {
        title: doc.title,
        slug: doc.slug,
        content,
        frontmatter: doc.frontmatter,
        readingTime: estimateReadingTime(SAMPLE_CONTENT),
        githubUrl: doc.editUrl
      };
    }
  } catch (error) {
    console.error(`Critical error in getDocContent for ${slug}:`, error);
    return null;
  }
}