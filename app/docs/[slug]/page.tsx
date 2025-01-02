import { getDocContent } from '@/lib/docs';
import { DocsContent } from '@/components/docs/docs-content';
import { notFound } from 'next/navigation';
import docsContent from '@/content/docs.json';

export const revalidate = 3600; // revalidate every hour

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all possible doc pages
export async function generateStaticParams() {
  const paths = docsContent.sections.flatMap(section => 
    section.pages.map(page => ({
      slug: page.slug
    }))
  );
  
  return paths;
}

export default async function DocsPage({ params }: PageProps) {
  const doc = await getDocContent(params.slug);
  
  if (!doc) {
    notFound();
  }

  return <DocsContent doc={doc} />;
}