import { gql } from "@apollo/client"

import SiteLayout, { NavMenuFragment } from "components/Site/SiteLayout"

export default function Index({ data }) {
  return (
    <SiteLayout>
      <h2>INDEX...</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </SiteLayout>
  )
}

Index.query = gql`
  query {
    INDEX: __typename
    posts {
      nodes {
        id
        title
        author {
          node {
            name
            uri
          }
        }
      }
    }
    ...NavMenu
  }
  ${NavMenuFragment}
`
