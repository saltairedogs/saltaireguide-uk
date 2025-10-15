import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bradford to Saltaire: How to Get There (Train, Bus, Drive) | 2025 Guide',
  description:
    'Complete Bradford to Saltaire travel guide: trains (10 mins), buses, driving directions, parking, walking routes. Easy UNESCO village day trip from Bradford.',
  openGraph: {
    title: 'Bradford to Saltaire Travel Guide | Train, Bus & Drive',
    description: 'How to get from Bradford to Saltaire UNESCO village - trains, buses, driving, parking',
    url: 'https://saltaireguide.uk/bradford-to-saltaire',
  },
  keywords: [
    'bradford to saltaire',
    'saltaire from bradford',
    'bradford to saltaire train',
    'bradford to saltaire bus',
    'how to get to saltaire from bradford',
    'saltaire day trip bradford',
    'bradford unesco village',
  ],
}

export default function BradfordToSaltairePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        Bradford to Saltaire: Complete Travel Guide
      </h1>
      <p className="mb-12 text-xl text-gray-700">
        Easy UNESCO World Heritage Site day trip - just 10 minutes by train from Bradford city centre
      </p>

      {/* Quick Summary */}
      <div className="mb-12 rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-green-50 p-8">
        <h2 className="mb-4 text-2xl font-bold">⚡ Quick Summary</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <div className="mb-1 text-3xl font-bold text-blue-600">10 mins</div>
            <div className="text-sm text-gray-700">Train journey time</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-green-600">3 miles</div>
            <div className="text-sm text-gray-700">Distance</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-purple-600">£3-5</div>
            <div className="text-sm text-gray-700">Return train fare</div>
          </div>
        </div>
      </div>

      {/* Transport Options */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">🚆 Best Ways to Travel</h2>

        {/* Train */}
        <div className="mb-8 rounded-xl border-2 border-green-200 bg-white p-6">
          <h3 className="mb-4 text-2xl font-semibold text-green-700">🥇 Train (RECOMMENDED)</h3>
          <div className="space-y-3">
            <p className="font-medium">
              <strong>Route:</strong> Bradford Forster Square → Saltaire
            </p>
            <p>
              <strong>Frequency:</strong> Every 10-15 minutes (Mon-Sat), every 30 mins (Sunday)
            </p>
            <p>
              <strong>Duration:</strong> 10 minutes direct
            </p>
            <p>
              <strong>Cost:</strong> £3-5 return (off-peak), £2.70 single
            </p>
            <p>
              <strong>Operator:</strong> Northern Railway
            </p>
            <p className="text-sm text-gray-700">
              <strong>Why best:</strong> Fastest, most frequent, drops you 2-min walk from Salts Mill. No parking hassle. Perfect for day trips.
            </p>
            <div className="mt-4 rounded-lg bg-green-50 p-4">
              <p className="text-sm font-medium">
                💡 <strong>Top Tip:</strong> Buy tickets on Trainline app or at station. Off-peak return saves 20%. Contactless accepted.
              </p>
            </div>
          </div>
        </div>

        {/* Bus */}
        <div className="mb-8 rounded-xl border-2 border-blue-200 bg-white p-6">
          <h3 className="mb-4 text-2xl font-semibold text-blue-700">🚌 Bus</h3>
          <div className="space-y-3">
            <p className="font-medium">
              <strong>Routes:</strong> 626, 640 (Keighley Bus Company)
            </p>
            <p>
              <strong>Frequency:</strong> Every 30 mins weekdays, hourly weekends
            </p>
            <p>
              <strong>Duration:</strong> 20-25 minutes (stops en route)
            </p>
            <p>
              <strong>Cost:</strong> £2-3 single, £4-5 return
            </p>
            <p className="text-sm text-gray-700">
              <strong>Stops:</strong> Bradford Interchange → Shipley → Saltaire Road (5-min walk to village)
            </p>
            <div className="mt-4 rounded-lg bg-blue-50 p-4">
              <p className="text-sm">
                <strong>When to use:</strong> If you are near Bradford Interchange or prefer scenic route. Slower than train but connects more areas.
              </p>
            </div>
          </div>
        </div>

        {/* Driving */}
        <div className="mb-8 rounded-xl border-2 border-orange-200 bg-white p-6">
          <h3 className="mb-4 text-2xl font-semibold text-orange-700">🚗 Driving</h3>
          <div className="space-y-3">
            <p className="font-medium">
              <strong>Route:</strong> A650 towards Keighley/Skipton
            </p>
            <p>
              <strong>Duration:</strong> 10-15 minutes (traffic dependent)
            </p>
            <p>
              <strong>Directions:</strong> From Bradford city centre, follow signs to Shipley/Keighley on A650. Look for Saltaire signs after 3 miles.
            </p>
            <p>
              <strong>Parking:</strong> Free street parking (limited), Caroline Street Car Park (small fee). See{' '}
              <Link href="/parking" className="text-blue-600 underline">
                parking guide
              </Link>
              .
            </p>
            <div className="mt-4 rounded-lg bg-orange-50 p-4">
              <p className="text-sm">
                <strong>Pros:</strong> Flexible timing, good for groups/families
                <br />
                <strong>Cons:</strong> A650 can be congested peak times, parking limited weekends
              </p>
            </div>
          </div>
        </div>

        {/* Walking/Cycling */}
        <div className="rounded-xl border-2 border-purple-200 bg-white p-6">
          <h3 className="mb-4 text-2xl font-semibold text-purple-700">🚶 Walking / 🚴 Cycling</h3>
          <div className="space-y-3">
            <p>
              <strong>Distance:</strong> 3 miles
            </p>
            <p>
              <strong>Walking Time:</strong> 50-60 minutes
            </p>
            <p>
              <strong>Cycling Time:</strong> 15-20 minutes
            </p>
            <p>
              <strong>Route:</strong> Follow Leeds-Liverpool Canal towpath from Bradford (scenic, flat, traffic-free)
            </p>
            <div className="mt-4 rounded-lg bg-purple-50 p-4">
              <p className="text-sm">
                <strong>Perfect for:</strong> Nice weather, active visitors, photographers. Beautiful canal route through UNESCO buffer zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Day Trip */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Perfect Bradford-Saltaire Day Trip</h2>
        <div className="rounded-2xl border-2 border-green-300 bg-white p-8">
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="font-bold text-green-600">09:30</span>
              <span>Take train from Bradford Forster Square (10 mins)</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-green-600">09:45</span>
              <span>Arrive Saltaire station, walk to village (2 mins)</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-green-600">10:00</span>
              <span>Coffee at Salts Mill cafe, explore Hockney Gallery (free)</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-green-600">11:30</span>
              <span>Browse Salts Mill shops, local gifts</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-green-600">12:30</span>
              <span>Lunch at village cafe or pub</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-green-600">14:00</span>
              <span>
                Canal walk or Roberts Park stroll (
                <Link href="/walks" className="text-blue-600 underline">
                  walk guides
                </Link>
                )
              </span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-green-600">15:30</span>
              <span>Tea & cake, final mill browse</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-green-600">16:30</span>
              <span>Train back to Bradford (10 mins)</span>
            </div>
          </div>
          <div className="mt-6 rounded-lg bg-yellow-50 p-4">
            <p className="text-sm">
              <strong>💰 Budget:</strong> £5 train return + £15-20 food/drink = £20-25 total for excellent UNESCO day trip
            </p>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Top Tips for Your Visit</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-3 font-semibold">🎫 Tickets</h3>
            <p className="text-sm text-gray-700">
              Buy train tickets on Trainline app or at station. Off-peak return (after 9:30am weekdays, anytime weekends) saves money. Contactless payment accepted.
            </p>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h3 className="mb-3 font-semibold">⏰ Timing</h3>
            <p className="text-sm text-gray-700">
              Weekday mornings less crowded. Weekends busier but livelier. Most attractions open 10am-5pm. Check{' '}
              <Link href="/plan" className="underline">
                planning guide
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-6">
            <h3 className="mb-3 font-semibold">🍽️ Food</h3>
            <p className="text-sm text-gray-700">
              Excellent cafes, bakeries, pubs in village. Book restaurants if weekend lunch. See{' '}
              <Link href="/food-drink" className="underline">
                food guide
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <h3 className="mb-3 font-semibold">🌦️ Weather</h3>
            <p className="text-sm text-gray-700">
              Mix of indoor (Salts Mill, galleries, cafes) and outdoor (walks, parks). Good in any weather. Bring layers and umbrella year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Plan Your Visit</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Getting Here (All Routes)', href: '/plan/getting-here' },
            { title: 'Visit Saltaire Guide', href: '/visit-saltaire' },
            { title: 'Parking Options', href: '/parking' },
            { title: 'Top Attractions', href: '/saltaire-attractions' },
            { title: 'Food & Drink', href: '/food-drink' },
            { title: 'Weekend Guide', href: '/saltaire-weekend-guide' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="block rounded-xl border border-gray-200 bg-white p-4 text-center font-medium transition hover:border-blue-300 hover:shadow-md"
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
            '@type': 'HowTo',
            name: 'How to Get from Bradford to Saltaire',
            description: 'Complete guide to traveling from Bradford to Saltaire UNESCO village by train, bus, car and bike',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Choose Transport',
                text: 'Train is fastest (10 mins, every 10-15 mins) from Bradford Forster Square. Bus takes 20-25 mins. Driving 10-15 mins on A650.',
              },
              {
                '@type': 'HowToStep',
                name: 'Buy Tickets',
                text: 'Train tickets £3-5 return (off-peak). Buy on Trainline app or station. Contactless accepted. Bus £2-3 single.',
              },
              {
                '@type': 'HowToStep',
                name: 'Journey',
                text: 'Board train at Bradford Forster Square. 10-min journey to Saltaire. Exit station, 2-min walk to village centre.',
              },
              {
                '@type': 'HowToStep',
                name: 'Explore',
                text: 'Visit Salts Mill, Hockney Gallery (free), canal walks, Roberts Park, independent shops and cafes.',
              },
            ],
            totalTime: 'PT10M',
          }),
        }}
      />
    </div>
  )
}
