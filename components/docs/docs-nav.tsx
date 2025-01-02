"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import docsContent from "@/content/docs.json";
import { useEffect, useRef } from "react"; // Add this import

export function DocsNav({ isExpanded, onToggleExpand }: {
  isExpanded: boolean;
  onToggleExpand: () => void;
}) {
  const pathname = usePathname();
  const activeItemRef = useRef<HTMLAnchorElement>(null); // Add this ref
  const isInitialLoad = useRef(true); // Add this ref

  useEffect(() => {
    if (activeItemRef.current && isExpanded) {
      activeItemRef.current.scrollIntoView({
        behavior: isInitialLoad.current ? "smooth" : "auto",
        block: "center"
      });
    }
  }, [pathname, isExpanded]);

  return (
    <div className={cn(
      "flex flex-col h-full transition-all duration-300",
      isExpanded ? "w-64" : "w-14"
    )}>
      <div className="flex items-center min-h-[72px] px-4 border-b">
        <h2 className={cn(
          "font-semibold",
          !isExpanded && "hidden"
        )}>Documentation</h2>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-9 w-9",
            isExpanded ? "ml-auto" : "mx-auto"
          )}
          onClick={onToggleExpand}
        >
          <ChevronLeft className={cn(
            "h-4 w-4 transition-transform",
            !isExpanded && "rotate-180"
          )} />
        </Button>
      </div>
      <ScrollArea className={cn(
        "flex-1 py-6",
        isExpanded ? "px-4" : "hidden"
      )}>
        <div className="space-y-6">
          {docsContent.sections
            // Filter out sections where all pages have placeholder slugs
            .filter(section => section.pages.some(page => page.slug !== '#'))
            .map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-2">{section.title}</h3>
                <div className="space-y-1">
                  {section.pages
                    // Filter out pages with placeholder slugs
                    .filter(page => page.slug !== '#')
                    .map((page) => (
                      <Link
                        key={page.slug}
                        href={`/docs/${page.slug}`}
                        ref={pathname === `/docs/${page.slug}` ? activeItemRef : undefined}
                        className={cn(
                          "block px-3 py-1.5 text-sm rounded-md",
                          pathname === `/docs/${page.slug}`
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {page.title}
                    </Link>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </ScrollArea>
    </div>
  );
}