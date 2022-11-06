/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio.us-east-1.linodeobjects.com',
      },
      {
        protocol: 'https',
        hostname: 'fxt-assets.us-east-1.linodeobjects.com',
      },

      
    ],
  },
}

module.exports = nextConfig
