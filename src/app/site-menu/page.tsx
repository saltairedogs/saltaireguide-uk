import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const metadata: Metadata = {
  title:
    'Site map: all Saltaire walks, cafés, pubs, parking & local services | Saltaire Guide',
  description:
    'Browse every main page on Saltaire Guide in one place: Saltaire walks, cafés and pubs, parking, history, attractions, pet services and local trades. Includes our in-house Saltaire Dogs + Pets sitting and feeding service for Saltaire & Shipley.',
  alternates: {
    canonical: `${site.url}/site-menu`,
  },
  openGraph: {
    title:
      'Saltaire Guide site map — walks, cafés, pubs, parking & pet services',
    description:
      'Full site menu for Saltaire Guide. Jump to walks, cafés and pubs, parking, history, schools, housing, Saltaire Dogs + Pets and other local services in Saltaire & Shipley.',
    url: `${site.url}/site-menu`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

type Section = {
  title: string
  description?: string
  links: { label: string; href: string }[]
}

const sections: Section[] = [
  {
    title: 'Visitor essentials',
    description: 'Core guides if you are planning a first visit to Saltaire.',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Visit Saltaire overview', href: '/visit-saltaire' },
      { label: 'Plan your visit', href: '/plan' },
      { label: 'Parking in Saltaire', href: '/parking' },
      { label: 'Free things to do', href: '/free-things-to-do-saltaire' },
      { label: 'Saltaire attractions', href: '/saltaire-attractions' },
      { label: 'Saltaire weekend guide', href: '/saltaire-weekend-guide' },
      { label: 'Roberts Park', href: '/roberts-park' },
      { label: 'Salts Mill', href: '/salts-mill' },
      { label: 'Visit Saltaire with dogs', href: '/saltairedogs' },
    ],
  },
  {
    title: 'Food & drink',
    description: 'Cafés, pubs, brunch and where locals actually go.',
    links: [
      { label: 'Food & drink hub', href: '/food-drink' },
      { label: 'Cafés', href: '/cafes' },
      { label: 'Brunch', href: '/brunch' },
      { label: 'Bakeries', href: '/food-drink/bakeries' },
      { label: 'Coffee', href: '/food-drink/coffee' },
      { label: 'Desserts & cake', href: '/food-drink/desserts' },
      { label: 'Ice cream', href: '/food-drink/ice-cream' },
      { label: 'Pubs & beer gardens', href: '/food-drink/pubs' },
      { label: 'Dog-friendly food & drink', href: '/food-drink/dog-friendly' },
    ],
  },
  {
    title: 'Walks & outdoors',
    description: 'Canal, Shipley Glen, Bingley Five-Rise and step-free options.',
    links: [
      { label: 'Walks from Saltaire', href: '/walks' },
      { label: 'Towpath to Five-Rise', href: '/walks/five-rise' },
      { label: 'Shipley Glen loop', href: '/walks/shipley-glen' },
      { label: 'Dog-friendly walks', href: '/walks/dog-friendly' },
      { label: 'Roberts Park', href: '/roberts-park' },
      { label: 'Bradford to Saltaire', href: '/bradford-to-saltaire' },
    ],
  },
  {
    title: 'History & UNESCO',
    description: 'Architecture, Titus Salt, timeline, myths and reading list.',
    links: [
      { label: 'History hub', href: '/history' },
      { label: 'Buildings & architecture', href: '/history/architecture' },
      { label: 'Church (URC)', href: '/history/church' },
      { label: 'Almshouses', href: '/history/almshouses' },
      { label: 'School & education', href: '/history/school' },
      { label: 'Timeline', href: '/history/timeline' },
      { label: 'Myths & local stories', href: '/history/myths' },
      { label: 'UNESCO World Heritage', href: '/history/unesco' },
      { label: 'Reading list', href: '/history/reading-list' },
      { label: 'Who was Titus Salt?', href: '/history/titus-salt' },
    ],
  },
  {
    title: 'Local services & daily life',
    description:
      'Saltaire-area trades, pet services, gyms and everyday support.',
    links: [
      { label: 'Local services hub', href: '/local-services' },
      { label: 'Pet services', href: '/pet-services' },
      { label: 'Dog walkers', href: '/local-services/dog-walkers' },
      { label: 'Pet sitters', href: '/local-services/pet-sitters' },
      { label: 'Saltaire gyms', href: '/gyms' },
      { label: 'Decorators', href: '/local-services/decorators' },
      { label: 'Electricians', href: '/local-services/electricians' },
      { label: 'Gardeners', href: '/local-services/gardeners' },
      { label: 'Handymen', href: '/local-services/handymen' },
      { label: 'Locksmiths', href: '/local-services/locksmiths' },
      { label: 'Photographers', href: '/local-services/photographers' },
      { label: 'Plumbers', href: '/local-services/plumbers' },
      { label: 'Taxis', href: '/local-services/taxis' },
    ],
  },
  {
    title: 'Shops & culture',
    description: 'Independent shops, galleries and recurring events.',
    links: [
      { label: 'Shops in Saltaire', href: '/shops' },
      { label: 'Culture Saltaire', href: '/culturessaltaire' },
      { label: 'Digi n Shut', href: '/diginshut' },
      { label: "Don't Tell Titus", href: '/donttelltitus' },
      { label: 'Saltaire Festival', href: '/events/saltaire-festival' },
      { label: 'Saltaire Christmas', href: '/saltaire-christmas' },
      { label: 'Events calendar', href: '/events' },
    ],
  },
  {
    title: 'Schools, housing & for business',
    links: [
      { label: 'Schools and housing overview', href: '/schools-and-housing' },
      { label: 'Housing in Saltaire', href: '/housing' },
      { label: 'Saltaire schools', href: '/schools-and-housing#schools' },
      {
        label: 'For local businesses',
        href: '/for-business/free-audit-free-listing',
      },
    ],
  },
  {
    title: 'About, contact & legal',
    links: [
      { label: 'About Saltaire Guide', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contribute or suggest a correction', href: '/contribute' },
      { label: 'Thanks & credits', href: '/thanks' },
      { label: 'Editorial policy', href: '/legal/editorial-policy' },
      { label: 'Corrections policy', href: '/legal/corrections' },
      { label: 'Privacy policy', href: '/legal/privacy' },
      { label: 'Masthead & imprint', href: '/legal/masthead' },
    ],
  },
]

type Journey = {
  title: string
  description: string
  links: { label: string; href: string }[]
}

const journeys: Journey[] = [
  {
    title: 'First time in Saltaire (no car)',
    description:
      'A simple route if you’re arriving by train and want the essentials in a day.',
    links: [
      { label: 'Visit Saltaire overview', href: '/visit-saltaire' },
      { label: 'Walks from Saltaire', href: '/walks' },
      { label: 'Salts Mill', href: '/salts-mill' },
      { label: 'Cafés', href: '/cafes' },
    ],
  },
  {
    title: 'Dog-friendly day out',
    description:
      'Everything for four-legged visitors: walks, food and trusted local pet care.',
    links: [
      { label: 'Visit Saltaire with dogs', href: '/saltairedogs' },
      { label: 'Dog-friendly walks', href: '/walks/dog-friendly' },
      { label: 'Dog-friendly food & drink', href: '/food-drink/dog-friendly' },
      { label: 'Pet services', href: '/pet-services' },
    ],
  },
  {
    title: 'Moving to Saltaire or Shipley',
    description:
      'Start here if you’re thinking of living locally or have just moved in.',
    links: [
      { label: 'Schools and housing overview', href: '/schools-and-housing' },
      { label: 'Housing in Saltaire', href: '/housing' },
      { label: 'Saltaire schools', href: '/schools-and-housing#schools' },
      { label: 'Local services hub', href: '/local-services' },
    ],
  },
  {
    title: 'For local businesses & services',
    description:
      'Get listed, understand our editorial policy and see how we feature providers.',
    links: [
      {
        label: 'For local businesses',
        href: '/for-business/free-audit-free-listing',
      },
      { label: 'Local services hub', href: '/local-services' },
      { label: 'Shops in Saltaire', href: '/shops' },
      { label: 'Masthead & imprint', href: '/legal/masthead' },
    ],
  },
]

// simple id helper
function sectionId(title: string) {
  return title.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')
}

/* ------------------------------ UI components ------------------------------ */

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-7xl px-4 pt-4 text-sm text-amber-100/80"
    >
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link
            href="/"
            className="underline underline-offset-4 hover:text-white"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="px-1">
          /
        </li>
        <li aria-current="page" className="text-amber-100">
          Site menu
        </li>
      </ol>
    </nav>
  )
}

