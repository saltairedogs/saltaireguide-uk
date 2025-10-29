"use client"

/*
 * This page renders a living directory of gyms and fitness studios in the
 * Shipley/Saltaire area.  It follows the same refined design language as
 * our barbers page, with a soft gradient backdrop, card‑style containers
 * and intuitive search & filter controls.  The component lives entirely
 * on the client because it makes use of React hooks for stateful search
 * and filtering.  To set per‑page metadata (title, description, open
 * graph tags) create a parent `layout.tsx` file as a server component.
 */

import Link from "next/link"
import { useMemo, useState } from "react"

// Define the shape of each gym record.  Additional fields may be added as
// needed—for example, future versions might include a `rating` property
// separate from the `notes` summary.  For now, ratings and review counts
// live in the `notes` field to keep the card layout simple.
type Gym = {
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
  openingHours?: Record<string, string>
  notes?: string
  status?: "open" | "closed" | "unknown"
}

/* -------------------------------------------------------------------------- */
/* Gym data                                                                   */
/*                                                                            */
/* This array lists our recommended gyms for Saltaire residents. We have       */
/* deliberately excluded several local facilities due to a high volume of     */
/* negative feedback from members about hygiene, maintenance and unfair        */
/* membership practices. Instead, we highlight high‑quality alternatives like  */
/* Nuffield Health Shipley and PureGym in Leeds. Each record summarises       */
/* facilities, contact details and notable review information in the `notes`   */
/* field.                                                                     */
/* -------------------------------------------------------------------------- */
const GYMS: Gym[] = [
  {
    name: "Nuffield Health Shipley Gym",
    slug: "nuffield-health-shipley",
    shortDescription:
      "Premium health club featuring modern equipment, a 25 m pool, sauna, steam room and varied classes.",
    addressLine1: "2 Fred Atkinson Way, Otley Road",
    city: "Shipley",
    postcode: "BD17 7HE",
    phone: "+44 1274 532227",
    instagram: undefined,
    website: "https://www.nuffieldhealth.com/gyms/shipley",
    googleMaps: "https://maps.google.com/?q=BD17+7HE",
    tags: ["swim", "sauna/steam", "classes", "personal training", "premium"],
    openingHours: {
      mon: "06:30–22:00",
      tue: "06:30–22:00",
      wed: "06:30–22:00",
      thu: "06:30–22:00",
      fri: "06:30–20:00",
      sat: "08:00–18:00",
      sun: "08:00–18:00",
    },
    notes:
      "Rated 4.8/5 from 144 reviews on Hussle【700562639679791†L12-L13】. Facilities include cardio and resistance machines, a 25 m pool, sauna, steam room and spin studio【700562639679791†L156-L167】. Memberships range from flexible £85/month rolling contracts to around £34/month with a 12‑month commitment【791112101898071†L156-L176】.",
    status: "open",
  },
  {
    name: "PureGym Leeds City Centre South",
    slug: "puregym-leeds-south",
    shortDescription:
      "Good‑value 24/7 gym offering 220+ pieces of kit, over 50 free classes and flexible no‑contract memberships.",
    addressLine1: "4 Cloth Hall Street",
    city: "Leeds",
    postcode: "LS1 2HD",
    phone: undefined,
    instagram: undefined,
    website: "https://www.puregym.com/gyms/leeds-city-centre-south/",
    googleMaps: "https://maps.google.com/?q=LS1+2HD",
    tags: ["24/7", "classes", "personal training", "value"],
    openingHours: {
      mon: "Open 24 Hours",
      tue: "Open 24 Hours",
      wed: "Open 24 Hours",
      thu: "Open 24 Hours",
      fri: "Open 24 Hours",
      sat: "Open 24 Hours",
      sun: "Open 24 Hours",
    },
    notes:
      "No‑contract memberships from around £17.99/month plus a £10 joining fee【926399256670905†L266-L274】【926399256670905†L349-L357】. Open 24/7 with over 220 pieces of kit and more than 50 free classes each week【926399256670905†L276-L314】. Located a five‑minute walk from Leeds train station【926399256670905†L315-L316】.",
    status: "open",
  },
]

