"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog";
import { useEffect, useRef } from "react";

interface BlogListProps {
  posts: BlogPost[];
  currentSlug?: string;
}

export function BlogList({ posts, currentSlug }: BlogListProps) {
  const activePostRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activePostRef.current) {
      // Scroll the active post into view with some offset from the top
      activePostRef.current.scrollIntoView({ block: 'start' });
      
      // If using a ScrollArea parent, we need to scroll its viewport
      const scrollViewport = activePostRef.current.closest('[data-radix-scroll-area-viewport]');
      if (scrollViewport) {
        const offset = activePostRef.current.offsetTop - 24; // 24px offset from top
        scrollViewport.scrollTop = offset;
      }
    }
  }, [currentSlug]);

  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col divide-y">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            ref={currentSlug === post.slug ? activePostRef : undefined}
            className={cn(
              "flex items-start gap-4 p-4 hover:bg-muted/50 transition-colors relative",
              currentSlug === post.slug && "bg-secondary"
            )}
          >
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className={cn(
                  "font-medium truncate",
                  currentSlug === post.slug && "text-secondary-foreground"
                )}>{post.title}</p>
                <time className="text-xs text-muted-foreground whitespace-nowrap">
                  {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
                </time>
              </div>
              <p className={cn(
                "text-sm line-clamp-2",
                currentSlug === post.slug ? "text-secondary-foreground/90" : "text-muted-foreground"
              )} dangerouslySetInnerHTML={{__html: post.excerpt}} />
            </div>
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
}