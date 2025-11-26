import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const metadata: Metadata = {
  title: 'All pages · Site menu',
  description:
    'Browse every main page on Saltaire Guide in one place: walks, parking, food & drink, history, attractions, events, pet services and more.',
}

const sections: {
  title: string
  description?: string
  links: { label: string; href: string }[]
}[] = [
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
    description: 'Saltaire-area trades, pet services, gyms and everyday support.',
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
      { label: 'For local businesses', href: '/for-business/free-audit-free-listing' },
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

export default function SiteMenuPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_#433024,_#1c130d)] pb-16 text-stone-50">
      <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-14">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/90">
            Site menu
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
            All pages on {site.name}
          </h1>
          <p className="mt-4 max-w-prose text-sm text-amber-50/90 md:text-base">
            A single place to browse every main guide and article on the site. Use this
            site menu to jump straight to walks, cafés and pubs, history, pet services,
            schools, housing, local trades, events and more.
          </p>
        </header>

        <section className="mt-8 rounded-3xl border border-stone-700/90 bg-stone-950/70 p-5 shadow-[0_22px_50px_rgba(0,0,0,0.7)] backdrop-blur-sm md:mt-10 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
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
        </section>
      </div>

      {/* JSON-LD: simple sitemap-like ItemList for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Saltaire Guide site menu',
            itemListElement: sections.flatMap((section, sIndex) =>
              section.links.map((link, i) => ({
                '@type': 'ListItem',
                position: sIndex * 100 + i + 1,
                name: link.label,
                url: `${site.url}${link.href === '/' ? '' : link.href}`,
              }))
            ),
          }),
        }}
      />
    </main>
  )
}
