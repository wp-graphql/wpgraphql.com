import { getActionsSidebar } from '@/lib/actions'
import { Prose } from '@/components/Prose'

export const metadata = {
  title: 'Actions Reference - WPGraphQL',
  description: 'Browse all available actions in WPGraphQL'
}

export default async function ActionsPage() {
  const actions = await getActionsSidebar()

  return (
    <div className="space-y-8">
      <Prose>
        <h1>Actions Reference</h1>
        <p>
          Browse all available actions in WPGraphQL. Actions allow you to hook into
          various points in the execution of a GraphQL request.
        </p>
      </Prose>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((action) => (
          <a
            key={action.href}
            href={action.href}
            className="block rounded-lg border border-gray-200 p-4 hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-800/50"
          >
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
              {action.title}
            </h2>
          </a>
        ))}
      </div>
    </div>
  )
}
