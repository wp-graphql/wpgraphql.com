"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SecondaryNav } from "@/components/layout/secondary-nav";
import { DocsNav } from "@/components/docs/docs-nav";
import { Clock, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { TableOfContents } from "@/components/table-of-contents";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getDocNavigation } from "@/lib/docs";
import { Footer } from "../footer";

interface DocContent {
  content: string;
  readingTime: number;
  githubUrl: string;
  frontmatter?: Record<string, any>;
  title: string;
  slug: string;
}

export function DocsContent({ doc }: { doc: DocContent }) {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [isTocExpanded, setIsTocExpanded] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigation = getDocNavigation(doc.slug);

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
              <div dangerouslySetInnerHTML={{ __html: doc.content }} />
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
            <Footer />
          </div>
        </ScrollArea>
        <div className={cn(
        "fixed inset-y-0 right-0 lg:static border-l bg-muted/50 transition-all duration-300",
        isTocExpanded ? "w-64 translate-x-0" : "w-14 translate-x-full lg:translate-x-0",
        "z-20"
      )}>
        <div className="sticky top-0 flex items-center min-h-[72px] px-6 border-b">
          <h4 className={cn("font-semibold mb-0", !isTocExpanded && "hidden")}>
            On this page
          </h4>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-9 w-9",
              isTocExpanded ? "absolute right-2" : "mx-auto"
            )}
            onClick={() => setIsTocExpanded(!isTocExpanded)}
          >
            {isTocExpanded ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        <div className={cn(
          "transition-all duration-300",
          isTocExpanded ? "opacity-100 p-4" : "hidden"
        )}>
          <TableOfContents contentRef={contentRef} headings={doc.headings} />
        </div>
        </div>
      </div>
    </div>
  );
}