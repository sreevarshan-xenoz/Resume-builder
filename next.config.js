/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify is enabled by default in Next.js 13+
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: [],
  },
  // Enable static exports if needed
  // output: 'export',
}

module.exports = nextConfig
