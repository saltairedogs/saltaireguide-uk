// src/app/admin/login/page.tsx
"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/admin";
  const forbidden = sp.get("forbidden") === "1";

  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setErr(error.message);
        return;
      }

      // Ensure server components see the new session
      router.replace(next);
      router.refresh();
    } catch (ex: any) {
      setErr(ex?.message || "Login failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-[70vh] bg-[#f6efe6] px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-stone-300/80 bg-white/90 p-6 shadow-sm">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600">
            Admin
          </div>
          <h1 className="mt-1 text-[22px] font-semibold text-stone-900">Sign in</h1>
          <p className="mt-2 text-[13px] text-stone-700">
            This area is restricted. Use your Supabase email/password user.
          </p>

          {forbidden ? (
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-[13px] text-amber-900">
              You are signed in, but you are not an admin in <code>profiles</code>.
            </div>
          ) : null}

          {err ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-[13px] text-red-900">
              {err}
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            <label className="block">
              <div className="text-[12px] font-semibold text-stone-700">Email</div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                inputMode="email"
                autoComplete="email"
                required
                className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-[14px] text-stone-900 outline-none focus:ring-2 focus:ring-[#c2410c]/25"
                placeholder="you@domain.com"
              />
            </label>

            <label className="block">
              <div className="text-[12px] font-semibold text-stone-700">Password</div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-[14px] text-stone-900 outline-none focus:ring-2 focus:ring-[#c2410c]/25"
                placeholder="••••••••••"
              />
            </label>

            <button
              disabled={busy}
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#c2410c] px-4 py-2 text-[14px] font-semibold text-white shadow-sm hover:opacity-95 disabled:opacity-60"
            >
              {busy ? "Signing in…" : "Sign in"}
            </button>

            <div className="text-[11px] text-stone-600">
              Redirect after login: <span className="font-medium text-stone-800">{next}</span>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
