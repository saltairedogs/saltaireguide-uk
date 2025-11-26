"use client"

/*
 * This page renders a living directory of barbers in the Shipley/Saltaire area.
 * It is written entirely as a client component because it makes use of React
 * hooks such as `useState` and `useMemo` for filtering and searching. If you
 * wish to set per‑page metadata (title, description, open graph tags) you
 * should do so in a parent `layout.tsx` file as a server component. See
 * Next.js documentation for details.
 */

import Link from "next/link"
import { useMemo, useState } from "react"

// Define the shape of our barber records. Additional fields can be added as
// needed (e.g. rating, reviewCount) but those are surfaced via the `notes`
// property to keep the card layout simple.
type Barber = {
  name: string
  slug: string
  shortDescription?: string
  addressLine1?: string
  addressLine2?: string
  city?: string
  postcode?: string
  phone?: string
  instagram?: string
  website?: string
  googleMaps?: string
  tags?: string[]
  petFriendly?: "yes" | "no" | "unknown"
  openingHours?: Record<string, string>
  notes?: string
  status?: "open" | "closed" | "unknown"
}

/* -------------------------------------------------------------------------- */
/* Barber data                                                                */
/*                                                                            */
/* This array contains our curated list of the top barbers in the area. The    */
/* information comes from public sources like Booksy, BirdEye and Fresha.      */
/* Ratings and review counts have been summarised in the `notes` field to      */
/* avoid cluttering the UI. If you discover more shops or new details, simply */
/* append new objects here following the same structure.                       */
/* -------------------------------------------------------------------------- */
const BARBERS: Barber[] = [
  {
    name: "Kutts Barbershop",
    slug: "kutts-barbershop",
    shortDescription: "Precision cuts, modern fades and beard trimming.",
    addressLine1: "73 Kirkgate",
    city: "Shipley",
    postcode: "BD18 3LU",
    phone: "+44 1274 442408",
    instagram: "https://instagram.com/kuttsbarbershop", // social handle
    website: "https://kuttsbarbershop.com",
    googleMaps: "https://maps.google.com/?q=73+Kirkgate+BD18+3LU",
    tags: ["bookings", "card", "beard", "kids"],
    petFriendly: "unknown",
    openingHours: {
      mon: "Closed",
      tue: "09:30–19:00",
      wed: "09:30–17:00",
      thu: "09:30–19:00",
      fri: "09:30–19:00",
      sat: "10:00–17:30",
      sun: "Closed",
    },
    notes: "Rating 5.0 (106 reviews) on Booksy【634928621426637†L959-L962】."
  },
  {
    name: "A's Fades",
    slug: "as-fades",
    shortDescription: "Private studio offering haircuts, fades and beard grooming.",
    addressLine1: "Wharncliffe Road",
    city: "Shipley",
    postcode: "BD18 2AD",
    phone: undefined,
    instagram: "https://instagram.com/asfades_",
    website: undefined,
    googleMaps: "https://maps.google.com/?q=Wharncliffe+Road+BD18+2AD",
    tags: ["bookings", "beard", "kids"],
    petFriendly: "unknown",
    openingHours: undefined,
    notes: "Rating 5.0 (36 reviews) on Booksy【300406914851714†L165-L169】."
  },
  {
    name: "Tamer Barber",
    slug: "tamer-barber",
    shortDescription: "Modern barbershop known for quality fades and friendly service.",
    addressLine1: "28 Commercial St",
    city: "Shipley",
    postcode: "BD18 3SP",
    phone: "+44 1274 809020",
    instagram: "https://instagram.com/tamerbarber",
    website: "https://tamerbarber.nearcut.com",
    googleMaps: "https://maps.google.com/?q=28+Commercial+St+BD18+3SP",
    tags: ["bookings", "beard", "kids"],
    petFriendly: "unknown",
    openingHours: {
      mon: "10:00–19:00",
      tue: "Closed",
      wed: "10:00–19:00",
      thu: "10:00–20:00",
      fri: "10:00–20:00",
      sat: "08:00–16:00",
      sun: "Closed",
    },
    notes: "Rating 4.9 (115 reviews) on BirdEye【576912566544766†L23-L53】."
  },
  {
    name: "Gents Hair Co",
    slug: "gents-hair-co",
    shortDescription: "Long‑established barbershop with early opening hours.",
    addressLine1: "5 Fern Pl",
    city: "Saltaire, Shipley",
    postcode: "BD18 3HB",
    phone: "+44 7939 471952",
    instagram: undefined,
    website: undefined,
    googleMaps: "https://maps.google.com/?q=5+Fern+Pl+BD18+3HB",
    tags: ["walk-in", "beard", "kids", "cash", "card"],
    petFriendly: "unknown",
    openingHours: {
      mon: "06:00–18:00",
      tue: "07:00–19:00",
      wed: "06:00–18:00",
      thu: "07:00–19:00",
      fri: "06:00–18:00",
      sat: "06:00–16:00",
      sun: "Closed",
    },
    notes: "Rating 4.8 (117 reviews) on BirdEye【192317173815416†L23-L53】."
  },
  {
    name: "R.S. barbers",
    slug: "rs-barbers",
    shortDescription: "Friendly barbers offering traditional cuts and beard trims.",
    addressLine1: "50 Saltaire Rd",
    city: "Shipley",
    postcode: "BD18 3HN",
    phone: "+44 7300 464686",
    instagram: undefined,
    website: undefined,
    googleMaps: "https://maps.google.com/?q=50+Saltaire+Rd+BD18+3HN",
    tags: ["walk-in", "beard", "kids"],
    petFriendly: "unknown",
    openingHours: {
      mon: "09:00–18:00",
      tue: "09:00–18:00",
      wed: "09:00–18:00",
      thu: "09:00–18:00",
      fri: "09:00–19:00",
      sat: "09:00–19:00",
      sun: "10:00–17:00",
    },
    notes: "Rating 4.8 (71 reviews) on BirdEye【955116037783517†L23-L53】; phone via Fresha【266951332128606†L147-L155】."
  },
]

