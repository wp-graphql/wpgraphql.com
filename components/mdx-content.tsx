'use client';

import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import components from '@/mdx-components';

export function MDXContent({ content }: { content: MDXRemoteSerializeResult }) {
  return <MDXRemote {...content} components={components} />;
}