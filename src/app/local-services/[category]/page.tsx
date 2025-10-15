// src/app/local-services/[category]/page.tsx
// Production-ready dynamic Server Component for category directory pages.
// Paste this file at src/app/local-services/[category]/page.tsx
// It dynamically imports data from src/data/local-services/<category>.ts (must export `listings` and optional `categoryMetadata`).

import React from "react";

type Listing = {
  slug: string;
  name: string;
  phoneLocal?: string;
  phoneTel?: string;
  email?: string;
  website?: string;
  excerpt?: string;
  priceFrom?: string;
  areaServed?: string[];
  featured?: boolean;
  verified?: boolean;
  image?: string;
  tags?: string[];
};

type ListingsModule = {
  listings: Listing[];
  categoryMetadata?: {
    title?: string;
    description?: string;
    image?: string;
  };
};

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  try {
    // dynamic import - expects a file at src/data/local-services/<category>.ts exporting `listings` and optionally `categoryMetadata`
    // @ts-ignore
    const mod: ListingsModule = await import(`@/data/local-services/${category}`);
    const meta = mod?.categoryMetadata;
    const title = meta?.title ?? `${displayName(category)} — Local Services in Saltaire & Shipley`;
    const description =
      meta?.description ??
      `Find trusted ${displayName(category)} serving Saltaire & Shipley. Featured providers are verified and prioritized.`;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://saltaireguide.uk/local-services/${category}`,
        images: meta?.image ? [meta.image] : undefined,
      },
    };
  } catch (e) {
    const title = `${displayName(category)} — Local Services in Saltaire & Shipley`;
    const description = `Find trusted ${displayName(category)} serving Saltaire & Shipley. Featured providers are verified and prioritized.`;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://saltaireguide.uk/local-services/${category}`,
      },
    };
  }
}

