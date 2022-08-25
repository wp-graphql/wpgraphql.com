import { documentationNav } from '/navs/documentation.js'
import Link from 'next/link'

const getNav = () => {
  return Object.keys(documentationNav).map((key, i) => {
    const children = documentationNav[key]

    if (children.length > 0) {
      return (
        <div key={key}>
          <h3 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">{key}</h3>
          <ul className="mb-6 space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
            {children.map((child, i) => {
              return (
                <li key={`${child.href}-${i}`}>
                  <Link href={child.href}>
                    <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                      {child.title}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }

    return null
  })
}

const DocsNav = () => {
  if (!documentationNav) {
    return null
  }

  return getNav()
}

export default DocsNav
