// app/for-business/free-listing/page.tsx
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

      <div>
        <textarea
          name="notes"
          rows={4}
          placeholder="Anything else we should know? (optional)"
          className="w-full rounded-md border border-neutral-200 px-3 py-2 text-sm"
        />
      </div>

      <div className="flex items-center gap-3">
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

export const metadata: Metadata = {
  title: "Free Local Business Listing — Saltaire Guide",
  description:
    "Claim your 100% free listing on SaltaireGuide.uk. Get seen by locals in Saltaire & Shipley. No sales, no catches.",
  alternates: { canonical: "/for-business/free-listing" },
  robots: { index: true, follow: true },
};

export default function FreeListingPage() {
  const ok = false
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="mb-12 grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="mb-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            For local businesses in Saltaire & Shipley
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            Claim your <span className="text-emerald-600">Free Listing</span> on
            SaltaireGuide.uk
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Join the local directory residents actually use. It’s quick, friendly,
            and completely free — no pushy sales, ever.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-700">
            <li>• Be discoverable when locals search</li>
            <li>• 100% free to join, forever</li>
            <li>• Optional “Featured on SaltaireGuide.uk” badge for your site</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="#signup"
              className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              Get listed free
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
            alt="Local Saltaire business"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Proof strip */}
      <section className="mb-12 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">100K+ views a month</p>
            <p className="text-neutral-600">Local content audience to tap into</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Trusted locally</p>
            <p className="text-neutral-600">Built in Saltaire, for Saltaire</p>
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
          <li>Tell us about your business and choose a category.</li>
          <li>We verify you’re local and place you in the right section.</li>
          <li>You’ll receive your public listing link (usually within 24–48 hrs).</li>
        </ol>
      </section>

      {/* Form */}
      <section id="signup" className="mb-16">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold">Claim your spot</h2>
          {ok && (
            <p role="status" aria-live="polite" className="mb-3 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
              Thanks! Your details were sent. We’ll reply with your listing link within 24–48 hours.
            </p>
          )}
          <p className="mb-6 text-neutral-700">
            Fill this once — we’ll do the rest and email you your listing link.
          </p>
          <BusinessSignupForm />
          <p className="mt-3 text-xs text-neutral-500">
            We’ll never share your details. Saltaire/Shipley businesses only.
          </p>
        </div>
      </section>

      {/* Badge */}
      <section id="badge" className="mb-16">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold">“Featured on SaltaireGuide.uk” badge</h2>
          <p className="text-neutral-700">
            After your listing goes live, you can add this badge to your website.
            It links to your listing and helps locals trust you faster.
          </p>
          <div className="mt-4 flex items-center gap-6">
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
              Yes — the listing is completely free and stays free. If you ever
              want extra promotion, that’s optional.
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
            name: "Free Local Business Listing",
            url: "https://www.saltaireguide.uk/for-business/free-listing",
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
