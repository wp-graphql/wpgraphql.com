import { MDXRemote } from "next-mdx-remote"

import DocsLayout from "components/Docs/DocsLayout"
import TableOfContents from "components/Docs/TableOfContents"

import {
  getAllDocSlugs,
  getParsedDoc,
} from "lib/mdx/parse-docs.mjs"
import { components } from "components/Docs/MdxComponents"

export default function Doc({ source, toc }) {
  return (
    <DocsLayout>
      <div
        id="content-wrapper"
        className="relative z-20 prose mt-8 prose dark:prose-dark"
      >
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

export async function getStaticProps({ params }) {
  const {source, toc } = await getParsedDoc(params.slug)

  return {
    props: {
      toc,
      source,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
