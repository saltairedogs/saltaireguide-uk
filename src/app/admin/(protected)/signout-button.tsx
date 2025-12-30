// src/app/admin/(protected)/signout-button.tsx
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type Props = {
  className?: string;
  redirectTo?: string; // default: /admin/login
};

export default function AdminSignOutButton({
  className = "",
  redirectTo = "/admin/login",
}: Props) {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSignOut() {
    if (busy) return; // idempotent guard
    setErr(null);
    setBusy(true);

    try {
      const { error } = await supabase.auth.signOut();

      // Even if Supabase errors, we still force a local redirect because:
      // - cookies can be partially cleared
      // - server will re-check and bounce if session still exists
      if (error) {
        setErr(error.message);
      }

      router.replace(redirectTo);
      router.refresh();
    } catch (e: any) {
      setErr(e?.message || "Sign out failed.");
      router.replace(redirectTo);
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col items-stretch gap-2">
      <button
        type="button"
        disabled={busy}
        onClick={onSignOut}
        aria-busy={busy}
        className={
          "inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f3d2e] px-3 py-2 text-[13px] font-semibold text-white shadow-sm hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 " +
          className
        }
      >
        {busy ? (
          <>
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
              aria-hidden="true"
            />
            Signing out…
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M10 17l1 1a2 2 0 0 0 2 0l1-1" />
              <path d="M8 7V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
              <path d="M2 12h10" />
              <path d="M6 8l-4 4 4 4" />
            </svg>
            Sign out
          </>
        )}
      </button>

      {err ? (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[12px] text-amber-900">
          Sign out warning: {err}
        </div>
      ) : null}
    </div>
  );
}
