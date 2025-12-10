// src/app/news/page.tsx
// Saltaire & Shipley News — index (server-only, CWV-first, monthly roundups + recent updates)
//
// Concept
// - Independent, light-weight news hub for Saltaire & Shipley.
// - Anchored around monthly "This month in Saltaire & Shipley" roundups.
// - Short recent updates (transport, planning, business, community).
// - Clear USP vs big ad-heavy sites: no spammy ads, no clickbait, local + practical.
//
// Data model
// - For now: static arrays. Later you can swap to CMS / MDX / filesystem.

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'
import RelatedLinks from '@/components/RelatedLinks'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Saltaire & Shipley News — independent local updates & monthly roundups',
  description:
    'Independent local news for Saltaire & Shipley: monthly roundups, transport and planning updates, new businesses and community stories. No spammy ads, no clickbait.',
  alternates: { canonical: `${site.url}/news` },
  openGraph: {
    title: 'Saltaire & Shipley News — SaltaireGuide.uk',
    description:
      'Monthly roundups and practical local news for Saltaire & Shipley. Roadworks, planning, new openings and community stories without spammy ads.',
    url: `${site.url}/news`,
    type: 'website',
    images: [{ url: `${site.url}/images/parking-saltaire.png`, width: 1600, height: 1066 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Types ---------------------------------- */

type Roundup = {
  slug: string
  monthLabel: string // e.g. "January 2025"
  kicker: string
  intro: string
  datePublished: string // ISO
  highlightsCount: number
}

type QuickUpdate = {
  slug: string
  title: string
  category: 'Transport' | 'Planning' | 'Business' | 'Community' | 'Events' | 'Other'
  date: string // ISO
  summary: string
}

/* --------------------------- Placeholder content -------------------------- */

const MONTHLY_ROUNDUPS: Roundup[] = [
  {
    slug: '2025-01-saltaire-shipley-roundup',
    monthLabel: 'January 2025',
    kicker: 'Monthly roundup',
    intro: 'Rail works, a new café on Victoria Road and Shipley town centre changes in one simple briefing.',
    datePublished: '2025-01-31',
    highlightsCount: 7,
  },
  {
    slug: '2024-12-saltaire-shipley-roundup',
    monthLabel: 'December 2024',
    kicker: 'Monthly roundup',
    intro: 'Christmas market crowds, winter flooding precautions and what actually stayed open between holidays.',
    datePublished: '2024-12-31',
    highlightsCount: 6,
  },
  {
    slug: '2024-11-saltaire-shipley-roundup',
    monthLabel: 'November 2024',
    kicker: 'Monthly roundup',
    intro: 'Parking tweaks, school news and small business openings across Saltaire & Shipley.',
    datePublished: '2024-11-30',
    highlightsCount: 5,
  },
]

const QUICK_UPDATES: QuickUpdate[] = [
  {
    slug: 'saltaire-station-weekend-rail-works-jan-2025',
    title: 'Weekend rail works affecting Saltaire & Shipley services',
    category: 'Transport',
    date: '2025-01-18',
    summary:
      'Short-term changes to weekend trains through Saltaire and Shipley, with suggested alternatives for visitors.',
  },
  {
    slug: 'victoria-road-new-cafe-opening',
    title: 'New café opening on Victoria Road in Saltaire',
    category: 'Business',
    date: '2025-01-10',
    summary:
      'A quick look at the new spot opening on Victoria Road, what they serve and when they’re planning to launch.',
  },
  {
    slug: 'shipley-planning-roundup-winter-2024',
    title: 'Shipley planning decisions: winter highlights',
    category: 'Planning',
    date: '2024-12-12',
    summary:
      'Key planning applications and decisions residents have been talking about in and around Shipley.',
  },
  {
    slug: 'roberts-park-path-maintenance',
    title: 'Roberts Park path maintenance and short-term access changes',
    category: 'Community',
    date: '2024-11-28',
    summary:
      'Where paths are being worked on, how long it may last and the easiest alternative routes.',
  },
]

/* ------------------------------- UI helpers -------------------------------- */

function SectionHeading({
  id,
  children,
}: {
  id?: string
  children: React.ReactNode
}) {
  return (
    <h2
      id={id}
      className="anchor-offset text-2xl font-bold tracking-tight md:text-3xl"
    >
      {children}
    </h2>
  )
}

function Small({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs text-gray-500 ${className || ''}`}>{children}</p>
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>
}

/* --------------------------------- Layout --------------------------------- */

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 py-3 text-sm text-gray-600"
    >
      <ol className="breadcrumbs">
        <li>
          <Link
            href="/"
            className="underline underline-offset-4 hover:text-black"
          >
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          News
        </li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            <span>Saltaire &amp; Shipley</span>
            <span className="h-1 w-1 rounded-full bg-emerald-700" />
            <span>Independent local news</span>
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Saltaire &amp; Shipley News
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Monthly roundups and short, practical updates about Saltaire &amp;
            Shipley — written by people who live here. No clickbait, no
            spammy&nbsp;ads, just what locals actually need to know.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">No Google-style scam ads</li>
            <li className="badge">Locally run, not a big chain</li>
            <li className="badge">Saltaire &amp; Shipley focus</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#this-month" className="btn btn-primary">
              Read this month&apos;s roundup
            </Link>
            <Link href="#recent" className="btn btn-outline">
              Latest quick updates
            </Link>
          </div>
          <Small className="mt-3">
            We summarise official sources, council notes and community updates
            in plain English. Always check original notices for legal or urgent
            information.
          </Small>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/saltaire-canal.png"
            alt="Saltaire and Shipley skyline by the canal"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </header>
  )
}

function OnThisPage() {
  const items = [
    { href: '#this-month', label: 'This month in Saltaire & Shipley' },
    { href: '#recent', label: 'Recent updates' },
    { href: '#archives', label: 'Previous months' },
    { href: '#about', label: 'About SaltaireGuide News' },
    { href: '#tips', label: 'Send a tip or story' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav
        aria-label="On this page"
        className="mt-6 rounded-xl border border-gray-200 bg-white p-4"
      >
        <div className="text-sm font-semibold text-gray-800">On this page</div>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {items.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                className="underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

/* ------------------------------- Sections --------------------------------- */

function ThisMonth() {
  const [latest, ...rest] = MONTHLY_ROUNDUPS
  if (!latest) return null

  return (
    <section
      id="this-month"
      aria-labelledby="this-month-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="this-month-title">
        This month in Saltaire &amp; Shipley
      </SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Each month we publish a single, scrollable briefing that pulls together
        the main things that changed in Saltaire &amp; Shipley — transport,
        planning, new businesses and community stories.
      </p>

      {/* Featured month */}
      <article className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <Link
          href={`/news/${latest.slug}`}
          className="block hover:bg-gray-50/40 focus-visible:outline-none"
        >
          <div className="grid gap-0 md:grid-cols-[2fr,1.3fr]">
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-600">
                <Badge>{latest.kicker}</Badge>
                <span>{latest.monthLabel}</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {latest.monthLabel} — Saltaire &amp; Shipley roundup
              </h3>
              <p className="mt-2 text-sm text-gray-700">{latest.intro}</p>
              <p className="mt-3 text-xs text-gray-500">
                {latest.highlightsCount} key highlights · Published{' '}
                {new Date(latest.datePublished).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-700">
                Read the full monthly briefing
                <span className="ml-1">→</span>
              </span>
            </div>
            <div className="relative hidden overflow-hidden border-l border-gray-200 bg-gray-50 md:block">
              <Image
                src="/images/roberts-park.png"
                alt="Roberts Park and Saltaire from above"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Link>
      </article>

      {/* Teaser of other months */}
      {rest.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Previous roundups
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((r) => (
              <article
                key={r.slug}
                className="group rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm transition hover:shadow-md"
              >
                <Link href={`/news/${r.slug}`} className="block">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {r.monthLabel}
                    </p>
                    <Badge>Roundup</Badge>
                  </div>
                  <h4 className="mt-1 text-base font-semibold">
                    {r.monthLabel} — Saltaire &amp; Shipley
                  </h4>
                  <p className="mt-1 line-clamp-3">{r.intro}</p>
                  <p className="mt-2 text-[11px] text-gray-500">
                    {r.highlightsCount} headlines ·{' '}
                    {new Date(r.datePublished).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </p>
                  <span className="mt-2 inline-flex items-center text-xs font-semibold text-emerald-700 group-hover:underline">
                    Read roundup →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

function RecentUpdates() {
  return (
    <section
      id="recent"
      aria-labelledby="recent-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="recent-title">
          Recent Saltaire &amp; Shipley updates
        </SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Short, focused notes on things that affect day-to-day life — rail
          works, road closures, planning decisions, new openings and changes to
          local spaces. Skimmable first, deeper links if you want them.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {QUICK_UPDATES.map((u) => (
            <article
              key={u.slug}
              className="group rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm transition hover:shadow-md"
            >
              <Link href={`/news/${u.slug}`} className="block">
                <div className="flex items-center justify-between gap-2">
                  <Badge>{u.category}</Badge>
                  <span className="text-[11px] text-gray-500">
                    {new Date(u.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="mt-1 text-base font-semibold tracking-tight group-hover:underline">
                  {u.title}
                </h3>
                <p className="mt-1 line-clamp-3 text-sm text-gray-700">
                  {u.summary}
                </p>
                <span className="mt-2 inline-flex items-center text-xs font-semibold text-emerald-700">
                  Read update →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Archives() {
  return (
    <section
      id="archives"
      aria-labelledby="archives-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="archives-title">
        Monthly archive &amp; categories
      </SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        As we publish more, this will turn into a proper archive so you can
        quickly jump to older months or browse by theme (transport, planning,
        business, community and events).
      </p>

      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold">By month</h3>
          <ul className="mt-2 list-disc pl-5">
            {MONTHLY_ROUNDUPS.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/news/${r.slug}`}
                  className="underline underline-offset-4"
                >
                  {r.monthLabel} {r.monthLabel.includes('20') ? '' : 'roundup'}
                </Link>
              </li>
            ))}
          </ul>
          <Small className="mt-2">
            Eventually this can be driven from your CMS / MDX posts rather than
            this static list.
          </Small>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold">By topic</h3>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <li>
              <span className="badge">Transport</span>
              <p className="mt-1 text-xs text-gray-600">
                Trains, buses, roads, parking and towpaths.
              </p>
            </li>
            <li>
              <span className="badge">Planning</span>
              <p className="mt-1 text-xs text-gray-600">
                Applications, approvals and things likely to change.
              </p>
            </li>
            <li>
              <span className="badge">Business</span>
              <p className="mt-1 text-xs text-gray-600">
                New openings, closures and local experiments.
              </p>
            </li>
            <li>
              <span className="badge">Community</span>
              <p className="mt-1 text-xs text-gray-600">
                Parks, schools, groups and shared spaces.
              </p>
            </li>
            <li>
              <span className="badge">Events</span>
              <p className="mt-1 text-xs text-gray-600">
                Festivals, markets and one-off happenings.
              </p>
            </li>
            <li>
              <span className="badge">Other</span>
              <p className="mt-1 text-xs text-gray-600">
                Anything else that genuinely helps locals.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

function AboutNews() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="about-title">
          How SaltaireGuide News works
        </SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="text-lg font-semibold">Independent &amp; local</h3>
            <p className="mt-2">
              SaltaireGuide is run from Saltaire/Shipley, not a distant city
              office. We walk the same streets, use the same trains and see the
              same roadworks you do.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>No scammy ad units or autoplay videos.</li>
              <li>No clickbait, no paywall pop-ups mid-sentence.</li>
              <li>Short, clear explainers with links to original sources.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="text-lg font-semibold">What we do (and don&apos;t) cover</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>
                We focus on practical local changes: transport, planning,
                openings/closures, events and community spaces.
              </li>
              <li>
                We don&apos;t do live crime reporting, rumours or drama lifted
                from social media.
              </li>
              <li>
                We link out to official council / operator pages when you need
                the formal detail.
              </li>
            </ul>
            <Small className="mt-2">
              Got a correction? We&apos;d rather fix it quickly than leave
              something wrong online — see below.
            </Small>
          </article>
        </div>
      </div>
    </section>
  )
}

