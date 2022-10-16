import { gql } from "@apollo/client"
import { MDXRemote } from "next-mdx-remote"

import DocsLayout from "components/Docs/DocsLayout"
import { NavMenuFragment } from "components/Site/SiteHeader"

import { getParsedDoc, getDocsNav } from "lib/mdx/parse-docs"

import { components } from "components/Docs/MdxComponents"

import { getApolloClient, addApolloState } from "@faustwp/core/dist/mjs/client"

export default function Doc({ source, toc, siteLayoutData, docsNavData }) {
  return (
    <DocsLayout
      siteLayoutData={siteLayoutData}
      toc={toc}
      docsNavData={docsNavData}
    >
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
    </DocsLayout>
  )
}

export async function getStaticProps({ params }) {
  try {
    const { source, toc } = await getParsedDoc(params.slug)
    const docsNavData = await getDocsNav()
    const apolloClient = getApolloClient()

    const { data: siteLayoutData } = await apolloClient.query({
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
        siteLayoutData,
        docsNavData,
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
