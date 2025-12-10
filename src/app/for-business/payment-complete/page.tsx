// app/for-business/payment-complete/page.tsx
import { getPaidServiceById } from "@/lib/paidServices";

type Props = {
  searchParams?: Promise<{ service?: string }>;
};

export default async function PaymentCompletePage({ searchParams }: Props) {
  const params = await searchParams;
  const service =
    params?.service && getPaidServiceById(params.service);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">
        Thank you for your payment
      </h1>
      <p className="mt-3 text-neutral-700">
        {service
          ? `We’ve received your payment for ${service.name}.`
          : "We’ve received your payment."}
      </p>
      <p className="mt-2 text-neutral-700">
        We&apos;ll email you shortly using the details you gave us to confirm
        next steps.
      </p>
      <p className="mt-4 text-sm text-neutral-500">
        If you think something&apos;s gone wrong, just reply to the confirmation
        email or message us on WhatsApp.
      </p>
    </main>
  );
}
