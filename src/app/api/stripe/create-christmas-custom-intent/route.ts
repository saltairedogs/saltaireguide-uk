import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export const runtime = "nodejs";

const AMOUNT_PENCE = 4000;
const CURRENCY = "gbp";
const PRODUCT = "saltaire_christmas_custom_plan";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "").trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const intent = await stripe.paymentIntents.create({
      amount: AMOUNT_PENCE,
      currency: CURRENCY,
      automatic_payment_methods: { enabled: true },
      receipt_email: email,
      metadata: { product: PRODUCT, price_pence: String(AMOUNT_PENCE) },
    });

    return NextResponse.json({ clientSecret: intent.client_secret });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Failed to create PaymentIntent" },
      { status: 500 }
    );
  }
}
