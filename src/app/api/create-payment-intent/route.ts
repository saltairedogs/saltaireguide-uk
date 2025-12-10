// app/api/create-payment-intent/route.ts
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getPaidServiceById } from "@/lib/paidServices";

export async function POST(req: Request) {
  try {
    const { serviceId } = await req.json();

    const service = getPaidServiceById(serviceId);
    if (!service) {
      return NextResponse.json(
        { error: "Invalid service" },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: service.amount,
      currency: "gbp",
      metadata: {
        serviceId: service.id,
        serviceName: service.name,
      },
      automatic_payment_methods: { enabled: true },
    });

    if (!paymentIntent.client_secret) {
      throw new Error("No client secret returned from Stripe");
    }

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json(
      { error: "Unable to create payment" },
      { status: 500 }
    );
  }
}
