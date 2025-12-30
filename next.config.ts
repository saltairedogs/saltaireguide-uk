// next.config.ts
import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Keep this conservative; you can loosen if you later embed third-party widgets.
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=()',
  },
  // Avoid preload; keep it reversible.
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  typedRoutes: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    // NOTE: This is permissive. Tighten hostnames once you know which remote domains you actually use.
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },

  // Canonical slugs (kebab-case) -> permanent redirects
  async redirects() {
    return [
      // Legacy non-kebab routes -> canonical
      { source: '/donttelltitus', destination: '/dont-tell-titus', permanent: true },
      { source: '/diginshut', destination: '/digins-hut', permanent: true },
      { source: '/saltairedogs', destination: '/saltaire-dogs', permanent: true },
      { source: '/culturessaltaire', destination: '/cultures-saltaire', permanent: true },

      // You deleted /brunch route; preserve equity + avoid 404s
      { source: '/brunch', destination: '/food-drink/brunch', permanent: true },

      // OPTIONAL: only enable after the destination routes exist
      // { source: '/rumpus-burger', destination: '/saltaire/rumpus-burger', permanent: true },
      // { source: '/digins-hut', destination: '/saltaire/digins-hut', permanent: true },
      // { source: '/dont-tell-titus', destination: '/saltaire/dont-tell-titus', permanent: true },
    ]
  },

  async headers() {
    return [
      // Global security headers
      {
        source: '/:path*',
        headers: securityHeaders,
      },

      // Long-cache static assets in /public
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },

      // Sitemaps should not be cached long
      {
        source: '/:path*.xml',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },

      // robots.txt also shouldn’t be cached long
      {
        source: '/robots.txt',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
    ]
  },
}

export default nextConfig
