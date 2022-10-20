import { gql } from "@apollo/client"
import PostPreview, {
  PostPreviewFragment,
} from "components/Preview/PostPreview"
import SiteLayout, { NavMenuFragment } from "components/Site/SiteLayout"

export default function Category({ data }) {
  if (!data) {
    return null
  }

  if (!data.category) {
    return null
  }

  const { category } = data

  return (
    <>
      <SiteLayout>
        <div className="divide-y divide-gray-200 dark:divide-gray-700 max-w-lg mx-auto lg:max-w-8xl">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Category: {category?.name ?? null}
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {category?.description ?? null}
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {category?.posts?.nodes?.map((post) => (
              <li key={post.id} className="py-12">
                <PostPreview post={post} />
              </li>
            ))}
          </ul>
        </div>
      </SiteLayout>
    </>
  )
}

Category.variables = ({ id }) => ({
  id,
})

Category.query = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      name
      description
      posts {
        nodes {
          ...PostPreview
        }
      }
    }
    ...NavMenu
  }
  ${NavMenuFragment}
  ${PostPreviewFragment}
`
