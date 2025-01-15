import { notFound } from 'next/navigation'
import { getActionBySlug } from '@/lib/actions'
import { MDXContent } from '@/components/mdx-content'

export default async function ActionPage({
  params,
}: {
  params: { slug: string }
}) {
  const action = await getActionBySlug(params.slug)
  if (!action) notFound()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {action.title}
        </h1>
        {action.since && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Since version {action.since}
          </p>
        )}
      </div>

      <MDXContent content={action.content} />
    </div>
  )
} 