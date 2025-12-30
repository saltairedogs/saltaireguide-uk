// src/app/blog/page.tsx
// Saltaire Guide — Complete Content Hub (Blog/Discovery Page)
//
// Purpose: Central discovery hub for ALL content on saltaireguide.uk
// - Advanced search with fuzzy matching and instant filtering
// - Complete catalog of all site pages with metadata
// - Category-based organization
// - SEO optimized for "saltaire guide", "saltaire blog", "things to do saltaire"
//
// Notes:
// - Keep slugs unique. Duplicate slugs create duplicate cards and dilute internal linking.
// - Category cards must link to real hubs (no "#").
//
// Structured data: CollectionPage, SearchAction, BreadcrumbList, ItemList

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'
import { ContentSearch, type ContentPage } from '@/components/ContentSearch'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Saltaire Guide — Complete Local Directory: Food, Walks, History, Parking & Events',
  description:
    'The complete independent guide to Saltaire: discover cafés, walks, UNESCO history, parking, Roberts Park, Salts Mill, events and everything you need to know about this Victorian World Heritage village.',
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    title: 'Saltaire Guide — Your Complete Local Directory',
    description:
      'Explore everything Saltaire has to offer: from Five-Rise canal walks to specialty coffee, UNESCO history to practical parking advice. The independent local guide.',
    url: `${site.url}/blog`,
    type: 'website',
    images: [{ url: `${site.url}/images/salts-mill.png`, width: 1600, height: 1066 }],
  },
  twitter: { card: 'summary_large_image' },
  keywords: [
    'saltaire',
    'saltaire guide',
    'saltaire village',
    'things to do saltaire',
    'saltaire yorkshire',
    'saltaire unesco',
    'saltaire walks',
    'saltaire cafes',
    'saltaire history',
    'saltaire parking',
    'visit saltaire',
    'saltaire attractions',
    'saltaire restaurants',
    'saltaire shops',
    'titus salt',
    'salts mill',
    'roberts park',
  ],
}

/* --------------------------------- Data ----------------------------------- */

