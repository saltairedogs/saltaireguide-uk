// src/app/api/reviews/[site]/[entity]/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient as createSupabaseClient, type SupabaseClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

type RouteParams = { site: string; entity: string; slug: string };
type RouteContext = { params: Promise<RouteParams> };

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

function admin(): SupabaseClient {
  if (!supabaseUrl || !serviceRole) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }
  return createSupabaseClient(supabaseUrl, serviceRole, {
    auth: { persistSession: false },
  });
}

function okToken(s: string) {
  return /^[a-z0-9-]{2,80}$/i.test(s);
}

function badParams() {
  return NextResponse.json({ error: "Bad params" }, { status: 400 });
}

export async function GET(_req: NextRequest, ctx: RouteContext) {
  const { site, entity, slug } = await ctx.params;

  if (![site, entity, slug].every(okToken)) return badParams();

  const client = admin();
  const { data, error } = await client
    .from("site_reviews")
    .select("id,rating,display_name,body,created_at")
    .eq("site_slug", site)
    .eq("entity_type", entity)
    .eq("entity_slug", slug)
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ reviews: data ?? [] });
}

export async function POST(req: NextRequest, ctx: RouteContext) {
  const { site, entity, slug } = await ctx.params;

  if (![site, entity, slug].every(okToken)) return badParams();

  const payload = (await req.json().catch(() => null)) as
    | { rating?: number; displayName?: string; body?: string; hp?: string }
    | null;

  if (!payload) return NextResponse.json({ error: "Bad JSON" }, { status: 400 });

  // Honeypot: if filled, silently accept (spam)
  if (payload.hp && payload.hp.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const rating = Number(payload.rating);
  const displayName = (payload.displayName ?? "").trim();
  const text = (payload.body ?? "").trim();

  if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Rating must be 1–5" }, { status: 400 });
  }
  if (displayName.length < 2 || displayName.length > 40) {
    return NextResponse.json({ error: "Name must be 2–40 chars" }, { status: 400 });
  }
  if (text.length < 20 || text.length > 1200) {
    return NextResponse.json({ error: "Review must be 20–1200 chars" }, { status: 400 });
  }

  const client = admin();
  const { error } = await client.from("site_reviews").insert({
    site_slug: site,
    entity_type: entity,
    entity_slug: slug,
    rating,
    display_name: displayName,
    body: text,
    status: "pending",
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({
    ok: true,
    message: "Thanks — your review is submitted and will appear once approved.",
  });
}