/* -------------------------------------------------------------------------- */
/* Main page component                                                        */
/* -------------------------------------------------------------------------- */
export default function GymsPage() {
  return (
    // Apply a subtle gradient to the page background.  Using a light gray
    // palette improves contrast and makes the directory feel modern and clean.
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-6">
      <Hero />
      {/* Warning about local gyms with persistent negative feedback */}
      <WarningBox />
      {/* Suggest exploring alternatives outside Saltaire */}
      <ExternalNote />
      <Directory gyms={GYMS} />
      <SuggestBox />
    </main>
  )
}

/* --------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    // Hero section: wrapped in a card‑like container with rounded corners and a subtle
    // shadow.  This isolates the header from the rest of the content and gives the
    // page a sense of hierarchy.
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-6 py-10 sm:py-12 lg:py-14 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Gyms &amp; Fitness in Saltaire
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          A living list of local gyms and fitness studios. If we’re missing a facility, scroll down and tap
          <span className="font-medium"> “Suggest a gym”.</span>
        </p>
      </div>
    </section>
  )
}

/* ------------------------------- Directory -------------------------------- */
function Directory({ gyms }: { gyms: Gym[] }) {
  const [query, setQuery] = useState("")
  const [activeTags, setActiveTags] = useState<string[]>([])

  // Define available filters.  The values correspond to tags in the data above.
  const filters: { label: string; value: string }[] = [
    { label: "24/7", value: "24/7" },
    { label: "Classes", value: "classes" },
    { label: "Personal Training", value: "personal training" },
    { label: "Swim", value: "swim" },
    { label: "Sauna/Steam", value: "sauna/steam" },
    { label: "Premium", value: "premium" },
    { label: "Value", value: "value" },
  ]

  // Compute a filtered list based on search query and active tags.  The
  // `useMemo` hook avoids expensive recomputation on every render.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return (gyms ?? []).filter((g) => {
      // Search against name, description and address fields
      const qMatch =
        !q ||
        [g.name, g.shortDescription, g.addressLine1, g.postcode]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q)

      // Tag filtering: match if no tags selected or if any gym tag is in the
      // active tag list.
      const tagsMatch =
        activeTags.length === 0 ||
        (g.tags ?? []).some((t) => activeTags.includes(t.toLowerCase()))

      return qMatch && tagsMatch
    })
  }, [query, activeTags, gyms])

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
              placeholder="Search gyms, amenities, postcode…"
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
          {filtered.map((g) => (
            <GymCard key={g.slug} g={g} />
          ))}
          {filtered.length === 0 && <EmptyState onReset={() => setQuery("")} />}
        </div>
      </div>
    </section>
  )
}

