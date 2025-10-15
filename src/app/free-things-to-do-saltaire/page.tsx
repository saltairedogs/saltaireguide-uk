import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FREE Things to Do in Saltaire 2025 | Budget Guide to UNESCO BD18',
  description:
    '15+ completely free things to do in Saltaire: Hockney Gallery, Roberts Park, canal walks, Victorian architecture, parks & more. Family-friendly budget guide to BD18.',
  openGraph: {
    title: 'FREE Things to Do in Saltaire | Budget UNESCO Village Guide',
    description: 'Discover 15+ free attractions, walks, galleries and parks in Saltaire World Heritage Site.',
    url: 'https://saltaireguide.uk/free-things-to-do-saltaire',
  },
  keywords: [
    'free things to do saltaire',
    'saltaire free attractions',
    'free days out saltaire',
    'budget saltaire',
    'free museums saltaire',
    'free walks saltaire',
    'free parking saltaire',
    'no cost saltaire',
  ],
}

const FREE_ACTIVITIES = [
  {
    title: 'David Hockney 1853 Gallery at Salts Mill',
    time: '45-90 mins',
    category: 'Art & Culture',
    description:
      "Browse the world's largest permanent David Hockney collection completely free. Rotating displays of paintings, prints and photography inside the historic mill building.",
    tips: ['Open 7 days', 'No booking needed', 'Photography allowed', 'Combine with free mill shops'],
  },
  {
    title: 'Roberts Park Riverside Walk',
    time: '30-60 mins',
    category: 'Outdoors',
    description:
      'Award-winning Victorian park with bandstand, play areas, river walks, and spectacular views. Free summer concerts (check schedule). Dog-friendly.',
    tips: ['Accessible paths', 'Play areas for kids', 'Bring a picnic', 'Free bandstand concerts summer weekends'],
  },
  {
    title: 'UNESCO Village Architecture Tour',
    time: '30-45 mins',
    category: 'Heritage',
    description:
      'Self-guided walk through perfectly preserved Victorian streets. See worker cottages, Congregational Church exterior, almshouses, Victoria Hall, and innovative town planning.',
    tips: ['Grab a free village map', 'Best photo spots: mill from canal, church facade', 'Morning light best', 'Combine with canal walk'],
  },
  {
    title: 'Leeds-Liverpool Canal Towpath',
    time: '20-120 mins',
    category: 'Outdoors',
    description:
      'Stunning flat canal walk with mill reflections, narrowboats, and nature. Walk to Shipley (15 mins), Bingley Five Rise Locks (45 mins), or just a short loop.',
    tips: ['Completely flat', 'Pram & wheelchair friendly', 'Dog-friendly', 'Wildlife spotting: herons, ducks, kingfishers'],
  },
  {
    title: 'Congregational Church Visit',
    time: '15-20 mins',
    category: 'Heritage',
    description:
      "Step inside Sir Titus Salt's magnificent 1859 Italian-inspired church (check opening times). One of England's finest Victorian churches with original organ.",
    tips: ['Check opening times first', 'Respect worship times', 'Free leaflets available', 'Stunning architecture'],
  },
  {
    title: 'Hirst Wood Ancient Woodland Walk',
    time: '45-60 mins',
    category: 'Nature',
    description:
      'Ancient woodland with bluebells (April-May), meandering paths, and wildlife. 20-minute walk from Saltaire village. Peaceful escape into nature.',
    tips: ['Bluebell season April-May', 'Muddy after rain', 'Dog-friendly', 'Combine with Shipley Glen'],
  },
  {
    title: 'Saltaire Bookshop Browse',
    time: '20-30 mins',
    category: 'Shopping',
    description:
      'Explore independent bookshops in Salts Mill. Even if not buying, browsing is welcome. Specialist sections, local history books, and hidden gems.',
    tips: ['No pressure to buy', 'Ask for local recommendations', 'Comfortable seating areas', 'Great for rainy days'],
  },
  {
    title: 'Mill Chimney & Victorian Architecture Photos',
    time: '10-15 mins',
    category: 'Photography',
    description:
      "Capture iconic shots of the 250-foot mill chimney (modeled on a Venetian bell tower), canal reflections, and Victorian facades. Instagram-worthy spots throughout.",
    tips: ['Best light: golden hour', 'Canal bridge for mill reflections', 'Church facade from Victoria Rd', 'Almshouses courtyard'],
  },
]

const MORE_FREE = [
  'Free street parking (2hr limit - check signs)',
  'Village window shopping - independent stores',
  'Shipley Glen woodland walk (30 min from village)',
  'Watching canal boats navigate locks',
  'Picnic by the River Aire',
  'Free concerts at Roberts Park bandstand (summer)',
  'Exploring Victorian almshouses courtyard',
  'Railway station Victorian architecture',
  'Village green & community spaces',
  'Photography throughout UNESCO site',
]

