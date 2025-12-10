// app/for-business/pay/[serviceId]/page.tsx
import type { Metadata } from "next";
import { getPaidServiceById, type PaidService } from "@/lib/paidServices";
import { PayServiceClient } from "./PayServiceClient";

type PageProps = {
  params: Promise<{ serviceId: string }>;
};

const WA_NUMBER = "447424208127";
const WA_TEXT = encodeURIComponent(
  "Hi Giuseppe, I was looking at the payment page on SaltaireGuide.uk and had a question."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

function getServiceBullets(service: PaidService): string[] {
  switch (service.id) {
    case "website-5":
      return [
        "5 simple pages: Home, Services, About, Contact + 1 extra page (FAQ, Gallery, or whatever suits you).",
        "Clean, mobile-friendly layout so it works well on phones.",
        "Basic on-page SEO set up for Saltaire / Shipley searches.",
        "1 round of light text / image tweaks after launch.",
      ];
    case "website-50":
      return [
        "Up to 50 pages for services, locations, blogs and FAQs.",
        "Site structure designed to rank for multiple Saltaire & Shipley keywords.",
        "Clean, mobile-friendly build so it loads fast and feels modern.",
        "Light training / walkthrough so you know how to update content later.",
      ];
    case "audit":
      return [
        "A screen-recorded video where I click through your site as a customer would.",
        "Clear commentary on what’s confusing or putting people off.",
        "Concrete fixes for layout, wording and call-to-actions.",
        "Simple SEO quick wins to help locals actually find you.",
      ];
    case "ads":
      return [
        "‘Featured business’ placement at the top of relevant SaltaireGuide.uk pages.",
        "Highlighted styling so your listing stands out against others.",
        "Click-throughs sent straight to your website, booking page or WhatsApp.",
        "Coverage focussed on Saltaire & Shipley residents already browsing the site.",
      ];
    default:
      return [];
  }
}

function getAfterPaySteps(service: PaidService): string[] {
  switch (service.id) {
    case "website-5":
    case "website-50":
      return [
        "You’ll get an automatic Stripe receipt by email.",
        "Within 24 hours, I’ll email you asking for any info, logos and photos.",
        "I’ll share a draft link for you to review before anything goes live.",
        "Once you’re happy, we publish the site and you can start sharing it.",
      ];
    case "audit":
      return [
        "You’ll get an automatic Stripe receipt by email.",
        "Within 24 hours, I’ll email you asking a couple of questions about your goals.",
        "You’ll receive your screen-recorded audit video link within 3–5 days.",
        "You can reply with questions if anything in the video isn’t clear.",
      ];
    case "ads":
      return [
        "You’ll get an automatic Stripe receipt by email.",
        "Within 24 hours, I’ll email you to confirm your listing details and target pages.",
        "Your ‘Featured business’ slot will normally go live within 2 working days.",
        "You can tweak link / wording any time by replying to the email.",
      ];
    default:
      return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const service = getPaidServiceById(serviceId);

  if (!service) {
    return {
      title: "Pay — Saltaire Guide",
      description: "Secure card payment with Saltaire Guide.",
      robots: { index: false, follow: true },
    };
  }

  return {
    title: `Pay for ${service.name} — Saltaire Guide`,
    description: `Secure card payment for ${service.name} via Saltaire Guide. Built for local businesses in Saltaire & Shipley.`,
    robots: { index: false, follow: true },
  };
}

export default async function PayServicePage({ params }: PageProps) {
  const { serviceId } = await params;
  const service = getPaidServiceById(serviceId);

  if (!service) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <p className="mt-2 text-neutral-700">
          The payment link you followed doesn&apos;t match a valid service. If
          you think this is a mistake, please message me on WhatsApp.
        </p>
        <p className="mt-4 text-sm text-neutral-500">
          WhatsApp:{" "}
          <a
            href={WA_LINK}
            className="font-semibold text-emerald-700 underline underline-offset-2"
          >
            Tap here to message Giuseppe directly.
          </a>
        </p>
      </main>
    );
  }

  const bullets = getServiceBullets(service);
  const afterPay = getAfterPaySteps(service);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* Small context pill */}
      <p className="mb-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-700">
        For Saltaire &amp; Shipley businesses
      </p>

      {/* Hero / heading */}
      <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
        Pay for {service.name}
      </h1>
      <p className="mt-2 text-neutral-700">{service.description}</p>
      <p className="mt-1 text-lg font-semibold text-neutral-900">
        {service.prettyPrice} GBP
      </p>

      {/* What you get */}
      {bullets.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
            What you&apos;re getting today
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Payment card */}
      <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-semibold text-neutral-900">
          Secure payment with Stripe
        </h2>
        <p className="mt-1 text-xs text-neutral-600">
          Pay by card, Apple Pay, Google Pay and other local methods. Your card
          details never touch SaltaireGuide.uk — they&apos;re handled by Stripe,
          a PCI-compliant payment provider.
        </p>

        <div className="mt-4">
          <PayServiceClient service={service} />
        </div>
      </section>

      {/* What happens after you pay */}
      {afterPay.length > 0 && (
        <section className="mt-8">
          <h2 className="text-base font-semibold text-neutral-900">
            What happens after you pay
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-neutral-700">
            {afterPay.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      {/* Light proof / reassurance */}
      <section className="mt-8 rounded-2xl border border-neutral-100 bg-neutral-50 p-4 text-sm text-neutral-700">
        <p>
          SaltaireGuide.uk already brings in thousands of local views each
          month. These services are designed to give small, independent
          businesses in Saltaire &amp; Shipley a simple, affordable way to look
          good online and be found by locals.
        </p>
      </section>

      {/* Contact fallback */}
      <section className="mt-6 text-xs text-neutral-500">
        <p>
          Got a question before you pay?{" "}
          <a
            href={WA_LINK}
            className="font-semibold text-emerald-700 underline underline-offset-2"
          >
            Tap here to message Giuseppe on WhatsApp
          </a>{" "}
          and I&apos;ll reply as soon as I can.
        </p>
      </section>
    </main>
  );
}
