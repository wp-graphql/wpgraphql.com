import { gql, useQuery } from "@apollo/client"
import { getApolloClient, addApolloState } from "@faustwp/core/dist/mjs/client"

import { NavMenuFragment } from "../components/Site/SiteHeader"
import SiteLayout from "components/Site/SiteLayout"

const DEVELOPER_REFERENCE_QUERY = gql`
  query NotFoundPageQuery {
    ...NavMenu
  }
  ${NavMenuFragment}
`

export default function DeveloperReference() {
  const { data } = useQuery(DEVELOPER_REFERENCE_QUERY)
  return (
    <SiteLayout data={data}>
      <div className="max-w-8xl mx-auto my-10 px-4 sm:px-6 lg:px-8 prose dark:prose-dark">
        <h1>Developer Reference</h1>
      </div>
    </SiteLayout>
  )
}

export async function getStaticProps(ctx) {
  const client = getApolloClient()

  const { data } = await client.query({ query: DEVELOPER_REFERENCE_QUERY })

  return addApolloState(client, {
    props: {},
    revalidate: 30,
  })
}
