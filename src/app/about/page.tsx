// src/app/about/page.tsx
// About — Saltaire Guide (static, CWV-focused, E-E-A-T heavy)
// - Server-rendered only (no client components)
// - Trust signals: who we are, how we work, directory + news, monetisation & independence
// - Clear contact/imprint + transparency on ads, featured listings, affiliates & services
// - JSON-LD: AboutPage + Organization (+ ContactPoint, publishingPrinciples, correctionsPolicy, verificationFactCheckingPolicy) + BreadcrumbList + FAQPage
// - Internal links to cornerstones + local services + news

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* --------------------------------- SEO meta -------------------------------- */

export const metadata: Metadata = {
  title:
    'About Saltaire Guide — local guides, directory & news for Saltaire and Shipley',
  description:
    'Saltaire Guide is a small independent project based in Saltaire & Shipley. We publish practical guides, a local services directory and hyperlocal news — with clear standards for verification, corrections and monetisation.',
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: 'About Saltaire Guide',
    description:
      'Local, practical, independent. Guides, local services directory and hyperlocal news for Saltaire & Shipley — with transparent monetisation and strong editorial standards.',
    url: `${site.url}/about`,
    type: 'website',
    images: [
      {
        url: `${site.url}/images/walks-from-saltaire.png`,
        width: 1200,
        height: 800,
        alt: 'View over Saltaire and the canal near the village',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Types ---------------------------------- */

type Value = { label: string; body: string }
type Person = {
  id: string
  name: string
  role: string
  bio: string
  photo?: { src: string; alt: string; width: number; height: number }
  links?: Array<{ label: string; href: string }>
}

/* --------------------------------- Data ----------------------------------- */

const VALUES: Value[] = [
  {
    label: 'Hyperlocal & on the ground',
    body:
      'We live in Saltaire & Shipley and walk these streets weekly. Guides, directory entries and news updates are rooted in what is actually happening here, not press releases from afar.',
  },
  {
    label: 'Reader-first, not click-first',
    body:
      'No infinite pop-up ads, no mystery paywalls, no rage-bait. We aim for clear, practical pages you can actually use on your phone while you are out.',
  },
  {
    label: 'Transparent about money',
    body:
      'Some businesses pay for featured or priority slots, and some product links are affiliate (for example, to Amazon). We label commercial content clearly and never sell positive coverage.',
  },
  {
    label: 'Accessible & inclusive by default',
    body:
      'Where we can, we include step-free notes, surfaces, gradients and pinch-points. We welcome feedback from wheelchair users, parents with prams and anyone who knows the routes better than we do.',
  },
]

const FOUNDER: Person = {
  id: 'founder',
  name: 'Giuseppe',
  role: 'Founder, editor & developer',
  bio:
    'Started Saltaire Guide to make it easier for visitors and locals to enjoy Saltaire & Shipley without trawling ten different tabs. The site now combines guides, a local services directory and hyperlocal news, built and updated from here — not a distant newsroom.',
  photo: {
    src: '/images/giuseppe.jpg', // replace with your actual photo path
    alt: 'Giuseppe, who runs Saltaire Guide, in Saltaire or Shipley',
    width: 800,
    height: 800,
  },
  links: [
    { label: 'Instagram (food & local bits)', href: 'https://www.instagram.com/ggg002g' },
    { label: 'Studio: alveriano.com', href: 'https://alveriano.com' },
    { label: 'Saltaire Dogs + Pets', href: 'https://www.saltairedogs.co.uk' },
  ],
}

const TEAM: Person[] = [
  FOUNDER,
  {
    id: 'editor',
    name: 'Editorial & research',
    role: 'Routes, guides, news & fact-checking',
    bio:
      'Plans coverage, checks facts with primary sources (council, operators, venue signage) and maintains cornerstone guides like Parking, Walks and Salts Mill, plus monthly local news roundups.',
    photo: {
      src: '/images/salts-mill.png',
      alt: 'Notebook and pen on a table near Salts Mill',
      width: 600,
      height: 400,
    },
  },
  {
    id: 'photography',
    name: 'Field & photography',
    role: 'Walks, photos & accessibility checks',
    bio:
      'Walks routes, photographs streets and venues, and notes step-free options and awkward surfaces so we can flag them in guides and access notes.',
    photo: {
      src: '/images/whats-on.png',
      alt: 'Camera and map on a table',
      width: 600,
      height: 400,
    },
  },
  {
    id: 'community',
    name: 'Community & tips',
    role: 'Corrections, leads & local knowledge',
    bio:
      'Locals usually spot changes first. We rely on polite corrections, tips and photos from people who live, work or spend time here — credited where useful.',
    photo: {
      src: '/images/roberts-park.png',
      alt: 'People chatting outdoors in Roberts Park',
      width: 600,
      height: 400,
    },
  },
]

const SOURCES = [
  'On-site signage and operator notices',
  'Bradford Council, planning and West Yorkshire Combined Authority materials',
  'National Rail Enquiries / Northern and local transport operators',
  'Venue websites, socials and on-the-day announcements',
  'Community noticeboards, local groups and resident tips (verified where possible)',
  'Printed local history and UNESCO-related references for context',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Are you a news site or just a blog?',
    a: 'We are a small independent project. We publish practical guides, a local services directory and hyperlocal news and roundups for Saltaire & Shipley. We are not a full newsroom, but we do our best to report local changes clearly and correct mistakes quickly.',
  },
  {
    q: 'Do businesses pay to be listed or featured?',
    a: 'Basic local directory listings are free for genuine Saltaire & Shipley businesses. Some businesses pay for clearly labelled featured or priority placements. Those commercial products do not buy positive editorial coverage or reviews.',
  },
  {
    q: 'Do you earn from affiliate links?',
    a: 'Some product links (for example, to Amazon) are affiliate links. If you buy through them, we may earn a small commission at no extra cost to you. We label affiliate recommendations and only suggest things we think fit the guide.',
  },
  {
    q: 'Can I send a correction, tip or news lead?',
    a: `Yes, please email ${site.email}. Include date/time, what changed, and a photo or source link if you have one. You can also see our Corrections page for more detail.`,
  },
  {
    q: 'Can I use your photos or maps?',
    a: 'Ask first. We usually allow non-commercial reuse with credit and a link. Commercial use or press reproduction should be agreed in advance.',
  },
]

/* ------------------------------ Small helpers ------------------------------ */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="anchor-offset text-2xl font-bold tracking-tight md:text-3xl">
      {children}
    </h2>
  )
}

