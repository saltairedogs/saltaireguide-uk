import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * Don't Tell Titus — warm vintage listing
 * - Compact hero with warm overlay + title
 * - Category chips + dashed dividers
 * - Dense layout, masonry gallery, no sticky rail or salesy banners
 */

export const metadata: Metadata = {
  title: "Don't Tell Titus — Bar & Kitchen | Saltaire Guide",
  description:
    "Modern bar & kitchen on Victoria Road, Saltaire. Cocktails, wine, small plates and mains in a relaxed, characterful space.",
  alternates: { canonical: "/donttelltitus" },
  openGraph: {
    title: "Don't Tell Titus — Bar & Kitchen",
    description:
      "Cocktails, wine, small plates and mains in a relaxed, characterful Saltaire setting.",
    images: ["/donttelltitus/donttelltitus-exterior.jpg"],
    type: "article",
  },
};

// ---- Data -------------------------------------------------------------------

const biz = {
  slug: "donttelltitus",
  name: "Don't Tell Titus",
  claimed: false,
  tagline: "Bar & Kitchen",
  shortDesc:
    "Neighbourhood bar and kitchen with cocktails, wine and a menu that swings from small plates to hearty mains.",
  longDesc:
    "Set on the corner of Victoria Road, Don't Tell Titus blends a classic bar feel with a comfy dining room. Expect well-made drinks, rotating specials and relaxed service — handy for date night, a catch-up, or a pre-gig bite.",
  categories: ["Bar", "Restaurant", "Cocktails", "Wine"],
  address: "6 Victoria Rd, Saltaire, Shipley BD18 3LA",
  postcode: "BD18 3LA",
  phone: "01274595633",
  website: "https://www.donttelltitus.co.uk/",
  instagram: "", // add if you want to link it later
  openingNote: "Check website/Instagram for current hours",
  priceRange: "£££",
  photos: [
    "/donttelltitus/donttelltitus-exterior.jpg", // hero
    "/donttelltitus/donttelltitus-dishes.jpg",
    "/donttelltitus/donttelltitus-chop.jpg",
  ],
  highlights: [
    "Classic & signature cocktails",
    "Comfort dishes & small plates",
    "Good for date night & groups",
  ],
  ambience: ["Classic", "Cosy", "Date-night", "Groups welcome"],
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
      {/* HERO — compact, warm overlay */}
      <section className="relative">
        <div className="h-[36vh] min-h-[280px] w-full overflow-hidden rounded-b-[2rem]">
          <Image
            src={biz.photos[0]}
            alt="Don't Tell Titus exterior on Victoria Road"
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
                  Good to know
                </h3>
                <ul className="mt-1 space-y-1 text-[14px] text-stone-800">
                  <li>🍸 Classic & house cocktails</li>
                  <li>🍽️ Small plates & mains; check specials</li>
                  <li>🗓️ {biz.openingNote}</li>
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
                  <li>
                    <span className="block text-stone-500">Phone</span>
                    <a href={`tel:${biz.phone}`} className="font-medium text-stone-900 underline">
                      {biz.phone}
                    </a>
                  </li>
                  {biz.website && (
                    <li>
                      <span className="block text-stone-500">Website</span>
                      <a
                        href={biz.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-stone-900 underline"
                      >
                        donttelltitus.co.uk
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
                          ? "Exterior"
                          : i === 1
                          ? "Plates from the kitchen"
                          : "Chop, chips and a classic table setup"
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
