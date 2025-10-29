"use client"

/*
 * Saltaire Guide — Cafes Directory
 * Uses hooks, so this is a client component. SEO metadata should be added
 * in a server context (e.g., layout.tsx or a server route-level file).
 */

import Link from "next/link"
import { useMemo, useState } from "react"

// Define the shape of our cafe records.
type Cafe = {
  name: string
  slug: string
  shortDescription?: string
  addressLine1?: string
  city?: string
  postcode?: string
  phone?: string
  instagram?: string
  website?: string
  googleMaps?: string
  tags?: string[]
  openingHours?: Record<string, string>
  notes?: string
  status?: "open" | "closed" | "unknown"
}

/*
 * Cafe data
 * (sources referenced in notes)
 */
const CAFES: Cafe[] = [
  {
    name: "Massarella’s Cafe Bar & Fine Art",
    slug: "massarellas",
    shortDescription:
      "Licensed cafe and art gallery offering sandwiches, paninis, cakes, flapjacks and barista-quality coffee in an art-filled space.",
    addressLine1: "14 Victoria Road",
    city: "Saltaire",
    postcode: "BD18 3LQ",
    phone: "+44 1274 580129",
    website: undefined,
    googleMaps: "https://maps.google.com/?q=14+Victoria+Road+BD18+3LQ",
    tags: ["licensed", "art", "sandwiches", "cakes"],
    openingHours: {
      mon: "10:00–17:30",
      tue: "10:00–17:00",
      wed: "10:00–17:00",
      thu: "10:00–17:00",
      fri: "10:00–17:00",
      sat: "10:00–17:30",
      sun: "10:00–17:30",
    },
    notes:
      "Art-filled licensed cafe with sandwiches, paninis, cakes and barista-quality coffee; features artwork from local and visiting artists:contentReference[oaicite:0]{index=0}. Opening hours and phone: Mon 10:00–17:30, Tue 10:00–17:00, Wed 10:00–17:00, Thu 10:00–17:00, Fri 10:00–17:00, Sat 10:00–17:30, Sun 10:00–17:30; phone 01274 580129:contentReference[oaicite:1]{index=1}.",
    status: "open",
  },
  {
    name: "The Olive Cafe",
    slug: "olive-cafe",
    shortDescription:
      "Mediterranean-inspired cafe serving breakfast, brunch and lunch; great value with vegetarian and vegan options and a license for wine and beer.",
    addressLine1: "63 Bingley Road",
    city: "Saltaire",
    postcode: "BD18 4SB",
    phone: "+44 1274 241567",
    website: undefined,
    googleMaps: "https://maps.google.com/?q=63+Bingley+Road+BD18+4SB",
    tags: ["Mediterranean", "licensed", "vegetarian", "vegan", "brunch"],
    openingHours: {
      mon: "09:00–17:00",
      tue: "09:00–17:00",
      wed: "09:00–17:00",
      thu: "09:00–17:00",
      fri: "09:00–17:00",
      sat: "09:00–17:00",
      sun: "09:00–17:00",
    },
    notes:
      "Welcoming team with Mediterranean menu; excellent value with vegetarian and vegan options and licensed for wine/beer:contentReference[oaicite:2]{index=2}. Address 63 Bingley Road BD18 4SB, phone +44 1274 241567; open daily 9:00–17:00:contentReference[oaicite:3]{index=3}.",
    status: "open",
  },
  {
    name: "Salts Diner",
    slug: "salts-diner",
    shortDescription:
      "Spacious cafe inside Salts Mill where you can enjoy hot meals, daily specials and coffee surrounded by David Hockney art.",
    addressLine1: "2nd Floor, Salts Mill, Victoria Road",
    city: "Saltaire",
    postcode: "BD18 3LA",
    phone: "+44 1274 531163",
    website: undefined,
    googleMaps: "https://maps.google.com/?q=Salts+Diner+BD18+3LA",
    tags: ["art", "hot meals", "specials", "historic"],
    openingHours: {
      wed: "10:00–16:30",
      thu: "10:00–16:30",
      fri: "10:00–16:30",
      sat: "09:30–16:30",
      sun: "09:30–16:30",
    },
    notes:
      "Located inside Salts Mill, this spacious cafe serves a comprehensive menu of hot meals and daily specials; enjoy the artwork of David Hockney while you dine:contentReference[oaicite:4]{index=4}. Call 01274 531163; open Wed–Fri 10:00–16:30, Sat–Sun 9:30–16:30:contentReference[oaicite:5]{index=5}.",
    status: "open",
  },
  {
    name: "Buonissimo Delicatessen",
    slug: "buonissimo-deli",
    shortDescription:
      "Authentic Italian deli offering hot and cold sandwiches, cakes, pasta and freshly baked focaccia in a friendly, warm atmosphere.",
    addressLine1: "59 Bingley Road",
    city: "Saltaire",
    postcode: "BD18 4SB",
    phone: "+44 1274 581381",
    website: undefined,
    googleMaps: "https://maps.google.com/?q=59+Bingley+Road+BD18+4SB",
    tags: ["Italian", "deli", "sandwiches", "focaccia"],
    openingHours: undefined,
    notes:
      "Italian-inspired deli serving sandwiches, cakes, pasta and focaccia; warm atmosphere and friendly service:contentReference[oaicite:6]{index=6}. Address 59 Bingley Road BD18 4SB, phone +44 1274 581381:contentReference[oaicite:7]{index=7}.",
    status: "open",
  },
  {
    name: "Tambourine Coffee",
    slug: "tambourine-coffee",
    shortDescription:
      "Independent specialty coffee shop with exceptional locally sourced coffee, a community feel and a menu including hummus on toast, bagels and toasties.",
    addressLine1: "38 Bingley Road",
    city: "Saltaire",
    postcode: "BD18 4RU",
    phone: "+44 1274 945870",
    website: "https://tambourinecoffee.co.uk",
    googleMaps: "https://maps.google.com/?q=38+Bingley+Road+BD18+4RU",
    tags: ["coffee", "community", "bagels", "toasties", "specialty"],
    openingHours: {
      mon: "08:00–16:00",
      tue: "08:00–16:00",
      wed: "08:00–16:00",
      thu: "08:00–16:00",
      fri: "08:00–16:00",
      sat: "08:00–16:00",
      sun: "09:00–16:00",
    },
    notes:
      "Newer addition to Saltaire’s cafe scene; known for exceptional coffee and a friendly community feel. Menu highlights include hummus on toast, bagels and toasties:contentReference[oaicite:8]{index=8}. Address 38 Bingley Road BD18 4RU, phone +44 1274 945870, website tambourinecoffee.co.uk:contentReference[oaicite:9]{index=9}.",
    status: "open",
  },
]

