import { notFound } from 'next/navigation'
import { SEED_QUERY } from './queries/seed-query'
import { ReactElement } from 'react'

export type TemplateConfig = {
  [key: string]: React.ComponentType<any>
}

async function getWordPressNodeByUri(path: string) {
  const res = await fetch(`https://content.wpgraphql.com/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: SEED_QUERY,
      variables: {
        uri: path,
      },
    }),
  })

  const data = await res.json()
  return data.data?.nodeByUri || null
}

function getPossibleTemplates(content: any): string[] {
  let possibleTemplates: string[] = []

  // Check for front page
  if (content.isFrontPage) {
    possibleTemplates.push('frontPage')
  }

  // Check for posts page
  if (content.isPostsPage) {
    possibleTemplates.push('home')
  }

  // Handle archives
  if (content.__typename === 'ContentType' && !content.isPostsPage) {
    if (content.name) {
      possibleTemplates.push(`archive-${content.name}`)
    }
    possibleTemplates.push('archive')
  }

  // Handle taxonomies
  if (content.isTermNode) {
    const { taxonomyName } = content
    if (taxonomyName === 'category') {
      if (content.slug) possibleTemplates.push(`category-${content.slug}`)
      if (content.databaseId) possibleTemplates.push(`category-${content.databaseId}`)
      possibleTemplates.push('category')
    } else if (taxonomyName === 'post_tag') {
      if (content.slug) possibleTemplates.push(`tag-${content.slug}`)
      if (content.databaseId) possibleTemplates.push(`tag-${content.databaseId}`)
      possibleTemplates.push('tag')
    }
    possibleTemplates.push('archive')
  }

  // Handle author archives
  if (content.__typename === 'User') {
    if (content.name) possibleTemplates.push(`author-${content.name}`)
    if (content.databaseId) possibleTemplates.push(`author-${content.databaseId}`)
    possibleTemplates.push('author')
    possibleTemplates.push('archive')
  }

  // Handle singular content
  if (content.isContentNode) {
    const contentType = content?.contentType?.node?.name
    if (contentType === 'page') {
      if (content.slug) possibleTemplates.push(`page-${content.slug}`)
      if (content.databaseId) possibleTemplates.push(`page-${content.databaseId}`)
      possibleTemplates.push('page')
    } else {
      // Handle posts and custom post types
      if (content.slug) possibleTemplates.push(`single-${contentType}-${content.slug}`)
      possibleTemplates.push(`single-${contentType}`)
      possibleTemplates.push('single')
    }
    possibleTemplates.push('singular')
  }

  // Default fallback
  possibleTemplates.push('index')

  return possibleTemplates
}

export async function resolveTemplate(
  path: string,
  templates: TemplateConfig
): Promise<ReactElement> {
  const content = await getWordPressNodeByUri(path)
  
  if (!content) {
    notFound()
  }

  const possibleTemplates = getPossibleTemplates(content)
  
  // Find the first matching template
  const templateKey = possibleTemplates.find(template => templates[template])
  const Template = templateKey ? templates[templateKey] : templates.index

  if (!Template) {
    throw new Error(`No matching template found for path: ${path}`)
  }

  return <Template content={content} />
} 