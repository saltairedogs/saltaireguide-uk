// src/app/saltaire-christmas/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import ChristmasPack from '@/components/ChristmasPack'

export const metadata: Metadata = {
  title: 'Christmas in Saltaire 2025 | Festive Events, Markets & Activities BD18',
  description:
    'Celebrate Christmas in Saltaire UNESCO village: festive events, markets, winter walks, cozy cafes, December activities & practical tips for visiting BD18.',
  openGraph: {
    title: 'Christmas in Saltaire | Festive UNESCO Village Guide',
    description: 'Christmas events, markets, walks and activities in historic Saltaire',
    url: 'https://saltaireguide.uk/saltaire-christmas',
  },
  keywords: [
    'christmas in saltaire',
    'saltaire christmas market',
    'festive saltaire',
    'saltaire december',
    'christmas events saltaire',
    'winter saltaire',
    'christmas walks saltaire',
    'festive activities BD18',
  ],
}

export default function SaltaireChristmasPage() {
  const activities = [
    {
      title: '🎄 Christmas Markets & Craft Fairs',
      desc: 'Salts Mill hosts occasional Christmas craft markets with local makers, gifts, food stalls. Roberts Park sometimes has festive events. Check events calendar for specific dates.',
      link: '/events',
    },
    {
      title: '❄️ Winter Canal Walks',
      desc: 'Magical frosty canal walks with mill reflections. Wrap up warm. Hot chocolate at a nearby café after. Flat, accessible paths year-round.',
      link: '/walks',
    },
    {
      title: '🎁 Christmas Shopping',
      desc: 'Unique Christmas gifts at Salts Mill independent shops: books, art, homeware, local products. No chain stores — support local businesses.',
      link: '/shops',
    },
    {
      title: '☕ Cozy Cafe Culture',
      desc: 'Warm up in village cafés with seasonal specials. Perfect winter retreat between walks and shopping.',
      link: '/food-drink/coffee',
    },
    {
      title: '🏛️ Hockney Gallery (Free)',
      desc: 'David Hockney gallery at Salts Mill is a great free indoor stop for cold days (check seasonal closure dates).',
      link: '/salts-mill',
    },
    {
      title: '⛪ Carol Services',
      desc: 'The Congregational Church often hosts carol services in December. Check closer to the date for times.',
      link: '/history/church',
    },
  ] as const

  const itinerary = [
    { time: '10:00', text: 'Arrive, park, festive coffee at a nearby café' },
    { time: '10:45', text: 'Browse seasonal markets (if on) or Salts Mill shops for gifts' },
    { time: '12:00', text: 'Crisp winter canal walk (30–45 mins)' },
    { time: '13:00', text: 'Warm lunch at a cosy village café or pub' },
    { time: '14:30', text: 'Hockney Gallery indoors (free, warm)' },
    { time: '15:30', text: 'Hot chocolate & mince pies' },
    { time: '16:00', text: 'Final gift shopping, or carol service (if available)' },
  ] as const

  const faqs = [
    {
      q: 'When is the best time to visit Saltaire at Christmas?',
      a: 'Early December is calm but festive; mid–late December is busier, especially on Saturdays and event days. Weekday afternoons are usually quieter than weekends.',
    },
    {
      q: 'Are Saltaire shops and cafés open between Christmas and New Year?',
      a: 'Many reopen between 27–31 December but with reduced hours. Always check individual venues and Salts Mill before a special trip, as some take a longer winter break.',
    },
    {
      q: 'Is Saltaire good for kids at Christmas?',
      a: 'Yes — winter canal walks, Roberts Park, galleries and cosy cafés work well with children. Wrap up warmly and plan shorter outdoor stints with warm-up stops.',
    },
    {
      q: 'Do I need to book Christmas events in advance?',
      a: 'For markets, carol services and ticketed events, advance booking is common and popular slots sell out. Check our events calendar and venue sites from November onwards.',
    },
  ] as const

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        Christmas in Saltaire: Festive UNESCO Village Guide
      </h1>

      <p className="mb-6 text-xl text-gray-700">
        Discover the magic of Christmas in historic Saltaire — festive events, winter walks, cozy cafés and Victorian charm.
      </p>

      <p className="mb-10 text-sm text-gray-600">
        Updated for 2025. For specific dates (markets, carols, seasonal openings), always double-check the venue/event listing before a long trip.
      </p>

      {/* Paid Pack (above the fold) */}
      <ChristmasPack />

      {/* Quick jump links */}
      <nav className="mb-12 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-3 text-sm font-semibold text-gray-800">Quick links</div>
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            { label: 'Things to do', href: '#things-to-do' },
            { label: 'Visit tips', href: '#tips' },
            { label: 'Perfect day plan', href: '#perfect-day' },
            { label: 'FAQ', href: '#faq' },
          ].map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-medium text-gray-800 hover:bg-white"
            >
              {i.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Christmas Activities */}
      <section id="things-to-do" className="mb-12 scroll-mt-24">
        <h2 className="mb-6 text-3xl font-bold">Festive Things to Do in Saltaire</h2>
        <div className="space-y-6">
          {activities.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="mb-3 text-gray-700">{item.desc}</p>
              <Link href={item.link} className="text-sm font-medium text-blue-600 underline">
                Full details →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Tips */}
      <section id="tips" className="mb-12 scroll-mt-24">
        <h2 className="mb-6 text-3xl font-bold">Christmas Visit Tips</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <h3 className="mb-3 font-semibold">🗓️ Opening Times</h3>
            <p className="text-sm text-gray-700">
              Most attractions close on Christmas Day and Boxing Day. Salts Mill and cafés may run reduced hours in mid–late December. Check
              individual venues before travelling.
            </p>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h3 className="mb-3 font-semibold">🅿️ Parking</h3>
            <p className="text-sm text-gray-700">
              Free street parking can be quieter late December. Caroline Street car park is usually open (except Christmas closures). Check{' '}
              <Link href="/parking" className="underline">
                parking guide
              </Link>{' '}
              for details.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-3 font-semibold">👨‍👩‍👧 Family-Friendly</h3>
            <p className="text-sm text-gray-700">
              Winter walks, indoor galleries and warm cafés work well with kids. Plan shorter outdoor stints with warm-up stops. See{' '}
              <Link href="/plan/family" className="underline">
                family guide
              </Link>
              .
            </p>
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50 p-6">
            <h3 className="mb-3 font-semibold">🎫 Events</h3>
            <p className="text-sm text-gray-700">
              Seasonal events often require booking. Check our{' '}
              <Link href="/events" className="underline">
                events calendar
              </Link>{' '}
              in November/December for markets, carol services and ticketed activities.
            </p>
          </div>
        </div>
      </section>

      {/* Perfect Christmas Day */}
      <section
        id="perfect-day"
        className="mb-12 scroll-mt-24 rounded-2xl border-2 border-red-300 bg-gradient-to-br from-red-50 to-green-50 p-8"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-bold">Perfect December Day in Saltaire</h2>
          <span className="text-sm text-gray-700">A simple, low-stress plan you can follow</span>
        </div>

        <div className="mt-6 space-y-4">
          {itinerary.map((step) => (
            <div key={step.time} className="flex gap-4">
              <span className="w-14 shrink-0 font-bold text-red-600">{step.time}</span>
              <span>{step.text}</span>
            </div>
          ))}
        </div>

        {/* Paid Pack (high-intent repeat) */}
        <div className="mt-8 rounded-xl border border-red-200 bg-white/70 p-5">
          <p className="mb-3 text-sm text-gray-800">
            Want this plan in your pocket (with the best arrival times, a simple loop, warm-up stops, and a rainy-day fallback)?
          </p>
          <a href="#christmas-pack" className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold !text-white visited:!text-white no-underline shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 sm:w-auto">
            Jump to the £4 instant PDF pack →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="christmas-faq-title" className="mb-12 scroll-mt-24">
        <h2 id="christmas-faq-title" className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
          Christmas in Saltaire – quick answers
        </h2>

        <div className="space-y-4 text-sm leading-relaxed text-gray-800">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Links */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">More Saltaire Guides</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Events Calendar', href: '/events' },
            { title: 'Visit Saltaire Guide', href: '/visit-saltaire' },
            { title: 'Winter Walks', href: '/walks' },
            { title: 'Cozy Cafes', href: '/food-drink/coffee' },
            { title: 'Independent Shops', href: '/shops' },
            { title: 'Getting Here', href: '/plan/getting-here' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="block rounded-xl border border-gray-200 bg-white p-4 text-center font-medium transition hover:border-red-300 hover:shadow-md"
            >
              {link.title} →
            </Link>
          ))}
        </div>
      </section>

      {/* Schema: WebPage + FAQPage (better fit than Event for a guide) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Christmas in Saltaire: Festive UNESCO Village Guide',
              description:
                'Celebrate Christmas in Saltaire UNESCO village: festive events, markets, winter walks, cozy cafes, December activities & practical tips for visiting BD18.',
              url: 'https://saltaireguide.uk/saltaire-christmas',
              inLanguage: 'en-GB',
              isPartOf: {
                '@type': 'WebSite',
                name: 'Saltaire Guide',
                url: 'https://saltaireguide.uk',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
          ]),
        }}
      />
    </div>
  )
}