/* Main page component */
export default function CafesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <Hero />
      <Directory cafes={CAFES} />
      <SuggestBox />
    </main>
  )
}

/* --------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14 border-b">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Cafes in Saltaire
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Discover artisan coffee shops, Mediterranean kitchens, Italian delis and
            more. Our curated list showcases independent cafes with quality
            produce, unique settings and a warm Saltaire welcome.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------- Directory ------------------------------- */
function Directory({ cafes }: { cafes: Cafe[] }) {
  const [query, setQuery] = useState("")
  const [activeTags, setActiveTags] = useState<string[]>([])  // <- fixed line

  const filters: { label: string; value: string }[] = [
    { label: "Licensed", value: "licensed" },
    { label: "Mediterranean", value: "Mediterranean" },
    { label: "Vegetarian/Vegan", value: "vegetarian" },
    { label: "Italian", value: "Italian" },
    { label: "Coffee", value: "coffee" },
    { label: "Art gallery", value: "art" },
    { label: "Deli", value: "deli" },
  ]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return (cafes ?? []).filter((c) => {
      const qMatch =
        !q ||
        [c.name, c.shortDescription, c.addressLine1, c.postcode]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q)

      const tagsMatch =
        activeTags.length === 0 ||
        (c.tags ?? []).some((t) =>
          activeTags.some((f) => t.toLowerCase() === f.toLowerCase())
        )
      return qMatch && tagsMatch
    })
  }, [query, activeTags, cafes])

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cafes, dishes, postcode…"
            className="w-full sm:w-96 rounded-xl border px-4 py-2.5 outline-none focus:ring-2 focus:ring-black/10"
          />
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
                    "rounded-full border px-3 py-1.5 text-sm",
                    active
                      ? "bg-black text-white border-black"
                      : "bg-white hover:bg-gray-50",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              )
            })}
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="text-sm underline underline-offset-4"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c) => (
            <CafeCard key={c.slug} c={c} />
          ))}
          {filtered.length === 0 && <EmptyState onReset={() => setQuery("")} />}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ Cafe card ------------------------------- */
