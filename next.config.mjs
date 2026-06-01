/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'blackdiamondcleaningsolutionsllc.com' }],
        destination: 'https://www.blackdiamondcleaningsolutionsllc.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
