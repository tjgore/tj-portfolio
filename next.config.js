/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio.us-east-1.linodeobjects.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fxt-assets.us-east-1.linodeobjects.com',
        port: '',
        pathname: '/**',
      },

      
    ],
  },
}

module.exports = nextConfig
