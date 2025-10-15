// src/app/not-found.tsx
// Custom 404 for Saltaire Guide (App Router, server-only, CWV-first)
// - Friendly copy, search form to /blog?q=, popular links, and local-services jump list
// - Uses your btn/badge/card utilities and local images
// - Adds a robots noindex tag (404 status is already non-indexable, this is just belt-and-braces)

import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error' // static HTML
export const revalidate = false

const IMG = {
  hero: { src: '/images/parking-saltaire.png', alt: 'Saltaire view (placeholder image)', w: 1600, h: 1066 },
}

const POPULAR: Array<{ href: string; label: string; note?: string }> = [
  { href: '/', label: 'Home' },
  { href: '/parking', label: 'Parking in Saltaire', note: 'No-ticket tips' },
  { href: '/walks', label: 'Best walks', note: 'Step-free options' },
  { href: '/food-drink', label: 'Cafés & pubs' },
  { href: '/events', label: 'What’s on' },
  { href: '/plan', label: 'Plan your visit' },
  { href: '/blog', label: 'Blog & search' },
  { href: '/local-services', label: 'Local services directory' },
]

const SERVICES = [
  'dog-walkers',
  'pet-sitters',
  'vets',
  'plumbers',
  'electricians',
  'locksmiths',
  'tutors',
  'gardeners',
  'photographers',
  'handymen',
].map((s) => ({ href: `/local-services/${s}`, label: s.split('-').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' ') }))

export default function NotFound() {
  return (
    <main>
      {/* extra-safety: discourage indexing (Next already sends 404) */}
      <meta name="robots" content="noindex, follow" />

      <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
        <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
          <div>
            <p className="text-sm font-semibold text-amber-700">404 — Page not found</p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight md:text-5xl">
              Can’t find that Saltaire page
            </h1>
            <p className="mt-4 max-w-prose text-lg text-gray-700">
              The link might be old or the page moved. Try a quick search, or jump to a popular section below.
            </p>

            {/* Search: submits to your blog universal search */}
            <form action="/blog" method="get" className="mt-6 flex flex-wrap gap-3" role="search" aria-label="Site search">
              <input
                type="search"
                name="q"
                className="min-w-[240px] flex-1 rounded-md border px-3 py-2 text-sm"
                placeholder="Search Saltaire Guide (parking, walks, services, …)"
                aria-label="Search Saltaire Guide"
                defaultValue=""
              />
              <button className="btn btn-primary" type="submit">Search</button>
              <Link href="/blog" className="btn btn-outline">Open blog/search</Link>
            </form>

            <ul className="mt-6 flex flex-wrap gap-2 text-sm text-gray-600">
              <li className="badge">Fast, no ads</li>
              <li className="badge">Locally updated</li>
              <li className="badge">Step-free notes</li>
            </ul>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src={IMG.hero.src}
              alt={IMG.hero.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </header>

      {/* Popular links */}
      <section className="container mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Popular destinations</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR.map((p) => (
            <Link key={p.href} href={p.href} className="card card-hover">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.label}</h3>
                  <span aria-hidden>→</span>
                </div>
                {p.note ? <p className="mt-1 text-sm text-gray-600">{p.note}</p> : null}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Local services jump list */}
      <section className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-4 py-10">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Need a local service?</h2>
          <p className="mt-2 max-w-prose text-gray-700">
            Our directory covers Saltaire & Shipley with cautious, practical notes and verification badges for featured providers.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="btn btn-ghost btn-sm">{s.label}</Link>
            ))}
            <Link href="/local-services" className="btn btn-outline btn-sm">All services</Link>
          </div>
        </div>
      </section>

      {/* Quick help */}
      <section className="container mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700">
            <h3 className="text-lg font-semibold">Why you’re seeing this</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>We’ve moved or renamed a page.</li>
              <li>A link was mistyped or has expired.</li>
              <li>You followed a very old bookmark.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">
              If this URL should exist, please ping us and we’ll fix the link.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700">
            <h3 className="text-lg font-semibold">Report a broken link</h3>
            <p className="mt-2">Copy the address bar URL and email us a quick note.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                className="btn btn-primary btn-sm"
                href={`mailto:hello@saltaireguide.uk?subject=${encodeURIComponent('Broken link on Saltaire Guide')}&body=${encodeURIComponent(
                  `Hi,\n\nI found a broken link on ${site.url}.\n\nURL:\nIssue:\n\nThanks!`
                )}`}
              >
                Email the team
              </a>
              <Link href="/" className="btn btn-outline btn-sm">Back to home</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