const CONTENT_PAGES: ContentPage[] = [
  // === VISIT & PLAN (PRINCIPLES / START HERE) ===
  {
    slug: '/visit-saltaire',
    title: 'Visit Saltaire: Complete UNESCO Village Guide',
    description:
      'Everything you need to visit Saltaire - parking, top attractions, itineraries, food, walks & practical tips. Independent local guide to BD18.',
    category: 'Practical',
    keywords: [
      'visit saltaire',
      'saltaire guide',
      'unesco village',
      'BD18',
      'things to do saltaire',
      'plan visit',
      'tourist information',
    ],
    image: '/images/salts-mill.png',
    icon: '🏛️',
  },
  {
    slug: '/saltaire-attractions',
    title: 'Top 10 Saltaire Attractions: Must-See UNESCO Sites',
    description:
      'Best attractions in Saltaire: Salts Mill, Hockney Gallery, Congregational Church, Roberts Park, canal walks. Free and paid options.',
    category: 'Practical',
    keywords: ['saltaire attractions', 'things to see saltaire', 'unesco sites', 'salts mill', 'hockney', 'roberts park', 'must see'],
    image: '/images/salts-mill.png',
    icon: '⭐',
  },
  {
    slug: '/free-things-to-do-saltaire',
    title: 'Free Things to Do in Saltaire: Budget Guide',
    description:
      '15+ free activities in Saltaire: Hockney Gallery, canal walks, Roberts Park, architecture tours, money-saving tips.',
    category: 'Practical',
    keywords: ['free things to do', 'free saltaire', 'budget', 'free activities', 'no cost', 'cheap day out'],
    image: '/images/walks-from-saltaire.png',
    icon: '💰',
  },
  {
    slug: '/saltaire-weekend-guide',
    title: 'Weekend in Saltaire: Perfect 2-Day Itinerary',
    description:
      'Complete weekend guide to Saltaire: Saturday/Sunday itineraries, accommodation, best restaurants, top activities for two days.',
    category: 'Practical',
    keywords: ['saltaire weekend', 'two days saltaire', 'weekend breaks', 'weekend itinerary', 'saturday sunday'],
    image: '/images/salts-mill.png',
    icon: '📅',
  },
  {
    slug: '/saltaire-christmas',
    title: 'Christmas in Saltaire: Festive Village Guide',
    description:
      'Celebrate Christmas in Saltaire: festive events, markets, winter walks, cozy cafes, December activities and practical tips.',
    category: 'Seasonal',
    keywords: ['christmas saltaire', 'festive saltaire', 'christmas market', 'december', 'winter activities', 'seasonal'],
    image: '/images/salts-mill.png',
    icon: '🎄',
  },
  {
    slug: '/bradford-to-saltaire',
    title: 'Bradford to Saltaire: Train, Bus & Drive Guide',
    description:
      'How to get from Bradford to Saltaire: 10-min train journey, bus routes, driving directions, parking and day trip planning.',
    category: 'Practical',
    keywords: ['bradford to saltaire', 'train to saltaire', 'bus saltaire', 'how to get', 'travel guide', 'day trip'],
    image: '/images/salts-mill.png',
    icon: '🚆',
  },
  // Keep ONE /plan entry (duplicate removed)
  {
    slug: '/plan',
    title: 'Plan Your Visit to Saltaire',
    description:
      'Everything you need to plan a day in Saltaire: getting here, accessibility, family tips, school visits and more.',
    category: 'Practical',
    keywords: ['plan', 'visit', 'getting here', 'accessibility', 'family', 'school visits'],
    image: '/images/plan-your-visit.png',
    icon: '📋',
  },

  // === PARKING ===
  {
    slug: '/parking',
    title: 'Parking in Saltaire',
    description:
      'Complete parking guide: Caroline Street, Exhibition Road, free options, step-free routes, busy-day tactics and EV charging.',
    category: 'Practical',
    keywords: ['parking', 'car park', 'caroline street', 'exhibition road', 'free parking', 'disabled parking', 'ev charging'],
    image: '/images/parking-saltaire.png',
    icon: '🅿️',
  },
  {
    slug: '/parking/caroline-street',
    title: 'Caroline Street Car Park',
    description:
      'The main car park for Saltaire: 150 spaces, pay & display, step-free access to Victoria Road and the village.',
    category: 'Practical',
    keywords: ['caroline street', 'car park', 'parking', 'pay and display', 'step-free'],
    image: '/images/parking-saltaire.png',
    icon: '🅿️',
  },
  {
    slug: '/parking/exhibition-road',
    title: 'Exhibition Road Car Park',
    description: 'Smaller car park near Roberts Park: handy for the park, bandstand and river walks.',
    category: 'Practical',
    keywords: ['exhibition road', 'roberts park', 'parking', 'car park'],
    image: '/images/roberts-park.png',
    icon: '🅿️',
  },
  {
    slug: '/parking/free',
    title: 'Free Parking Near Saltaire',
    description: 'Careful guidance on nearby free and limited-wait street parking options within walking distance.',
    category: 'Practical',
    keywords: ['free parking', 'street parking', 'no charge', 'limited wait'],
    image: '/images/parking-saltaire.png',
    icon: '🅿️',
  },

  // === WALKS ===
  {
    slug: '/walks',
    title: 'Walks from Saltaire',
    description:
      'Best walks from Saltaire: canal towpath to Bingley Five-Rise, Shipley Glen, Hirst Wood and family routes with maps.',
    category: 'Outdoors',
    keywords: ['walks', 'walking', 'hiking', 'canal', 'towpath', 'five rise', 'shipley glen', 'hirst wood', 'family walks', 'dog friendly'],
    image: '/images/walks-from-saltaire.png',
    icon: '🥾',
  },
  {
    slug: '/walks/five-rise',
    title: 'Canal Walk to Five-Rise Locks',
    description:
      'Flat, easy canal towpath walk from Saltaire to the famous Bingley Five-Rise staircase locks (5km, 1 hour each way).',
    category: 'Outdoors',
    keywords: ['five rise', 'canal walk', 'towpath', 'bingley', 'locks', 'easy walk', 'flat walk', 'family'],
    image: '/images/saltaire-canal.png',
    icon: '🥾',
  },
  {
    slug: '/walks/shipley-glen',
    title: 'Shipley Glen & Bracken Hall',
    description: 'Moderate woodland and moorland loop with views, ancient tramway and optional pub stop (6km, 2 hours).',
    category: 'Outdoors',
    keywords: ['shipley glen', 'bracken hall', 'woodland', 'moorland', 'views', 'tramway'],
    image: '/images/walks-from-saltaire.png',
    icon: '🥾',
  },
  {
    slug: '/walks/hirst-wood',
    title: 'Hirst Wood Nature Reserve',
    description:
      'Short woodland loop perfect for families: bluebells in spring, River Aire views, easy paths (2km, 45 minutes).',
    category: 'Outdoors',
    keywords: ['hirst wood', 'nature reserve', 'woodland', 'family walk', 'bluebells', 'river aire', 'short walk'],
    image: '/images/walks-from-saltaire.png',
    icon: '🥾',
  },
  {
    slug: '/walks/dog-friendly',
    title: 'Dog-Friendly Walks',
    description: 'Best walks for dogs around Saltaire: off-lead areas, water access, poo bin locations and safety notes.',
    category: 'Outdoors',
    keywords: ['dog walks', 'dog friendly', 'dogs', 'off lead', 'pets'],
    image: '/images/walks-from-saltaire.png',
    icon: '🐕',
  },

  // === FOOD & DRINK ===
  {
    slug: '/food-drink',
    title: 'Cafés, Pubs & Restaurants',
    description: 'Where locals eat and drink in Saltaire: specialty coffee, brunch spots, traditional pubs and casual dining.',
    category: 'Food & Drink',
    keywords: ['cafes', 'coffee', 'pubs', 'restaurants', 'food', 'drink', 'lunch', 'dinner', 'brunch', 'eating out'],
    image: '/images/cafe-pubs-restaurants.png',
    icon: '☕',
  },
  // Keep ONE /food-drink/brunch entry (duplicate removed)
  {
    slug: '/food-drink/brunch',
    title: 'Brunch in Saltaire',
    description: 'The ultimate brunch guide: best spots for weekend breakfast, full English, veggie/vegan, pancakes and coffee.',
    category: 'Food & Drink',
    keywords: ['brunch', 'breakfast', 'weekend', 'morning', 'eggs', 'pancakes', 'coffee', 'full english', 'vegan'],
    image: '/images/cafe-pubs-restaurants.png',
    icon: '🥞',
  },
  {
    slug: '/food-drink/coffee',
    title: 'Coffee Shops',
    description: 'Best specialty coffee in Saltaire: from third-wave espresso bars to cozy independent cafés.',
    category: 'Food & Drink',
    keywords: ['coffee', 'cafes', 'espresso', 'specialty coffee', 'barista', 'latte'],
    image: '/images/cafe-pubs-restaurants.png',
    icon: '☕',
  },
  {
    slug: '/food-drink/pubs',
    title: 'Pubs & Beer Gardens',
    description: 'Traditional and modern pubs in Saltaire: real ale, craft beer, pub grub and outdoor seating.',
    category: 'Food & Drink',
    keywords: ['pubs', 'beer', 'ale', 'beer garden', 'drinks', 'pub food'],
    image: '/images/cafe-pubs-restaurants.png',
    icon: '🍺',
  },
  {
    slug: '/food-drink/bakeries',
    title: 'Bakeries & Cake Shops',
    description: 'Fresh bread, pastries and cakes in Saltaire: local bakeries and patisseries for treats and takeaway.',
    category: 'Food & Drink',
    keywords: ['bakery', 'bread', 'cakes', 'pastries', 'patisserie', 'sweet treats'],
    image: '/images/cafe-pubs-restaurants.png',
    icon: '🥐',
  },
  {
    slug: '/food-drink/ice-cream',
    title: 'Ice Cream & Gelato',
    description: 'Best ice cream and gelato in Saltaire: artisan flavors, family favorites and summer treats.',
    category: 'Food & Drink',
    keywords: ['ice cream', 'gelato', 'dessert', 'sweet', 'summer'],
    image: '/images/cafe-pubs-restaurants.png',
    icon: '🍦',
  },
  {
    slug: '/food-drink/desserts',
    title: 'Desserts & Sweet Treats',
    description: 'Satisfy your sweet tooth: brownies, cookies, cheesecake and afternoon tea in Saltaire.',
    category: 'Food & Drink',
    keywords: ['desserts', 'cakes', 'sweets', 'afternoon tea', 'treats'],
    image: '/images/cafe-pubs-restaurants.png',
    icon: '🍰',
  },
  {
    slug: '/food-drink/dog-friendly',
    title: 'Dog-Friendly Cafés & Pubs',
    description: 'Bring your dog: cafés and pubs in Saltaire that welcome four-legged friends.',
    category: 'Food & Drink',
    keywords: ['dog friendly', 'dogs', 'pets', 'cafes', 'pubs'],
    image: '/images/cafe-pubs-restaurants.png',
    icon: '🐕',
  },

  // === HISTORY ===
  {
    slug: '/history',
    title: 'History of Saltaire & UNESCO',
    description:
      'Why Saltaire is a UNESCO World Heritage Site: Titus Salt, the model village, Italianate architecture and timeline.',
    category: 'History',
    keywords: ['history', 'unesco', 'world heritage', 'titus salt', 'victorian', 'architecture', 'model village', 'mill'],
    image: '/images/history-unesco.png',
    icon: '🏛️',
  },
  {
    slug: '/history/titus-salt',
    title: 'Sir Titus Salt',
    description: 'The life and legacy of Sir Titus Salt: mill owner, philanthropist and founder of Saltaire.',
    category: 'History',
    keywords: ['titus salt', 'sir titus', 'biography', 'victorian', 'industrialist', 'philanthropist'],
    image: '/images/history-unesco.png',
    icon: '👤',
  },
  {
    slug: '/history/unesco',
    title: 'UNESCO World Heritage Status',
    description: 'Why Saltaire earned UNESCO World Heritage status in 2001: outstanding universal value and preservation.',
    category: 'History',
    keywords: ['unesco', 'world heritage', 'heritage site', 'preservation', 'architecture'],
    image: '/images/history-unesco.png',
    icon: '🏛️',
  },
  {
    slug: '/history/architecture',
    title: 'Saltaire Architecture',
    description:
      "Italianate architecture of Saltaire: Lockwood & Mawson, the Mill, Congregational Church and workers' cottages.",
    category: 'History',
    keywords: ['architecture', 'italianate', 'lockwood mawson', 'buildings', 'victorian', 'design'],
    image: '/images/salts-mill.png',
    icon: '🏛️',
  },
  {
    slug: '/history/timeline',
    title: 'Timeline of Saltaire',
    description: 'Key dates in Saltaire history from 1853 to today: mill opening, village construction, preservation era.',
    category: 'History',
    keywords: ['timeline', 'chronology', 'history', 'dates', 'events'],
    image: '/images/history-unesco.png',
    icon: '📅',
  },
  {
    slug: '/history/church',
    title: 'Saltaire United Reformed Church',
    description: "The Congregational Church: Saltaire's landmark building with Italianate tower and community heritage.",
    category: 'History',
    keywords: ['church', 'congregational', 'reformed church', 'religious', 'architecture'],
    image: '/images/history-unesco.png',
    icon: '⛪',
  },
  {
    slug: '/history/almshouses',
    title: 'Saltaire Almshouses',
    description: 'Victorian almshouses: social housing for retired mill workers and widows, still in use today.',
    category: 'History',
    keywords: ['almshouses', 'social housing', 'retirement', 'welfare', 'victorian'],
    image: '/images/history-unesco.png',
    icon: '🏘️',
  },
  {
    slug: '/history/myths',
    title: 'Saltaire Myths & Facts',
    description:
      "Common myths about Saltaire debunked: the truth about pubs, street names and Titus Salt's motivations.",
    category: 'History',
    keywords: ['myths', 'facts', 'legends', 'misconceptions', 'truth'],
    image: '/images/history-unesco.png',
    icon: '❓',
  },

  // === ATTRACTIONS ===
  {
    slug: '/salts-mill',
    title: 'Salts Mill',
    description:
      'The landmark mill building: David Hockney gallery, independent shops, bookshop and café in a Victorian industrial masterpiece.',
    category: 'Attractions',
    keywords: ['salts mill', 'mill', 'hockney', 'gallery', 'shops', 'bookshop', 'art'],
    image: '/images/salts-mill.png',
    icon: '🏭',
  },
  {
    slug: '/salts-mill/hockney',
    title: 'Hockney Gallery at Salts Mill',
    description:
      "The largest permanent collection of David Hockney's work: paintings, prints and drawings in the 1853 Gallery.",
    category: 'Attractions',
    keywords: ['hockney', 'david hockney', 'gallery', 'art', 'paintings', '1853 gallery'],
    image: '/images/salts-mill.png',
    icon: '🎨',
  },
  {
    slug: '/roberts-park',
    title: 'Roberts Park',
    description: "Victorian park with bandstand, river walks, playground and events. Restored to its 1870s glory.",
    category: 'Attractions',
    keywords: ['roberts park', 'park', 'bandstand', 'playground', 'river', 'picnic', 'gardens'],
    image: '/images/roberts-park.png',
    icon: '🌳',
  },

  // === SHOPPING ===
  {
    slug: '/shops',
    title: 'Shops in Saltaire',
    description: 'Independent shops, galleries, bookshops and gift shops in Saltaire village and Salts Mill.',
    category: 'Shopping',
    keywords: ['shops', 'shopping', 'gifts', 'bookshop', 'independent', 'gallery'],
    image: '/images/salts-mill.png',
    icon: '🛍️',
  },

  // === EVENTS ===
  {
    slug: '/events',
    title: 'Events in Saltaire',
    description: "What's on in Saltaire: festivals, markets, bandstand concerts, exhibitions and community events.",
    category: 'Events',
    keywords: ['events', 'whats on', 'festivals', 'concerts', 'markets', 'exhibitions'],
    image: '/images/whats-on.png',
    icon: '🎪',
  },
  {
    slug: '/events/saltaire-festival',
    title: 'Saltaire Festival',
    description: 'The annual Saltaire Festival: music, arts, heritage walks and family activities every September.',
    category: 'Events',
    keywords: ['saltaire festival', 'festival', 'september', 'music', 'arts', 'family'],
    image: '/images/whats-on.png',
    icon: '🎪',
  },

  // === PLAN SUBPAGES (keep category consistent: Practical) ===
  {
    slug: '/plan/getting-here',
    title: 'Getting to Saltaire',
    description: 'How to reach Saltaire: by train, bus, car, bike and on foot with journey times from Leeds, Bradford and York.',
    category: 'Practical',
    keywords: ['getting here', 'transport', 'train', 'bus', 'car', 'travel', 'directions'],
    image: '/images/plan-your-visit.png',
    icon: '🚂',
  },
  {
    slug: '/plan/accessibility',
    title: 'Accessibility in Saltaire',
    description:
      'Step-free routes, accessible parking, mobility scooter hire, accessible toilets and support for visitors with disabilities.',
    category: 'Practical',
    keywords: ['accessibility', 'disabled access', 'step-free', 'wheelchair', 'mobility', 'accessible'],
    image: '/images/plan-your-visit.png',
    icon: '♿',
  },
  {
    slug: '/plan/family',
    title: 'Saltaire with Kids',
    description: 'Family-friendly guide: playground, canal ducks, easy walks, child-friendly cafés and rainy-day options.',
    category: 'Practical',
    keywords: ['family', 'kids', 'children', 'playground', 'family-friendly'],
    image: '/images/roberts-park.png',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    slug: '/plan/schools',
    title: 'School Visits to Saltaire',
    description:
      'Educational visits: Victorian history, architecture, heritage walks and resources for teachers and groups.',
    category: 'Practical',
    keywords: ['schools', 'education', 'school trips', 'teachers', 'heritage', 'learning'],
    image: '/images/history-unesco.png',
    icon: '🎓',
  },

  // === THINGS TO DO ===
  {
    slug: '/things-to-do',
    title: 'Things to Do in Saltaire',
    description: 'Complete guide to attractions, activities and experiences in Saltaire and nearby.',
    category: 'Things to Do',
    keywords: ['things to do', 'activities', 'attractions', 'what to do', 'visit'],
    image: '/images/salts-mill.png',
    icon: '🎯',
  },
  {
    slug: '/things-to-do/ultimate-guide',
    title: 'Ultimate Guide to Saltaire',
    description: 'The complete visitor guide: itineraries, top attractions, hidden gems, local tips and everything you need to know.',
    category: 'Things to Do',
    keywords: ['ultimate guide', 'complete guide', 'itinerary', 'must see', 'top attractions'],
    image: '/images/salts-mill.png',
    icon: '📖',
  },

  // === LOCAL SERVICES ===
  {
    slug: '/local-services',
    title: 'Local Services in Saltaire',
    description:
      'Directory of trusted local services: tradespeople, pet care, tutors, photographers and more for residents and visitors.',
    category: 'Local Services',
    keywords: ['local services', 'tradespeople', 'directory', 'services', 'local'],
    image: '/images/salts-mill.png',
    icon: '🔧',
  },

  // === COMMUNITY ===
  {
    slug: '/housing',
    title: 'Housing in Saltaire',
    description: "Living in Saltaire: property guide, conservation area rules, what it's like to live in a UNESCO village.",
    category: 'Community',
    keywords: ['housing', 'property', 'living', 'moving', 'residents', 'houses'],
    image: '/images/history-unesco.png',
    icon: '🏠',
  },
  {
    slug: '/schools-and-housing',
    title: 'Schools & Housing',
    description: 'Complete guide for families considering moving to Saltaire: schools, housing market and community life.',
    category: 'Community',
    keywords: ['schools', 'housing', 'moving', 'families', 'education', 'property'],
    image: '/images/history-unesco.png',
    icon: '🏘️',
  },

  // === INFO ===
  {
    slug: '/about',
    title: 'About This Guide',
    description: 'About saltaireguide.uk: who we are, our editorial approach and why we created this independent local guide.',
    category: 'Info',
    keywords: ['about', 'who we are', 'editorial', 'independent', 'local guide'],
    image: '/images/salts-mill.png',
    icon: 'ℹ️',
  },
  {
    slug: '/faq',
    title: 'Frequently Asked Questions',
    description: 'Common questions about visiting Saltaire: parking, food, walks, events and practical tips.',
    category: 'Info',
    keywords: ['faq', 'questions', 'answers', 'help', 'tips'],
    image: '/images/salts-mill.png',
    icon: '❓',
  },
  {
    slug: '/contact',
    title: 'Contact Us',
    description: 'Get in touch: corrections, suggestions, business enquiries and feedback for saltaireguide.uk.',
    category: 'Info',
    keywords: ['contact', 'email', 'get in touch', 'feedback'],
    image: '/images/salts-mill.png',
    icon: '✉️',
  },
  {
    slug: '/contribute',
    title: 'Contribute to This Guide',
    description: 'Help improve this guide: suggest edits, report outdated info or share local knowledge.',
    category: 'Info',
    keywords: ['contribute', 'edit', 'improve', 'suggest', 'help'],
    image: '/images/salts-mill.png',
    icon: '✏️',
  },
]

