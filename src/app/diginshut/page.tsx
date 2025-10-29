import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * Digin's Hut — warm vintage listing (no sticky nav, no salesy banners)
 * - Compact hero with warm overlay + title
 * - Category chips + dashed dividers
 * - Dense layout + masonry-style gallery to avoid empty space
 */

export const metadata: Metadata = {
  title: "Digin’s Hut — Smash Burgers, Donuts & Loaded Fries | Saltaire Guide",
  description:
    "Smash burgers, donuts and loaded fries on Victoria Road, Saltaire. Casual, indulgent and very local.",
  alternates: { canonical: "/diginshut" },
  openGraph: {
    title: "Digin’s Hut — Smash Burgers, Donuts & Loaded Fries",
    description:
      "Smash burgers, donuts and loaded fries on Victoria Road, Saltaire.",
    images: ["/diginshut/digins-hero-burger.jpg"],
    type: "article",
  },
};

// ---- Data -------------------------------------------------------------------

const biz = {
  slug: "diginshut",
  name: "Digin’s Hut",
  claimed: false,
  tagline: "Smash Burgers • Donuts • Loaded Fries",
  shortDesc:
    "Casual and indulgent street-food style from a small spot on Victoria Road. Big flavour, soft buns, and proper portions.",
  longDesc:
    "Think crispy-edged smash burgers, loaded fries and rotating donuts. It’s the kind of place you grab for a treat night or a walk-home box — friendly team, quick service, and a menu that pairs well with a cold drink.",
  categories: ["Street Food", "Burgers", "Donuts", "Fries"],
  address: "13 Victoria Rd, Saltaire, Shipley BD18 3LQ",
  postcode: "BD18 3LQ",
  phone: "", // add if you want to publish it later
  website: "", // e.g. Just Eat link if you want to show it
  instagram: "dig_ins_hut",
  opening: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "Closed" },
    { day: "Wednesday", hours: "12–8 pm" },
    { day: "Thursday", hours: "12–8 pm" },
    { day: "Friday", hours: "12–8 pm" },
    { day: "Saturday", hours: "12–8 pm" },
    { day: "Sunday", hours: "11 am–6 pm" },
  ],
  priceRange: "££",
  photos: [
    "/diginshut/digins-hero-burger.jpg", // hero
    "/diginshut/digins-box-meal.jpg",
    "/diginshut/digins-hours.png",
    // add more like "/diginshut/anything-else.jpg"
  ],
  highlights: [
    "Double smash with crispy edges",
    "Loaded fries with proper toppings",
    "Fresh donuts (check specials)",
  ],
  lastVerified: "2025-10-21",
};

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${biz.name} ${biz.postcode}`
)}`;

// ---- UI bits ---------------------------------------------------------------

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stone-300/80 bg-stone-50/80 px-3 py-1 text-[11px] font-medium text-stone-700 shadow-sm">
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-stone-300/80 bg-white/90 p-4 shadow-sm " + className
      }
    >
      {children}
    </div>
  );
}

// ---- Page -------------------------------------------------------------------

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl">
      {/* HERO — compact height, warm overlay */}
      <section className="relative">
        <div className="h-[36vh] min-h-[280px] w-full overflow-hidden rounded-b-[2rem]">
          <Image
            src={biz.photos[0]}
            alt="Digin’s Hut smash burger close-up"
            width={2400}
            height={1350}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-b-[2rem] bg-gradient-to-t from-[#f6efe6]/95 via-[#f6efe6]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <h1 className="mb-1 flex flex-wrap items-center gap-2 text-[28px] font-semibold text-stone-900 md:text-[32px]">
              {biz.name}
              {biz.claimed ? (
                <span className="text-[11px] rounded-full border border-green-200 bg-green-100 px-2 py-1 font-medium text-green-700">
                  ✅ Claimed
                </span>
              ) : (
                <span className="text-[11px] rounded-full border border-amber-200 bg-amber-100 px-2 py-1 font-medium text-amber-700">
                  Unclaimed
                </span>
              )}
            </h1>
            <p className="text-[14px] text-stone-700">{biz.tagline}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {biz.categories.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
              <Chip>{biz.priceRange}</Chip>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-4 py-6 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {/* Left column */}
          <div className="md:col-span-2 space-y-5">
            <Card className="p-5">
              <h2 className="mb-2 text-lg font-semibold">About</h2>
              <p className="mb-2 text-[15px] leading-relaxed text-stone-800">{biz.shortDesc}</p>
              <p className="text-[15px] leading-relaxed text-stone-800">{biz.longDesc}</p>

              <div className="my-4 h-px w-full border-t border-dashed border-stone-300/80" />

              <div className="flex flex-wrap gap-2">
                {biz.highlights.map((h) => (
                  <Chip key={h}>{h}</Chip>
                ))}
              </div>
            </Card>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card>
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-stone-700">
                  Opening hours
                </h3>
                <ul className="mt-1 space-y-1 text-[14px] text-stone-800">
                  {biz.opening.map((o) => (
                    <li key={o.day} className="flex items-center justify-between">
                      <span>{o.day}</span>
                      <span className="font-medium">{o.hours}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card>
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-stone-700">
                  Find them
                </h3>
                <ul className="m-0 list-none space-y-2 text-[14px]">
                  <li>
                    <span className="block text-stone-500">Address</span>
                    <span className="font-medium text-stone-900">{biz.address}</span>
                  </li>
                  {biz.phone && (
                    <li>
                      <span className="block text-stone-500">Phone</span>
                      <a href={`tel:${biz.phone}`} className="font-medium text-stone-900 underline">
                        {biz.phone}
                      </a>
                    </li>
                  )}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-3 py-2 text-[13px] font-medium hover:bg-stone-50"
                  >
                    Open in Google Maps
                  </a>
                  {biz.instagram && (
                    <a
                      href={`https://instagram.com/${biz.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-3 py-2 text-[13px] font-medium hover:bg-stone-50"
                    >
                      Instagram @{biz.instagram}
                    </a>
                  )}
                  {biz.website && (
                    <a
                      href={biz.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-3 py-2 text-[13px] font-medium hover:bg-stone-50"
                    >
                      Order / Menu
                    </a>
                  )}
                </div>
              </Card>
            </div>

            {/* Masonry Gallery */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Gallery</h3>
              <div className="columns-2 gap-3 md:columns-3 [column-fill:_balance]">
                {biz.photos.map((src, i) => (
                  <div key={src + i} className="mb-3 break-inside-avoid overflow-hidden rounded-xl">
                    <Image
                      src={src}
                      alt={
                        i === 0
                          ? "Smash burger close-up"
                          : i === 1
                          ? "Box meals with burgers, mac and donuts"
                          : "Opening hours"
                      }
                      width={1200}
                      height={900}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Suggest an update */}
            <Card className="p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="m-0 text-[13px] text-stone-700">
                  See anything to tweak (hours, menu link, photos)? Help keep local info tidy.
                </p>
                <Link
                  href="/contribute"
                  className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-3 py-2 text-[13px] font-medium hover:bg-stone-50"
                >
                  Suggest a quick fix
                </Link>
              </div>
            </Card>
          </div>

          {/* Right column */}
          <div className="md:col-span-1 space-y-4">
            <Card>
              <p className="m-0 text-[12px] text-stone-500">
                Independent listing by Saltaire Guide. We try to keep details current.
              </p>
              {biz.lastVerified && (
                <p className="m-0 mt-2 text-[12px] text-stone-400">Last checked: {biz.lastVerified}</p>
              )}
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
