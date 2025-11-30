"use client";

import { useEffect, useRef, useState } from "react";
import { WEB_APP_URL, FORM_TOKEN, DEFAULT_REDIRECT } from "@/lib/forms";

const WHATSAPP_LINK = "https://chat.whatsapp.com/Iv6KTDzUSwX87LfzWN1ZkR";

export default function WhatsappPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] =
    useState<"idle" | "submitting" | "done" | "error">("idle");
  const [path, setPath] = useState("");
  const [startedAt, setStartedAt] = useState<number>(() => Date.now());
  const honeypotRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Show only AFTER user chooses a cookie option, then wait 10s
    let scheduled = false;
    function onConsent(_e: Event) {
      if (scheduled) return;
      scheduled = true;
      const delayMs = 10_000;
      const timer = setTimeout(() => setOpen(true), delayMs);
      // Store timer id on window to clear if needed
      (window as any).__sg_wp_timer = timer;
    }

    window.addEventListener('sg:consent-chosen', onConsent);
    return () => {
      window.removeEventListener('sg:consent-chosen', onConsent);
      const t = (window as any).__sg_wp_timer as number | undefined;
      if (t) clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    try {
      setPath((window.location?.pathname || "") + (window.location?.hash || ""));
    } catch {}
  }, []);

  if (!open) return null;

  function hidePopup() {
    setOpen(false);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const nextPath = path || (window.location?.pathname || "") + (window.location?.hash || "");
    formData.set("formName", "WhatsApp join request");
    formData.set("token", FORM_TOKEN);
    formData.set("redirect", DEFAULT_REDIRECT);
    formData.set("path", nextPath);
    formData.set("started_at", String(startedAt));
    formData.set("website", honeypotRef.current?.value || "");

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      setStatus("done");
      form.reset();
      if (honeypotRef.current) honeypotRef.current.value = "";
      setStartedAt(Date.now());
      hidePopup();
    } catch (err) {
      console.error("WhatsApp popup submit failed", err);
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 z-[12000] flex items-center justify-center bg-black/40 px-4">
      <div className="relative w-full max-w-sm rounded-2xl border border-stone-600/70 bg-stone-950/90 p-5 text-stone-50 shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-sm">
        <button
          type="button"
          aria-label="Close WhatsApp popup"
          onClick={hidePopup}
          className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-stone-600/80 bg-stone-900/80 text-xs text-stone-300 shadow-sm transition hover:bg-stone-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-300/80"
        >
          ×
        </button>

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200/90">
          WhatsApp
        </p>
        <h2 className="mt-2 text-lg font-semibold tracking-tight">
          A small Saltaire group on WhatsApp
        </h2>
        <p className="mt-2 text-sm text-stone-200/90">
          Walks, cafés, dogs and quiet village life. A couple of messages a
          week, no spam.
        </p>

        <div className="mt-4 space-y-3 text-sm">
          {/* Primary CTA – shown on all devices */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={hidePopup}
            className="flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Join the WhatsApp group
          </a>

          {/* Desktop: extra option to leave number */}
          <div className="hidden md:block">
            <div className="mt-2 text-center text-xs text-stone-300">
              or leave your number and we&apos;ll add you
            </div>

            <form onSubmit={onSubmit} className="mt-2 space-y-2" noValidate>
              <input type="hidden" name="formName" value="WhatsApp join request" />
              <input type="hidden" name="token" value={FORM_TOKEN} />
              <input type="hidden" name="redirect" value={DEFAULT_REDIRECT} />
              <input type="hidden" name="path" value={path} readOnly />
              <input type="hidden" name="started_at" value={String(startedAt)} readOnly />
              <input
                ref={honeypotRef}
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <label
                className="block text-xs text-stone-200"
                htmlFor="whatsapp_phone"
              >
                Your mobile (with country code)
              </label>
              <input
                id="whatsapp_phone"
                name="phone"
                type="tel"
                inputMode="tel"
                pattern="[0-9+ ]*"
                className="w-full rounded-xl border border-stone-600 bg-stone-900/80 px-3 py-2 text-sm text-stone-50 outline-none ring-0 focus:border-amber-400"
                placeholder="+44 7…"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-1 inline-flex w-full items-center justify-center rounded-xl border border-stone-500 bg-stone-900 px-4 py-2 text-sm font-semibold text-stone-50 shadow-sm transition hover:bg-stone-800 disabled:opacity-60"
              >
                {status === "submitting" ? "Adding you…" : "Add me to the group"}
              </button>
              <p className="text-center text-[11px] text-stone-400">
                {status === "error"
                  ? "Something went wrong. Please try again."
                  : "We only use this to add you to the Saltaire WhatsApp group."}
              </p>
            </form>
          </div>

          {/* All devices: easy way to dismiss */}
          <button
            type="button"
            onClick={hidePopup}
            className="w-full pt-1 text-center text-[11px] text-stone-400 underline underline-offset-2 hover:text-stone-200"
          >
            Not now, just show me the guide →
          </button>
        </div>
      </div>
    </div>
  );
}
