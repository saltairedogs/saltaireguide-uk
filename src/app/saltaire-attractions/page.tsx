import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Saltaire Attractions 2025 | Top 10 Things to See & Do | UNESCO BD18',
  description:
    'Discover the top Saltaire attractions: Salts Mill, Hockney Gallery, Roberts Park, Victorian architecture, canal walks & more. Complete guide to UNESCO World Heritage Site BD18.',
  openGraph: {
    title: 'Top 10 Saltaire Attractions | UNESCO Village Guide',
    description: 'Salts Mill, Hockney Gallery, Roberts Park, canal walks and Victorian heritage in Saltaire BD18.',
    url: 'https://saltaireguide.uk/saltaire-attractions',
  },
  keywords: [
    'saltaire attractions',
    'things to see saltaire',
    'saltaire unesco',
    'salts mill',
    'roberts park',
    'saltaire village',
    'david hockney gallery',
    'victorian architecture',
    'canal walks saltaire',
    'BD18 attractions',
  ],
}

const ATTRACTIONS = [
  {
    title: '1. Salts Mill & 1853 Gallery',
    subtitle: 'The iconic Victorian textile mill and David Hockney art gallery',
    description:
      "Explore this magnificent Grade II* listed building housing the world's largest permanent collection of David Hockney works. Free entry, independent shops, bookshop, and cafes. Allow 45-90 minutes.",
    highlights: ['Free David Hockney gallery', 'Independent shops & books', 'Mill cafes & dining', 'Victorian architecture'],
    link: '/salts-mill',
    image: '/images/salts-mill.png',
    type: 'Indoor',
    cost: 'FREE',
    time: '45-90 mins',
  },
  {
    title: '2. Roberts Park',
    subtitle: 'Award-winning Victorian park by the River Aire',
    description:
      'Beautiful 11-acre riverside park with bandstand, play areas, Half Moon Cafe, and stunning views. Perfect for picnics, family visits, and summer concerts. Dog-friendly and accessible.',
    highlights: ['Victorian bandstand', 'Riverside walks', 'Cafe & ice cream', 'Play areas for kids'],
    link: '/roberts-park',
    image: '/images/roberts-park.png',
    type: 'Outdoor',
    cost: 'FREE',
    time: '30-90 mins',
  },
  {
    title: '3. UNESCO Village Heritage Walk',
    subtitle: 'Self-guided tour through Victorian model village streets',
    description:
      'Walk through perfectly preserved Victorian streets designed by architect Henry Lockwood. See worker cottages, the Congregational Church, almshouses, and innovative town planning from 1853.',
    highlights: ['Victorian architecture', 'Congregational Church', 'Historic almshouses', 'Free to explore'],
    link: '/history',
    image: '/images/history-unesco.png',
    type: 'Outdoor',
    cost: 'FREE',
    time: '30-60 mins',
  },
  {
    title: '4. Leeds-Liverpool Canal Towpath',
    subtitle: 'Scenic flat walk along historic 200-mile canal',
    description:
      'Beautiful canal walk with stunning mill views, narrowboats, and nature. Walk to Five Rise Locks (Bingley) or Shipley. Completely flat, pram-friendly, dog-friendly. Perfect for all abilities.',
    highlights: ['Flat & accessible', 'Dog-friendly', 'Mill reflections', 'Connect to Five Rise'],
    link: '/walks',
    image: '/images/saltaire-canal.png',
    type: 'Outdoor',
    cost: 'FREE',
    time: '30-120 mins',
  },
  {
    title: '5. Congregational Church (United Reformed)',
    subtitle: 'Magnificent 1859 Italianate church',
    description:
      "Sir Titus Salt's church for mill workers - one of England's finest Victorian churches. Round-arched design inspired by Italian basilicas. Check opening times before visiting.",
    highlights: ['Stunning architecture', 'Historic organ', 'Titus Salt connection', 'Free entry'],
    link: '/history/church',
    image: '/images/history-unesco.png',
    type: 'Indoor',
    cost: 'FREE',
    time: '20-30 mins',
  },
  {
    title: '6. Victoria Hall',
    subtitle: 'Former dining and concert hall, now apartments',
    description:
      'Originally built as a dining hall and concert venue for mill workers. Now converted to residential use but the exterior showcases Victorian civic architecture. View from Victoria Road.',
    highlights: ['Victorian exterior', 'Architectural heritage', 'Photo opportunity', 'Village landmark'],
    link: '/history/architecture',
    image: '/images/history-unesco.png',
    type: 'Outdoor',
    cost: 'FREE',
    time: '5-10 mins',
  },
  {
    title: '7. Saltaire Almshouses',
    subtitle: 'Victorian housing for retired mill workers',
    description:
      'Beautifully preserved almshouses built by Titus Salt for retired employees. Gothic revival architecture around a quiet courtyard. Private residences but visible from street.',
    highlights: ['Gothic architecture', 'Social history', 'Peaceful courtyard', 'Photo spot'],
    link: '/history/almshouses',
    image: '/images/history-unesco.png',
    type: 'Outdoor',
    cost: 'FREE',
    time: '10-15 mins',
  },
  {
    title: '8. Saltaire Railway Station',
    subtitle: 'Victorian station on the Airedale Line',
    description:
      'Original 1850s station with period features. Direct trains to Bradford, Leeds, Skipton. Part of the UNESCO World Heritage Site. Still in active use.',
    highlights: ['Victorian station', 'Active rail service', 'Heritage features', 'Transport hub'],
    link: '/plan/getting-here',
    image: '/images/plan-your-visit.png',
    type: 'Indoor',
    cost: 'FREE to view',
    time: '5-10 mins',
  },
  {
    title: '9. Independent Shops & Cafes',
    subtitle: 'Unique retail and dining experiences',
    description:
      'Browse independent shops in Salts Mill and the village. Artisan coffee, specialist bookshops, local gifts, vintage finds. Support local businesses.',
    highlights: ['Artisan coffee', 'Independent bookshops', 'Local gifts', 'Unique finds'],
    link: '/shops',
    image: '/images/cafe-pubs-restaurants.png',
    type: 'Indoor',
    cost: 'Varies',
    time: '30-90 mins',
  },
  {
    title: '10. Shipley Glen & Hirst Wood',
    subtitle: 'Nature reserves within walking distance',
    description:
      'Extend your visit with woodland walks to Shipley Glen (tramway, moorland views) or Hirst Wood (ancient woodland, bluebells). 20-30 min walk from Saltaire village.',
    highlights: ['Woodland walks', 'Shipley Glen Tramway', 'Wildlife & nature', 'Bluebell season'],
    link: '/walks',
    image: '/images/walks-from-saltaire.png',
    type: 'Outdoor',
    cost: 'FREE (tramway £1-2)',
    time: '60-180 mins',
  },
]

