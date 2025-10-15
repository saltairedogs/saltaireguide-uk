import type { Metadata } from 'next'
import Link from 'next/link'

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
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        Christmas in Saltaire: Festive UNESCO Village Guide
      </h1>
      <p className="mb-12 text-xl text-gray-700">
        Discover the magic of Christmas in historic Saltaire - festive events, winter walks, cozy cafes and Victorian charm
      </p>

      {/* Christmas Activities */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Festive Things to Do in Saltaire</h2>
        <div className="space-y-6">
          {[
            {
              title: '🎄 Christmas Markets & Craft Fairs',
              desc: 'Salts Mill hosts occasional Christmas craft markets with local makers, gifts, food stalls. Roberts Park sometimes has festive events. Check events calendar for specific dates.',
              link: '/events',
            },
            {
              title: '❄️ Winter Canal Walks',
              desc: 'Magical frosty canal walks with mill reflections. Wrap up warm. Hot chocolate at mill cafe after. Flat, accessible paths year-round.',
              link: '/walks',
            },
            {
              title: '🎁 Christmas Shopping',
              desc: 'Unique Christmas gifts at Salts Mill independent shops: books, art, homeware, local products. No chain stores - support local businesses.',
              link: '/shops',
            },
            {
              title: '☕ Cozy Cafe Culture',
              desc: 'Warm up in village cafes with festive menu items. Many offer seasonal specials, mulled wine, Christmas cakes. Perfect winter retreat.',
              link: '/food-drink/coffee',
            },
            {
              title: '🏛️ Hockney Gallery (Free)',
              desc: 'David Hockney gallery at Salts Mill open through Christmas (check specific closure dates). Warm, free indoor activity for cold days.',
              link: '/salts-mill',
            },
            {
              title: '⛪ Carol Services',
              desc: 'Congregational Church hosts carol services in December. Check with church for schedule. Stunning Victorian venue for Christmas worship.',
              link: '/history/church',
            },
          ].map((item) => (
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
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Christmas Visit Tips</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <h3 className="mb-3 font-semibold">🗓️ Opening Times</h3>
            <p className="text-sm text-gray-700">
              Most attractions closed Christmas Day and Boxing Day. Salts Mill and cafes may have reduced hours mid-late December. Check individual venues before traveling. Normal hours resume after New Year.
            </p>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h3 className="mb-3 font-semibold">🅿️ Parking</h3>
            <p className="text-sm text-gray-700">
              Free street parking less busy late December. Caroline Street car park open (except Christmas closures). Check{' '}
              <Link href="/parking" className="underline">
                parking guide
              </Link>{' '}
              for details.
            </p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-3 font-semibold">👨‍👩‍👧 Family-Friendly</h3>
            <p className="text-sm text-gray-700">
              Winter walks, indoor galleries, warm cafes all work well with kids. Roberts Park quieter in winter but still accessible. See{' '}
              <Link href="/plan/family" className="underline">
                family guide
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-6">
            <h3 className="mb-3 font-semibold">🎫 Events</h3>
            <p className="text-sm text-gray-700">
              Christmas events often require booking. Check{' '}
              <Link href="/events" className="underline">
                events calendar
              </Link>{' '}
              in November/December for markets, carol services, seasonal activities.
            </p>
          </div>
        </div>
      </section>

      {/* Perfect Christmas Day */}
      <section className="mb-12 rounded-2xl border-2 border-red-300 bg-gradient-to-br from-red-50 to-green-50 p-8">
        <h2 className="mb-6 text-2xl font-bold">Perfect December Day in Saltaire</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="font-bold text-red-600">10:00</span>
            <span>Arrive, park, festive coffee at mill cafe</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-red-600">10:45</span>
            <span>Browse Christmas craft market or Salts Mill shops for gifts</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-red-600">12:00</span>
            <span>Crisp winter canal walk (30-45 mins)</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-red-600">13:00</span>
            <span>Warm lunch at cozy village cafe or pub</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-red-600">14:30</span>
            <span>Hockney Gallery indoors (free, warm)</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-red-600">15:30</span>
            <span>Hot chocolate & mince pies</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-red-600">16:00</span>
            <span>Final gift shopping, evening carol service (if available)</span>
          </div>
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

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Christmas in Saltaire',
            description: 'Festive season in Saltaire UNESCO World Heritage Site with markets, events, walks and activities',
            location: {
              '@type': 'Place',
              name: 'Saltaire',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Saltaire',
                addressRegion: 'West Yorkshire',
                postalCode: 'BD18',
                addressCountry: 'GB',
              },
            },
            startDate: '2025-12-01',
            endDate: '2025-12-31',
          }),
        }}
      />
    </div>
  )
}
