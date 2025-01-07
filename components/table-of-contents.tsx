"use client";

import { RefObject, useState } from "react";
import { cn } from "@/lib/utils";
import { useTableOfContents } from "@/hooks/use-table-of-contents";
import type { Heading } from "@/lib/get-headings";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TableOfContentsProps {
  contentRef: RefObject<HTMLElement>;
  headings: Heading[];
}

export function TableOfContents({ contentRef, headings }: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const { activeId, scrollToHeader } = useTableOfContents(contentRef, {
    headerOffset: 56
  });

  return (
    <div className={cn(
      "flex flex-col h-full transition-all duration-300",
      isExpanded ? "w-64" : "w-14"
    )}>
      <div className="sticky top-0 flex items-center min-h-[72px] px-6 border-b">
        <h4 className={cn("font-semibold mb-0", !isExpanded && "hidden")}>
          On this page
        </h4>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-9 w-9",
            isExpanded ? "absolute right-2" : "mx-auto"
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className={cn(
        "flex-1 py-6",
        isExpanded ? "px-4" : "hidden"
      )}>
        <div className="space-y-1">
          {headings.map((heading, index) => {
            const uniqueKey = `${heading.id}-${index}`;
            return (
              <a
                key={uniqueKey}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHeader(heading.id);
                }}
                href={`#${heading.id}`}
                className={cn(
                  "block text-sm py-1 text-muted-foreground hover:text-foreground transition-colors",
                  activeId === heading.id && "text-foreground font-medium",
                  heading.level === 2 && "pl-0",
                  heading.level === 3 && "pl-4",
                  heading.level === 4 && "pl-8"
                )}
              >
                {heading.text}
              </a>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}