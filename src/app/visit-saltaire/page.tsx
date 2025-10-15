import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Visit Saltaire 2025 | Complete UNESCO Village Guide | BD18',
  description:
    'Plan your visit to Saltaire UNESCO World Heritage Site. Free parking, what to see, where to eat, walks, history & practical tips. Independent local guide to BD18.',
  openGraph: {
    title: 'Visit Saltaire 2025 | Complete UNESCO Village Guide',
    description: 'Everything you need to visit Saltaire - parking, attractions, food, walks & history.',
    url: 'https://saltaireguide.uk/visit-saltaire',
  },
}

export default function VisitSaltairePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Hero */}
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Visit Saltaire: UNESCO World Heritage Village Guide
        </h1>
        <p className="text-xl text-gray-700">
          Everything you need to plan the perfect day in Saltaire, West Yorkshire BD18
        </p>
      </header>

      {/* Quick Start */}
      <section className="mb-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
        <h2 className="mb-6 text-2xl font-bold">First Time Visiting Saltaire?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold">🚗 Getting Here</h3>
            <p className="text-sm text-gray-700">
              <Link href="/parking" className="underline">
                Free parking
              </Link>{' '}
              on side streets or{' '}
              <Link href="/plan/getting-here" className="underline">
                15min by train
              </Link>{' '}
              from Bradford/Leeds
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">⏱️ How Long?</h3>
            <p className="text-sm text-gray-700">2-4 hours for village + mill, full day with walks</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">🍽️ Food & Drink</h3>
            <p className="text-sm text-gray-700">
              <Link href="/food-drink" className="underline">
                Cafes, pubs & restaurants
              </Link>{' '}
              in village and Salts Mill
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">🎫 Cost</h3>
            <p className="text-sm text-gray-700">FREE - village, galleries, park & most attractions</p>
          </div>
        </div>
      </section>

      {/* Must-See */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Top 5 Things to Do in Saltaire</h2>
        <div className="space-y-6">
          {[
            {
              title: '1. Salts Mill & Hockney Gallery',
              time: '45-90 mins',
              desc: "Explore David Hockney's 1853 Gallery (free), independent shops, bookshop and cafes inside this iconic Victorian mill building.",
              link: '/salts-mill',
            },
            {
              title: '2. Roberts Park',
              time: '30-60 mins',
              desc: 'Victorian park with river walks, bandstand, play areas and Half Moon Cafe. Perfect for families and picnics.',
              link: '/roberts-park',
            },
            {
              title: '3. UNESCO Village Walk',
              time: '45 mins',
              desc: 'Self-guided walk through Victorian streets, see the Congregational Church, almshouses and mill architecture.',
              link: '/history',
            },
            {
              title: '4. Canal Towpath Walk',
              time: '30-90 mins',
              desc: 'Flat, scenic walk along the Leeds-Liverpool Canal. Dog-friendly, pram-friendly, stunning mill views.',
              link: '/walks',
            },
            {
              title: '5. Food & Coffee Break',
              time: '30-60 mins',
              desc: 'Brunch at local cafes, artisan coffee, or traditional pub lunch. Outdoor seating in good weather.',
              link: '/food-drink',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mb-3 text-sm text-gray-600">{item.desc}</p>
                  <Link
                    href={item.link}
                    className="inline-block text-sm font-medium text-blue-600 underline hover:text-blue-800"
                  >
                    Full guide →
                  </Link>
                </div>
                <span className="ml-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Itineraries */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Sample Visit Itineraries</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-bold">Half Day (2-3 hours)</h3>
            <ol className="space-y-2 text-sm">
              <li>
                <strong>10:00</strong> - Park & explore Salts Mill
              </li>
              <li>
                <strong>11:15</strong> - Coffee break at mill cafe
              </li>
              <li>
                <strong>11:45</strong> - Walk through village streets
              </li>
              <li>
                <strong>12:30</strong> - Roberts Park stroll
              </li>
            </ol>
          </div>
          <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
            <h3 className="mb-4 text-xl font-bold">Full Day (5-6 hours)</h3>
            <ol className="space-y-2 text-sm">
              <li>
                <strong>10:00</strong> - Start at Salts Mill
              </li>
              <li>
                <strong>11:30</strong> - Brunch in village
              </li>
              <li>
                <strong>13:00</strong> - Canal walk to Five Rise Locks
              </li>
              <li>
                <strong>15:00</strong> - Roberts Park & ice cream
              </li>
              <li>
                <strong>16:30</strong> - Explore village shops
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Practical Information for Visiting Saltaire</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-lg font-semibold">📍 Location & Access</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>Address:</strong> Saltaire, West Yorkshire, BD18
              </li>
              <li>
                <strong>From Bradford:</strong> 10 min drive or 15 min train
              </li>
              <li>
                <strong>From Leeds:</strong> 20 min drive or 25 min train
              </li>
              <li>
                <strong>Station:</strong> Saltaire Railway Station (on site)
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-lg font-semibold">🅿️ Parking Options</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>Free:</strong> Side streets (2hr limit, check signs)
              </li>
              <li>
                <strong>Paid:</strong> Caroline St (£3-5/day) or Exhibition Rd
              </li>
              <li>
                <strong>Disabled:</strong> Blue badge bays on Victoria Rd
              </li>
              <li>
                <Link href="/parking" className="font-medium text-blue-600 underline">
                  Full parking guide →
                </Link>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-lg font-semibold">♿ Accessibility</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Salts Mill: Level access, lift, accessible toilets</li>
              <li>Roberts Park: Flat paths, accessible cafe</li>
              <li>Village: Mostly flat, cobbled areas near mill</li>
              <li>
                <Link href="/plan/accessibility" className="font-medium text-blue-600 underline">
                  Full accessibility info →
                </Link>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-lg font-semibold">🐕 Dog-Friendly</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Dogs welcome in Roberts Park & canal walks</li>
              <li>Many cafes have dog-friendly outdoor seating</li>
              <li>Mill: Guide dogs only indoors</li>
              <li>
                <Link href="/walks/dog-friendly" className="font-medium text-blue-600 underline">
                  Dog-friendly walks →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* When to Visit */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Best Time to Visit Saltaire</h2>
        <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6">
          <div>
            <h3 className="mb-2 font-semibold">🌸 Spring (Mar-May)</h3>
            <p className="text-sm text-gray-700">
              Daffodils in Roberts Park, fewer crowds, pleasant walking weather. Check{' '}
              <Link href="/events" className="underline">
                events calendar
              </Link>{' '}
              for spring festivals.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">☀️ Summer (Jun-Aug)</h3>
            <p className="text-sm text-gray-700">
              Peak season - bandstand concerts, outdoor dining, longer days. Book ahead for popular events
              like Saltaire Festival (September).
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">🍂 Autumn (Sep-Nov)</h3>
            <p className="text-sm text-gray-700">
              Gorgeous canal walks with autumn colors, Saltaire Festival, fewer tourists. Perfect for
              photography.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">❄️ Winter (Dec-Feb)</h3>
            <p className="text-sm text-gray-700">
              Quietest time, cozy cafe culture, Christmas events. Mill and indoor attractions still open. Wrap
              up for canal walks.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Plan Your Saltaire Visit</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Parking Guide', href: '/parking', icon: '🅿️' },
            { title: 'Getting Here', href: '/plan/getting-here', icon: '🚂' },
            { title: 'Food & Drink', href: '/food-drink', icon: '🍽️' },
            { title: 'Walks & Trails', href: '/walks', icon: '🥾' },
            { title: 'What\'s On', href: '/events', icon: '📅' },
            { title: 'Family Guide', href: '/plan/family', icon: '👨‍👩‍👧' },
            { title: 'UNESCO History', href: '/history/unesco', icon: '🏛️' },
            { title: 'Local Services', href: '/local-services', icon: '🔧' },
            { title: 'Browse All Pages', href: '/blog', icon: '📖' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-md"
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="font-medium">{link.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is parking free in Saltaire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, free parking is available on side streets near Saltaire with a 2-hour limit. Paid car parks (£3-5/day) at Caroline Street and Exhibition Road offer all-day parking.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does it take to visit Saltaire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A half-day visit (2-3 hours) covers Salts Mill and the village. A full day (5-6 hours) allows time for walks, Roberts Park, and leisurely dining.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is Saltaire famous for?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Saltaire is a UNESCO World Heritage Site, a complete Victorian model village built by Sir Titus Salt in 1853. It is famous for Salts Mill, the David Hockney gallery, and its well-preserved industrial heritage.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is Saltaire dog friendly?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, dogs are welcome in Roberts Park, on canal walks, and at many outdoor cafe seating areas. Guide dogs only are permitted inside Salts Mill.',
                },
              },
            ],
          }),
        }}
      />

      {/* Place Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristAttraction',
            name: 'Saltaire UNESCO World Heritage Village',
            description:
              'Complete Victorian model village and UNESCO World Heritage Site featuring Salts Mill, David Hockney gallery, Roberts Park, and historic architecture.',
            image: 'https://saltaireguide.uk/images/salts-mill.png',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Victoria Road',
              addressLocality: 'Saltaire',
              addressRegion: 'West Yorkshire',
              postalCode: 'BD18',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 53.8385,
              longitude: -1.7868,
            },
            isAccessibleForFree: true,
            publicAccess: true,
            touristType: ['Family', 'History enthusiasts', 'Architecture fans', 'Day trippers'],
          }),
        }}
      />
    </div>
  )
}
