"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useCallback } from "react";

interface TableOfContentsProps {
  content: string;
  contentRef: React.RefObject<HTMLDivElement>;
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content, contentRef }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [initialized, setInitialized] = useState(false);

  const getHeadings = useCallback(() => {
    if (!contentRef.current) return [];
    const elements = contentRef.current.querySelectorAll("h2, h3, h4");
    const items: HeadingItem[] = [];
    elements.forEach((element) => {
      items.push({
        id: element.id,
        text: element.textContent || "",
        level: parseInt(element.tagName[1]),
      });
    });
    return items;
  }, []);

  useEffect(() => {
    // Wait for the content to be rendered
    setTimeout(() => {
      setHeadings(getHeadings());
      setInitialized(true);
    }, 100);
  }, [content, getHeadings]);

  // Set initial active heading
  useEffect(() => {
    if (initialized && headings.length > 0 && !activeId) {
      setActiveId(headings[0].id);
    }
  }, [initialized, headings, activeId]);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const headingElements = contentRef.current.querySelectorAll("h2, h3, h4");
      let currentHeadingId = "";

      // Find the last heading that's above our threshold
      for (const heading of headingElements) {
        const { top } = heading.getBoundingClientRect();
        if (top < 100) {
          currentHeadingId = heading.id;
        } else {
          break;
        }
      }

      if (!currentHeadingId && headingElements.length > 0) {
        currentHeadingId = headingElements[0].id;
      }

      if (currentHeadingId !== activeId) {
        setActiveId(currentHeadingId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentRef, activeId]);

  useEffect(() => {
    // Update headings when content changes
    const mutationObserver = new MutationObserver(() => {
      setHeadings(getHeadings());
    });

    if (contentRef.current) {
      mutationObserver.observe(contentRef.current, {
      childList: true,
      subtree: true,
      });
    }

    return () => mutationObserver.disconnect();
  }, [getHeadings]);

  return (
    <div className="space-y-1">
      {headings.map((heading, index) => {
        const uniqueKey = `${heading.id}-${index}`;
        return (
          <a
            key={uniqueKey}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(heading.id);
              if (element) {
                const offset = 100; // Account for header height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
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
  );
}