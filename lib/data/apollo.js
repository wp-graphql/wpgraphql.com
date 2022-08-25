import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import possibleTypes from '/possibleTypes.json'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'
const windowApolloState = typeof window !== 'undefined' ? window[APOLLO_STATE_PROP_NAME] : {}

const uri = process.env.WPGRAPHQL_ENDPOINT ?? 'https://content.wpgraphql.com/graphql'

let apolloClient

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    connectToDevTools: typeof window !== 'undefined',
    link: new HttpLink({
      uri,
      fetchOptions: {
        method: 'GET'
      }
    }),
    cache: new InMemoryCache({
      possibleTypes,
      typePolicies: {
        RootQuery: {
          queryType: true,
        },
        RootMutation: {
          mutationType: true,
        },
      },
    }).restore(windowApolloState),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}
