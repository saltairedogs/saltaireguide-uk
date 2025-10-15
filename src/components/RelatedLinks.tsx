// src/components/RelatedLinks.tsx
// Reusable "Related Links" section to push authority to key money pages

import Link from 'next/link'

type Item = { title: string; href: string; icon?: string }

const ITEMS: Item[] = [
  { title: 'Visit Saltaire Guide', href: '/visit-saltaire', icon: '🏛️' },
  { title: 'Top Attractions', href: '/saltaire-attractions', icon: '⭐' },
  { title: 'FREE Things to Do', href: '/free-things-to-do-saltaire', icon: '🆓' },
  { title: 'Weekend Guide', href: '/saltaire-weekend-guide', icon: '🗓️' },
  { title: 'Parking Guide', href: '/parking', icon: '🅿️' },
  { title: 'Salts Mill', href: '/salts-mill', icon: '🏭' },
  { title: 'Walks & Trails', href: '/walks', icon: '🥾' },
  { title: 'Food & Drink', href: '/food-drink', icon: '🍽️' },
]

export default function RelatedLinks({
  exclude = [],
  title = 'Related Guides',
  variant = 'neutral',
}: {
  exclude?: string[]
  title?: string
  variant?: 'neutral' | 'blue' | 'green'
}) {
  const links = ITEMS.filter((i) => !exclude.includes(i.href))
  const wrapperClasses =
    variant === 'blue'
      ? 'rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8'
      : variant === 'green'
      ? 'rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8'
      : 'rounded-2xl border border-gray-200 bg-white p-8'

  return (
    <section aria-labelledby="related-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <div className={wrapperClasses}>
        <h2 id="related-title" className="mb-6 text-2xl font-bold md:text-3xl">
          {title}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-black/30 hover:shadow-md"
            >
              {link.icon && <span className="text-2xl" aria-hidden="true">{link.icon}</span>}
              <span className="font-medium">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
