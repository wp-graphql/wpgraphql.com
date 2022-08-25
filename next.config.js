const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  swcMinify: true,
  experimental: { 
    runtime: "nodejs" 
  },
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
    };
    return config
  }
})

module.exports = nextConfig
