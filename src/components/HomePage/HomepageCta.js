import Link from "next/link"

export default function HomepageCta() {
  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-navy dark:text-white sm:text-4xl">
          <span className="block">Boost your productivity</span>
          <span className="block">Start using WPGraphQL today!</span>
        </h2>
        <Link href="/docs/introduction">
          <a className="btn-secondary">
            Get Started
          </a>
        </Link>
        <a
          href="https://wordpress.org/plugins/wp-graphql"
          rel="noreferrer"
          target="_blank"
          className="btn-primary"
        >
          Download the Plugin
        </a>
      </div>
    </div>
  )
}
