"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, Code2, FileText, Users, ArrowRight, Github, Download } from "lucide-react";
import Link from "next/link";
import { WPGraphQLLogo } from "@/components/icons/wpgraphql-logo";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Documentation",
    description: "Comprehensive guides and tutorials to help you get started with WPGraphQL.",
    icon: Book,
    href: "/docs",
    color: "text-blue-500"
  },
  {
    title: "API Reference",
    description: "Detailed API documentation for developers building with WPGraphQL.",
    icon: Code2,
    href: "/reference",
    color: "text-purple-500"
  },
  {
    title: "Blog",
    description: "Latest news, updates, and technical articles from the WPGraphQL team.",
    icon: FileText,
    href: "/blog",
    color: "text-green-500"
  },
  {
    title: "Community",
    description: "Join our growing community of developers building with WPGraphQL.",
    icon: Users,
    href: "/community",
    color: "text-orange-500"
  }
];

export default function Home() {
  return (
    <ScrollArea className="h-full">
      <div className="px-6">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="flex items-center gap-4 mb-6">
            <WPGraphQLLogo className="h-16 w-16" />
            <h1 className="text-4xl font-bold">WPGraphQL</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
            The GraphQL API for WordPress. Query and mutate WordPress data with the power and flexibility of GraphQL.
          </p>
          <div className="flex gap-4">
            <Link href="/docs/introduction">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://github.com/wp-graphql/wp-graphql" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>
          <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
            <Download className="h-4 w-4" />
            <span>Install via WordPress Plugin Directory or Composer</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href}>
              <Card className="p-6 h-full hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <feature.icon className={cn("h-8 w-8", feature.color)} />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Latest Updates Section */}
        <div className="py-12">
          <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="p-4 border-b bg-muted">
                <h3 className="font-semibold">Latest Release</h3>
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-1">v1.0.0</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Major release with new features and improvements
                </p>
                <Link href="/docs/changelog">
                  <Button variant="outline" size="sm">
                    View Changelog
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="p-4 border-b bg-muted">
                <h3 className="font-semibold">Latest Blog Post</h3>
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-1">Getting Started with WPGraphQL</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how to set up and start using WPGraphQL in your WordPress site
                </p>
                <Link href="/blog">
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="p-4 border-b bg-muted">
                <h3 className="font-semibold">Community</h3>
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-1">Join Our Community</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get help, share your work, and connect with other developers
                </p>
                <Link href="/community">
                  <Button variant="outline" size="sm">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}