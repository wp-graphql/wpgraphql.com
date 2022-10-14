import HomepageCta from "components/HomePage/HomepageCta"
import HomepageFeatures from "components/HomePage/HomepageFeatures"
import HomepageFrameworks from "components/HomePage/HomepageFrameworks"
import HomepageHero from "components/HomePage/HomepageHero"
import HomePageTrust from "components/HomePage/HomepageTrust"
import SiteLayout from "components/Site/SiteLayout"
import SiteFooter from "components/Site/SiteFooter"
import { NAV_QUERY } from "components/Site/SiteHeader"
import { getApolloClient, addApolloState } from "@faustwp/core/dist/mjs/client"

const Home = () => {
  return (
    <SiteLayout>
      <HomepageHero />
      <HomepageFrameworks />
      <HomepageFeatures />
      <HomePageTrust />
      <HomepageCta />
      <SiteFooter />
    </SiteLayout>
  )
}

export default Home

Home.layoutProps = {
  meta: {
    title: "WPGraphQL - The GraphQL API for WordPress",
  },
}

export async function getStaticProps() {
  const apolloClient = getApolloClient()

  await apolloClient.query({
    query: NAV_QUERY,
    variables: { menu_name: "Primary Nav" },
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 30,
  })
}
