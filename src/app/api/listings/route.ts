// src/app/api/listings/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // basic validation
    if (!data?.business || !data?.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Add timestamp
    const entry = {
      ...data,
      receivedAt: new Date().toISOString(),
    };

    // Dev: append to a local file (not persistent in serverless) - for dev only
    const OUT_DIR = path.join(process.cwd(), "data");
    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);
    const FILE = path.join(OUT_DIR, "listings-signups.json");

    let arr = [];
    if (fs.existsSync(FILE)) {
      try {
        arr = JSON.parse(fs.readFileSync(FILE, "utf8")) || [];
      } catch (e) {
        arr = [];
      }
    }
    arr.push(entry);
    fs.writeFileSync(FILE, JSON.stringify(arr, null, 2));

    // Optional: Post to Zapier webhook for production (uncomment + set env var)
    /*
    const zapierWebhook = process.env.ZAPIER_LISTING_WEBHOOK;
    if (zapierWebhook) {
      await fetch(zapierWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
    }
    */

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
