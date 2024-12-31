"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SecondaryNav } from "@/components/layout/secondary-nav";
import { DocsNav } from "@/components/docs/docs-nav";
import { Clock, Github, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { TableOfContents } from "@/components/docs/table-of-contents";
import docsContent from "@/content/docs.json";
import { getDocContent, getDocNavigation } from "@/lib/docs";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface DocContent {
  content: string;
  readingTime: number;
  githubUrl: string;
  frontmatter?: Record<string, any>;
}

export function DocsContent({ slug }: { slug: string }) {
  const [doc, setDoc] = useState<DocContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [isTocExpanded, setIsTocExpanded] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadContent() {
      setIsLoading(true);
      try {
        const docContent = await getDocContent(slug);
        if (!docContent) {
          notFound();
        }
        setDoc(docContent);
      } catch (error) {
        console.error('Failed to load doc content:', error);
        notFound();
      }
      setIsLoading(false);
    }
    loadContent();
  }, [slug]);

  return (
    <div className="flex h-full">
      <SecondaryNav>
        <DocsNav isExpanded={isNavExpanded} onToggleExpand={() => setIsNavExpanded(!isNavExpanded)} />
      </SecondaryNav>
      <div className="flex-1 flex">
        <ScrollArea className="flex-1">
          <div className="max-w-4xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">
                {doc?.title || 'Documentation'}
              </h1>
              {doc && (
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {doc.readingTime} min read
                    </div>
                    <a
                      href={doc.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      Edit on GitHub
                    </a>
                </div>
              )}
            </div>
            <div ref={contentRef} className="prose dark:prose-invert max-w-none">
              {isLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                </div>
              ) : doc?.content ? (
                <div dangerouslySetInnerHTML={{ __html: doc.content }} />
              ) : (
                <p className="text-muted-foreground">
                  Failed to load documentation content.
                </p>
              )}
              <div className="mt-16 flex items-center justify-between pt-4 border-t">
                {(() => {
                  const nav = getDocNavigation(slug);
                  return (
                    <>
                      {nav.prev ? (
                        <Link
                          href={`/docs/${nav.prev.slug}`}
                          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        >
                          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                          <div>
                            <div className="text-xs">Previous</div>
                            <div className="text-sm font-medium">{nav.prev.title}</div>
                          </div>
                        </Link>
                      ) : <div />}
                      {nav.next ? (
                        <Link
                          href={`/docs/${nav.next.slug}`}
                          className="group flex items-center gap-2 text-right text-muted-foreground hover:text-foreground"
                        >
                          <div>
                            <div className="text-xs">Next</div>
                            <div className="text-sm font-medium">{nav.next.title}</div>
                          </div>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      ) : <div />}
                    </>
                  );
                })()}
              </div>
            </div>
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
            {doc?.content && <TableOfContents content={doc.content} contentRef={contentRef} />}
          </div>
        </div>
      </div>
    </div>
  );
}