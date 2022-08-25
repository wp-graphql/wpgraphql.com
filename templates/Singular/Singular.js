import SiteLayout from 'components/SiteLayout/SiteLayout'
import SiteFooter from 'components/SiteFooter/SiteFooter'
import { gql } from '@apollo/client'
import Link from 'next/link'
import Image from 'next/image'

const Singular = {
  name: 'singular',
}

Singular.variables = ({ uri }) => {
  return {
    uri,
  }
}

Singular.query = gql`
  query GetSingularNode($uri: ID!) {
    post(id: $uri, idType: URI) {
      id
      title
      uri
      date
      content
      author {
        node {
          name
          uri
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          id
          name
          uri
        }
      }
    }
  }
`

Singular.component = (props) => {
  const { data } = props
  const { post } = data

  if (!post) {
    return null
  }

  const date = post?.date
    ? new Date(post.date).toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null


  return (
    <SiteLayout>
      <div className="overflow-hidden">
        <div className="mx-auto mt-10 px-4 pb-6 sm:mt-16 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
          <main>
            <article className="relative pt-10 max-w-3xl mx-auto">
              <header>
                <dl>
                  <dt className="sr-only">Date</dt>
                  <dd className="absolute top-0 inset-x-0 text-slate-700 text-center dark:text-slate-400">
                    <time dateTime={post?.date}>{date}</time>
                  </dd>
                </dl>
                <div className="space-y-6">
                  <h1 className="col-span-full break-words text-3xl sm:text-4xl text-center xl:mb-5 font-extrabold tracking-tight text-slate-900 dark:text-slate-200">
                    {post.title}
                  </h1>
                  <div className="flex flex-wrap justify-center">
                    {post?.categories?.nodes?.map((category, i) => (
                      <Link key={i} href={category.uri}>
                        <a className="mr-3 text-sm font-medium uppercase text-sky-500 dark:text-sky-300 hover:text-primary-600 dark:hover:text-sky-400">
                          {category.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center my-8">
                  <dl>
                    <div className="sm:flex sm:flex-wrap justify-center xl:block">
                      <dt className="sr-only">Author</dt>
                      <dd className="flex justify-center font-medium mt-6 sm:mx-3 xl:mx-0">
                        <Image
                          src={post?.author?.node?.avatar?.url}
                          alt={post?.author?.node?.name}
                          width={50}
                          height={50}
                          className="mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"
                        />
                      </dd>
                      <dd className="text-center items-center">
                        <Link href={post?.author?.node?.uri}>
                          <a className="text-sky-500 dark:text-sky-300 dark:hover:text-sky-400 hover:text-sky-600 dark:text-sky-400 pt-5 text-center">
                            {post?.author?.node?.name}
                          </a>
                        </Link>
                      </dd>
                    </div>
                  </dl>
                </div>
              </header>
              <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
                  <div
                    id="content"
                    className="prose dark:prose-dark"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
              </div>
            </article>
          </main>
        </div>
      </div>
      <SiteFooter />
    </SiteLayout>
  )
}

Singular.error = (props) => (
  <SiteLayout>
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-autho pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16 ">
        <div className="">
          <div className="border-b-slate-500 mb-6">
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              Error
            </h2>
          </div>
        </div>
      </div>
    </div>
  </SiteLayout>
)

Singular.loading = (props) => (
  <SiteLayout>
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-autho pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16 ">
        <div className="">
          <div className="border-b-slate-500 mb-6">
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              Loading...
            </h2>
          </div>
        </div>
      </div>
    </div>
  </SiteLayout>
)

export default Singular
