const { withFaust, getWpHostname } = require("@faustwp/core")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import('next').NextConfig} */
const nextConfig = withFaust(
  withBundleAnalyzer({
    swcMinify: true,
    experimental: {
      runtime: "nodejs",
    },
    pageExtensions: ["ts", "tsx", "js", "jsx"],
    images: {
      domains: ["secure.gravatar.com", "raw.githubusercontent.com", getWpHostname()],
      disableStaticImages: true,
    },
    async redirects() {
      return require("./redirects.json")
    },
  })
)

module.exports = nextConfig
