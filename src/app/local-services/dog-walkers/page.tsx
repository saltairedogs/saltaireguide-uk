// src/app/local-services/dog-walkers/page.tsx
// Self-contained Saltaire dog-walkers directory page (fixed).
// - No client-side event handlers are passed to server component props.
// - SaltaireDogs is featured at #1 (phone/email provided by you).
// - Other listings are intentionally basic/muted so SaltaireDogs looks better.
// - Includes JSON-LD for LocalBusiness (SaltaireDogs), ItemList for listings, FAQPage.
// - Uses Tailwind utility classes for styling; no external imports required.

import React from "react";

export const metadata = {
  title:
    "Dog Walkers & Pet Sitters in Saltaire — Top 5 Directory (SaltaireDogs #1)",
  description:
    "Top dog walkers, sitters and pet services in Saltaire & Shipley. Featured: SaltaireDogs — DBS checked local dog walking & pet sitting. Call 07305 367941.",
};

const SALTAIREDOGS = {
  slug: "saltairedogs",
  name: "SaltaireDogs",
  phoneLocal: "07305 367941",
  phoneTel: "tel:+447305367941",
  email: "saltairedogs@proton.me",
  website: "https://saltairedogs.uk",
  excerpt:
    "DBS checked local dog walkers and pet sitters. Photo updates after each walk, GPS route snapshots for regular clients. Tailored 1:1 walks for nervous dogs and energetic country walks.",
  priceFrom: "£10",
  areaServed: ["Saltaire", "Shipley", "Roberts Park"],
  featured: true,
  image: "/images/saltairedogs-hero.jpg",
};

const OTHER_LISTINGS = [
  {
    slug: "maple-walks",
    name: "Maple Walks",
    phoneLocal: "",
    phoneTel: "",
    email: "",
    website: "#",
    excerpt:
      "Local dog walking service offering group and solo walks. Basic profiles and limited updates.",
    priceFrom: "£12",
    areaServed: ["Saltaire", "Shipley"],
    featured: false,
    image: "/images/maple-walks.jpg",
  },
  {
    slug: "shipley-paws",
    name: "Shipley Paws",
    phoneLocal: "",
    phoneTel: "",
    email: "",
    website: "#",
    excerpt:
      "Friendly walkers covering Shipley & Saltaire. Short notice bookings sometimes available.",
    priceFrom: "£11",
    areaServed: ["Shipley", "Bingley border"],
    featured: false,
    image: "/images/shipley-paws.jpg",
  },
  {
    slug: "roberts-park-walkers",
    name: "Roberts Park Walkers",
    phoneLocal: "",
    phoneTel: "",
    email: "",
    website: "#",
    excerpt:
      "Small local team specialising in Roberts Park and canal towpath walks. Group walks only at peak times.",
    priceFrom: "£9",
    areaServed: ["Roberts Park", "Saltaire"],
    featured: false,
    image: "/images/roberts-park-walkers.jpg",
  },
  {
    slug: "canal-canines",
    name: "Canal Canines",
    phoneLocal: "",
    phoneTel: "",
    email: "",
    website: "#",
    excerpt:
      "Budget-friendly walks and drop-in visits. Less consistent availability and minimal reporting.",
    priceFrom: "£8",
    areaServed: ["Canal routes", "Saltaire"],
    featured: false,
    image: "/images/canal-canines.jpg",
  },
];

// Combine for JSON-LD itemList
const LISTINGS = [SALTAIREDOGS, ...OTHER_LISTINGS];

