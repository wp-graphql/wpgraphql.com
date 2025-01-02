import { useState, useEffect, useCallback, RefObject } from "react";

interface UseTableOfContentsOptions {
  headerOffset?: number;
}

export function useTableOfContents(
  contentRef: RefObject<HTMLElement>, 
  { headerOffset = 64 }: UseTableOfContentsOptions = {}
) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const headingElements = Array.from(contentRef.current.querySelectorAll("h2, h3, h4"));
      
      // Get all headings positions
      const headingPositions = headingElements.map(heading => {
        const { top } = heading.getBoundingClientRect();
        return { id: heading.id, top };
      });

      // Find the first heading that's below our offset threshold
      const threshold = headerOffset + 20;
      const firstHeadingBelowThreshold = headingPositions.find(
        heading => heading.top > threshold
      );

      const activeHeading = firstHeadingBelowThreshold
        ? headingPositions[Math.max(0, headingPositions.indexOf(firstHeadingBelowThreshold) - 1)]
        : headingPositions[headingPositions.length - 1];

      if (activeHeading && activeHeading.id !== activeId) {
        setActiveId(activeHeading.id);
      }
    };

    const scrollElement = contentRef.current?.closest('[data-radix-scroll-area-viewport]');
    scrollElement?.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => scrollElement?.removeEventListener("scroll", handleScroll);
  }, [contentRef, activeId, headerOffset]);

  const scrollToHeader = useCallback((headingId: string) => {
    const element = document.getElementById(headingId);
    if (element && contentRef.current) {
      const scrollArea = contentRef.current.closest('.scroll-area');
      const scrollViewport = scrollArea?.querySelector('[data-radix-scroll-area-viewport]');
      
      if (scrollViewport) {
        const elementPosition = element.offsetTop;
        
        // Update URL before scroll
        history.pushState(null, '', `#${headingId}`);
        
        // Set active ID immediately
        setActiveId(headingId);
        
        // Smooth scroll to position
        scrollViewport.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }
    }
  }, [headerOffset]);

  return {
    activeId,
    scrollToHeader
  };
}