export default function FreeThingsSaltairePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          15+ FREE Things to Do in Saltaire
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-700">
          Discover Saltaire's UNESCO World Heritage Site on a budget - galleries, parks, walks, Victorian architecture & more, all completely free
        </p>
      </header>

      {/* Stats */}
      <div className="mb-12 grid gap-4 sm:grid-cols-4">
        {[
          { label: 'Free Attractions', value: '15+' },
          { label: 'Cost', value: '£0' },
          { label: 'Parking', value: 'Free Options' },
          { label: 'Access', value: 'Year-Round' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-green-200 bg-green-50 p-4 text-center">
            <div className="text-3xl font-bold text-green-600">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Free Activities */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Top FREE Saltaire Activities</h2>
        <div className="space-y-6">
          {FREE_ACTIVITIES.map((activity, idx) => (
            <article key={activity.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-bold">{activity.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      {activity.category}
                    </span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      {activity.time}
                    </span>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                      100% FREE
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="mb-4 text-gray-700">{activity.description}</p>
              
              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-900">💡 Free Tips:</h4>
                <ul className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                  {activity.tips.map((tip) => (
                    <li key={tip} className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* More Free Things */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Even More Free Activities</h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MORE_FREE.map((item) => (
              <li key={item} className="flex items-start text-gray-700">
                <span className="mr-2 text-green-600">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Budget Tips */}
      <section className="mb-12 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8">
        <h2 className="mb-6 text-2xl font-bold">Money-Saving Tips for Saltaire</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold">🅿️ Free Parking Strategy</h3>
            <p className="text-sm text-gray-700">
              Park on side streets near the village (2hr limit - check signs carefully). Arrive before 10am on weekends for best spots. See{' '}
              <Link href="/parking/free" className="font-medium underline">
                free parking guide
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">🍱 Bring Your Own</h3>
            <p className="text-sm text-gray-700">
              Pack a picnic for Roberts Park or find a canal-side bench. Plenty of outdoor seating. Buy coffee/snacks from village shops if needed. Free water refills at cafes.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">🚂 Off-Peak Train Tickets</h3>
            <p className="text-sm text-gray-700">
              Travel after 9:30am for cheaper rail fares from Bradford/Leeds. Day return often cheaper than driving + parking. Check{' '}
              <Link href="/plan/getting-here" className="font-medium underline">
                rail guide
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">📅 Free Events</h3>
            <p className="text-sm text-gray-700">
              Check{' '}
              <Link href="/events" className="font-medium underline">
                What's On
              </Link>{' '}
              for free summer concerts at Roberts Park bandstand, Saltaire Festival events, and community activities throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Free Day */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Sample FREE Day in Saltaire</h2>
        <div className="rounded-2xl border-2 border-green-300 bg-green-50 p-8">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 font-bold text-green-700">10:00</div>
              <div>
                <strong>Arrive & Park Free</strong> - Side street parking (arrive early weekends)
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 font-bold text-green-700">10:15</div>
              <div>
                <strong>Salts Mill & Hockney Gallery</strong> - 60 mins browsing free galleries & shops
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 font-bold text-green-700">11:30</div>
              <div>
                <strong>Village Architecture Walk</strong> - 30 min self-guided tour, free map
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 font-bold text-green-700">12:00</div>
              <div>
                <strong>Picnic at Roberts Park</strong> - Your own packed lunch, enjoy bandstand area
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 font-bold text-green-700">13:00</div>
              <div>
                <strong>Canal Towpath Walk</strong> - 45 min walk toward Bingley, flat & scenic
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 font-bold text-green-700">14:00</div>
              <div>
                <strong>Explore Shops & Photos</strong> - Window shopping, mill chimney photos
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 text-center font-bold text-green-700">
              Total Cost: £0.00 ✓
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Related Guides</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Visit Saltaire Guide', href: '/visit-saltaire' },
            { title: 'All Attractions', href: '/saltaire-attractions' },
            { title: 'Parking Options', href: '/parking' },
            { title: 'Walking Routes', href: '/walks' },
            { title: 'Family Activities', href: '/plan/family' },
            { title: 'Events Calendar', href: '/events' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="block rounded-xl border border-gray-200 bg-white p-4 font-medium transition hover:border-green-300 hover:shadow-md"
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
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What free things can you do in Saltaire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Saltaire offers 15+ free activities including the David Hockney Gallery at Salts Mill, Roberts Park, Leeds-Liverpool Canal walks, UNESCO village architecture tours, Congregational Church visits, and ancient woodland walks at Hirst Wood.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is Salts Mill free to visit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes, Salts Mill is completely free including the 1853 David Hockney Gallery, bookshops, and independent stores. No booking or entry fee required.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can you park for free in Saltaire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, free parking is available on side streets near Saltaire with a 2-hour limit. Check signs carefully. Paid car parks (£3-5/day) offer all-day parking.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
