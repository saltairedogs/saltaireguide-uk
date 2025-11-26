"use client";

import { useEffect, useState } from "react";
import { WEB_APP_URL, FORM_TOKEN, DEFAULT_REDIRECT } from "@/lib/forms";

const WHATSAPP_LINK = "https://chat.whatsapp.com/Iv6KTDzUSwX87LfzWN1ZkR";

export default function WhatsappPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.set("formName", "WhatsApp join request");
    formData.set("token", FORM_TOKEN);
    formData.set("redirect", DEFAULT_REDIRECT);
    formData.set("path", window.location.pathname + window.location.hash);
    formData.set("started_at", String(Date.now()));
    formData.set("website", "");

    try {
      await fetch(WEB_APP_URL, { method: "POST", body: formData, mode: "no-cors" });
      setStatus("done");
      form.reset();
    } catch (err) {
      console.error("WhatsApp popup submit failed", err);
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 z-[12000] flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-stone-600/70 bg-stone-950/90 p-5 text-stone-50 shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/90">
          WhatsApp group
        </p>
        <h2 className="mt-2 text-lg font-semibold tracking-tight">Join the Saltaire WhatsApp group</h2>
        <p className="mt-2 text-sm text-stone-200/90">
          Chat about walks, cafés and daily life in and around Saltaire. Choose how you'd like to join:
        </p>

        <div className="mt-4 space-y-3 text-sm">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Open WhatsApp group
          </a>

          <div className="text-center text-xs text-stone-300">or leave your number to be added</div>

          <form onSubmit={onSubmit} className="space-y-2" noValidate>
            <label className="block text-xs text-stone-200" htmlFor="whatsapp_phone">
              Mobile number (including country code)
            </label>
            <input
              id="whatsapp_phone"
              name="phone"
              type="tel"
              inputMode="tel"
              pattern="[0-9+ ]*"
              className="w-full rounded-xl border border-stone-600 bg-stone-900/80 px-3 py-2 text-sm text-stone-50 outline-none ring-0 focus:border-amber-400"
              placeholder="e.g. +44 7424 208127"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-1 inline-flex w-full items-center justify-center rounded-xl border border-stone-500 bg-stone-900 px-4 py-2 text-sm font-semibold text-stone-50 shadow-sm transition hover:bg-stone-800 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send number"}
            </button>
            <p className="text-center text-[11px] text-stone-400">
              {status === "done"
                ? "Thanks — we'll add you as soon as we can."
                : status === "error"
                ? "Something went wrong. Please try again."
                : "We only use this to add you to the group."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
