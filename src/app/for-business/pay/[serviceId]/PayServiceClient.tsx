// app/for-business/pay/[serviceId]/PayServiceClient.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import type { PaidService } from "@/lib/paidServices";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type Props = {
  service: PaidService;
};

export function PayServiceClient({ service }: Props) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function createIntent() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ serviceId: service.id }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to create payment");
        }
        setClientSecret(data.clientSecret);
      } catch (e: any) {
        setError(e.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    createIntent();
  }, [service.id]);

  if (loading) {
    return <p className="text-neutral-600">Preparing secure payment…</p>;
  }

  if (error || !clientSecret) {
    return (
      <p className="text-sm text-red-600">
        {error || "Could not start payment. Please try again or contact us."}
      </p>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "stripe",
        },
      }}
    >
      <CheckoutForm service={service} />
    </Elements>
  );
}

function CheckoutForm({ service }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setErrorMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/for-business/payment-complete?service=${service.id}`,
      },
    });

    if (error) {
      setErrorMessage(error.message || "Payment failed, please try again.");
      setIsProcessing(false);
    }
    // On success, Stripe will redirect to return_url.
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <PaymentElement />
      {errorMessage && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isProcessing ? "Processing…" : `Pay ${service.prettyPrice} securely`}
      </button>
      <p className="text-xs text-neutral-500">
        Payments are handled securely by Stripe. We never see your full card
        details.
      </p>
    </form>
  );
}
