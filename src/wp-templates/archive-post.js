import { gql } from "@apollo/client"

import SiteLayout, { NavMenuFragment } from "components/Site/SiteLayout"
import PostPreview, {
  PostPreviewFragment,
} from "components/Preview/PostPreview"

export default function ArchivePost({ data }) {
  const posts = data?.posts?.nodes

  return (
    <SiteLayout>
      <main className="content px-6 divide-y divide-gray-200 dark:divide-gray-700 max-w-lg mx-auto lg:max-w-8xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blog
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Read the latest posts from the WPGraphQL team
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post) => (
            <li key={post.id} className="py-12">
              <PostPreview post={post} />
            </li>
          ))}
        </ul>
      </main>
    </SiteLayout>
  )
}

ArchivePost.variables = (_props) => {
  return {
    first: 100,
  }
}

ArchivePost.query = gql`
  query GetPostsForBlog($first: Int) {
    posts(first: $first) {
      nodes {
        ...PostPreview
      }
    }
    ...NavMenu
  }
  ${PostPreviewFragment}
  ${NavMenuFragment}
`
