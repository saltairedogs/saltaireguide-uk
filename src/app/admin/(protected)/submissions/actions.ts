// src/app/admin/(protected)/submissions/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/auth/require-admin";

const ALLOWED = new Set(["pending", "approved", "denied"]);

export async function setSubmissionStatus(formData: FormData) {
  const id = String(formData.get("id") || "").trim();
  const status = String(formData.get("status") || "").trim();

  if (!id) throw new Error("Missing submission id.");
  if (!ALLOWED.has(status)) throw new Error("Invalid status.");

  await requireAdmin("/admin/submissions");

  const supabase = createSupabaseServerClient();

  const { error } = await (await supabase)
    .from("business_submissions")
    .update({ status })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/submissions");
}
