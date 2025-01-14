import { resolveTemplate, TemplateConfig } from '@/lib/wordpress/helpers'

type PageProps = {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  return []
}

const templates: TemplateConfig = {
  index: (props) => <><h2>Index, YO</h2><pre>{JSON.stringify(props, null, 2)}</pre></>,
  'single-page': (props) => <><h2>Page, YO</h2><pre>{JSON.stringify(props, null, 2)}</pre></>,
  'single-post': (props) => <><h2>Post, YO</h2><pre>{JSON.stringify(props, null, 2)}</pre></>,
}

export default async function CatchAllPage({ params }: PageProps) {
  const path = `/${params.slug.join('/')}`
  return resolveTemplate(path, templates)
} 