// src/app/layout.tsx (v13 – Saltaire & Shipley, premium editorial footer + pill contrast fix)
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

  /**
   * Fix: some global styles + visited link colour can override perceived contrast.
   * We force readable colour for normal + visited states, and avoid always-underlined links.
   */
  const linkClass =
    '!text-stone-50/90 visited:!text-stone-50/90 no-underline transition hover:!text-amber-100 hover:underline hover:decoration-amber-200/40 hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14100c]'

  const subtleLinkClass =
    '!text-stone-50/80 visited:!text-stone-50/80 no-underline transition hover:!text-amber-100 hover:underline hover:decoration-amber-200/35 hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14100c]'

  // ✅ Pill chips were inheriting a darker/browner link colour in some states — hard override here.
  const pillLinkClass =
    'rounded-full border border-stone-600/70 bg-white/8 px-3 py-1 text-xs font-semibold !text-stone-50/90 visited:!text-stone-50/90 no-underline shadow-sm transition hover:bg-white/14 hover:!text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14100c]'

  return (
    <footer role="contentinfo" className="mt-12 border-t border-stone-700/50 bg-[#14100c]">
      {/* subtle top sheen */}
      <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent)]">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-4">
            {/* Brand / editorial note */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-300/95" />
                <span className="text-[11px] font-semibold tracking-[0.14em] text-amber-200/95">
                  SALTAIRE GUIDE
                </span>
              </div>

              <p className="mt-4 max-w-prose text-sm leading-relaxed text-stone-50/85">
                Independent local site for Saltaire &amp; Shipley. Practical guides with original photos,
                maps and accessibility notes — updated regularly by people who actually walk these streets.
              </p>

              <p className="mt-4 max-w-prose text-xs leading-relaxed text-stone-50/65">
                Spot something out of date? Want your local business included?{' '}
                <Link href="/contact" className={subtleLinkClass}>
                  Send a quick note
                </Link>
                .
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/legal/corrections" className={pillLinkClass}>
                  Corrections welcome
                </Link>
                <Link href="/legal/editorial-policy" className={pillLinkClass}>
                  Editorial policy
                </Link>
              </div>
            </div>

            {/* Explore */}
            <nav aria-label="Explore" className="text-sm">
              <div className="text-[11px] font-semibold tracking-[0.14em] text-stone-50/80">
                EXPLORE
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link className={linkClass} href="/walks">
                    Walks
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} href="/food-drink">
                    Cafés &amp; pubs
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} href="/events">
                    What&apos;s on
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} href="/parking">
                    Parking
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} href="/plan">
                    Plan your visit
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Community + essentials */}
            <div className="text-sm">
              <div className="text-[11px] font-semibold tracking-[0.14em] text-stone-50/80">
                COMMUNITY
              </div>

              <div className="mt-4 space-y-3">
                <a
                  href="https://chat.whatsapp.com/Iv6KTDzUSwX87LfzWN1ZkR"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-between rounded-2xl border border-stone-600/70 bg-white/8 px-4 py-3 text-sm font-semibold !text-stone-50 visited:!text-stone-50 no-underline shadow-sm transition hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14100c]"
                >
                  Join the local WhatsApp chat
                  <span className="ml-3 text-stone-50/70 transition group-hover:text-amber-100">
                    →
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/saltaireguide.uk"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  Instagram: @saltaireguide.uk
                </a>

                <div className="pt-2 text-xs text-stone-50/65">
                  Prefer email?{' '}
                  <Link href="/contact" className={subtleLinkClass}>
                    Contact page
                  </Link>
                  .
                </div>
              </div>

              <div className="mt-8">
                <div className="text-[11px] font-semibold tracking-[0.14em] text-stone-50/80">
                  SITE
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <Link className={linkClass} href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className={linkClass} href="/legal/privacy">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link className={linkClass} href="/legal/masthead">
                      Masthead &amp; imprint
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="mt-12 border-t border-stone-700/50 pt-6">
            <div className="flex flex-col gap-3 text-xs text-stone-50/70 sm:flex-row sm:items-center sm:justify-between">
              <p>© {year} Saltaire Guide. Made in Shipley &amp; Saltaire.</p>

              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <a
                  href="https://wa.me/447424208127"
                  className="!text-stone-50/70 visited:!text-stone-50/70 no-underline transition hover:!text-amber-100 hover:underline hover:decoration-amber-200/35 hover:underline-offset-4"
                >
                  WhatsApp: +44 7424 208127
                </a>
                <a
                  href="https://alveriano.com"
                  target="_blank"
                  rel="noreferrer"
                  className="!text-stone-50/70 visited:!text-stone-50/70 no-underline transition hover:!text-amber-100 hover:underline hover:decoration-amber-200/35 hover:underline-offset-4"
                >
                  Built by Alveriano
                </a>
              </div>
            </div>
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
    sameAs: ['https://www.instagram.com/saltaireguide.uk'],
    areaServed: ['Saltaire', 'Shipley', 'GB'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
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
