import HomepageCta from '../components/HomepageCta/HomepageCta'
import HomepageFeatures from '../components/HomepageFeatures/HomepageFeatures'
import HomepageFrameworks from '../components/HomepageFrameworks/HomepageFrameworks'
import HomepageHero from '../components/HomepageHero/HomepageHero'
import HomePageTrust from '../components/HomepageTrust/HomepageTrust'
import SiteLayout from '../components/SiteLayout/SiteLayout'
import SiteFooter from '../components/SiteFooter/SiteFooter'
import { NAV_QUERY } from 'components/SiteHeader/SiteHeader'
import { initializeApollo, addApolloState } from 'lib/data/apollo'

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
    title: 'WPGraphQL - The GraphQL API for WordPress',
  },
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: NAV_QUERY,
    variables: { menu_name: 'Primary Nav' },
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 30
  })
}