function displayName(slug: string) {
  if (!slug) return slug;
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

function JsonLd({ obj }: { obj: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
    />
  );
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  let mod: ListingsModule | null = null;
  let listings: Listing[] = [];

  try {
    // @ts-ignore
    mod = (await import(`@/data/local-services/${category}`)) as ListingsModule;
    listings = Array.isArray(mod?.listings) ? mod!.listings : [];
  } catch (err) {
    listings = [];
    mod = null;
  }

  // order featured first
  const featured = listings.filter((l) => l.featured).slice(0, 3);
  const others = listings.filter((l) => !l.featured);

  // ItemList JSON-LD
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: listings.map((l, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: l.website ? l.website : `https://saltaireguide.uk/local-services/${category}#${l.slug}`,
      name: l.name,
      description: l.excerpt,
    })),
  };

  // LocalBusiness objects for featured listings
  const featuredLd = featured.map((f) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: f.name,
    image: f.image,
    url: f.website || `https://saltaireguide.uk/local-services/${category}#${f.slug}`,
    telephone: f.phoneTel,
    email: f.email,
    priceRange: f.priceFrom,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saltaire",
      addressRegion: "West Yorkshire",
      postalCode: "BD18",
      addressCountry: "GB",
    },
    areaServed: (f.areaServed || ["Saltaire", "Shipley"]).map((a) => ({ "@type": "Place", name: a })),
    description: f.excerpt,
    "@id": f.website || `https://saltaireguide.uk/local-services/${category}#${f.slug}`,
  }));

  // Mailto fallback for business sign-ups
  const listSubject = encodeURIComponent(`List my ${category.replace("-", " ")} service on Saltaire Guide`);
  const listBody = encodeURIComponent(
    `Hi,\n\nI'd like to list my ${category.replace("-", " ")} service on Saltaire Guide.\n\nBusiness name:\nContact name:\nPhone:\nEmail:\nWebsite:\nService types:\nShort description:\nWould you like a featured listing trial? (yes/no):\n\nThanks!`
  );
  const listMailto = `mailto:hello@saltaireguide.uk?subject=${listSubject}&body=${listBody}`;

  const display = displayName(category);
  const pageTitle = mod?.categoryMetadata?.title ?? `${display} in Saltaire & Shipley`;
  const pageDescription =
    mod?.categoryMetadata?.description ??
    `Find trusted ${display} serving Saltaire and Shipley. Featured providers are verified and prioritized in results.`;

  return (
    <>
      <JsonLd obj={itemListLd} />
      {featuredLd.map((f, i) => (
        <JsonLd obj={f} key={`featured-ld-${i}`} />
      ))}

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <section className="bg-white rounded-lg shadow p-8 mb-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-extrabold">{pageTitle}</h1>
            <p className="mt-3 text-lg text-slate-700">{pageDescription}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {featured[0]?.phoneTel ? (
                <a href={featured[0].phoneTel} className="inline-block rounded-md px-4 py-2 bg-sky-600 text-white text-sm hover:bg-sky-700">
                  Call {featured[0].name}
                </a>
              ) : (
                <a href={listMailto} className="inline-block rounded-md px-4 py-2 bg-sky-600 text-white text-sm hover:bg-sky-700">
                  Request a Featured Listing
                </a>
              )}

              <a href={listMailto} className="inline-block rounded-md px-4 py-2 border text-sm">
                List your business
              </a>

              <a href="/local-services" className="inline-block rounded-md px-4 py-2 text-sm border bg-slate-50">
                All local services
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Featured providers are highlighted and given verification badges. Businesses can request a trial via the 'List your business' link.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters + TOC */}
          <aside className="lg:col-span-1 sticky top-28 self-start">
            <div className="bg-white border rounded-md p-4 mb-6">
              <h3 className="text-sm font-semibold">Quick filters</h3>
              <label className="block text-xs text-slate-600 mt-3">Service</label>
              <select className="w-full border rounded-md p-2 text-sm">
                <option>All</option>
                <option>{display}</option>
                <option>Featured</option>
              </select>

              <label className="block text-xs text-slate-600 mt-3">Sort</label>
              <select className="w-full border rounded-md p-2 text-sm">
                <option>Featured</option>
                <option>Price: low → high</option>
                <option>Price: high → low</option>
              </select>

              <div className="mt-4 text-xs text-slate-500">
                Filters are static on this server-rendered page. For client-side filtering, convert this component into a Client Component and fetch the listings JSON.
              </div>
            </div>

            <nav className="bg-white border rounded-md p-4 text-sm">
              <h4 className="font-semibold mb-2">Contents</h4>
              <ul className="space-y-2">
                <li><a href="#featured" className="hover:underline">Featured providers</a></li>
                <li><a href="#listings" className="hover:underline">All listings</a></li>
                <li><a href="#map" className="hover:underline">Map</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
                <li><a href="#signup" className="hover:underline">List your business</a></li>
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <section className="lg:col-span-3 space-y-8">
            {/* Featured */}
            <section id="featured" className="space-y-4">
              <h2 className="text-2xl font-semibold">Featured {display}</h2>

              {featured.length === 0 ? (
                <div className="bg-slate-50 border rounded-md p-4 text-sm text-slate-600">
                  No featured providers yet. Businesses can request featured placement via the "List your business" link.
                </div>
              ) : (
                <div className="grid gap-4">
                  {featured.map((f) => (
                    <article key={f.slug} className="bg-white border rounded-md p-4 shadow-sm">
                      <div className="md:flex md:gap-6">
                        <div className="md:flex-shrink-0">
                          <div
                            className="w-40 h-28 bg-cover bg-center rounded-md border overflow-hidden flex items-center justify-center text-xs text-slate-400"
                            style={{ backgroundImage: `url(${f.image || "/images/placeholder.png"})` }}
                          >
                            {f.name}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-xl font-semibold">{f.name}</h3>
                              <p className="text-sm text-slate-600 mt-1">{f.excerpt}</p>
                            </div>

                            <div className="text-right">
                              <div className="text-sm text-slate-500">From</div>
                              <div className="text-xl font-bold">{f.priceFrom ?? "On request"}</div>
                              {f.verified ? (
                                <div className="mt-1 text-xs text-green-700 font-medium">Verified</div>
                              ) : (
                                <div className="mt-1 text-xs text-slate-400">Unverified</div>
                              )}
                            </div>
                          </div>

                          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-sm">
                            <div>
                              <dt className="text-xs text-slate-500">Area</dt>
                              <dd className="mt-1 text-slate-700">{(f.areaServed || ["Saltaire"]).join(", ")}</dd>
                            </div>
                            <div>
                              <dt className="text-xs text-slate-500">Contact</dt>
                              <dd className="mt-1 text-slate-700">
                                {f.phoneTel ? <a href={f.phoneTel} className="underline">{f.phoneLocal ?? f.phoneTel}</a> : <span className="text-slate-500">No number</span>}
                                <br />
                                {f.email ? <a href={`mailto:${f.email}`} className="underline">{f.email}</a> : null}
                              </dd>
                            </div>
                            <div>
                              <dt className="text-xs text-slate-500">Tags</dt>
                              <dd className="mt-1 text-slate-700">{(f.tags || []).join(", ") || "—"}</dd>
                            </div>
                          </dl>

                          <div className="mt-4 flex gap-3">
                            {f.phoneTel ? <a href={f.phoneTel} className="rounded-md px-4 py-2 bg-sky-600 text-white text-sm">Call</a> : null}
                            {f.email ? <a href={`mailto:${f.email}`} className="rounded-md px-4 py-2 border text-sm">Email</a> : null}
                            {f.website ? <a href={f.website} target="_blank" rel="noopener noreferrer" className="rounded-md px-4 py-2 border text-sm">Visit site</a> : null}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            {/* All listings */}
            <section id="listings" className="space-y-4">
              <h2 className="text-2xl font-semibold">All listings</h2>

              {listings.length === 0 ? (
                <div className="bg-slate-50 border rounded-md p-4 text-sm text-slate-600">
                  There are currently no listings for this category. Business owners can request to be listed via email:
                  <a href={listMailto} className="underline ml-1">Request a listing</a>.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {listings.map((l, idx) => {
                    const isFeatured = !!l.featured;
                    return (
                      <article key={l.slug || idx} className={`${isFeatured ? "bg-white border shadow-sm" : "bg-slate-50 border"} rounded-md p-4`}>
                        <div className="flex items-start gap-4">
                          <div className="w-20 h-14 bg-cover bg-center rounded-sm flex items-center justify-center text-xs text-slate-400" style={{ backgroundImage: `url(${l.image || "/images/placeholder.png"})` }}>
                            {l.name}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-lg font-medium">{idx + 1}. {l.name}</h3>
                                <p className="text-sm text-slate-600 mt-1">{l.excerpt}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-slate-500">From</div>
                                <div className="text-lg font-semibold">{l.priceFrom ?? "On request"}</div>
                              </div>
                            </div>

                            <div className="mt-3 flex gap-2">
                              {l.website ? <a href={l.website} className="inline-block rounded px-3 py-1 text-xs border bg-white" target="_blank" rel="noopener noreferrer">Visit</a> : null}
                              {l.phoneTel ? <a href={l.phoneTel} className="inline-block rounded px-3 py-1 text-xs border bg-white">Call</a> : <span className="inline-block rounded px-3 py-1 text-xs border bg-white text-slate-400">No phone</span>}
                              {l.email ? <a href={`mailto:${l.email}`} className="inline-block rounded px-3 py-1 text-xs border bg-white">Email</a> : null}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Map */}
            <section id="map" className="bg-white border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-3">Map</h3>
              <div role="img" aria-label="Map placeholder" className="w-full h-64 rounded-md border-2 border-dashed flex items-center justify-center text-slate-400">
                Interactive map placeholder — integrate Leaflet or Mapbox and load pins from src/data/local-services/{category}.ts
              </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="bg-white border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-3">Why list or feature your business here?</h3>
              <ul className="list-disc pl-5 text-sm space-y-2 text-slate-700">
                <li>Featured placement drives higher click-through and phone calls.</li>
                <li>Verification badges for DBS / insurance improve trust & conversions.</li>
                <li>Structured data (LocalBusiness JSON-LD) improves Google understanding.</li>
                <li>Simple onboarding: request a trial featured placement via email.</li>
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className="bg-white border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-3">Frequently asked questions</h3>
              <div className="space-y-4">
                {FAQ_BLOCK(category)}
              </div>
            </section>

            {/* Signup */}
            <section id="signup" className="bg-slate-50 border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-3">List your business</h3>
              <p className="text-sm text-slate-700">
                Basic listing is free. Featured listings include a verification badge, priority placement and better conversion. Request a listing or featured trial by emailing us — we typically reply within 48 hours.
              </p>

              <div className="mt-4 flex gap-3">
                <a href={listMailto} className="rounded-md px-4 py-2 bg-indigo-600 text-white">Request listing via email</a>
                <a href="#benefits" className="rounded-md px-4 py-2 border">Why feature?</a>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}

// FAQ helper
function FAQ_BLOCK(category: string) {
  const commonFaqs = [
    {
      q: "How much does a typical job cost?",
      a: "Costs vary by service — many listings show starting prices. Contact providers to get a bespoke quote.",
    },
    {
      q: "Are featured providers vetted?",
      a: "Featured providers are encouraged to provide verification such as DBS checks and insurance. We display verification badges where providers have submitted proof.",
    },
    {
      q: "How do I request a featured listing?",
      a: "Use the 'List your business' link on this page to email us. We'll provisionally add a basic listing and discuss featured options and pricing.",
    },
    {
      q: "How do you decide ordering?",
      a: "Featured providers are placed at the top. Others are displayed in the order provided in the data file. In future we'll support sorting by rating, price, and distance.",
    },
  ];

  const categorySpecific = [
    {
      q: `What types of ${category.replace("-", " ")} are listed?`,
      a: `We include a range of ${category.replace("-", " ")} providers — local businesses, sole traders and agencies that serve Saltaire & Shipley.`,
    },
  ];

  const faqs = [...categorySpecific, ...commonFaqs];

  return faqs.map((f, i) => (
    <details key={i} className="group border rounded-md p-4">
      <summary className="cursor-pointer font-medium">{f.q}</summary>
      <div className="mt-2 text-sm text-slate-700">{f.a}</div>
    </details>
  ));
}
