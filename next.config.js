const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  swcMinify: true,
  experimental: { 
    runtime: "nodejs" 
  },
  // had to set this to false in order to get @headless-ui components to work.
  // @see: https://github.com/tailwindlabs/headlessui/issues/681#issuecomment-1086162507
  reactStrictMode: false, 
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: [ 'secure.gravatar.com' ],
    disableStaticImages: true,
  },
  async redirects() {
    return require('./redirects.json')
  },
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      // fixes next-mdx-remote: Package path ./jsx-runtime.js is not exported from package react
      // https://github.com/hashicorp/next-mdx-remote/issues/237
      "react/jsx-runtime.js": require.resolve("react/jsx-runtime"),
    };
    return config
  }
})

module.exports = nextConfig
