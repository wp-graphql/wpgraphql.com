"use client";

import { RefObject } from "react";
import { cn } from "@/lib/utils";
import { useTableOfContents } from "@/hooks/use-table-of-contents";
import type { Heading } from "@/lib/get-headings";

interface TableOfContentsProps {
  contentRef: RefObject<HTMLElement>;
  headings: Heading[];
}

export function TableOfContents({ contentRef, headings }: TableOfContentsProps) {
  const { activeId, scrollToHeader } = useTableOfContents(contentRef, {
    headerOffset: 56 // Adjust this value to match your header height
  });

  return (
    <div className="flex h-full bg-muted/50 px-4">
      <div className="flex flex-col h-full transition-all duration-300 w-64">
        <div className="flex items-center min-h-[72px] px-4 border-b">
          <h2 className="semibold">On this page</h2>
        </div>
        <div className="space-y-1 py-4">
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
      </div>
    </div>
  );
}