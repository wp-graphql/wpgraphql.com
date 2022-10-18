import { GetServerSideProps } from "next"
import { getServerSideSitemap } from 'next-sitemap'
import {getAllRoutesSitemapData} from "lib/sitemap"
// Sitemap component
export default function Sitemap() {}

// collect all the post
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params, res } = ctx


  const posts = await getAllRoutesSitemapData()

  // console.log(data)
  // const posts = []

  // allPosts =[]
  const allPosts = posts.map((post) => {
    return {
      loc: `/docs/${post}`
    }
  })

  //  fetch all the post and pass into getServerSideSitemap. but make sure your allPasts in array.

  return await getServerSideSitemap(ctx, allPosts)
}
