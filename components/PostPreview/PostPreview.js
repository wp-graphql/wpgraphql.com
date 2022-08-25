import { gql } from '@apollo/client'
import PostPreviewCategoryLink, { PostPreviewCategoryLinkFragment } from 'components/PostPreviewCategoryLink/PostPreviewCategoryLink'
import Link from 'next/link'

export const PostPreviewFragment = gql`
  fragment PostPreview on Post {
    id
    title
    uri
    categories {
      nodes {
        ...PostPreviewCategoryLink
      }
    }
    excerpt: content
    date
    author {
      node {
        id
        name
        uri
        avatar {
          url
        }
      }
    }
  }
  ${PostPreviewCategoryLinkFragment}
`

const PostPreview = ({ post }) => {
  if (!post) {
    return null
  }

  const paragraphs = post?.excerpt ? post.excerpt.split('</p>') : null
  const excerpt = paragraphs ? paragraphs[0] + '</p>' : null
  const date = post?.date
    ? new Date(post.date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>{date}</time>
        </dd>
      </dl>
      <div className="space-y-5 xl:col-span-3">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              <Link href={post.uri}>
                <a className="text-gray-900 dark:text-gray-100">{post.title}</a>
              </Link>
            </h2>
            <div className="flex flex-wrap">
              {post?.categories?.nodes?.map((category, i) => (
                <PostPreviewCategoryLink key={i} category={category} />
              ))}
            </div>
          </div>
          <div
            className="prose dark:prose-dark max-w-none "
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
        <div className="text-base font-medium leading-6">
          <Link href={post.uri}>
            <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-5 py-2 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500">
              Read more →
            </a>
          </Link>
        </div>
      </div>
    </article>

    // <article>
    //   <div className="block mt-4">
    //     <Link href={post.uri}>
    //         <a className="inline-block">
    //             <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100">{post.title}</h3>
    //         </a>
    //     </Link>
    //     <div
    //       className="mt-3 text-base text-gray-500 dark:text-gray-50 prose dark:prose-invert"
    //       dangerouslySetInnerHTML={{ __html: excerpt }}
    //     />
    //     <Link href={post.uri}>
    //         <a className='bg-indigo-700 text-white rounded-md shadow-md p-2 mt-4 mb-8 inline-block'>Read More</a>
    //     </Link>
    //   </div>
    //   <div className='border-t-1 border-t-slate-100'>
    //       {post?.categories?.nodes?.map((category, i) => (
    //         <Link href={category.uri} key={i}>
    //             <a className="inline-block">
    //             <span
    //                 className={clsx(
    //                 'bg-indigo-100 mr-1 text-indigo-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
    //                 )}
    //             >
    //                 {category.name}
    //             </span>
    //             </a>
    //         </Link>
    //       ))}
    //   </div>
    //   <div className="-mx-6 px-6 mt-6 -mb-6 p-6 rounded-b-md bg-slate-50 dark:bg-slate-800 flex items-center">
    //     <div className="flex-shrink-0">
    //       <a href={post.author.href}>
    //         <span className="sr-only dark:text-slate-100">{post.author.node.name}</span>
    //         <Image
    //           className="h-10 w-10 rounded-full"
    //           src={post?.author?.node?.avatar?.url}
    //           alt=""
    //           width={54}
    //           height={54}
    //         />
    //       </a>
    //     </div>
    //     <div className="ml-3">
    //       <p className="text-sm font-medium text-gray-900 dark:text-slate-100">
    //         <a href={post.author.href}>{post.author.node.name}</a>
    //       </p>
    //       <div className="flex space-x-1 text-sm text-gray-500 dark:text-sky-200">
    //         <time dateTime={post.date}>{post.date}</time>
    //       </div>
    //     </div>
    //   </div>
    // </article>
  )
}

export default PostPreview
