/** @type {import('next').NextConfig} */
const nextConfig = {
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