function TipsAndCorrections() {
  const waText = encodeURIComponent(
    [
      'Hi SaltaireGuide News,',
      '',
      'I have a tip/correction for the news section.',
      '',
      'Story / location:',
      'Rough date/time:',
      'What happened:',
      '',
      'Any links to public sources (council, rail operator, etc):',
      '',
      'Thanks!',
    ].join('\n'),
  )
  const WA_LINK = `https://wa.me/447424208127?text=${waText}`
  const EMAIL = 'hello@saltaireguide.uk'
  const subject = encodeURIComponent('SaltaireGuide News tip / correction')
  const mailto = `mailto:${EMAIL}?subject=${subject}`

  return (
    <section
      id="tips"
      aria-labelledby="tips-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="tips-title">
        Send a tip, event or correction
      </SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold">Have we missed something?</h3>
          <p className="mt-2">
            If you spot roadworks, closures, new openings or planning decisions
            that locals should know about, you can nudge us. We can&apos;t
            cover everything, but we&apos;ll look at anything that genuinely
            affects daily life here.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              Message on WhatsApp
            </a>
            <a href={mailto} className="btn btn-outline">
              Email a tip / correction
            </a>
          </div>
          <Small className="mt-3">
            Please don&apos;t send anything confidential or unsafe. We base our
            coverage on things that are already public or officially announced.
          </Small>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold">For local businesses &amp; groups</h3>
          <p className="mt-2">
            Launching something in Saltaire or Shipley? We can often mention it
            in a monthly roundup or short update, especially if it&apos;s
            interesting for locals.
          </p>
          <p className="mt-2">
            We&apos;re also developing clearly labelled{' '}
            <strong>paid spotlights</strong> that include:
          </p>
          <ul className="mt-2 list-disc pl-5">
            <li>/news feature or interview.</li>
            <li>A boosted listing on our local services pages.</li>
            <li>Optional social posts to push it further.</li>
          </ul>
          <p className="mt-2 text-xs text-gray-500">
            Interested? Start with a free basic listing and we&apos;ll reply
            with options:
          </p>
          <div className="mt-3">
            <Link
              href="/for-business/free-listing"
              className="btn btn-ghost btn-sm"
            >
              Free local business listing →
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const org = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'SaltaireGuide News',
    url: `${base}/news`,
    description:
      'Independent local news for Saltaire & Shipley, with monthly roundups and practical updates on transport, planning, business and community stories.',
    areaServed: ['Saltaire', 'Shipley'],
  }

  const collection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Saltaire & Shipley News',
    url: `${base}/news`,
    description:
      'Index of local news, monthly roundups and recent updates for Saltaire & Shipley on SaltaireGuide.uk.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Saltaire & Shipley monthly news roundups',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: MONTHLY_ROUNDUPS.length,
    itemListElement: MONTHLY_ROUNDUPS.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${base}/news/${r.slug}`,
      name: `${r.monthLabel} — Saltaire & Shipley roundup`,
      datePublished: r.datePublished,
      item: {
        '@type': 'NewsArticle',
        headline: `${r.monthLabel} — Saltaire & Shipley roundup`,
        description: r.intro,
        datePublished: r.datePublished,
        mainEntityOfPage: `${base}/news/${r.slug}`,
      },
    })),
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function NewsIndexPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <ThisMonth />
      <RecentUpdates />
      <Archives />
      <AboutNews />
      <TipsAndCorrections />
      <RelatedLinks
        exclude={['/news']}
        title="More Saltaire & Shipley guides"
      />
      <JsonLd />
    </>
  )
}