function OnThisPage() {
  return (
    <aside className="mx-auto mt-6 max-w-7xl px-4">
      <nav
        aria-label="On this page"
        className="rounded-2xl border border-amber-200/20 bg-stone-950/60 p-4 text-xs text-amber-50/90 md:text-sm"
      >
        <div className="font-semibold uppercase tracking-[0.18em] text-amber-200">
          On this page
        </div>
        <ul className="mt-2 flex flex-wrap gap-2">
          {sections.map((s) => (
            <li key={s.title}>
              <a
                href={`#${sectionId(s.title)}`}
                className="rounded-full bg-stone-900/80 px-3 py-1 underline decoration-amber-300/0 underline-offset-4 transition hover:decoration-amber-300"
              >
                {s.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#journeys"
              className="rounded-full bg-stone-900/80 px-3 py-1 underline decoration-amber-300/0 underline-offset-4 transition hover:decoration-amber-300"
            >
              Popular journeys
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="rounded-full bg-stone-900/80 px-3 py-1 underline decoration-amber-300/0 underline-offset-4 transition hover:decoration-amber-300"
            >
              FAQs
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

function SaltaireDogsFeature() {
  const whatsappHref = 'https://wa.me/447424208127'
  return (
    <section
      id="saltairedogs"
      aria-labelledby="saltairedogs-title"
      className="mx-auto mt-8 max-w-7xl px-4"
    >
      <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-900/60 via-stone-950/80 to-emerald-900/40 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.55)] md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl text-sm md:text-base">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Featured pet services
            </p>
            <h2
              id="saltairedogs-title"
              className="mt-2 text-xl font-bold tracking-tight text-emerald-50 md:text-2xl"
            >
              Saltaire Dogs + Pets — our go-to pet sitting & feeding service in
              Saltaire & Shipley
            </h2>
            <p className="mt-2 text-emerald-50/90">
              We run Saltaire Dogs + Pets, a local service for{' '}
              <strong>dog sitting and dog walking</strong>,{' '}
              <strong>cat feeding</strong>,{' '}
              <strong>fish tank and pond feeding</strong>, and care for{' '}
              <strong>small pets, parrots and birds, reptiles and other exotic
                animals</strong> while you&apos;re away. Home visits in
              Saltaire, Shipley and nearby postcodes.
            </p>
            <p className="mt-2 text-xs text-emerald-100/80 md:text-sm">
              For anything pet-related — dog sitting, holiday feeding, small
              animal care or more unusual pets — start with Saltaire Dogs +
              Pets and we&apos;ll advise honestly if we&apos;re the right fit.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={whatsappHref}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 font-semibold text-emerald-950 transition hover:bg-emerald-400"
              target="_blank"
              rel="noopener"
            >
              WhatsApp us: +44 7424 208127
            </a>
            <Link
              href="/pet-services"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/70 bg-transparent px-5 py-2.5 text-emerald-100 transition hover:bg-emerald-900/60"
            >
              View pet services guide
            </Link>
            <p className="text-[0.7rem] text-emerald-100/80">
              We treat this as our top recommended option for local pet sitting
              and feeding in Saltaire &amp; Shipley, based on our own service
              standards and local knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Journeys() {
  return (
    <section
      id="journeys"
      aria-labelledby="journeys-title"
      className="mx-auto mt-10 max-w-7xl px-4"
    >
      <h2
        id="journeys-title"
        className="text-2xl font-bold tracking-tight text-amber-50 md:text-3xl"
      >
        Popular journeys
      </h2>
      <p className="mt-2 max-w-prose text-sm text-amber-50/80 md:text-base">
        Not sure where to start? These short “journeys” stitch together pages
        that visitors and locals often use in one go.
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {journeys.map((j) => (
          <article
            key={j.title}
            className="rounded-2xl border border-stone-700/80 bg-stone-950/70 p-5 text-sm text-amber-50/90 shadow-sm"
          >
            <h3 className="text-base font-semibold md:text-lg">{j.title}</h3>
            <p className="mt-2 text-xs text-amber-100/80 md:text-sm">
              {j.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {j.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-full bg-stone-900/80 px-3 py-1 text-xs underline decoration-amber-300/0 underline-offset-4 transition hover:decoration-amber-300 md:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'What is this site menu page for?',
      a: 'It is a human-friendly site map for Saltaire Guide. You can scan every main guide and article in one place and jump straight to walks, cafés and pubs, parking, history, schools, housing, pet services and local trades.',
    },
    {
      q: 'Where do I find dog sitting or pet feeding in Saltaire or Shipley?',
      a: 'Start with our Pet services hub and Saltaire Dogs + Pets, our in-house pet sitting and feeding service for Saltaire & Shipley. We cover dog sitting and walking, cat feeding, fish feeding and care for small pets, birds, parrots, reptiles and other exotics where appropriate.',
    },
    {
      q: 'I only have a few minutes — which pages should I read first?',
      a: 'If you are visiting, start with Visit Saltaire, Parking in Saltaire and Walks from Saltaire. If you live locally, the Local services hub and Housing & schools overview are good entry points.',
    },
    {
      q: 'How often are these guides updated?',
      a: 'We review high-traffic pages regularly and update opening times, routes and local services as we receive new information. You can use the Contribute or suggest a correction link to flag anything that looks out of date.',
    },
  ]

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="mx-auto mt-12 max-w-7xl px-4 pb-16"
    >
      <h2
        id="faq-title"
        className="text-2xl font-bold tracking-tight text-white md:text-3xl"
      >
        Site menu – quick answers
      </h2>
      <div className="mt-4 divide-y divide-stone-200 rounded-2xl border border-stone-300 bg-white/95 text-sm text-stone-800 shadow-lg backdrop-blur">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group p-4 md:p-5"
          >
            <summary className="cursor-pointer list-none text-base font-semibold text-stone-900">
              {f.q}
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-stone-700">{f.a}</p>
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
            mainEntity: faqs.map((f) => ({
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

/* ------------------------------ JSON-LD root ------------------------------- */

function JsonLdRoot() {
  const base = site.url

  const allLinks = sections.flatMap((section) => section.links)

  let position = 1
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Saltaire Guide site menu',
    itemListElement: allLinks.map((link) => ({
      '@type': 'ListItem',
      position: position++,
      name: link.label,
      url: `${base}${link.href === '/' ? '' : link.href}`,
    })),
  }

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire Guide site map / site menu',
    url: `${base}/site-menu`,
    description:
      'Human-friendly site map for Saltaire Guide with every main page listed: Saltaire walks, cafés, pubs, parking, history, schools, housing, pet services and local trades. Includes Saltaire Dogs + Pets, our local pet sitting and feeding service for Saltaire & Shipley.',
    inLanguage: 'en-GB',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Site menu',
        item: `${base}/site-menu`,
      },
    ],
  }

  const siteNav = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Saltaire Guide primary navigation',
    url: `${base}/site-menu`,
    about: 'Navigation structure for Saltaire Guide.',
    hasPart: sections.map((section) => ({
      '@type': 'WebPage',
      name: section.title,
      url: `${base}/site-menu#${sectionId(section.title)}`,
    })),
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNav) }}
      />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function SiteMenuPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_#433024,_#1c130d)] pb-16 text-stone-50">
      <Breadcrumbs />

      <div className="mx-auto max-w-7xl px-4 pt-6 md:pt-10">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/90">
            Site menu
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
            All pages on {site.name}
          </h1>
          <p className="mt-4 max-w-prose text-sm text-amber-50/90 md:text-base">
            This site menu is the quickest way to see everything we publish in
            one place: walks from Saltaire, cafés and pubs, parking, history and
            architecture, schools and housing, local trades, events and{' '}
            <strong>pet services (including Saltaire Dogs + Pets)</strong>. Use
            it like a human-friendly site map.
          </p>
        </header>
      </div>

      <OnThisPage />
      <SaltaireDogsFeature />

      <section className="mx-auto mt-8 max-w-7xl px-4 md:mt-10">
        <div className="rounded-3xl border border-stone-700/90 bg-stone-950/70 p-5 shadow-[0_22px_50px_rgba(0,0,0,0.7)] backdrop-blur-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                id={sectionId(section.title)}
                className="h-full rounded-2xl border border-stone-600/80 bg-stone-900/70 px-4 py-4 shadow-sm ring-1 ring-black/40"
              >
                <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-amber-200">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="mt-2 text-xs leading-relaxed text-stone-200/90 md:text-[0.83rem]">
                    {section.description}
                  </p>
                )}
                <ul className="mt-3 space-y-1.5 text-sm leading-snug text-amber-50 md:text-[0.95rem]">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="underline decoration-amber-300/0 underline-offset-4 transition-colors hover:decoration-amber-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Journeys />
      <FAQ />
      <JsonLdRoot />
    </main>
  )
}