/* ----------------------------- Page Component ----------------------------- */

export default function BlogPage() {
  return (
    <>
      <JsonLd />

      {/* Hero section */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 md:py-24 border-b border-gray-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Your Complete Guide to Saltaire</h1>
            <p className="text-xl md:text-2xl text-gray-600 text-balance">
              Discover everything this UNESCO World Heritage village has to offer — from canal walks to specialty coffee,
              Victorian history to practical parking advice.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <span className="badge">🏛️ UNESCO Site</span>
              <span className="badge">☕ Food &amp; drink</span>
              <span className="badge">🥾 Walks &amp; parks</span>
              <span className="badge">🅿️ Parking</span>
              <span className="badge">🎨 Salts Mill</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Intro */}
            <div className="prose mx-auto text-center">
              <p className="text-lg">
                <strong>saltaireguide.uk</strong> is the independent local guide to Saltaire. Search below to find exactly what you&apos;re
                looking for — or browse all <strong>{CONTENT_PAGES.length} pages</strong> covering food, walks, history, parking, attractions
                and practical tips.
              </p>
            </div>

            {/* Search component */}
            <ContentSearch pages={CONTENT_PAGES} />

            {/* Quick links by category */}
            <div className="border-t pt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/food-drink" className="card card-hover card-body text-center no-underline group">
                  <div className="text-4xl mb-2">☕</div>
                  <h3 className="font-semibold group-hover:text-black transition-colors">Food &amp; Drink</h3>
                  <p className="text-sm text-gray-600">Cafés, pubs, restaurants</p>
                </Link>
                <Link href="/walks" className="card card-hover card-body text-center no-underline group">
                  <div className="text-4xl mb-2">🥾</div>
                  <h3 className="font-semibold group-hover:text-black transition-colors">Outdoors</h3>
                  <p className="text-sm text-gray-600">Walks, parks, nature</p>
                </Link>
                <Link href="/history" className="card card-hover card-body text-center no-underline group">
                  <div className="text-4xl mb-2">🏛️</div>
                  <h3 className="font-semibold group-hover:text-black transition-colors">History</h3>
                  <p className="text-sm text-gray-600">UNESCO, Titus Salt, architecture</p>
                </Link>
                <Link href="/visit-saltaire" className="card card-hover card-body text-center no-underline group">
                  <div className="text-4xl mb-2">🅿️</div>
                  <h3 className="font-semibold group-hover:text-black transition-colors">Practical</h3>
                  <p className="text-sm text-gray-600">Planning, parking, accessibility</p>
                </Link>
              </div>
            </div>

            {/* Featured articles */}
            <div className="border-t pt-12">
              <h2 className="text-2xl font-bold mb-6">Start Here</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Link href="/things-to-do/ultimate-guide" className="card card-hover card-body no-underline group space-y-3">
                  <span className="badge badge-warn">⭐ Popular</span>
                  <h3 className="text-xl font-semibold group-hover:text-black transition-colors">Ultimate Guide to Saltaire</h3>
                  <p className="text-sm text-gray-600">
                    First visit? Start here for itineraries, top attractions and everything you need to know.
                  </p>
                </Link>
                <Link href="/parking" className="card card-hover card-body no-underline group space-y-3">
                  <span className="badge">🅿️ Essential</span>
                  <h3 className="text-xl font-semibold group-hover:text-black transition-colors">Parking Guide</h3>
                  <p className="text-sm text-gray-600">Where to park, how much it costs and step-free routes into the village.</p>
                </Link>
                <Link href="/walks" className="card card-hover card-body no-underline group space-y-3">
                  <span className="badge badge-success">🥾 Outdoors</span>
                  <h3 className="text-xl font-semibold group-hover:text-black transition-colors">Best Walks</h3>
                  <p className="text-sm text-gray-600">Canal towpath to Five-Rise, Shipley Glen, woodland trails and family routes.</p>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="callout callout-success text-center">
              <h3 className="text-lg font-semibold mb-2">Can&apos;t find what you&apos;re looking for?</h3>
              <p className="mb-4">Get in touch or check our FAQ for common questions about visiting Saltaire.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Contact us
                </Link>
                <Link href="/faq" className="btn btn-outline">
                  Read FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* --------------------------- Structured Data ------------------------------ */

function JsonLd() {
  const baseUrl = site.url

  const collectionPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${baseUrl}/blog`,
    name: 'Saltaire Guide — Complete Local Directory',
    description:
      'The complete independent guide to Saltaire: discover cafés, walks, UNESCO history, parking, Roberts Park, Salts Mill, events and everything you need to know about this Victorian World Heritage village.',
    url: `${baseUrl}/blog`,
    inLanguage: 'en-GB',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      name: site.name,
      url: baseUrl,
    },
    about: {
      '@type': 'Place',
      name: 'Saltaire',
      description: 'A Victorian model village and UNESCO World Heritage Site in West Yorkshire, England',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Saltaire',
        addressRegion: 'West Yorkshire',
        addressCountry: 'GB',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Complete Guide', item: `${baseUrl}/blog` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Saltaire Guide Pages',
    description: 'All pages and resources on saltaireguide.uk',
    numberOfItems: CONTENT_PAGES.length,
    itemListElement: CONTENT_PAGES.slice(0, 20).map((page, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `${baseUrl}${page.slug}`,
      name: page.title,
      description: page.description,
    })),
  }

  const combined = {
    '@context': 'https://schema.org',
    '@graph': [collectionPage, breadcrumb, itemList],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combined) }} />
}
