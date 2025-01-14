"use client";

import { usePathname, useParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { ChevronRight, Book, Code2, Newspaper, Users, FileText } from "lucide-react";
import Link from "next/link";
import { WPGraphQLLogo } from "@/components/icons/wpgraphql-logo";
import { cn } from "@/lib/utils";
import { getBlogPosts } from "@/lib/blog";

const getIconForPath = (path: string) => {
  switch (path) {
    case "/":
      return { icon: WPGraphQLLogo, label: "" };
    case "/docs":
      return { icon: Book, label: "Docs" };
    case "/reference":
      return { icon: Code2, label: "Reference" };
    case "/resources":
      return { icon: Newspaper, label: "Resources" };
    case "/community":
      return { icon: Users, label: "Community" };
    case "/blog":
      return { icon: FileText, label: "Blog" };
    default:
      return null;
  }
};

const sectionColors: Record<string, string> = {
  "/": "text-foreground",
  "/docs": "text-blue-500",
  "/reference": "text-purple-500",
  "/resources": "text-green-500",
  "/community": "text-orange-500",
  "/blog": "text-rose-500"
} as const;

interface BreadcrumbSegmentProps {
  segment: string;
  index: number;
  segments: string[];
}

function BreadcrumbSegment({ segment, index, segments }: BreadcrumbSegmentProps) {
  const currentPath = `/${segments.slice(0, index + 1).join("/")}`;
  const pathInfo = getIconForPath(currentPath);
  const Icon = pathInfo?.icon;
  const params = useParams();
  const [blogTitle, setBlogTitle] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogTitle() {
      if (segments[0] === "blog" && segments[1]) {
        const posts = await getBlogPosts();
        const post = posts.find(p => p.slug === segments[1]);
        if (post) {
          setBlogTitle(post.title);
        }
      }
    }
    fetchBlogTitle();
  }, [segments]);

  const label = useMemo(() => {
    if (segments[0] === "blog" && segments[1] && index === segments.length - 1) {
      return blogTitle || "Loading...";
    }
    return pathInfo?.label || segment;
  }, [segments, pathInfo, blogTitle, segment, index]);
  
  return (
    <div className="flex items-center gap-2">
      <ChevronRight className="h-4 w-4" />
      <Link
        href={currentPath}
        className="flex items-center gap-2 hover:text-foreground/80"
      >
        {Icon && (
          <Icon 
            className={cn(
              "h-4 w-4",
              sectionColors[currentPath]
            )} 
          />
        )}
        <span className="text-muted-foreground">{label}</span>
      </Link>
    </div>
  );
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/" className="text-foreground hover:text-foreground/80">
        <div className="flex items-center gap-2">
          <WPGraphQLLogo className="h-4 w-4" />
          <span className="text-muted-foreground">WPGraphQL</span>
        </div>
      </Link>
      {segments.length > 0 && segments.map((segment, index) => (
        <BreadcrumbSegment
          key={segment}
          segment={segment}
          index={index}
          segments={segments}
        />
      ))}
    </div>
  );
}