function GymCard({ g }: { g: Gym }) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md transition-shadow p-5 flex flex-col h-full">
      {/* Header: name and status */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {g.name}
        </h3>
        <span
          className={[
            "uppercase tracking-wide text-xs font-medium px-2 py-0.5 rounded-full",
            g.status === "open"
              ? "bg-green-100 text-green-800"
              : g.status === "closed"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800",
          ].join(" ")}
        >
          {g.status ?? "unknown"}
        </span>
      </div>

      {/* Description */}
      {g.shortDescription && (
        <p className="mt-1 text-sm text-gray-700">{g.shortDescription}</p>
      )}

      {/* Address and tags */}
      <div className="mt-3 text-sm space-y-1">
        {g.addressLine1 && (
          <p className="text-gray-600">
            {g.addressLine1}
            {g.addressLine2 ? `, ${g.addressLine2}` : ""}
            {g.city ? `, ${g.city}` : ""} {g.postcode ?? ""}
          </p>
        )}
        <TagRow g={g} />
      </div>

      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-2">
        {g.phone && <Action href={`tel:${g.phone}`} label="Call" />}
        {g.instagram && <Action href={g.instagram} label="Instagram" />}
        {g.website && <Action href={g.website} label="Website" />}
        {g.googleMaps && <Action href={g.googleMaps} label="Maps" />}
      </div>

      {/* Hours */}
      {g.openingHours && (
        <div className="mt-4 rounded-md bg-gray-50 border border-gray-200 overflow-hidden text-xs">
          <table className="w-full">
            <tbody>
              {Object.entries(g.openingHours).map(([d, h]) => (
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
      {g.notes && (
        <p className="mt-3 text-xs italic text-gray-500 leading-relaxed">
          {g.notes}
        </p>
      )}
    </article>
  )
}

function TagRow({ g }: { g: Gym }) {
  const list = g.tags ?? []
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
    <div className="col-span-full rounded-2xl border border-gray-200 bg-white p-8 text-center shadow">
      <p className="text-gray-700">
        No matches yet. Add real gyms to the list or adjust your filters.
      </p>
      <button
        onClick={onReset}
        className="mt-3 inline-flex text-sm underline underline-offset-4 text-blue-600"
      >
        Clear search
      </button>
    </div>
  )
}

/* ------------------------------ Warning box ------------------------------- */
/**
 * Displays a cautionary note about local gyms that have received poor
 * feedback.  It summarises specific issues reported on public review
 * platforms—such as hygiene problems, broken equipment and poor value for
 * money—and reminds readers that the warning is based on reviews and
 * personal experience rather than defamation.  Adjust the copy if new
 * insights emerge.
 */
function WarningBox() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto bg-yellow-50 border border-yellow-200 rounded-2xl shadow-sm p-6 space-y-3">
        <h2 className="text-lg font-semibold text-yellow-800">Community warning</h2>
        <p className="text-sm text-yellow-700">
          We’ve received a number of negative reviews for some local gyms —
          particularly Energy&nbsp;Mill Gym and a few others — citing hygiene issues,
          poorly maintained equipment and questionable value. Reports mention
          dirty showers, broken lockers and outdated equipment【840964543191871†L94-L104】
          leading to frustration about value received versus cost paid【840964543191871†L144-L149】.
          Some members also warn that memberships can be expensive relative to the basic facilities and
          difficult to cancel. Please do your own research before committing.
          This warning reflects community feedback and personal experiences; it is not
          intended as misinformation or defamation.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------ External note ----------------------------- */
/**
 * Provides context about alternative gym options outside the immediate area.
 * It highlights that Leeds city centre is reachable by train in under 20
 * minutes and recommends Nuffield Health for those seeking premium
 * facilities or PureGym for affordable, no‑contract memberships.  The copy
 * includes citations for membership pricing and travel time.
 */
function ExternalNote() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-200 rounded-2xl shadow-sm p-6 space-y-3">
        <h2 className="text-lg font-semibold text-blue-800">Looking beyond Saltaire</h2>
        <p className="text-sm text-blue-700">
          If you’ve got a higher budget, Nuffield Health Shipley offers a
          full‑service health club with a pool, spa and expert trainers. For
          affordable and flexible fitness, PureGym Leeds City Centre South is open
          24/7 with hundreds of pieces of kit and free classes. Memberships start
          at roughly £17.99 per month plus a joining fee【926399256670905†L266-L274】 and there’s no long‑term contract【926399256670905†L276-L314】.
          Leeds is just a ~17‑minute train ride from Saltaire with direct
          services departing hourly【199780391187438†L60-L63】, giving you access to many more gyms
          and studios. Take the train and explore options that better suit your
          needs.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------ Suggest box ------------------------------- */
function SuggestBox() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Suggest a gym or group</h2>
        <p className="text-sm text-gray-600">
          Are you a personal trainer or run a local fitness class, run club or
          wellness group? We’d love to include you. DM us on{' '}
          <Link
            href="https://instagram.com/saltaireguide"
            target="_blank"
            className="underline underline-offset-4"
          >
            @saltaireguide
          </Link>{' '}
          or email{' '}
          <Link
            href="mailto:hello@saltaireguide.uk?subject=Add%20a%20gym%20or%20fitness%20group"
            className="underline underline-offset-4"
          >
            hello@saltaireguide.uk
          </Link>
          .
        </p>
      </div>
    </section>
  )
}