function CafeCard({ c }: { c: Cafe }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-tight">{c.name}</h3>
        {c.status && (
          <span
            className={[
              "text-xs rounded-full px-2 py-1 border",
              c.status === "open"
                ? "bg-green-50 border-green-200 text-green-700"
                : c.status === "closed"
                ? "bg-gray-50 border-gray-200 text-gray-600"
                : "bg-amber-50 border-amber-200 text-amber-700",
            ].join(" ")}
          >
            {c.status ?? "unknown"}
          </span>
        )}
      </div>
      {c.shortDescription && (
        <p className="mt-1 text-sm text-gray-700">{c.shortDescription}</p>
      )}
      <div className="mt-3 text-sm space-y-1">
        {c.addressLine1 && (
          <p className="text-gray-700">
            {c.addressLine1}
            {c.city ? `, ${c.city}` : ""} {c.postcode ?? ""}
          </p>
        )}
        <TagRow c={c} />
      </div>
      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-2">
        {c.phone && <Action href={`tel:${c.phone}`} label="Call" />}
        {c.instagram && <Action href={c.instagram} label="Instagram" />}
        {c.website && <Action href={c.website} label="Website" />}
        {c.googleMaps && <Action href={c.googleMaps} label="Maps" />}
      </div>
      {/* Hours */}
      {c.openingHours && (
        <div className="mt-4 rounded-xl bg-gray-50 border text-xs">
          <table className="w-full">
            <tbody>
              {Object.entries(c.openingHours).map(([d, h]) => (
                <tr key={d} className="border-b last:border-b-0">
                  <td className="px-3 py-1.5 capitalize w-24 text-gray-600">
                    {d}
                  </td>
                  <td className="px-3 py-1.5">{h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {c.notes && <p className="mt-3 text-xs text-gray-500">{c.notes}</p>}
    </article>
  )
}

function TagRow({ c }: { c: Cafe }) {
  const list = [...(c.tags ?? [])]
  if (list.length === 0) return null
  return (
    <div className="flex flex-wrap gap-1.5">
      {list.map((t) => (
        <span
          key={t}
          className="text-xs bg-gray-100 border border-gray-200 text-gray-700 px-2 py-0.5 rounded-full"
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
      className="text-sm px-3 py-1.5 rounded-full border hover:shadow-xs"
    >
      {label}
    </Link>
  )
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="col-span-full rounded-2xl border p-8 text-center">
      <p className="text-gray-700">
        No matches yet. Add real cafes to the list or adjust your filters.
      </p>
      <button
        onClick={onReset}
        className="mt-3 inline-flex text-sm underline underline-offset-4"
      >
        Clear
      </button>
    </div>
  )
}

/* ----------------------------- Suggest box ------------------------------- */
function SuggestBox() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <h2 className="text-xl font-semibold">Is your cafe missing?</h2>
          <p className="mt-2 text-gray-700">
            We’re always updating our list. If you know a great cafe we’ve missed or run
            one yourself, get in touch and we’ll add it.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <Link
              href="mailto:hello@saltaireguide.uk?subject=Add%20a%20cafe"
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm hover:shadow-sm"
            >
              Email hello@saltaireguide.uk
            </Link>
            <Link
              href="https://instagram.com/saltaireguide.uk"
              target="_blank"
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm hover:shadow-sm"
            >
              DM @saltaireguide
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
