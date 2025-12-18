"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type PlanId = "pdf" | "custom";

const PLANS: Record<
  PlanId,
  {
    id: PlanId;
    title: string;
    subtitle: string;
    priceLabel: string;
    compareAt?: string;
    badge?: string;
    endpoint: string;
  }
> = {
  pdf: {
    id: "pdf",
    title: "Instant PDF mini plan",
    subtitle: "Simple festive loop + best timing (on your phone)",
    priceLabel: "£4",
    compareAt: "£7",
    badge: "Most popular",
    endpoint: "/api/stripe/create-christmas-pack-intent",
  },
  custom: {
    id: "custom",
    title: "Custom plan (done for you)",
    subtitle: "Built around kids / dog / time / budget",
    priceLabel: "£40",
    endpoint: "/api/stripe/create-christmas-custom-intent",
  },
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function InnerCheckout({ email, planId }: { email: string; planId: PlanId }) {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paidPi, setPaidPi] = useState<string | null>(null);

  // Handle return from 3DS/redirect flows (if any)
  useEffect(() => {
    const cs = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
    if (!cs || !stripe) return;

    (async () => {
      const res = await stripe.retrievePaymentIntent(cs);
      const pi = res.paymentIntent;
      if (pi?.status === "succeeded") setPaidPi(pi.id);
    })().catch(() => {});
  }, [stripe]);

  async function onPay(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!stripe || !elements) return;

    setLoading(true);
    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.href,
          receipt_email: email,
        },
        redirect: "if_required",
      });

      if (result.error) {
        setError(result.error.message ?? "Payment failed");
        return;
      }

      if (result.paymentIntent?.status === "succeeded") {
        setPaidPi(result.paymentIntent.id);
      } else {
        setError("Payment not completed yet. If you were redirected, wait for the return.");
      }
    } finally {
      setLoading(false);
    }
  }

  // Success UI
  if (paidPi) {
    if (planId === "pdf") {
      return (
        <div className="space-y-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-900 shadow-sm">
            <div className="font-semibold">Payment confirmed</div>
            <div className="mt-1 text-neutral-700">
              Download ready. Receipt sent to <b>{email}</b>.
            </div>
          </div>

          <a
            className="block w-full rounded-2xl bg-neutral-900 px-5 py-3 text-center text-sm font-semibold !text-white visited:!text-white no-underline hover:opacity-95"
            href={`/api/packs/christmas-pack?pi=${encodeURIComponent(paidPi)}`}
          >
            Download the PDF
          </a>

          <p className="text-xs text-neutral-600">
            If anything glitches, reply to your receipt email and I’ll send it manually.
          </p>
        </div>
      );
    }

    // custom plan success
    return (
      <div className="space-y-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-900 shadow-sm">
          <div className="font-semibold">Payment confirmed</div>
          <div className="mt-1 text-neutral-700">
            Receipt sent to <b>{email}</b>. Reply to that email with:
            <span className="block mt-2 text-neutral-700">
              kids / dog / time window / budget / any must-see spots.
            </span>
          </div>
        </div>

        <p className="text-xs text-neutral-600">
          If you don’t reply, I’ll still email you to ask the basics.
        </p>
      </div>
    );
  }

  const payLabel = planId === "pdf" ? "Buy now — £4" : "Pay now — £40";

  return (
    <form onSubmit={onPay} className="space-y-4">
      <div className="rounded-2xl border border-neutral-200 bg-white p-4">
        <PaymentElement />
      </div>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50"
      >
        {loading ? "Processing…" : payLabel}
      </button>

      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-600">
        <span>Secure checkout</span>
        <span>•</span>
        <span>Receipt emailed</span>
        {planId === "pdf" ? (
          <>
            <span>•</span>
            <span>Instant download</span>
          </>
        ) : null}
      </div>
    </form>
  );
}

