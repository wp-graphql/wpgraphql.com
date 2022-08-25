import { ApolloProvider } from '@apollo/client'
import { useApollo } from '/lib/data/apollo'

import '/styles/globals.css'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
