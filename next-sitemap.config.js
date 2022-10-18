/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  exclude: ["/server.xml", "/docs/*"], // <= exclude her
  additionalSitemaps: ["/server.xml"],
}