export default function ChristmasPack() {
  const [planId, setPlanId] = useState<PlanId>("pdf");
  const [email, setEmail] = useState("");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [bootError, setBootError] = useState<string | null>(null);
  const [booting, setBooting] = useState(false);

  const lastKeyRef = useRef<string>("");

  const elementsOptions = useMemo(() => {
    if (!clientSecret) return undefined;
    return {
      clientSecret,
      appearance: {
        theme: "stripe",
        variables: {
          borderRadius: "16px",
        },
      },
    };
  }, [clientSecret]);

  // Auto-create PaymentIntent when email is valid + plan chosen
  useEffect(() => {
    setBootError(null);

    const clean = email.trim();
    const key = `${planId}|${clean}`;

    if (!clean || !isValidEmail(clean)) {
      setClientSecret(null);
      return;
    }

    if (key === lastKeyRef.current && clientSecret) return;

    const t = setTimeout(async () => {
      try {
        setBooting(true);
        lastKeyRef.current = key;

        const res = await fetch(PLANS[planId].endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: clean }),
        });

        const data = await res.json();
        if (!res.ok) {
          setClientSecret(null);
          setBootError(data?.error ?? "Could not load payment options");
          return;
        }

        setClientSecret(data.clientSecret);
      } catch {
        setClientSecret(null);
        setBootError("Could not load payment options. Please try again.");
      } finally {
        setBooting(false);
      }
    }, 250);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, planId]);

  // If user switches plan, reset intent/UI
  useEffect(() => {
    setClientSecret(null);
    lastKeyRef.current = "";
    setBootError(null);
  }, [planId]);

  return (
    <section
      id="christmas-pack"
      className="not-prose my-10 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Want the 2–3 hour festive loop as a simple phone PDF?
            </h2>
            <p className="mt-1 text-sm text-neutral-700">
              Optional add-on to this guide — fast, practical, no fluff.
            </p>
          </div>

          <div className="text-xs text-neutral-600">
            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1">
              No spam • receipts only
            </span>
          </div>
        </div>

        {/* Primary plan (PDF) */}
        <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-semibold text-neutral-900">{PLANS.pdf.title}</div>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] font-semibold text-neutral-700">
                  {PLANS.pdf.badge}
                </span>
              </div>
              <div className="mt-1 text-xs text-neutral-600">{PLANS.pdf.subtitle}</div>

              <ul className="mt-4 space-y-1 text-sm text-neutral-700">
                <li>• Best time to arrive + simple loop</li>
                <li>• Parking/train tips + warm-up stops</li>
              </ul>

              <button
                type="button"
                onClick={() => setPlanId("pdf")}
                className="mt-4 inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-800 hover:bg-neutral-50"
                aria-pressed={planId === "pdf"}
              >
                {planId === "pdf" ? "Selected" : "Choose £4 PDF"}
              </button>
            </div>

            <div className="shrink-0 text-right">
              <div className="text-xs text-neutral-500 line-through">{PLANS.pdf.compareAt}</div>
              <div className="text-3xl font-bold text-neutral-900">{PLANS.pdf.priceLabel}</div>
              <div className="text-xs font-medium text-neutral-700">Intro price</div>
            </div>
          </div>
        </div>

        {/* Secondary option (Custom) */}
        <div className="mt-3 rounded-3xl border border-neutral-200 bg-white/60 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-neutral-900">{PLANS.custom.title}</div>
              <div className="mt-1 text-xs text-neutral-600">{PLANS.custom.subtitle}</div>

              <button
                type="button"
                onClick={() => setPlanId("custom")}
                className="mt-3 inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-800 hover:bg-neutral-50"
                aria-pressed={planId === "custom"}
              >
                {planId === "custom" ? "Selected" : "Need it tailored? £40"}
              </button>
            </div>

            <div className="shrink-0 text-right">
              <div className="text-xs text-neutral-500">&nbsp;</div>
              <div className="text-2xl font-bold text-neutral-900">{PLANS.custom.priceLabel}</div>
              <div className="text-xs font-medium text-neutral-700">Custom</div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout */}
      <div className="p-6 sm:p-8">
        <div className="grid gap-4">
          <label className="block">
            <span className="text-sm font-semibold text-neutral-900">Email to send it to</span>
            <span className="block text-xs text-neutral-600">
              Receipt + {planId === "pdf" ? "download link" : "delivery"} only.
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-400"
              required
            />
          </label>

          {!email.trim() ? (
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
              Enter your email to load secure payment.
            </div>
          ) : !isValidEmail(email.trim()) ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              Please enter a valid email address.
            </div>
          ) : booting && !clientSecret ? (
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
              Loading payment…
            </div>
          ) : bootError ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              {bootError}
            </div>
          ) : clientSecret ? (
            <Elements key={clientSecret} stripe={stripePromise} options={elementsOptions as any}>
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-semibold text-neutral-900">
                  {planId === "pdf" ? "Checkout: £4 PDF" : "Checkout: £40 custom plan"}
                </div>
                {planId === "pdf" ? (
                  <div className="text-xs text-neutral-600">
                    <span className="rounded-full border border-neutral-200 bg-white px-3 py-1">
                      Recommended
                    </span>
                  </div>
                ) : null}
              </div>

              <InnerCheckout email={email.trim()} planId={planId} />
            </Elements>
          ) : null}

          <div className="border-t border-neutral-200 pt-4">
            <p className="text-xs text-neutral-600">
              By paying you agree to receive a receipt and delivery email. No marketing emails unless you opt in elsewhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
