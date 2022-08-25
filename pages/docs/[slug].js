import React from 'react'
import { renderToString } from 'react-dom/server'
import DocsLayout from '../../components/DocsLayout/DocsLayout'

import { MDXRemote } from 'next-mdx-remote'
import { getDoc, getDocData, getDocSlugs, getTableOfContents } from 'lib/helpers/parse-docs'
import { components } from 'lib/mdx/components'
import TableOfContents from 'components/TableOfContents/TableOfContents'

const Doc = ({ source, toc, content }) => {
  return (
    <DocsLayout>
      <div id="content-wrapper" className="relative z-20 prose mt-8 prose dark:prose-dark">
        {source?.frontmatter?.title && (
          <header className="relative z-20 -mt-8">
            <h1>{source.frontmatter.title}</h1>
          </header>
        )}
        <MDXRemote {...source} components={components} />
      </div>
      <footer className="text-sm leading-6 mt-12"></footer>
      <div
        id="table-of-contents"
        className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"
      >
        <div className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100 ">
          {toc && <TableOfContents toc={toc} />}
        </div>
      </div>
    </DocsLayout>
  )
}

export default Doc

export const getStaticProps = async ({ params }) => {
  const doc = await getDoc(params.slug)
  const source = doc

  return {
    props: {
      toc: getTableOfContents(renderToString(<MDXRemote {...source} components={components} />)),
      data: getDocData(params.slug),
      source,
      frontmatter: source.frontmatter,
    },
    revalidate: 30
  }
}

export const getStaticPaths = async () => {
  const paths = getDocSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
