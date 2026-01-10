/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  allowedDevOrigins: ['*.replit.dev', '*.repl.co'],
}

export default nextConfig
