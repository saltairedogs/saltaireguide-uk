import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EXPECTED_ADMIN_ID = "b47920db-2835-452d-9534-abca1029a148";

export async function GET() {
  // If your createSupabaseServerClient is async, this is correct.
  // If it's sync, remove await.
  const supabase: any = await (createSupabaseServerClient as any)();

  const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? null;
  const projectRef = envUrl ? new URL(envUrl).host.split(".")[0] : null;

  const {
    data: { user },
    error: userErr,
  } = await supabase.auth.getUser();

  const profileForCurrentUser =
    user?.id
      ? await supabase.from("profiles").select("id,email,role").eq("id", user.id).maybeSingle()
      : { data: null, error: null };

  const profileForExpectedAdminId = await supabase
    .from("profiles")
    .select("id,email,role")
    .eq("id", EXPECTED_ADMIN_ID)
    .maybeSingle();

  return NextResponse.json({
    projectRef,
    envUrl,
    auth: {
      user: user ? { id: user.id, email: user.email } : null,
      error: userErr?.message ?? null,
    },
    profileForCurrentUser: {
      data: profileForCurrentUser.data ?? null,
      error: profileForCurrentUser.error?.message ?? null,
    },
    profileForExpectedAdminId: {
      data: profileForExpectedAdminId.data ?? null,
      error: profileForExpectedAdminId.error?.message ?? null,
    },
  });
}
