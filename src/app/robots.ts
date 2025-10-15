import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://saltaireguide.uk/sitemap.xml',
    host: 'https://saltaireguide.uk',
  }
}
