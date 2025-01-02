/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't attempt to load node: modules on the client side
      config.resolve.fallback = {
        fs: false,
        path: false,
      }
    }
    
    // Enable processing of node: imports
    config.resolve.alias = {
      ...config.resolve.alias,
      'node:fs/promises': 'fs/promises',
      'node:path': 'path',
    }
    
    return config
  },
};

module.exports = nextConfig;
