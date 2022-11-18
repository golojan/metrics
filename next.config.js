/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'upcdn.io',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // }
}

module.exports = nextConfig
