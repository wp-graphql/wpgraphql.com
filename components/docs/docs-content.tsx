"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SecondaryNav } from "@/components/layout/secondary-nav";
import { DocsNav } from "@/components/docs/docs-nav";
import { Clock, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { TableOfContents } from "@/components/table-of-contents";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import Link from "next/link";
import { getDocNavigation } from "@/lib/docs";
import { MDXContent } from "../mdx-content";
import { MDXRemoteSerializeResult } from "next-mdx-remote/rsc";

interface DocContent {
  content: MDXRemoteSerializeResult;
  readingTime: number;
  githubUrl: string;
  frontmatter?: Record<string, any>;
  title: string;
  slug: string;
  headings: any[];
}

export function DocsContent({ doc }: { doc: DocContent }) {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [isTocExpanded, setIsTocExpanded] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigation = getDocNavigation(doc.slug);
  console.log({ doc })
  return (
    <div className="flex h-full">
      <SecondaryNav>
        <DocsNav isExpanded={isNavExpanded} onToggleExpand={() => setIsNavExpanded(!isNavExpanded)} />
      </SecondaryNav>
      <div className="flex-1 flex">
        <ScrollArea className="scroll-area flex-1">
          <div className="max-w-4xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">
                {doc.title}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {doc.readingTime} min read
                </div>
                {doc.githubUrl && (
                  <a
                    href={doc.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    Edit on GitHub
                  </a>
                )}
              </div>
            </div>
            <div ref={contentRef} className="prose dark:prose-invert max-w-none">
              <MDXContent content={doc.content} />
              <div className="mt-16 flex items-center justify-between pt-4 border-t">
                <div>
                  {navigation.prev && (
                    <Link href={`/docs/${navigation.prev.slug}`}>
                      <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="h-4 w-4" />
                        {navigation.prev.title}
                      </Button>
                    </Link>
                  )}
                </div>
                <div>
                  {navigation.next && (
                    <Link href={`/docs/${navigation.next.slug}`}>
                      <Button variant="ghost" className="gap-2">
                        {navigation.next.title}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        </ScrollArea>
        <div className="border-l bg-muted/50">
          <TableOfContents contentRef={contentRef} headings={doc.headings} />

        </div>
      </div>
    </div>
  );
}