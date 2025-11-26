// src/app/layout.tsx (v9 – dark vintage Saltaire styling, a touch brighter)
import './globals.css'
import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'
import { ld } from '@/lib/structuredData'
import { inter, playfair, crimson } from './fonts'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import WhatsappPopup from '@/components/WhatsappPopup'

// Font configured in src/lib/fonts

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  alternates: {
    canonical: site.url,
    types: { 'application/rss+xml': `${site.url}/rss.xml` },
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: site.twitter,
    creator: site.twitter,
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/favicons/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/favicons/safari-pinned-tab.svg' }],
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  // warm, slightly lighter dark tone
  themeColor: '#2c2118',
  colorScheme: 'light',
  interactiveWidget: 'resizes-visual',
}

function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 rounded-full bg-amber-900 px-3 py-2 text-xs font-semibold text-amber-50 shadow-sm"
    >
      Skip to content
    </a>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="mt-12 border-t border-stone-700/80 bg-[radial-gradient(circle_at_top,_#3a2a1f,_#1a130e)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 lg:py-14">
        {/* Inner card to give that dark-vintage “panel” feel */}
        <div className="rounded-3xl border border-stone-500/80 bg-[radial-gradient(circle_at_top,_#463326,_#261810)] px-5 py-7 shadow-[0_16px_40px_rgba(0,0,0,0.45)] md:px-8 md:py-9 lg:px-10 lg:py-10">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1.1fr)] md:items-start">
            {/* Brand / description */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-900/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-100">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-amber-400"
                />
                Saltaire Guide
              </div>
              <p className="mt-3 max-w-prose text-xs leading-relaxed text-amber-50/95 md:text-sm">
                Independent local site for Saltaire. Practical guides with original
                photos, maps and accessibility notes. Updated regularly.
              </p>
            </div>

            {/* Nav links */}
            <nav aria-label="Footer" className="text-sm">
              <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-amber-200/95">
                Site links
              </div>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-amber-50/95 md:text-sm">
                <li>
                  <Link
                    className="underline decoration-transparent underline-offset-4 transition hover:decoration-amber-400"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline decoration-transparent underline-offset-4 transition hover:decoration-amber-400"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline decoration-transparent underline-offset-4 transition hover:decoration-amber-400"
                    href="/legal/editorial-policy"
                  >
                    Editorial policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline decoration-transparent underline-offset-4 transition hover:decoration-amber-400"
                    href="/legal/corrections"
                  >
                    Corrections
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline decoration-transparent underline-offset-4 transition hover:decoration-amber-400"
                    href="/legal/privacy"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline decoration-transparent underline-offset-4 transition hover:decoration-amber-400"
                    href="/legal/masthead"
                  >
                    Masthead &amp; imprint
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact / credit */}
            <div className="text-sm text-amber-50/95">
              <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-amber-200/95">
                Contact
              </div>
              <p className="mt-2 text-xs md:text-sm">
                  WhatsApp:{' '}
                  <a
                    className="underline underline-offset-4 decoration-amber-300/90 hover:decoration-amber-100"
                    href="https://wa.me/447424208127"
                  >
                    +44 7424 208127
                  </a>
              </p>
                <p className="mt-2 text-xs md:text-sm">
                  Instagram:{' '}
                  <a
                    href="https://www.instagram.com/saltaireguide.uk"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 decoration-amber-300/90 hover:decoration-amber-100"
                  >
                    @saltaireguide.uk
                  </a>
                </p>
              <p className="mt-3 text-xs md:text-sm">
                <Link
                  href="https://alveriano.com"
                  target="_blank"
                  className="underline underline-offset-4 decoration-amber-300/90 hover:decoration-amber-100"
                >
                  This site was created by and is managed by: alveriano.com
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="mt-7 border-t border-stone-500/80 pt-4 text-xs text-amber-200/80 sm:flex sm:items-center sm:justify-between">
            <p>© {year} Saltaire Guide. Made in Shipley &amp; Saltaire.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function JsonLd() {
  const websiteLd = ld.website(site)
  const orgLd = {
    ...ld.organization(site),
    '@type': 'Organization',
    sameAs: [],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'editorial',
        telephone: '+44 7424 208127',
        areaServed: 'GB',
        availableLanguage: ['en-GB'],
      },
    ],
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
    </>
  )
}

function Ga4() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  if (!gaId) return null
  const src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
  const inline = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{ anonymize_ip:true });`
  return (
    <>
      <script async src={src} />
      <script dangerouslySetInnerHTML={{ __html: inline }} />
    </>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" dir="ltr">
      <head>
        {/* Fonts are bundled via next/font; no external preconnect needed */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.className} ${playfair.variable} ${crimson.variable} min-h-screen bg-[radial-gradient(circle_at_top,_#433024,_#1c130d)] text-stone-50 antialiased`}
      >
        <SkipLink />
        <AnnouncementBar />
        <Header />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <WhatsappPopup />
        <Footer />
        <JsonLd />
        <Ga4 />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
