import { readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import glob from 'fast-glob'
import { readFile } from 'fs/promises'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'

export interface Action {
  slug: string
  title: string
  since?: string
  sourceFile: string
  sourceLine: number
  sourceUrl: string
  content: MDXRemoteSerializeResult
}

export async function getAllActions(): Promise<Action[]> {
  const files = await glob('content/actions/*.mdx')
  
  return Promise.all(files.map(async (file) => {
    const source = readFileSync(file, 'utf8')
    const { data, content } = matter(source)
    const slug = file.replace('content/actions/', '').replace('.mdx', '')
    const mdxSource = await serialize(content)
    
    return {
      slug,
      title: data.title,
      since: data.since,
      sourceFile: data.sourceFile,
      sourceLine: data.sourceLine,
      sourceUrl: `https://github.com/wp-graphql/wp-graphql/blob/develop/${data.sourceFile}#L${data.sourceLine}`,
      content: mdxSource
    }
  }))
}

export async function getActionBySlug(slug: string): Promise<Action | null> {
  const files = await glob(`content/actions/${slug}.mdx`)
  if (!files.length) return null
  
  const source = readFileSync(files[0], 'utf8')
  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    }
  })
  
  return {
    slug,
    title: data.title,
    since: data.since,
    sourceFile: data.sourceFile,
    sourceLine: data.sourceLine,
    sourceUrl: `https://github.com/wp-graphql/wp-graphql/blob/develop/${data.sourceFile}#L${data.sourceLine}`,
    content: mdxSource
  }
}

interface ActionFrontmatter {
  title: string
  since: string
  sourceFile: string
  sourceLine: number
}

export async function getActionsSidebar() {
  const files = await glob('content/actions/*.mdx')
  
  const items = await Promise.all(
    files.map(async (file) => {
      const content = await readFile(file, 'utf8')
      const { data } = matter(content) as { data: ActionFrontmatter }
      const slug = file.replace('content/actions/', '').replace('.mdx', '')
      
      return {
        title: data.title,
        href: `/actions/${slug}`,
      }
    })
  )

  // Sort items alphabetically by title
  return items.sort((a, b) => a.title.localeCompare(b.title))
} 