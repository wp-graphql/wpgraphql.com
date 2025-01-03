import { decode } from 'html-entities';
import { BlogContent } from "@/components/blog/blog-content";
import { BlogList } from "@/components/blog/blog-list";
import { getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Footer } from '@/components/footer';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function processContent(content: string) {
  const headings: Array<{ id: string; text: string; level: number }> = [];
  const processedContent = content.replace(
    /<h([2-4])(?:\s+class="[^"]*")?(?:\s+[^>]*)?>(.*?)<\/h\1>/g,
    (match, level, text) => {
      const plainText = text.replace(/<[^>]*>/g, '');
      const decodedText = decode(plainText);
      const slug = decodedText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      headings.push({
        id: slug,
        text: decodedText, // Using decoded text for display
        level: parseInt(level, 10)
      });

      return `<h${level} id="${slug}">${text}</h${level}>`;
    }
  );

  return { headings, processedContent };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const { headings, processedContent } = processContent(post.content);

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 overflow-hidden">
        <div className="w-80 border-r bg-muted/50 overflow-y-auto">
          <BlogList posts={posts} currentSlug={params.slug} />
        </div>
        <div className="flex-1 overflow-y-auto">
          <BlogContent 
            post={post} 
            headings={headings}
            processedContent={processedContent}
          />
        </div>
      </div>
    </div>
  );
}