import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { PDFDocument, StandardFonts } from "pdf-lib";

export const runtime = "nodejs";

const PACK_AMOUNT_PENCE = 400;
const PACK_CURRENCY = "gbp";
const PACK_PRODUCT = "saltaire_christmas_pack";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pi = searchParams.get("pi");

    if (!pi) {
      return NextResponse.json({ error: "Missing payment intent id" }, { status: 400 });
    }

    const intent = await stripe.paymentIntents.retrieve(pi);

    const ok =
      intent.status === "succeeded" &&
      intent.currency === PACK_CURRENCY &&
      (intent.amount_received ?? 0) >= PACK_AMOUNT_PENCE &&
      intent.metadata?.product === PACK_PRODUCT;

    if (!ok) {
      return NextResponse.json({ error: "Payment not verified" }, { status: 403 });
    }

    // Placeholder PDF for now (swap later to a real PDF file)
    const pdf = await PDFDocument.create();
    const page = pdf.addPage([595.28, 841.89]); // A4
    const font = await pdf.embedFont(StandardFonts.Helvetica);

    page.drawText("Saltaire Guide — Christmas Mini Plan (Placeholder)", {
      x: 50,
      y: 780,
      size: 16,
      font,
    });
    page.drawText("Thanks for supporting Saltaire Guide.", { x: 50, y: 750, size: 12, font });
    page.drawText("Your full PDF pack will be uploaded here shortly.", { x: 50, y: 730, size: 12, font });
    page.drawText("If you need it emailed manually, reply to your receipt email.", { x: 50, y: 710, size: 12, font });

    const bytes = await pdf.save();

    return new NextResponse(Buffer.from(bytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="saltaire-christmas-mini-plan.pdf"',
        "Cache-Control": "private, no-store",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Download failed" },
      { status: 500 }
    );
  }
}