/* -------------------------------------------------------------------------- */
/* Main page component                                                         */
/* -------------------------------------------------------------------------- */
export default function BarbersPage() {
  return (
    // Apply a subtle gradient to the page background.  Using a light gray
    // palette improves contrast and makes the directory feel modern and clean.
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-6">
      <Hero />
      <Directory barbers={BARBERS} />
      <SuggestBox />
      <FAQ />
    </main>
  )
}

/* --------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    // Hero section: wrapped in a card-like container with rounded corners and a subtle
    // shadow.  This isolates the header from the rest of the content and gives the
    // page a sense of hierarchy.
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-6 py-10 sm:py-12 lg:py-14 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Barbers in Saltaire
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          A living list of local barbers. If we’re missing someone, scroll down and tap
          <span className="font-medium"> “Suggest a shop”.</span>
        </p>
      </div>
    </section>
  )
}

/* ------------------------------- Directory -------------------------------- */
function Directory({ barbers }: { barbers: Barber[] }) {
  const [query, setQuery] = useState("")
  const [activeTags, setActiveTags] = useState<string[]>([])

  const filters: { label: string; value: string }[] = [
    { label: "Walk‑ins", value: "walk-in" },
    { label: "Bookings", value: "bookings" },
    { label: "Beard", value: "beard" },
    { label: "Kids", value: "kids" },
    { label: "Cash", value: "cash" },
    { label: "Card", value: "card" },
    { label: "Late Opening", value: "late" },
  ]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return (barbers ?? []).filter((b) => {
      // Search against name, description and address fields
      const qMatch =
        !q ||
        [b.name, b.shortDescription, b.addressLine1, b.postcode]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q)

      // Tag filtering: include derived "late" when any day ends after 18:00
      const tagsMatch =
        activeTags.length === 0 ||
        (b.tags ?? []).some((t) => activeTags.includes(t.toLowerCase())) ||
        (activeTags.includes("late") && hasLateOpening(b.openingHours))

      return qMatch && tagsMatch
    })
  }, [query, activeTags, barbers])

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Controls */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col gap-4">
          {/* Search bar */}
          <div className="flex w-full">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search barbers, services, postcode…"
              className="flex-1 rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((t) => {
              const active = activeTags.includes(t.value)
              return (
                <button
                  key={t.value}
                  onClick={() =>
                    setActiveTags((prev) =>
                      active ? prev.filter((x) => x !== t.value) : [...prev, t.value]
                    )
                  }
                  className={[
                    "rounded-full px-4 py-1.5 text-sm border",
                    active
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 hover:border-gray-300",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              )
            })}
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="text-sm underline underline-offset-4 text-blue-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((b) => (
            <BarberCard key={b.slug} b={b} />
          ))}
          {filtered.length === 0 && <EmptyState onReset={() => setQuery("")} />}
        </div>
      </div>
    </section>
  )
}

