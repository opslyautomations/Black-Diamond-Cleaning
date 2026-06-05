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
      // ── www canonical redirect (always keep) ──────────────────────────────
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'blackdiamondcleaningsolutionsllc.com' }],
        destination: 'https://www.blackdiamondcleaningsolutionsllc.com/:path*',
        permanent: true,
      },

      // ── Legacy URL redirects ───────────────────────────────────────────────
      // INSTRUCTIONS: add an entry here ONLY when a true 1:1 equivalent new
      // page exists for an old URL. If no equivalent page exists, let Google
      // receive a real 404 — do NOT redirect to homepage or a category page.
      // Format: { source: '/old-path', destination: '/new-path', permanent: true }
      // Examples (commented out — uncomment and fill in real mappings only):
      //
      // { source: '/cleaning-services', destination: '/services/standard-cleaning', permanent: true },
      // { source: '/pittsburgh', destination: '/service-areas/pittsburgh-pa', permanent: true },
    ]
  },
}

export default nextConfig
