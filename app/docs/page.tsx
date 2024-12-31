"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SecondaryNav } from "@/components/layout/secondary-nav";
import { DocsNav } from "@/components/docs/docs-nav";
import { Book, Lightbulb, Code2, Blocks, Users } from "lucide-react";
import Link from "next/link";
import docsContent from "@/content/docs.json";

const getIconForSection = (title: string) => {
  switch (title) {
    case "Getting Started":
      return Book;
    case "Beginner Guides":
      return Lightbulb;
    case "Using WPGraphQL":
      return Code2;
    case "Dig Deeper":
      return Blocks;
    case "Community":
      return Users;
    default:
      return null;
  }
};

export default function DocsPage() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  return (
    <div className="flex h-full">
      <SecondaryNav>
        <DocsNav isExpanded={isNavExpanded} onToggleExpand={() => setIsNavExpanded(!isNavExpanded)} />
      </SecondaryNav>
      <ScrollArea className="flex-1">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Documentation</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docsContent.sections.map((section) => {
              const Icon = getIconForSection(section.title);
              return (
                <Card key={section.title} className="overflow-hidden">
                  <div className="flex items-center justify-between p-3 bg-muted border-b">
                    <h2 className="text-sm font-medium text-muted-foreground">{section.title}</h2>
                    {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      {section.description}
                    </p>
                    <div className="space-y-2">
                      {section.pages.slice(0, 3).map((page) => (
                        <Link
                          key={page.slug}
                          href={`/docs/${page.slug}`}
                          className="block text-sm text-foreground hover:text-primary"
                        >
                          {page.title}
                        </Link>
                      ))}
                      {section.pages.length > 3 && (
                        <span className="block text-xs text-muted-foreground">
                          +{section.pages.length - 3} more pages
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}