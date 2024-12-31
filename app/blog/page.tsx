import { BlogList } from "@/components/blog/blog-list";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <div className="flex h-full">
      <div className="w-80 border-r bg-muted/50">
        <BlogList posts={posts} />
      </div>
      <div className="flex-1 flex items-center justify-center p-6 bg-muted/10">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-3">Welcome to the Blog</h1>
          <p className="text-muted-foreground mb-6">
            Select a post from the sidebar to start reading.
          </p>
          {posts.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No blog posts found. Check back later for new content.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}