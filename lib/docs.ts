import { estimateReadingTime } from '@/lib/reading-time';
import docsContent from '@/content/docs.json';
import fs from 'fs/promises';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug';
import { type Heading } from './get-headings';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import { visit } from 'unist-util-visit';
import matter from 'gray-matter';

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


export interface DocPage {
  title: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  readingTime: number;
  githubUrl: string;
  frontmatter?: Record<string, any>;
  headings: Heading[];
}


export async function getDocContent(slug: string): Promise<DocPage | null> {
  try {
    const allPages = docsContent.sections.flatMap(section => section.pages);
    const doc = allPages.find(d => d.slug === slug);
    
    if (!doc) {
      return null;
    }

    const filePath = path.join(process.cwd(), 'content/docs', `${slug}.md`);
    const markdown = await fs.readFile(filePath, 'utf-8');
    const parsed = matter(markdown);

    const processor = unified().use(remarkParse);
    const tree = processor.parse(parsed.content);
    const headings: Heading[] = [];
    
    visit(tree, 'heading', (node: any) => {
      const text = node.children
        .filter((child: any) => child.type === 'text')
        .map((child: any) => child.value)
        .join('');
      
      headings.push({
        text,
        level: node.depth,
        // Use GitHub-style slug generation to match rehype-slug
        id: text
          .toLowerCase()
          .trim()
          .replace(/[^\w\- ]/g, '') // Remove special characters
          .replace(/\s+/g, '-')     // Replace spaces with hyphens
          .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
      });
    });

    const mdxSource = await serialize(parsed.content, {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          remarkGfm,
          // Add custom plugin to preserve code block metadata
          () => (tree) => {
            visit(tree, 'code', (node: any) => {
              // Convert the node to a JSX-compatible format
              const { lang, value, meta } = node;
              node.type = 'mdxJsxFlowElement';
              node.name = 'pre';
              node.attributes = [
                { type: 'mdxJsxAttribute', name: 'className', value: `language-${lang || ''}` },
                { type: 'mdxJsxAttribute', name: 'code', value: value },
                meta && { type: 'mdxJsxAttribute', name: 'meta', value: meta }
              ].filter(Boolean);
            });
          }
        ],
        rehypePlugins: [
          rehypeSlug,
        ],
        development: process.env.NODE_ENV === 'development',
      },
    });

    return {
      title: doc.title,
      slug: doc.slug,
      content: mdxSource,
      frontmatter: parsed.data,
      readingTime: estimateReadingTime(parsed.content),
      githubUrl: '',
      headings
    };
  } catch (error) {
    console.error(`Error in getDocContent:`, error);
    return null;
  }
}