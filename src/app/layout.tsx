// src/app/layout.tsx (v3)
import './globals.css'
import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'
import { ld } from '@/lib/structuredData'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: true })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: site.url, types: { 'application/rss+xml': `${site.url}/rss.xml` } },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', site: site.twitter, creator: site.twitter },
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
  themeColor: '#111827',
  colorScheme: 'light',
  interactiveWidget: 'resizes-visual',
}

type NavItem = { name: string; href: string }
const MAIN_NAV: NavItem[] = [
  { name: 'Walks', href: '/walks' },
  { name: 'Eat & Drink', href: '/food-drink' },
  { name: 'What’s On', href: '/events' },
  { name: 'Parking', href: '/parking' },
  { name: 'About', href: '/about' },
]

function SkipLink() {
  return (
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 rounded bg-black px-3 py-2 text-white">
      Skip to content
    </a>
  )
}

function Header() {
  return (
    <header role="banner" className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-base font-semibold tracking-tight md:text-lg" aria-label="Home">Saltaire Guide</Link>
        <nav aria-label="Primary" itemScope itemType="https://schema.org/SiteNavigationElement">
          <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-800">
            {MAIN_NAV.map((item) => (
              <li key={item.href} itemProp="name">
                <Link href={item.href} itemProp="url" className="underline decoration-transparent underline-offset-4 transition hover:decoration-black">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 bg-white" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">Saltaire Guide</div>
          <p className="mt-2 max-w-prose text-sm text-gray-600">Independent local site for Saltaire. Practical guides with original photos, maps and accessibility notes. Updated regularly.</p>
        </div>
        <nav aria-label="Footer" className="text-sm">
          <ul className="grid grid-cols-2 gap-2">
            <li><Link className="hover:underline" href="/about">About</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
            <li><Link className="hover:underline" href="/legal/editorial-policy">Editorial policy</Link></li>
            <li><Link className="hover:underline" href="/legal/corrections">Corrections</Link></li>
            <li><Link className="hover:underline" href="/legal/privacy">Privacy</Link></li>
            <li><Link className="hover:underline" href="/legal/masthead">Masthead &amp; imprint</Link></li>
          </ul>
        </nav>
        <div className="text-sm text-gray-600">
          <p>© {year} Saltaire Guide. Made in Shipley &amp; Saltaire.</p>
          <p className="mt-1">Email: <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a></p>
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
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'editorial', email: site.email, areaServed: 'GB', availableLanguage: ['en-GB'] }],
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased`}>
        <SkipLink />
        <Header />
        <main id="main" className="min-h-[60vh]">{children}</main>
        <Footer />
        <JsonLd />
        <Ga4 />
      </body>
    </html>
  )
}
