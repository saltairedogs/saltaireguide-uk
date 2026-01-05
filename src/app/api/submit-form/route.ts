// src/app/api/submit-form/route.ts
import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { FORM_TOKEN } from "@/lib/forms";

export const runtime = "nodejs";

/**
 * Universal form submission endpoint that saves to Supabase.
 * Replaces Google Apps Script for all FormBridge submissions.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Anti-spam checks
    const token = formData.get("token")?.toString();
    const website = formData.get("website")?.toString();
    const startedAt = formData.get("started_at")?.toString();

    // Token validation
    if (token !== FORM_TOKEN) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    // Honeypot check
    if (website && website.trim() !== "") {
      console.warn("[submit-form] Honeypot triggered, likely spam");
      return NextResponse.json({ ok: true }); // Return success but don't save
    }

    // Speed check (basic bot detection)
    if (startedAt) {
      const started = parseInt(startedAt, 10);
      const now = Date.now();
      if (!isNaN(started) && now - started < 2000) {
        console.warn("[submit-form] Form submitted too quickly, possible bot");
        return NextResponse.json({ ok: true }); // Return success but don't save
      }
    }

    // Extract form data
    const formName = formData.get("formName")?.toString() || "unknown";
    const path = formData.get("path")?.toString() || "";
    const redirect = formData.get("redirect")?.toString() || "/thanks";

    // Build data object from all form fields
    const data: Record<string, any> = {
      form_name: formName,
      path,
      redirect,
      submitted_at: new Date().toISOString(),
    };

    // Extract all other fields (excluding internal ones)
    const skipFields = new Set(["formName", "token", "redirect", "path", "started_at", "website"]);

    for (const [key, value] of formData.entries()) {
      if (!skipFields.has(key)) {
        data[key] = value.toString();
      }
    }

    // Save to Supabase
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase
      .from("saltaireguide_form_submissions")
      .insert({
        form_name: formName,
        path,
        data,
        user_agent: request.headers.get("user-agent") || null,
        ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || null,
      });

    if (error) {
      console.error("[submit-form] Supabase insert failed:", error);
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 500 }
      );
    }

    // Return success with redirect URL
    return NextResponse.json({
      ok: true,
      redirect
    });

  } catch (err) {
    console.error("[submit-form] Unexpected error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
