import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Saltaire Weekend Guide 2025 | Perfect Saturday/Sunday in BD18',
  description:
    'Plan the perfect weekend in Saltaire: 2-day itinerary, where to eat, best walks, Saturday markets, Sunday concerts & local tips for visiting UNESCO BD18.',
  openGraph: {
    title: 'Saltaire Weekend Guide | 2-Day UNESCO Village Itinerary',
    description: 'Complete weekend itinerary for Saltaire - walks, food, attractions, markets & events',
    url: 'https://saltaireguide.uk/saltaire-weekend-guide',
  },
  keywords: [
    'saltaire weekend',
    'weekend in saltaire',
    'saltaire saturday',
    'saltaire sunday',
    'saltaire weekend breaks',
    'two days saltaire',
    'weekend itinerary saltaire',
    'BD18 weekend',
  ],
}

export default function SaltaireWeekendPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        Perfect Weekend in Saltaire: 2-Day Itinerary
      </h1>
      <p className="mb-12 text-xl text-gray-700">
        Make the most of Saturday and Sunday in UNESCO World Heritage Saltaire with this complete weekend guide
      </p>

      {/* Saturday */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-blue-600">Saturday Itinerary</h2>
        <div className="space-y-6 rounded-2xl border-2 border-blue-200 bg-blue-50 p-8">
          {[
            {
              time: '09:30',
              title: 'Arrive & Brunch',
              desc: 'Beat the crowds. Park at Caroline Street car park (£3-5) or find free street parking. Start with brunch at a local cafe.',
              link: '/brunch',
            },
            {
              time: '11:00',
              title: 'Salts Mill & Hockney Gallery',
              desc: "Explore the iconic mill, browse the world's largest Hockney collection (free), independent shops, and bookshop.",
              link: '/salts-mill',
            },
            {
              time: '12:30',
              title: 'Village Architecture Walk',
              desc: 'Self-guided stroll through Victorian streets. See the church, almshouses, and worker cottages.',
              link: '/history',
            },
            {
              time: '13:30',
              title: 'Lunch Break',
              desc: 'Choose from village cafes, mill dining, or traditional pub lunch. Outdoor seating if weather permits.',
              link: '/food-drink',
            },
            {
              time: '15:00',
              title: 'Canal Walk to Five Rise Locks',
              desc: 'Flat 45-min walk along towpath to Bingley. See the famous 5-lock staircase (engineering marvel). Return by canal or catch bus back.',
              link: '/walks/five-rise',
            },
            {
              time: '17:00',
              title: 'Roberts Park Sunset',
              desc: 'Relax in Victorian riverside park. If summer: check for free bandstand concerts (some Saturdays).',
              link: '/roberts-park',
            },
            {
              time: '18:00',
              title: 'Dinner & Drinks',
              desc: 'Local pub evening meal or restaurant booking. Dog-friendly options available.',
              link: '/food-drink/pubs',
            },
          ].map((item) => (
            <div key={item.time} className="flex gap-4 rounded-xl bg-white p-4">
              <div className="flex-shrink-0 text-lg font-bold text-blue-600">{item.time}</div>
              <div className="flex-1">
                <h3 className="mb-1 font-semibold">{item.title}</h3>
                <p className="mb-2 text-sm text-gray-700">{item.desc}</p>
                <Link href={item.link} className="text-sm font-medium text-blue-600 underline">
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sunday */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-green-600">Sunday Itinerary</h2>
        <div className="space-y-6 rounded-2xl border-2 border-green-200 bg-green-50 p-8">
          {[
            {
              time: '10:00',
              title: 'Leisurely Start',
              desc: 'Sundays quieter in Saltaire. Coffee and pastry at mill cafe or village bakery.',
              link: '/food-drink/coffee',
            },
            {
              time: '10:45',
              title: 'Hirst Wood Walk',
              desc: 'Ancient woodland walk (45 mins). Bluebells in spring, peaceful year-round. Dog-friendly. Can be muddy after rain.',
              link: '/walks/hirst-wood',
            },
            {
              time: '12:00',
              title: 'Shipley Glen Extension (Optional)',
              desc: 'If energetic: continue to Shipley Glen. Ride historic tramway (£1-2), moorland views, Glen Cafe.',
              link: '/walks/shipley-glen',
            },
            {
              time: '13:00',
              title: 'Sunday Roast',
              desc: 'Traditional Yorkshire Sunday lunch at local pub. Book ahead for busy times.',
              link: '/food-drink/pubs',
            },
            {
              time: '14:30',
              title: 'Roberts Park & Bandstand',
              desc: 'If summer Sunday: often free live music at bandstand (check schedule). Otherwise enjoy riverside stroll.',
              link: '/events',
            },
            {
              time: '15:30',
              title: 'Afternoon Tea or Ice Cream',
              desc: 'Treat yourself. Local ice cream parlors or cafe afternoon tea.',
              link: '/food-drink/desserts',
            },
            {
              time: '16:30',
              title: 'Final Browse & Departure',
              desc: 'Last look around mill shops, pick up local gifts, grab a book for the journey.',
              link: '/shops',
            },
          ].map((item) => (
            <div key={item.time} className="flex gap-4 rounded-xl bg-white p-4">
              <div className="flex-shrink-0 text-lg font-bold text-green-600">{item.time}</div>
              <div className="flex-1">
                <h3 className="mb-1 font-semibold">{item.title}</h3>
                <p className="mb-2 text-sm text-gray-700">{item.desc}</p>
                <Link href={item.link} className="text-sm font-medium text-green-600 underline">
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekend Tips */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Saltaire Weekend Tips</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 font-semibold">🅿️ Weekend Parking</h3>
            <p className="text-sm text-gray-700">
              Arrive before 10am Saturday for free street parking. Sunday slightly quieter. Caroline Street car park open both days. See{' '}
              <Link href="/parking" className="underline">
                parking guide
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 font-semibold">🍽️ Booking Restaurants</h3>
            <p className="text-sm text-gray-700">
              Book Saturday dinner and Sunday roast ahead if visiting popular spots. Walk-ins usually fine for breakfast/lunch. Check{' '}
              <Link href="/food-drink" className="underline">
                restaurant listings
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 font-semibold">🎵 Weekend Events</h3>
            <p className="text-sm text-gray-700">
              Check{' '}
              <Link href="/events" className="underline">
                events calendar
              </Link>{' '}
              for Saturday markets, Sunday bandstand concerts (summer), special festivals. Some require booking.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 font-semibold">☔ Weather Backup</h3>
            <p className="text-sm text-gray-700">
              If rain: focus on Salts Mill galleries, shops, cafes (all indoors). Church visits, short canal walks under bridges. Most attractions work in any weather.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="mb-12 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8">
        <h2 className="mb-4 text-2xl font-bold">Staying Overnight?</h2>
        <p className="mb-4 text-gray-700">
          While Saltaire is perfect for a day trip, consider staying in nearby Shipley, Bradford or Leeds for a full weekend experience. Easy train access back to Saltaire (10-15 mins).
        </p>
        <p className="text-sm text-gray-600">
          Local B&Bs, hotels in Bradford city centre (15 min train), or Leeds for more options (25 min train). Check{' '}
          <Link href="/plan/getting-here" className="underline">
            getting here guide
          </Link>
          .
        </p>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Spend a Perfect Weekend in Saltaire',
            description:
              'Complete 2-day weekend itinerary for visiting Saltaire UNESCO World Heritage Site including walks, food, attractions and local tips',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Saturday Morning',
                text: 'Arrive at Saltaire, enjoy brunch, visit Salts Mill and Hockney Gallery',
              },
              {
                '@type': 'HowToStep',
                name: 'Saturday Afternoon',
                text: 'Walk through UNESCO village, lunch, canal walk to Five Rise Locks',
              },
              {
                '@type': 'HowToStep',
                name: 'Saturday Evening',
                text: 'Sunset at Roberts Park, dinner and drinks at local pub',
              },
              {
                '@type': 'HowToStep',
                name: 'Sunday Morning',
                text: 'Coffee, ancient woodland walk at Hirst Wood, optional Shipley Glen',
              },
              {
                '@type': 'HowToStep',
                name: 'Sunday Afternoon',
                text: 'Traditional Sunday roast, bandstand music, afternoon tea',
              },
            ],
          }),
        }}
      />
    </div>
  )
}
