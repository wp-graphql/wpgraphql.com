import { gql } from "@apollo/client"
import { MDXRemote } from "next-mdx-remote"

import DocsLayout from "components/Docs/DocsLayout"
import { NavMenuFragment } from "components/Site/SiteHeader"
import TableOfContents from "components/Docs/TableOfContents"

import { getParsedDoc } from "lib/mdx/parse-docs.mjs"

import { components } from "components/Docs/MdxComponents"

import { getApolloClient, addApolloState } from "@faustwp/core/dist/mjs/client"

export default function Doc({ source, toc, data }) {
  return (
    <DocsLayout data={data}>
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
  try {
    const { source, toc } = await getParsedDoc(params.slug)
    const apolloClient = getApolloClient()

    const { data } = await apolloClient.query({
      query: gql`
        query NavQuery {
          ...NavMenu
        }
        ${NavMenuFragment}
      `,
    })

    addApolloState(apolloClient)
    return {
      props: {
        toc,
        source,
        data,
      },
      revalidate: 60,
    }
  } catch (e) {
    if (e.notFound) {
      return e
    }

    throw e
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  }
}
