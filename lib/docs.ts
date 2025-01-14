import { estimateReadingTime } from '@/lib/reading-time';
import docsContent from '@/content/docs.json';
import fs from 'fs/promises';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import { getHighlighter } from 'shiki/bundle/web';
import matter from 'gray-matter';
import rehypeSlug from 'rehype-slug';
import { extractHeadings, type Heading } from './get-headings';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm'
import { visit } from 'unist-util-visit';
import { Root } from 'mdast';

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
      themes: ['github-light', 'github-dark'],
      langs: [
        'typescript', 
        'javascript', 
        'jsx', 
        'tsx', 
        'json', 
        'bash', 
        'php', 
        'graphql',
        'prisma',
        'sql'
      ]
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


export interface DocPage {
  title: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  readingTime: number;
  githubUrl: string;
  frontmatter?: Record<string, any>;
  headings: Heading[];
}

const prettyCodeOptions = {
  // Configure both light and dark themes
  theme: { light: 'github-light', dark: 'github-dark' },
  keepBackground: true,
  grid: true,
  onVisitHighlightedLine(node: any) {
    const existingClasses = Array.isArray(node.properties.className) 
      ? node.properties.className 
      : [];
    node.properties.className = [
      ...existingClasses,
      'line',
      'line--numbered',
      'line--highlighted'
    ];
  },
  onVisitLine(node: any) {
    if (!Array.isArray(node.properties.className)) {
      node.properties.className = [];
    }
    node.properties.className.push('line', 'line--numbered');
  }
};


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
    console.log({ parsed })

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
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, prettyCodeOptions],
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