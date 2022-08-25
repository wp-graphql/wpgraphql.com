/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import DynamicHeroIcon from '../DynamicHeroIcon/DynamicHeroIcon'

const HomepageFeatures = () => {
  return (
    <>
      <div className="relative bg-white dark:bg-slate-800 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold tracking-wider text-indigo-600 dark:text-indigo-200 uppercase">
              Efficient Data Fetching
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
              Query what you need. Get exactly that.
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500 dark:text-gray-100">
              With GraphQL, the client makes declarative queries, asking for the exact data needed,
              and exactly what was asked for is given in response, nothing more. This allows the
              client have control over their application, and allows the GraphQL server to perform
              more efficiently by only fetching the resources requested.
            </p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-10">
            <Image
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="/graphiql-query-posts.png"
              alt=""
              width={1024}
              height={402}
            />
          </div>
        </div>
      </div>
      <div className="relative bg-slate-200 dark:bg-slate-900 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold tracking-wider text-indigo-600 dark:text-indigo-200 uppercase">
              Nested Resources
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
              Fetch many resources in a single request
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500 dark:text-gray-100">
              GraphQL queries allow access to multiple root resources, and also smoothly follow
              references between connected resources. While a typical REST API would require
              round-trip requests to many endpoints, GraphQL APIs can get all the data your app
              needs in a single request. Apps using GraphQL can be quick even on slow mobile network
              connections.
            </p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-10">
            <Image
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="/query-multiple-root-resources.png"
              alt=""
              width={1017}
              height={438}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomepageFeatures
