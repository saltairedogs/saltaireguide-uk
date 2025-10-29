import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * Cultures Saltaire — warm vintage listing
 * - Compact hero with warm gradient overlay
 * - Category chips, dashed dividers, serif-ish vibe via weights/spacing
 * - Denser layout + masonry gallery (columns) to remove empty space
 * - Community-first copy; no sales
 */

export const metadata: Metadata = {
  title: "Cultures Saltaire — Deli & Draught House | Saltaire Guide",
  description:
    "Independent deli & draught house on Victoria Road. Wine, beer, coffee, cheese & ferments — easy Saltaire vibes.",
  alternates: { canonical: "/culturessaltaire" },
  openGraph: {
    title: "Cultures Saltaire — Deli & Draught House",
    description:
      "Independent deli & draught house in Saltaire. Wine, beer, coffee, cheese & ferments.",
    images: ["/culturessaltaire/cultures-exterior.jpg"],
    type: "article",
  },
};

// ---- Data -------------------------------------------------------------------

const biz = {
  slug: "culturessaltaire",
  name: "Cultures Saltaire",
  claimed: false,
  tagline: "Deli & Draught House",
  shortDesc:
    "Fermentation-forward: wine, beer, coffee, cheese & good things for the table. Friendly corner spot on Victoria Road.",
  longDesc:
    "A cosy independent pouring local draught and rotating wines by the glass, with bakes, cheeses and ferments to graze in or take home. It’s the kind of place you pop in for a glass and end up staying for one more.",
  categories: ["Deli", "Bar", "Wine & Beer", "Coffee"],
  address: "79 Victoria Rd, Saltaire, Shipley BD18 3JS",
  postcode: "BD18 3JS",
  phone: "07711964854",
  instagram: "culturessaltaire",
  opening: "See Instagram for the latest hours",
  priceRange: "££",
  photos: [
    "/culturessaltaire/cultures-exterior.jpg",       // hero
    "/culturessaltaire/cultures-pastry.jpg",
    "/culturessaltaire/cultures-bakes-overhead.jpg",
    "/culturessaltaire/cultures-coffee-menu.jpg",
  ],
  whatToTry: [
    "Beer & cheese pairing flight",
    "A glass from the rotating wine list",
    "Something from the deli counter to take home",
  ],
  ambience: ["Cosy", "Neighbourhood", "Counter service", "Sit-in & take-away"],
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
            alt="Cultures Saltaire — corner exterior on Victoria Road"
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

      {/* MAIN CONTENT — denser grid, vintage dividers */}
      <section className="px-4 py-6 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {/* Left (content) */}
          <div className="md:col-span-2 space-y-5">
            <Card className="p-5">
              <h2 className="mb-2 text-lg font-semibold">About</h2>
              <p className="mb-2 text-[15px] leading-relaxed text-stone-800">{biz.shortDesc}</p>
              <p className="text-[15px] leading-relaxed text-stone-800">{biz.longDesc}</p>

              {/* dashed divider */}
              <div className="my-4 h-px w-full border-t border-dashed border-stone-300/80" />

              {/* ambience chips */}
              {biz.ambience?.length ? (
                <div className="flex flex-wrap gap-2">
                  {biz.ambience.map((a) => (
                    <Chip key={a}>{a}</Chip>
                  ))}
                </div>
              ) : null}
            </Card>

            {/* Two-up cards: What to try + Local notes */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Card>
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-stone-700">
                  What to try
                </h3>
                <ul className="mt-1 list-disc pl-5 text-[14px] text-stone-800">
                  {biz.whatToTry.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card>

              <Card>
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-stone-700">
                  Local notes
                </h3>
                <ul className="mt-1 space-y-1 text-[14px] text-stone-800">
                  <li>🍷 Window seats are perfect for people-watching on Victoria Road.</li>
                  <li>🧀 Ask about pairings — they love matching cheese to pours.</li>
                  <li>☕ Morning coffee & a warm bake is a solid shout.</li>
                </ul>
              </Card>
            </div>

            {/* Masonry Gallery — less whitespace */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Gallery</h3>
              <div className="columns-2 gap-3 md:columns-3 [column-fill:_balance]">
                {biz.photos.map((src, i) => (
                  <div key={src + i} className="mb-3 break-inside-avoid overflow-hidden rounded-xl">
                    <Image
                      src={src}
                      alt={
                        i === 0
                          ? "Corner exterior"
                          : i === 1
                          ? "Pastry at the counter"
                          : i === 2
                          ? "Bakes & coffee overhead"
                          : "Coffee, menu and bakes"
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
                  Spot an update (hours, menu, photos)? Help keep local info tidy.
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

          {/* Right (details) */}
          <div className="md:col-span-1 space-y-4">
            <Card>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-700">
                Details
              </h3>
              <ul className="m-0 list-none space-y-2 text-[14px]">
                <li>
                  <span className="block text-stone-500">Address</span>
                  <span className="font-medium text-stone-900">{biz.address}</span>
                </li>
                <li>
                  <span className="block text-stone-500">Opening</span>
                  <span className="font-medium text-stone-900">{biz.opening}</span>
                </li>
                <li>
                  <span className="block text-stone-500">Price</span>
                  <span className="font-medium text-stone-900">{biz.priceRange}</span>
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

              <div className="mt-3 flex flex-col gap-2">
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
              </div>
            </Card>

            <Card>
              {biz.claimed ? (
                <p className="m-0 text-[12px] text-stone-600">
                  ✅ Owner-verified • {biz.lastVerified}
                </p>
              ) : (
                <p className="m-0 text-[12px] text-stone-500">
                  Independent listing by Saltaire Guide. We try to keep details current.
                </p>
              )}
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
