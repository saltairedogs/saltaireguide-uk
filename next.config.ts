import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  typedRoutes: false, // Disabled for faster builds - strict Link typing not needed for production
  // Allow build to complete even with lint warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow build to complete even with type errors (not recommended for production)
    ignoreBuildErrors: false,
  },
  // Prefer modern formats for smaller images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  async headers() {
    return [
      // Long-cache static assets you’ll add to /public/images and /public/fonts
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // Sitemaps/robots should not be cached long
      {
        source: '/:path*.xml',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
    ]
  },
}

export default nextConfig
