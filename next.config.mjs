/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  allowedDevOrigins: ['*.replit.dev', '*.replit.app', '*.riker.replit.dev'],
}

export default nextConfig