/* -------------------------------- Components ------------------------------- */

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 py-3 text-sm text-gray-600"
    >
      <ol className="breadcrumbs">
        <li>
          <Link className="underline underline-offset-4 hover:text-black" href="/">
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          About
        </li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            About Saltaire Guide
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Saltaire Guide is a small, independent project based in Saltaire &amp; Shipley. We
            publish practical guides, a local services directory and hyperlocal news so you can
            understand what&apos;s happening here without fighting spammy ads or distant coverage.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Local &amp; independent</li>
            <li className="badge">Guides · Directory · News</li>
            <li className="badge">Bradford district focus</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/walks">
              Start with walks
            </Link>
            <Link className="btn btn-outline" href="/local-services">
              Local services directory
            </Link>
            <Link className="btn btn-ghost" href="/news">
              Latest news &amp; roundups
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/walks-from-saltaire.png"
            alt="Towpath and canal bridge near Saltaire"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </header>
  )
}

function WhatWeDo() {
  return (
    <section
      id="whatwedo"
      aria-labelledby="whatwedo-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="whatwedo-title">What you&apos;ll find on Saltaire Guide</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Guides &amp; walk ideas</h3>
            <p className="mt-2 text-gray-700">
              Practical guides for Salts Mill, Roberts Park, parking, cafés and walks in and around
              Saltaire &amp; Shipley. We emphasise realistic timings, access notes and clear
              expectations over hype.
            </p>
            <ul className="mt-3 flex flex-wrap gap-3 text-sm">
              <li>
                <Link className="underline underline-offset-4" href="/parking">
                  Parking in Saltaire
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/walks">
                  Walks from Saltaire
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Local services directory</h3>
            <p className="mt-2 text-gray-700">
              A directory of trades, pet care, health, kids&apos; activities, taxis and more serving
              Saltaire &amp; Shipley. Basic listings are free for genuine local providers, with
              clearly labelled featured options for those who want more visibility.
            </p>
            <ul className="mt-3 flex flex-wrap gap-3 text-sm">
              <li>
                <Link className="underline underline-offset-4" href="/local-services">
                  Local services hub
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/for-business/free-listing">
                  Free listing for businesses
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Hyperlocal news &amp; roundups</h3>
            <p className="mt-2 text-gray-700">
              Short, focused coverage of what affects people here: transport changes, planning
              decisions, event updates and monthly “what&apos;s happened” roundups for Saltaire &amp;
              Shipley — without the click-chasing layout of bigger outlets.
            </p>
            <ul className="mt-3 flex flex-wrap gap-3 text-sm">
              <li>
                <Link className="underline underline-offset-4" href="/news">
                  News &amp; updates
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section
      id="values"
      aria-labelledby="values-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="values-title">What we stand for</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {VALUES.map((v) => (
          <div key={v.label} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{v.label}</h3>
              <p className="mt-2 text-gray-700">{v.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="team-title">Who runs Saltaire Guide</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Day to day, Saltaire Guide is run by {FOUNDER.name} from Saltaire &amp; Shipley. Most guides,
        directories and news posts are researched, walked and photographed locally. Corrections and
        tips from residents and visitors are a key part of keeping things accurate.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((p) => (
          <article key={p.id} className="card">
            <div
              className={
                `card-body ${
                  p.id === 'founder' ? 'flex flex-col items-center text-center' : ''
                }`
              }
            >
              {p.photo ? (
                p.id === 'founder' ? (
                  <div className="mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full shadow md:h-28 md:w-28">
                    <div className="relative h-full w-full">
                      <Image
                        src={p.photo.src}
                        alt={p.photo.alt}
                        fill
                        sizes="96px"
                        className="object-cover scale-110"
                        priority
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={p.photo.src}
                      alt={p.photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )
              ) : null}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.role}</p>
              <p className="mt-2 text-sm text-gray-700">{p.bio}</p>
              {p.links?.length ? (
                <ul
                  className={`mt-3 flex flex-wrap gap-2 text-xs ${
                    p.id === 'founder' ? 'justify-center' : ''
                  }`}
                >
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <a
                        className="badge underline underline-offset-4"
                        href={l.href as any}
                        target={l.href.startsWith('http') ? '_blank' : undefined}
                        rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Method() {
  return (
    <section
      id="method"
      aria-labelledby="method-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="method-title">How we work</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Verification &amp; sources</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {SOURCES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            Where something is uncertain (for example, seasonal hours or planned works), we say so
            and link to official sources where possible.
          </p>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Updates, corrections &amp; AI</h3>
          <p className="mt-2 text-gray-700">
            Cornerstone pages like Parking, Walks and Local Services are reviewed regularly, with
            extra checks around busy periods. We use AI tools to help with formatting, structure and
            checklists, but all published content is planned, edited and verified by humans. Mistakes
            are corrected as soon as we&apos;re aware of them.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            See our{' '}
            <Link
              className="underline underline-offset-4"
              href="/legal/editorial-policy"
            >
              editorial policy
            </Link>{' '}
            and{' '}
            <Link
              className="underline underline-offset-4"
              href="/legal/corrections"
            >
              corrections page
            </Link>{' '}
            for the full detail.
          </p>
        </div>
      </div>
    </section>
  )
}

function Businesses() {
  return (
    <section
      id="businesses"
      aria-labelledby="businesses-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <SectionHeading id="businesses-title">For local businesses &amp; community groups</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Free basic listings</h3>
              <p className="mt-2 text-gray-700">
                If you run a genuine Saltaire or Shipley business or community group, you can request
                a free entry in the local services directory. We keep it simple: name, basic
                description and contact details.
              </p>
              <div className="mt-3">
                <Link
                  href="/for-business/free-listing"
                  className="btn btn-primary btn-sm"
                >
                  Claim a free listing
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Featured &amp; priority slots</h3>
              <p className="mt-2 text-gray-700">
                Some businesses choose to pay for clearly labelled featured or priority placements in
                relevant categories. These spots help cover running costs but do not buy positive
                reviews or editorial coverage.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Prices and options are explained on the business pages, with Stripe-powered checkout
                and no long contracts.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Websites, audits &amp; campaigns</h3>
              <p className="mt-2 text-gray-700">
                We also work with a small number of local clients on websites, content and simple
                audits of existing sites. These services are separate from editorial coverage and are
                always disclosed where relevant.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                To talk about a project, email us with subject “Business” via the contact details
                below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Monetisation() {
  return (
    <section
      id="monetisation"
      aria-labelledby="mon-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="mon-title">How Saltaire Guide makes money</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Running a useful, fast site takes time and hosting. We try to cover costs without turning
        every page into an advert wall. Here&apos;s how we monetise things and where that shows up.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Directory products</h3>
            <p className="mt-2 text-gray-700">
              Basic listings in the local services directory are free. We offer optional paid
              products such as featured placements and priority positions on relevant pages. These are
              fixed-fee products, not commission-based, and they are labelled as “Featured” or
              similar in the interface.
            </p>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Affiliate links &amp; recommendations</h3>
            <p className="mt-2 text-gray-700">
              Some gear or preparation guides include affiliate links (for example, to Amazon). If
              you buy through these, we may earn a small commission at no extra cost. We do not
              promote products we think are actively bad fits, and we always aim to keep affiliate
              blocks short and clearly marked.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        We do not sell “pay-to-play” positive write-ups. Commercial relationships are disclosed on
        relevant pages and do not override our basic responsibility to be fair and accurate.
      </p>
    </section>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="contact-title">
        Contact, imprint &amp; press
      </SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">General, corrections &amp; tips</h3>
            <p className="mt-2 text-gray-700">
              Email:{' '}
              <a
                className="underline underline-offset-4"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-600">
              For corrections or updates, include date/time seen, a short description and any
              evidence (photo or link). This helps us fix things quickly and transparently.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Media, re-use &amp; local partners</h3>
            <p className="mt-2 text-gray-700">
              For press enquiries, image use or if you run a Saltaire or Shipley business and would
              like to collaborate, email with subject “Press” or “Business”. We usually allow
              non-commercial re-use of images with credit and a link; commercial use needs a quick
              written agreement.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <ul className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
          <li>
            <Link
              className="underline underline-offset-4"
              href="/legal/masthead"
            >
              Masthead &amp; imprint
            </Link>
          </li>
          <li>
            <Link
              className="underline underline-offset-4"
              href="/legal/editorial-policy"
            >
              Editorial policy
            </Link>
          </li>
          <li>
            <Link
              className="underline underline-offset-4"
              href="/legal/corrections"
            >
              Corrections
            </Link>
          </li>
          <li>
            <Link
              className="underline underline-offset-4"
              href="/legal/privacy"
            >
              Privacy
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="faq-title">Quick answers</SectionHeading>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {FAQS.map((it, i) => (
          <details key={it.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>
              {it.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{it.a}</p>
          </details>
        ))}
      </div>
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </section>
  )
}

function CTA() {
  return (
    <section
      aria-label="Explore guides"
      className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Explore the core guides &amp; hubs
            </h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Start with parking or a classic towpath walk, browse cafés and pubs, or check the
              latest Saltaire &amp; Shipley news and local services.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/parking" className="btn btn-primary">
                Parking
              </Link>
              <Link href="/walks" className="btn btn-outline">
                Walks
              </Link>
              <Link href="/local-services" className="btn btn-ghost">
                Local services
              </Link>
              <Link href="/news" className="btn btn-muted">
                News &amp; roundups
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/roberts-park.png"
              alt="Roberts Park and the surrounding village"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url
  const year = new Date().getFullYear()
  const twitter = site.twitter?.startsWith('@')
    ? `https://twitter.com/${site.twitter.slice(1)}`
    : site.twitter?.startsWith('http')
    ? site.twitter
    : undefined

  const aboutPage = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Saltaire Guide',
    url: `${base}/about`,
    description:
      'Who runs Saltaire Guide, how we work and how we make money. Practical guides, a local services directory and hyperlocal news for Saltaire & Shipley.',
    isPartOf: { '@type': 'WebSite', name: site.name, url: base },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${base}/about` },
      ],
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#values-title', '#method-title'],
    },
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: base,
    email: site.email,
    logo: `${base}/favicons/apple-touch-icon.png`,
    sameAs: twitter ? [twitter] : undefined,
    foundingDate: `${year}`,
    areaServed: ['Saltaire', 'Shipley', 'Bradford district', 'GB'],
    knowsAbout: [
      'Saltaire history',
      'Salts Mill',
      'Roberts Park',
      'Leeds–Liverpool Canal (Aire Valley)',
      'Walks from Saltaire',
      'Walks around Shipley',
      'Parking in Saltaire',
      'Cafés, pubs & restaurants in Saltaire & Shipley',
      'Events & festivals in Saltaire',
      'Local services in Saltaire & Shipley',
      'Hyperlocal news in Saltaire & Shipley',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'editorial',
        email: site.email,
        areaServed: 'GB',
        availableLanguage: ['en-GB'],
      },
    ],
    publishingPrinciples: `${base}/legal/editorial-policy`,
    correctionsPolicy: `${base}/legal/corrections`,
    verificationFactCheckingPolicy: `${base}/legal/editorial-policy`,
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${base}/about` },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <WhatWeDo />
      <Values />
      <Team />
      <Method />
      <Businesses />
      <Monetisation />
      <Contact />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