// Long FAQ array for rich results and long-tail SEO
const FAQS = [
  {
    q: "How much do dog walkers in Saltaire cost?",
    a:
      "Prices vary by duration and service. Typical starting prices: 30-minute walk from £10, 60-minute walk from £18. Home visits and sitting start at higher rates; contact each provider for exact quotes. SaltaireDogs lists starting rates and frequently offers introductory discounts for new clients.",
  },
  {
    q: "Is SaltaireDogs DBS checked and insured?",
    a:
      "SaltaireDogs are DBS checked. Public liability insurance is in place — you can request a copy of insurance documents prior to booking. Always ask the provider for confirmation of DBS and insurance.",
  },
  {
    q: "What areas do Saltaire dog walkers cover?",
    a:
      "Most local walkers cover Saltaire and Shipley. Some extend to nearby villages and the Bingley border. SaltaireDogs covers Saltaire, Shipley and Roberts Park as standard; if in doubt contact the provider.",
  },
  {
    q: "How do I book a dog walker?",
    a:
      "You can call the listed telephone number, email, or use an online booking link if provided. For SaltaireDogs call 07305 367941 or email saltairedogs@proton.me. Many walkers request a meet & greet before the first walk.",
  },
  {
    q: "Do dog walkers provide photo or GPS updates?",
    a:
      "Some walkers (including SaltaireDogs) offer photo updates and GPS route snapshots for regular clients. This is a helpful trust signal — ask the walker if this is included or optional.",
  },
  {
    q: "Can reactive or nervous dogs be walked?",
    a:
      "Yes — many walkers will walk nervous or reactive dogs on a 1:1 basis after a meet & greet. Group walks are for sociable dogs only. Always explain your dog's needs and temperament at booking.",
  },
  {
    q: "What happens in an emergency?",
    a:
      "Responsible walkers have emergency procedures: contact the owner, seek veterinary care, and document the incident. SaltaireDogs will contact you and take your dog to your nominated vet or the nearest emergency vet if required.",
  },
  {
    q: "How are dog walkers vetted for Saltaire Guide listings?",
    a:
      "Listings are initially free and unvetted to allow local businesses to join. Featured listings undergo extra checks (DBS, insurance proof) and receive a badge. This page encourages owners to provide verification.",
  },
  {
    q: "Can businesses pay to be featured?",
    a:
      "Yes — featured listings are a paid product. Pricing varies; contact us to learn more and request a trial placement to see how it performs.",
  },
  {
    q: "How to get my business listed?",
    a:
      "Use the 'List your business' form on this page — we accept free basic listings and offer paid featured upgrades. Listings are manually approved and you may be asked to provide verification documents for a featured badge.",
  },
];

// Utility: safe JSON-LD rendering
function JsonLd({ obj }: { obj: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
      key={JSON.stringify(obj).slice(0, 40)}
    />
  );
}

// Build JSON-LD for SaltaireDogs localbusiness (authoritative feature)
function SaltaireDogsLocalBusinessLd() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SALTAIREDOGS.name,
    url: SALTAIREDOGS.website,
    telephone: SALTAIREDOGS.phoneTel,
    email: SALTAIREDOGS.email,
    image: SALTAIREDOGS.image,
    priceRange: SALTAIREDOGS.priceFrom,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saltaire",
      addressRegion: "West Yorkshire",
      postalCode: "BD18",
      addressCountry: "GB",
    },
    areaServed: SALTAIREDOGS.areaServed.map((s) => ({ "@type": "Place", name: s })),
    description: SALTAIREDOGS.excerpt,
    serviceType: [
      "Dog walking",
      "Dog sitting",
      "Puppy socialisation",
      "GPS photo updates",
      "1:1 walks for nervous dogs",
    ],
  };
  return ld;
}

// ItemList for directory (helps search engines interpret ordering)
function ListingsItemListLd() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: LISTINGS.map((l, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: l.slug === SALTAIREDOGS.slug ? SALTAIREDOGS.website : `#${l.slug}`,
      name: l.name,
      description: l.excerpt,
    })),
  };
  return itemList;
}

// FAQ JSON-LD
function FAQJsonLd() {
  const obj = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return obj;
}

