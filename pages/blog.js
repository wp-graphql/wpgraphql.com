import { gql, useQuery } from '@apollo/client'
import SiteLayout from 'components/SiteLayout/SiteLayout'
import SiteFooter from 'components/SiteFooter/SiteFooter'
import { NAV_QUERY } from 'components/SiteHeader/SiteHeader'
import PostPreview, { PostPreviewFragment } from 'components/PostPreview/PostPreview'
import { initializeApollo, addApolloState } from 'lib/data/apollo'

export const BLOG_QUERY = gql`
  query GetPostsForBlog($first: Int) {
    posts(first: $first) {
      nodes {
        ...PostPreview
      }
    }
  }
  ${PostPreviewFragment}
`

const Blog = () => {
  const { loading, error, data } = useQuery(BLOG_QUERY, {
    ssr: true,
    variables: {
      first: 100,
    },
  })

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  const { posts } = data

  return (
    <SiteLayout>
      <div className="px-6 divide-y divide-gray-200 dark:divide-gray-700 max-w-lg mx-auto lg:max-w-8xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blog
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Read the latest posts from the WPGraphQL team
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.nodes.map((post) => (
            <li key={post.id} className="py-12">
              <PostPreview post={post} />
            </li>
          ))}
        </ul>
      </div>
      <SiteFooter />
    </SiteLayout>
  )
}

export default Blog

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: BLOG_QUERY,
    variables: {
      first: 100,
    },
  })

  await apolloClient.query({
    query: NAV_QUERY,
    variables: { menu_name: 'Primary Nav' },
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 30
  })
}
