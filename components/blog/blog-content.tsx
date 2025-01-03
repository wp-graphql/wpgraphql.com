"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { TableOfContents } from "@/components/table-of-contents";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState, useRef } from "react";
import type { BlogPost } from "@/lib/blog";
import { Footer } from "../footer";

interface BlogContentProps {
  post: BlogPost;
  headings: Array<{ id: string; text: string; level: number }>;
  processedContent: string;
}

export function BlogContent({ post, headings, processedContent }: BlogContentProps) {
  const [isTocExpanded, setIsTocExpanded] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex h-full">
    <div className="flex-1 flex">
      <ScrollArea className="flex-1 scroll-area">
        <div className="max-w-4xl mx-auto px-8 py-6 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-6 w-6 rounded-full"
                  />
                  {post.author.name}
                </div>
                <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </div>
              </div>
            </div>            
          </div>
          <div ref={contentRef} className="prose dark:prose-invert max-w-none">
            <div className="overflow-hidden" dangerouslySetInnerHTML={{ __html: processedContent }} />
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
          <TableOfContents headings={headings} contentRef={contentRef} />
        </div>
      </div>
    </div>
    </div>
  );
}