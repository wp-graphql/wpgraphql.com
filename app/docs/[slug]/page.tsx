import { DocsContent } from "@/components/docs/docs-content";
import { fetchDocsIndex } from "@/lib/github";
import { notFound } from "next/navigation";

// Add this export at the top of the file
export const revalidate = 3600; // Revalidate every hour


export async function generateStaticParams() {
  const docFiles = await fetchDocsIndex();
  
  // Ensure we have unique slugs and include the /docs/ prefix
  const uniqueSlugs = new Set(docFiles.map(doc => {
    const cleanSlug = doc.slug.replace(/^\/+|\/+$/g, ''); // Remove any existing slashes
    return cleanSlug; // Ensure docs/ prefix
  }));

  console.log( {
    uniqueSlugs
  })
  
  return Array.from(uniqueSlugs).map(slug => ({ 
    slug: slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const docFiles = await fetchDocsIndex();
  const doc = docFiles.find(d => d.slug === params.slug);
  
  if (!doc) {
    notFound();
  }
  
  return {
    title: doc.title,
    description: doc.frontmatter?.description || `${doc.title} - WPGraphQL Documentation`
  };
}

export default async function DocsSlugPage({ params }: { params: { slug: string } }) {
  const docFiles = await fetchDocsIndex();
  const doc = docFiles.find(d => d.slug === params.slug);

  if (!doc) {
    notFound();
  }

  return <DocsContent slug={params.slug} />;
}