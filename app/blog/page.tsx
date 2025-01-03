import { BlogList } from "@/components/blog/blog-list";
import { getBlogPosts } from "@/lib/blog";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";


export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  // Group posts by category
  const postsByCategory = posts.reduce((acc, post) => {

    // Handle posts with no categories
    if (!post.categories?.nodes?.length) {
      if (!acc['Uncategorized']) {
        acc['Uncategorized'] = [];
      }
      acc['Uncategorized'].push(post);
      return acc;
    }

    // Add post to each of its categories
    post.categories.nodes.forEach(category => {
      const categoryName = category.name;
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(post);
    });
    
    return acc;
  }, {} as Record<string, typeof posts>);

  return (
    <div className="flex h-full">
      <div className="w-80 border-r bg-muted/50">
        <BlogList posts={posts} />
      </div>
      <ScrollArea className="flex-1">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(postsByCategory).map(([category, categoryPosts]) => (
              <Card key={category} className="overflow-hidden">
                <div className="flex items-center justify-between p-3 bg-muted border-b">
                  <h2 className="text-sm font-medium text-muted-foreground">{category}</h2>
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    {categoryPosts.slice(0, 3).map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block text-sm text-foreground hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    ))}
                    {categoryPosts.length > 3 && (
                      <Link
                        href={`/blog/category/${category.toLowerCase()}`}
                        className="block text-xs text-muted-foreground hover:text-primary"
                      >
                        +{categoryPosts.length - 3} more posts
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}