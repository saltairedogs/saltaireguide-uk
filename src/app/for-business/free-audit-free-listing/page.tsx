// app/for-business/free-audit-free-listing/page.tsx
import type { Metadata } from "next";
import FormBridge from "@/components/FormBridge";

// Using client FormBridge — no server action required

function BusinessSignupForm() {
  return (
    <FormBridge formName="Free listing signup" className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="businessName"
          placeholder="Business name"
          className="w-full rounded-md border border-neutral-200 px-3 py-2 text-sm"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="w-full rounded-md border border-neutral-200 px-3 py-2 text-sm"
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="website"
          type="url"
          placeholder="Website (or social link)"
          className="w-full rounded-md border border-neutral-200 px-3 py-2 text-sm"
        />
        <select
          name="category"
          className="w-full rounded-md border border-neutral-200 px-3 py-2 text-sm"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Choose a category
          </option>
          <option>Cafés & Restaurants</option>
          <option>Pubs & Bars</option>
          <option>Trades (roofers, plumbers, etc.)</option>
          <option>Pet Services</option>
          <option>Fitness & Wellness</option>
          <option>Shops & Retail</option>
          <option>Creatives & Agencies</option>
          <option>Other</option>
        </select>
      </div>

      {/* Optional interests – doesn’t add friction */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-neutral-600">
          Optional: anything else you&apos;re interested in?
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-neutral-800">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              name="interestWebsiteBuild"
              className="h-4 w-4 rounded border-neutral-300"
            />
            <span>Website build</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              name="interestWebsiteAudit"
              className="h-4 w-4 rounded border-neutral-300"
            />
            <span>Website audit</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              name="interestPriorityAds"
              className="h-4 w-4 rounded border-neutral-300"
            />
            <span>Priority advertising</span>
          </label>
        </div>
      </div>

      <div>
        <textarea
          name="notes"
          rows={4}
          placeholder="Anything else we should know? (optional)"
          className="w-full rounded-md border border-neutral-200 px-3 py-2 text-sm"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-700"
        >
          Claim my free listing
        </button>
        <p className="text-xs text-neutral-500">
          100% free • Saltaire & Shipley businesses only
        </p>
      </div>
    </FormBridge>
  );
}

const WA_NUMBER = "447424208127";
const WA_TEXT = encodeURIComponent(
  "Hi Giuseppe, I saw the free audit + free listing page on SaltaireGuide.uk and want to add my business."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

export const metadata: Metadata = {
  title:
    "Free Website Check & Local Business Listing — Saltaire & Shipley | Saltaire Guide",
  description:
    "Get a free local business listing on SaltaireGuide.uk plus a quick look over your website. Optional paid website builds, full audits and priority promotion.",
  alternates: { canonical: "/for-business/free-audit-free-listing" },
  robots: { index: true, follow: true },
};

export default function FreeAuditFreeListingPage() {
  const ok = false;

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="mb-12 grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="mb-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            Free listing + website check for Saltaire & Shipley
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            Get a{" "}
            <span className="text-emerald-600">Free Local Listing</span>{" "}
            on SaltaireGuide.uk
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Join the local directory residents actually use. You&apos;ll get a
            free listing, plus a quick look over your website (if you have one)
            with simple suggestions to help locals find you.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-700">
            <li>• Be discoverable when locals search Saltaire & Shipley</li>
            <li>• 100% free to join, forever</li>
            <li>• Optional “Featured on SaltaireGuide.uk” badge for your site</li>
            <li>• Free quick look at your site with 1–2 easy wins</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#signup"
              className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              Get my free listing
            </a>
            <a
              href="#how-it-works"
              className="rounded-xl border border-neutral-300 px-5 py-3 font-semibold text-neutral-800 hover:bg-neutral-50"
            >
              How it works
            </a>
          </div>
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-neutral-100 shadow md:h-80">
          <img
            src="/images/history-unesco.png"
            alt="Saltaire village street with local businesses"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Proof strip – using real numbers */}
      <section className="mb-12 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">4,000+ Google views</p>
            <p className="text-neutral-600">
              Search impressions in the last 30 days
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">800+ clicks</p>
            <p className="text-neutral-600">
              Locals clicking through to Saltaire & Shipley pages
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">Zero cost</p>
            <p className="text-neutral-600">Free forever, no contracts</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-2xl font-bold">How it works</h2>
        <ol className="mt-4 list-inside list-decimal space-y-3 text-neutral-700">
          <li>Tell us about your business, website and category.</li>
          <li>We verify you’re local and place you in the right section.</li>
          <li>
            You&apos;ll receive your public listing link (usually within 24–48
            hrs) plus a couple of simple ideas to improve your web presence.
          </li>
        </ol>
      </section>

      {/* Optional extras – monetisation block with Stripe payment links */}
      <section id="extras" className="mb-12">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold">
            Want to go further than the free check?
          </h2>
          <p className="mb-4 text-neutral-700">
            Your free listing (and quick website look) are always free. If you
            want deeper help bringing in customers, here&apos;s what I offer for
            Saltaire & Shipley businesses — you can even pay securely online:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <h3 className="text-lg font-semibold">Website builds</h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li>
                  <span className="font-semibold">5-page website – £40</span>
                  <br />
                  Home, Services, About, Contact + 1 extra page. Mobile-friendly
                  with basic SEO.
                  <div className="mt-2">
                    <a
                      href="/for-business/pay/website-5"
                      className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-700"
                    >
                      Pay £40 online
                    </a>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">50-page website – £300</span>
                  <br />
                  Up to 50 pages for services, locations and blogs. Built to rank
                  for Saltaire & Shipley searches.
                  <div className="mt-2">
                    <a
                      href="/for-business/pay/website-50"
                      className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-700"
                    >
                      Pay £300 online
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <h3 className="text-lg font-semibold">
                Full audits & priority advertising
              </h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li>
                  <span className="font-semibold">Full website audit – £30</span>
                  <br />
                  A deeper, screen-recorded video review of your site with clear
                  fixes to get more local enquiries. More detailed than the free
                  quick look you get with your listing.
                  <div className="mt-2">
                    <a
                      href="/for-business/pay/audit"
                      className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-700"
                    >
                      Pay £30 online
                    </a>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">
                    Priority advertising – £30 / month
                  </span>
                  <br />
                  Featured at the top of relevant pages on SaltaireGuide.uk plus a
                  highlighted “Featured business” badge.
                  <div className="mt-2">
                    <a
                      href="/for-business/pay/ads"
                      className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-700"
                    >
                      Pay first £30 online
                    </a>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Free basic listing</span>
                  <br />
                  If you just want the free listing and quick check, that&apos;s
                  totally fine too.
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-xs text-neutral-500">
            You can tick what you&apos;re interested in on the form below, or just
            mention it in a message. I&apos;ll reply with 1–2 options, no pressure.
          </p>
        </div>
      </section>

      {/* Form */}
      <section id="signup" className="mb-16">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold">Claim your free listing</h2>
          {ok && (
            <p
              role="status"
              aria-live="polite"
              className="mb-3 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800"
            >
              Thanks! Your details were sent. We’ll reply with your listing link
              within 24–48 hours.
            </p>
          )}
          <p className="mb-6 text-neutral-700">
            Fill this once — we’ll do the rest and email you your listing link,
            plus a couple of quick ideas to help more locals find you.
          </p>
          <BusinessSignupForm />
          <p className="mt-3 text-xs text-neutral-500">
            We’ll never share your details. Saltaire & Shipley businesses only.
          </p>
          <p className="mt-3 text-xs text-neutral-500">
            Prefer WhatsApp?{" "}
            <a
              href={WA_LINK}
              className="font-semibold text-emerald-700 underline underline-offset-2"
            >
              Tap here to message Giuseppe directly.
            </a>
          </p>
        </div>
      </section>

      {/* Badge */}
      <section id="badge" className="mb-16">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold">
            “Featured on SaltaireGuide.uk” badge
          </h2>
          <p className="text-neutral-700">
            After your listing goes live, you can add this badge to your website.
            It links to your listing and helps locals trust you faster.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <img
              src="/badges/saltaireguide-badge.svg"
              alt="Featured on SaltaireGuide.uk"
              className="h-10 w-auto"
            />
            <code className="rounded-md bg-neutral-950 p-3 text-xs text-neutral-100">
              {`<a href="YOUR-LISTING-URL" target="_blank" rel="noopener">
  <img src="https://www.saltaireguide.uk/badges/saltaireguide-badge.svg"
       alt="Featured on SaltaireGuide.uk" style="height:40px" />
</a>`}
            </code>
          </div>
          <p className="mt-2 text-xs text-neutral-500">
            Swap <code>YOUR-LISTING-URL</code> with the link we send you.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-4 space-y-6">
          <details className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm open:shadow">
            <summary className="cursor-pointer select-none text-lg font-semibold">
              Is it really free?
            </summary>
            <p className="mt-2 text-neutral-700">
              Yes — the basic listing and quick website look are completely free
              and stay free. Any extra website or advertising work is optional.
            </p>
          </details>
          <details className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer select-none text-lg font-semibold">
              What categories do you list?
            </summary>
            <p className="mt-2 text-neutral-700">
              Cafés, pubs, restaurants, trades (roofers, plumbers, gardeners),
              pet services, fitness/wellness, retail, creatives and more.
            </p>
          </details>
          <details className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer select-none text-lg font-semibold">
              How fast will I hear back?
            </summary>
            <p className="mt-2 text-neutral-700">
              We aim for 24–48 hours. You’ll receive your listing URL by email.
            </p>
          </details>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            name: "Free Website Check & Local Business Listing",
            url:
              "https://www.saltaireguide.uk/for-business/free-audit-free-listing",
            category: "Directory",
            areaServed: "Saltaire, Shipley, West Yorkshire",
            price: "0",
            priceCurrency: "GBP",
            eligibleRegion: "GB",
            seller: {
              "@type": "Organization",
              name: "Saltaire Guide",
              url: "https://www.saltaireguide.uk",
            },
          }),
        }}
      />
    </main>
  );
}