export default function SaltaireAttractionsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Top 10 Saltaire Attractions: UNESCO Village Guide
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-gray-700">
          Discover the best things to see and do in Saltaire World Heritage Site, from Salts Mill and Hockney Gallery to Victorian architecture and scenic canal walks
        </p>
      </header>

      {/* Quick Facts */}
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Attractions', value: '10+' },
          { label: 'Most FREE', value: '9/10' },
          { label: 'Parking', value: 'Free & Paid' },
          { label: 'Access', value: 'Year-round' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Attractions */}
      <section className="mb-16">
        <div className="space-y-8">
          {ATTRACTIONS.map((attraction, idx) => (
            <article
              key={attraction.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="grid gap-6 md:grid-cols-[2fr,3fr] md:gap-8 p-6">
                {/* Left: Image & Tags */}
                <div>
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-gray-100">
                    <Image src={attraction.image} alt={attraction.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      {attraction.type}
                    </span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      {attraction.cost}
                    </span>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                      {attraction.time}
                    </span>
                  </div>
                </div>

                {/* Right: Content */}
                <div>
                  <h2 className="mb-2 text-2xl font-bold">{attraction.title}</h2>
                  <p className="mb-3 text-sm font-medium text-gray-600">{attraction.subtitle}</p>
                  <p className="mb-4 text-gray-700">{attraction.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="mb-2 text-sm font-semibold text-gray-900">Highlights:</h3>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                      {attraction.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start">
                          <span className="mr-2">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={attraction.link}
                    className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    Full Guide →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Practical Info */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Plan Your Saltaire Attractions Visit</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-lg font-semibold">🅿️ Parking</h3>
            <p className="text-sm text-gray-700">
              <Link href="/parking/free" className="underline">
                Free street parking
              </Link>{' '}
              (2hr limit) or{' '}
              <Link href="/parking/caroline-street" className="underline">
                Caroline Street car park
              </Link>{' '}
              (£3-5/day). Both within 5min walk of all attractions.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-lg font-semibold">🚂 By Train</h3>
            <p className="text-sm text-gray-700">
              <Link href="/plan/getting-here" className="underline">
                Saltaire Station
              </Link>{' '}
              on site - 15min from Bradford, 25min from Leeds. Direct services on Airedale Line. Step-free access.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-lg font-semibold">⏱️ Best Time</h3>
            <p className="text-sm text-gray-700">
              Weekday mornings quietest. Summer weekends busiest (check{' '}
              <Link href="/events" className="underline">
                events calendar
              </Link>
              ). Most attractions open year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
        <h2 className="mb-6 text-2xl font-bold">More Saltaire Guides</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Visit Saltaire Guide', href: '/visit-saltaire', icon: '🏛️' },
            { title: 'Parking Options', href: '/parking', icon: '🅿️' },
            { title: 'Walks & Trails', href: '/walks', icon: '🥾' },
            { title: 'Food & Drink', href: '/food-drink', icon: '🍽️' },
            { title: 'UNESCO History', href: '/history/unesco', icon: '📜' },
            { title: 'Family Guide', href: '/plan/family', icon: '👨‍👩‍👧' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-xl border border-white bg-white/50 p-4 transition hover:bg-white hover:shadow-md"
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
                name: 'What are the top attractions in Saltaire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The top Saltaire attractions are: Salts Mill & Hockney Gallery (free), Roberts Park (Victorian riverside park), UNESCO village architecture, Leeds-Liverpool Canal walks, Congregational Church, and Victorian heritage sites. Most attractions are free.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are Saltaire attractions free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, 9 out of 10 top Saltaire attractions are completely free including Salts Mill galleries, Roberts Park, canal walks, church visits, and exploring the UNESCO village streets.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long do you need in Saltaire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Allow 2-3 hours to see the main Saltaire attractions (Salts Mill, village, Roberts Park), or a full day (5-6 hours) to include walks, leisurely dining, and all heritage sites.',
                },
              },
            ],
          }),
        }}
      />

      {/* ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Top 10 Saltaire Attractions',
            description: 'The best things to see and do in Saltaire UNESCO World Heritage Site',
            itemListElement: ATTRACTIONS.map((attr, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: attr.title,
              description: attr.description,
              url: `https://saltaireguide.uk${attr.link}`,
            })),
          }),
        }}
      />
    </div>
  )
}
