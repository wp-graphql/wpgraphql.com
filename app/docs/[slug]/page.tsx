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
    section.pages.map(page => {
      console.log(`Generating path for slug: ${page.slug}`);
      return {
        slug: page.slug
      };
    })
  );
  
  console.log('All paths:', paths);
  return paths;
}

export default async function DocsPage({ params }: PageProps) {
  try {
    const doc = await getDocContent(params.slug);
    
    if (!doc) {
      console.error(`No doc found for slug: ${params.slug}`);
      notFound();
    }

    return <DocsContent doc={doc} />;
  } catch (error) {
    console.error(`Error loading doc for slug ${params.slug}:`, error);
    throw error; // Re-throw to show error boundary
  }
}