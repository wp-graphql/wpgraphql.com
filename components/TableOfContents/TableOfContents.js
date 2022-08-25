import { useState } from 'react'
import Link from 'next/link'

const TableOfContents = ({ toc }) => {
  if (!toc || !toc.length) {
    return null
  }

  return (
    <div className="">
      <h2 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
        On this page
      </h2>
      <ul className="text-slate-700 text-sm leading-6">
        {toc.map((item, index) => (
          <li key={index} className={item.tagName === 'h3' ? 'ml-3' : ''}>
            <Link href={`#${item.id}`}>
              <a className="block py-1 font-medium hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-300">
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContents
