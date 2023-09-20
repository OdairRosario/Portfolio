/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
}

module.exports = nextConfig