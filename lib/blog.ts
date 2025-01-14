import { marked } from 'marked';
import { estimateReadingTime } from './reading-time';

const WPGRAPHQL_URL = 'https://content.wpgraphql.com/graphql';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  readingTime: number;
  categories?: {
    nodes?: {
      name: string;
    }[];
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(WPGRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: /* GraphQL */ `
          query BlogPosts {
            posts(first: 100, where: { orderby: { field: DATE, order: DESC }}) {
              nodes {
                slug
                title
                date
                excerpt
                content
                author {
                  node {
                    name
                    avatar {
                      url
                    }
                  }
                }
                categories {
                  nodes {
                    id
                    databaseId
                    name
                    slug
                  }
                }
              }
            }
          }
        `
      }),
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['blog-posts'] // Add cache tag for revalidation
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
    }

    const { data } = await response.json();
    
    return data.posts.nodes.map((post: any) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      excerpt: post.excerpt.replace(/<[^>]*>/g, ''), // Strip HTML from excerpt
      content: post.content,
      author: {
        name: post.author.node.name,
        avatar: post.author.node.avatar.url
      },
      categories: {
        nodes: post.categories.nodes
      },
      readingTime: estimateReadingTime(post.content.replace(/<[^>]*>/g, '')) // Strip HTML for reading time calculation
    }));

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}