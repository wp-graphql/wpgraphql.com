import { BlogContent } from "@/components/blog/blog-content";
import { BlogList } from "@/components/blog/blog-list";
import { getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex h-full">
      <div className="w-80 border-r bg-muted/50">
        <BlogList posts={posts} currentSlug={params.slug} />
      </div>
      <BlogContent post={post} />
    </div>
  );
}