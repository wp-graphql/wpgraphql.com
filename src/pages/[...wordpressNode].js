import { getWordPressProps, WordPressTemplate } from "@faustwp/core"

import { gql } from "@apollo/client"
import { getApolloClient } from "@faustwp/core/dist/mjs/client"

export default function Page(props) {
  return <WordPressTemplate {...props} />
}

export async function getStaticProps(ctx) {
  return { ...(await getWordPressProps({ ctx })), revalidate: 5 }
}

export async function getStaticPaths() {
  const apolloClient = getApolloClient()

  const { data } = await apolloClient.query({
    query: gql`
      query PrebuildDocsQuery {
        menu(id: "Primary Nav", idType: NAME) {
          menuItems {
            nodes {
              parentDatabaseId
              uri
            }
          }
        }
        posts {
          nodes {
            uri
          }
        }
      }
    `,
  })

  // prerenders paths linked from Primary Nav for performance
  const menu_paths = data?.menu?.menuItems?.nodes?.reduce((acc, menu_item) => {
    if (
      !menu_item.uri.startsWith("/docs") &&
      !menu_item.uri.includes("developer-reference")
    ) {
      acc.push(menu_item.uri)
    }

    return acc
  }, [])

  // prerenders first page of blog posts
  const post_paths = data.posts.nodes.map((node) => node.uri)
  return {
    paths: [...menu_paths, ...post_paths],
    fallback: "blocking",
  }
}