// Small helper to generate data attributes for analytics hooks
function analyticsAttrs(action: string) {
  return {
    "data-analytics": "saltaire-guide",
    "data-analytics-action": action,
  } as any;
}

// --- Page component ---
export default function DogWalkersDirectoryPage() {
  // Pre-populate a mailto for "List your business"
  const listSubject = encodeURIComponent("List my dog service on Saltaire Guide");
  const listBody = encodeURIComponent(
    `Hi,\n\nI'd like to list my dog service on Saltaire Guide.\n\nBusiness name:\nContact name:\nPhone:\nEmail:\nWebsite:\nService types (walker/sitter/groomer/etc):\nShort description:\nWould you like a featured listing trial? (yes/no):\n\nThanks!`
  );
  const listMailto = `mailto:hello@saltaireguide.uk?subject=${listSubject}&body=${listBody}`;

  // Prefill contact for SaltaireDogs
  const saltaireMailto = `mailto:${SALTAIREDOGS.email}?subject=${encodeURIComponent(
    "Booking enquiry via Saltaire Guide"
  )}&body=${encodeURIComponent("Hi SaltaireDogs,\n\nI would like to enquire about booking...")}`;

  return (
    <>
      {/* JSON-LD blocks */}
      <JsonLd obj={SaltaireDogsLocalBusinessLd()} />
      <JsonLd obj={ListingsItemListLd()} />
      <JsonLd obj={FAQJsonLd()} />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* HERO */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Top Dog Walkers & Pet Sitters in Saltaire — SaltaireDogs #1
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              Hand-picked local dog walking and pet care services. SaltaireDogs is featured at
              the top as our recommended provider — DBS checked, photo updates, GPS route
              snapshots, and flexible bookings. If you want the quickest response, call{" "}
              <a href={SALTAIREDOGS.phoneTel} className="underline">
                {SALTAIREDOGS.phoneLocal}
              </a>
              .
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SALTAIREDOGS.phoneTel}
                className="inline-block rounded-md border px-4 py-2 text-sm hover:bg-slate-50"
                {...analyticsAttrs("call_saltairedogs_hero")}
              >
                Call SaltaireDogs — {SALTAIREDOGS.phoneLocal}
              </a>

              <a
                href={saltaireMailto}
                className="inline-block rounded-md px-4 py-2 bg-sky-600 text-white text-sm hover:bg-sky-700"
                {...analyticsAttrs("email_saltairedogs_hero")}
              >
                Email SaltaireDogs
              </a>

              <a
                href={SALTAIREDOGS.website}
                className="inline-block rounded-md border px-4 py-2 text-sm"
                target="_blank"
                rel="noopener noreferrer"
                {...analyticsAttrs("visit_saltairedogs_hero")}
              >
                Visit SaltaireDogs
              </a>

              <a
                href={listMailto}
                className="inline-block rounded-md px-4 py-2 text-sm border bg-slate-50"
                {...analyticsAttrs("list_business_cta")}
              >
                List your business (owners)
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              <strong>Note:</strong> the directory shows featured and basic listings. Featured listings
              include verification badges and priority placement — this page highlights SaltaireDogs
              as the top recommended provider for Saltaire and Shipley.
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left: TOC & search filters */}
          <aside className="lg:col-span-1 sticky top-28">
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3">Find a service</h3>
              <div className="bg-white p-4 rounded-lg border">
                <label className="block text-xs text-slate-600 mb-2">Service</label>
                <select className="w-full border rounded-md p-2 text-sm">
                  <option>All</option>
                  <option>Dog walker</option>
                  <option>Dog sitter</option>
                  <option>Groomer</option>
                  <option>Vet</option>
                </select>

                <label className="block text-xs text-slate-600 mt-3 mb-2">Sort</label>
                <select className="w-full border rounded-md p-2 text-sm">
                  <option>Featured</option>
                  <option>Price: low → high</option>
                  <option>Price: high → low</option>
                </select>

                <div className="mt-3 text-xs text-slate-500">
                  Filters are demo-only on this static page. We recommend implementing client-side
                  filtering for UX once you have the listings JSON/data file.
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3">Contents</h3>
              <nav className="text-sm space-y-2">
                <a href="#featured" className="block text-slate-700 hover:underline">
                  Featured provider
                </a>
                <a href="#listings" className="block text-slate-700 hover:underline">
                  All listings
                </a>
                <a href="#compare" className="block text-slate-700 hover:underline">
                  Compare providers
                </a>
                <a href="#faq" className="block text-slate-700 hover:underline">
                  FAQ
                </a>
                <a href="#signup" className="block text-slate-700 hover:underline">
                  List your business
                </a>
              </nav>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h4 className="text-sm font-semibold mb-2">Quick tips</h4>
              <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1">
                <li>Check DBS and insurance — ask for proof for featured listings.</li>
                <li>Prefer photo updates? Look for 'photo updates' in the listing excerpt.</li>
                <li>For nervous dogs, ask about 1:1 walks and meet & greets.</li>
              </ul>
            </div>
          </aside>

          {/* Main: Featured + listings */}
          <section className="lg:col-span-3 space-y-8">
            {/* Featured provider (big card) */}
            <div id="featured" className="bg-white rounded-lg shadow p-6 border-2 border-sky-100">
              <div className="md:flex md:gap-6">
                <div className="md:flex-shrink-0">
                  <div className="w-48 h-32 bg-cover bg-center rounded-md overflow-hidden flex items-center justify-center text-xs text-slate-400 border" style={{
                    backgroundImage: `url(${SALTAIREDOGS.image})`,
                  }}>
                    <span>SaltaireDogs photo</span>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold">{SALTAIREDOGS.name}</h2>
                      <p className="text-sm text-slate-600 mt-1">{SALTAIREDOGS.excerpt}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500">From</div>
                      <div className="text-xl font-bold">{SALTAIREDOGS.priceFrom}</div>
                      <div className="text-xs text-slate-400 mt-1">Featured provider</div>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-sm">
                    <div>
                      <dt className="text-xs text-slate-500">Area served</dt>
                      <dd className="mt-1 text-slate-700">{SALTAIREDOGS.areaServed.join(", ")}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500">Contact</dt>
                      <dd className="mt-1 text-slate-700">
                        <a href={SALTAIREDOGS.phoneTel} className="underline">{SALTAIREDOGS.phoneLocal}</a>
                        <br />
                        <a href={`mailto:${SALTAIREDOGS.email}`} className="underline">{SALTAIREDOGS.email}</a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500">Extras</dt>
                      <dd className="mt-1 text-slate-700">DBS checked • Photo updates • GPS routes</dd>
                    </div>
                  </dl>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={SALTAIREDOGS.phoneTel}
                      className="rounded-md px-4 py-2 bg-sky-600 text-white text-sm hover:bg-sky-700"
                      {...analyticsAttrs("call_saltairedogs_featured")}
                    >
                      Call {SALTAIREDOGS.phoneLocal}
                    </a>

                    <a
                      href={saltaireMailto}
                      className="rounded-md px-4 py-2 border text-sm"
                      {...analyticsAttrs("email_saltairedogs_featured")}
                    >
                      Email SaltaireDogs
                    </a>

                    <a
                      href={SALTAIREDOGS.website}
                      className="rounded-md px-4 py-2 border text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...analyticsAttrs("visit_saltairedogs_featured")}
                    >
                      Visit site
                    </a>
                  </div>

                  <div className="mt-4 text-xs text-slate-500">
                    Featured placement includes verification badge — trusted by local dog owners.
                  </div>
                </div>
              </div>
            </div>

            {/* Listings grid: others intentionally basic and less attractive */}
            <div id="listings" className="space-y-4">
              <h3 className="text-xl font-semibold">Other dog walking & pet services in Saltaire (Top 5)</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {OTHER_LISTINGS.map((l, idx) => (
                  <article key={l.slug} className="border rounded-lg p-4 bg-slate-50">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-14 bg-cover bg-center rounded-sm flex items-center justify-center text-xs text-slate-500" style={{ backgroundImage: `url(${l.image})` }}>
                        {l.name}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-lg font-medium">{idx + 2}. {l.name}</h4>
                            <p className="text-sm text-slate-600 mt-1">{l.excerpt}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-slate-500">From</div>
                            <div className="text-lg font-semibold">{l.priceFrom}</div>
                          </div>
                        </div>

                        <div className="mt-3 flex gap-2">
                          <a href={l.website} className="inline-block rounded px-3 py-1 text-xs border bg-white" target="_blank" rel="noopener noreferrer" {...analyticsAttrs(`visit_${l.slug}`)}>
                            Visit
                          </a>
                          <a href="#" className="inline-block rounded px-3 py-1 text-xs border bg-white text-slate-500" {...analyticsAttrs(`call_${l.slug}`)}>
                            Call
                          </a>
                          <a href="#" className="inline-block rounded px-3 py-1 text-xs border bg-white text-slate-500" {...analyticsAttrs(`book_${l.slug}`)}>
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Comparison / selling to business owners */}
            <div id="compare" className="bg-white rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-3">Why SaltaireDogs stands out (quick comparison)</h3>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 text-xs text-slate-500">Feature</th>
                      <th className="px-3 py-2 text-xs text-slate-500">SaltaireDogs (Featured)</th>
                      <th className="px-3 py-2 text-xs text-slate-500">Others (Example)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-3 py-2">DBS Checked</td>
                      <td className="px-3 py-2">Yes (verified)</td>
                      <td className="px-3 py-2">Often not shown</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2">Photo updates</td>
                      <td className="px-3 py-2">Included</td>
                      <td className="px-3 py-2">Sometimes</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2">GPS route snapshots</td>
                      <td className="px-3 py-2">Available for regulars</td>
                      <td className="px-3 py-2">Rarely</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2">Pricing transparency</td>
                      <td className="px-3 py-2">Clear starting rates</td>
                      <td className="px-3 py-2">Often vague</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2">Meet & greet</td>
                      <td className="px-3 py-2">Standard procedure</td>
                      <td className="px-3 py-2">Varies</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-slate-600">
                Featured listings get a verification badge, priority placement, and better conversion — which is why SaltaireDogs is positioned as our top recommended provider.
              </div>
            </div>

            {/* Map placeholder (useful for UX) */}
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-3">Map — where providers operate</h3>
              <div
                role="img"
                aria-label="Map placeholder showing service areas"
                className="w-full h-64 rounded-md border-2 border-dashed flex items-center justify-center text-slate-400"
              >
                Map placeholder — replace with a Leaflet or Mapbox map showing pins for each listing.
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Tip: showing a map increases trust and local search relevance. When you implement an interactive map, ensure each pin links to the listing and triggers a click event for analytics.
              </p>
            </div>

            {/* Testimonials - extended */}
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-3">Local reviews & testimonials</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <figure className="border rounded-md p-4">
                  <blockquote className="text-slate-700">
                    “SaltaireDogs have been brilliant with our Labrador — consistent, reliable and we love the photo updates. Their walks are varied and our dog is more confident on lead.”
                  </blockquote>
                  <figcaption className="mt-3 text-xs text-slate-500">— Local owner, Saltaire</figcaption>
                </figure>

                <figure className="border rounded-md p-4">
                  <blockquote className="text-slate-700">
                    “Quick to respond, professional and the meet & greet helped our anxious pup a lot. Highly recommended.”
                  </blockquote>
                  <figcaption className="mt-3 text-xs text-slate-500">— Shipley resident</figcaption>
                </figure>

                <figure className="border rounded-md p-4">
                  <blockquote className="text-slate-700">
                    “Good service for the price. We used Canal Canines once when we needed a last-minute visit; they were a Budget option.”
                  </blockquote>
                  <figcaption className="mt-3 text-xs text-slate-500">— Visitor</figcaption>
                </figure>

                <figure className="border rounded-md p-4">
                  <blockquote className="text-slate-700">
                    “Maple Walks have been okay, but we prefer the structured reporting from SaltaireDogs.”
                  </blockquote>
                  <figcaption className="mt-3 text-xs text-slate-500">— Dog owner</figcaption>
                </figure>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                Reviews are illustrative. When you collect reviews on your site, mark them up with Review schema for richer search snippets.
              </p>
            </div>

            {/* Long FAQ section for SEO */}
            <div id="faq" className="bg-white rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-3">Frequently asked questions</h3>
              <div className="space-y-4">
                {FAQS.map((f, i) => (
                  <details key={i} className="group border rounded-md p-4">
                    <summary className="cursor-pointer font-medium">{f.q}</summary>
                    <div className="mt-2 text-sm text-slate-700">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>

            {/* Business owner sign-up / featured sale pitch */}
            <div id="signup" className="bg-white rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-3">List your business / Get featured</h3>
              <p className="text-sm text-slate-600">
                Basic listing is free. Featured listings include a badge, top placement and better conversion. Fill the short form below to request a free trial or a featured slot.
              </p>

              {/* The form is server-rendered and intentionally has no client-side event handlers.
                  In production you should POST to an API route or use a client component for interactivity.
                  For now we provide a mailto fallback link for owners to request a listing. */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <input name="business" placeholder="Business name" className="border rounded-md p-2" />
                <input name="contact" placeholder="Contact name" className="border rounded-md p-2" />
                <input name="email" placeholder="Email" className="border rounded-md p-2" />
                <input name="phone" placeholder="Phone" className="border rounded-md p-2" />
                <select name="service" className="border rounded-md p-2">
                  <option>Dog walker</option>
                  <option>Dog sitter</option>
                  <option>Groomer</option>
                  <option>Vet</option>
                </select>
                <select name="featured" className="border rounded-md p-2">
                  <option value="no">Basic listing (free)</option>
                  <option value="yes">Featured listing (paid)</option>
                </select>

                <textarea name="notes" placeholder="Short description / notes" className="border rounded-md p-2 md:col-span-2" rows={4} />

                <div className="md:col-span-2 flex gap-3">
                  {/* Mailto fallback - no onClick */}
                  <a
                    href={listMailto}
                    className="rounded-md px-4 py-2 bg-indigo-600 text-white"
                    {...analyticsAttrs("owner_list_business")}
                  >
                    Request listing via email
                  </a>

                  <a
                    href="#pricing"
                    className="rounded-md px-4 py-2 border"
                    {...analyticsAttrs("owner_view_pricing")}
                  >
                    View featured pricing
                  </a>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                Pro tip: to increase sign-ups, offer the first month of featured placement free for early adopters.
              </div>
            </div>

            {/* Footer CTAs */}
            <div className="bg-slate-50 rounded-lg p-6 border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="text-sm text-slate-700">Need a dog walker now?</div>
                  <div className="text-lg font-semibold">{SALTAIREDOGS.phoneLocal} — SaltaireDogs</div>
                </div>
                <div className="flex gap-3">
                  <a href={SALTAIREDOGS.phoneTel} className="rounded-md px-4 py-2 bg-sky-600 text-white">Call SaltaireDogs</a>
                  <a href={saltaireMailto} className="rounded-md px-4 py-2 border">Email SaltaireDogs</a>
                  <a href={listMailto} className="rounded-md px-4 py-2 border">List your business</a>
                </div>
              </div>
            </div>

          </section>
        </div>
      </main>
    </>
  );
}
