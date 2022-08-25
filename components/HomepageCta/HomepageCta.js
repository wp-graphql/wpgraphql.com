/* This example requires Tailwind CSS v2.0+ */
const HomepageCta = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          <span className="block">Boost your productivity</span>
          <span className="block">Start using WPGraphQL today!</span>
        </h2>
        <a
          href="#"
          className="mt-8 bg-white dark:bg-slate-800 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-sky-800 dark:text-sky-50 hover:bg-gray-100 dark:hover:bg-slate-600 hover:shadow-lg"
        >
          Get Started
        </a>
        <a
          href="#"
          className="mt-8 ml-8 bg-orange-500  border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-orange-600 hover:shadow-lg"
        >
          Download the Plugin
        </a>
      </div>
    </div>
  )
}

export default HomepageCta