function BarberCard({ b }: { b: Barber }) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md transition-shadow p-5 flex flex-col h-full">
      {/* Header: name and status */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {b.name}
        </h3>
        <span
          className={[
            "uppercase tracking-wide text-xs font-medium px-2 py-0.5 rounded-full",
            b.status === "open"
              ? "bg-green-100 text-green-800"
              : b.status === "closed"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800",
          ].join(" ")}
        >
          {b.status ?? "unknown"}
        </span>
      </div>

      {/* Description */}
      {b.shortDescription && (
        <p className="mt-1 text-sm text-gray-700">{b.shortDescription}</p>
      )}

      {/* Address and tags */}
      <div className="mt-3 text-sm space-y-1">
        {b.addressLine1 && (
          <p className="text-gray-600">
            {b.addressLine1}
            {b.addressLine2 ? `, ${b.addressLine2}` : ""}
            {b.city ? `, ${b.city}` : ""} {b.postcode ?? ""}
          </p>
        )}
        <TagRow b={b} />
      </div>

      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-2">
        {b.phone && <Action href={`tel:${b.phone}`} label="Call" />}
        {b.instagram && <Action href={b.instagram} label="Instagram" />}
        {b.website && <Action href={b.website} label="Website" />}
        {b.googleMaps && <Action href={b.googleMaps} label="Maps" />}
      </div>

      {/* Hours */}
      {b.openingHours && (
        <div className="mt-4 rounded-md bg-gray-50 border border-gray-200 overflow-hidden text-xs">
          <table className="w-full">
            <tbody>
              {Object.entries(b.openingHours).map(([d, h]) => (
                <tr key={d} className="border-b last:border-b-0">
                  <td className="px-3 py-1.5 capitalize w-24 text-gray-500">
                    {d}
                  </td>
                  <td className="px-3 py-1.5 text-gray-700">{h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Notes */}
      {b.notes && (
        <p className="mt-3 text-xs italic text-gray-500 leading-relaxed">
          {b.notes}
        </p>
      )}
    </article>
  )
}

function FAQ() {
  return (
    <section className="px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Barbers in Saltaire – quick answers
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-gray-800">
          <div>
            <h3 className="font-semibold">Do I need to book, or can I walk in?</h3>
            <p>
              Some shops are appointment-only and others are mainly walk-in.
              Our tags highlight which barbers take bookings, walk-ins or
              both, so you can avoid turning up and waiting unnecessarily.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How much should I expect to pay for a cut?</h3>
            <p>
              Prices change, but most local barbers sit in the
              £14–£22 range for a standard cut, with fades, skin fades and
              beard work extra. Always check the latest price list when you
              book.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Do Saltaire barbers take card and contactless?</h3>
            <p>
              Many do, but a few long-standing shops are still cash-first.
              The tags show where card is accepted; if in doubt, bring some
              cash just in case.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Are kids&apos; haircuts and beard trims available?</h3>
            <p>
              Yes – most shops offer kids&apos; cuts and beard services. Look for
              the <span className="font-medium">Kids</span> and
              <span className="font-medium"> Beard</span> tags, or check the
              booking page for age limits and pricing before you go.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TagRow({ b }: { b: Barber }) {
  const list = [
    ...(b.tags ?? []),
    ...(hasLateOpening(b.openingHours) ? ["late"] : []),
    ...(b.petFriendly ? [`pets:${b.petFriendly}`] : []),
  ]
  if (list.length === 0) return null
  return (
    <div className="flex flex-wrap gap-1.5">
      {list.map((t) => (
        <span
          key={t}
          className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

function Action({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200"
    >
      {label}
    </Link>
  )
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="col-span-full border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center bg-white">
      <p className="text-gray-600">
        No matches yet. Add real shops to the list or adjust your filters.
      </p>
      <button
        onClick={onReset}
        className="mt-3 inline-flex text-sm font-medium text-blue-600 hover:text-blue-700 underline underline-offset-4"
      >
        Clear search
      </button>
    </div>
  )
}

function hasLateOpening(hours?: Record<string, string>) {
  if (!hours) return false
  const days = Object.values(hours)
  return days.some((h) => {
    const match = /(\d{2}):(\d{2})\s*[–-]\s*(\d{2}):(\d{2})/u.exec(h)
    if (!match) return false
    const endHour = parseInt(match[3], 10)
    return endHour >= 18
  })
}

/* ------------------------------ Suggest box ------------------------------- */
function SuggestBox() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm px-6 py-8">
        <h2 className="text-xl font-semibold text-gray-900">Suggest a shop</h2>
        <p className="mt-2 text-sm text-gray-600">
          Know a barber we should add? DM{' '}
          <Link
            href="https://instagram.com/saltaireguide"
            target="_blank"
            className="underline underline-offset-4 text-blue-600 hover:text-blue-700"
          >
            @saltaireguide
          </Link>
          {' '}or email{' '}
          <Link
            href="mailto:hello@saltaireguide.uk?subject=Add%20a%20barber"
            className="underline underline-offset-4 text-blue-600 hover:text-blue-700"
          >
            hello@saltaireguide.uk
          </Link>
          .
        </p>
      </div>
    </section>
  )
}