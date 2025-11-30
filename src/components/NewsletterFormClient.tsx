"use client";

import { useEffect, useRef, useState } from "react";
import { WEB_APP_URL, FORM_TOKEN, DEFAULT_REDIRECT } from "@/lib/forms";

type Props = {
  formName?: string;
  className?: string;
};

export default function NewsletterFormClient({ formName = "Newsletter signup", className = "flex flex-col gap-3 md:flex-row" }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [path, setPath] = useState("");
  const [startedAt, setStartedAt] = useState<number>(() => Date.now());
  const honeypotRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      setPath((window.location?.pathname || "") + (window.location?.hash || ""));
    } catch {}
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Always prevent the browser from following any action/href
    e.preventDefault();
    e.stopPropagation();
    if (status === "submitting") return;
    setStatus("submitting");

    const form = e.currentTarget;
    // Ensure no action attribute can cause navigation
    if (form.hasAttribute("action")) {
      form.removeAttribute("action");
    }

    const formData = new FormData(form);
    const nextPath = path || (window.location?.pathname || "") + (window.location?.hash || "");

    formData.set("formName", formName);
    formData.set("token", FORM_TOKEN);
    formData.set("redirect", DEFAULT_REDIRECT);
    formData.set("path", nextPath);
    formData.set("started_at", String(startedAt));
    formData.set("website", honeypotRef.current?.value || ""); // honeypot field used by Apps Script

    try {
      // no-cors so we don't block on opaque response; network error will still throw
      await fetch(WEB_APP_URL, { method: "POST", body: formData, mode: "no-cors" });
      setStatus("done");
      form.reset();
      if (honeypotRef.current) honeypotRef.current.value = "";
      setStartedAt(Date.now());
    } catch (err) {
      console.error("Newsletter signup failed", err);
      setStatus("error");
    }
  }

  return (
    <form className={className} onSubmit={onSubmit} noValidate>
      <input type="hidden" name="formName" value={formName} readOnly />
      <input type="hidden" name="token" value={FORM_TOKEN} readOnly />
      <input type="hidden" name="redirect" value={DEFAULT_REDIRECT} readOnly />
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
      <label htmlFor="email" className="sr-only">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@domain.com"
        required
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none ring-0 focus:border-black"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90 disabled:opacity-60"
        aria-label="Subscribe to The Saltaire Weekend newsletter"
      >
        {status === "submitting" ? "Submitting…" : "Subscribe"}
      </button>
      <p className="text-xs text-gray-500 mt-1 md:mt-0 md:ml-3">
        {status === "done"
          ? "Signed up — thank you!"
          : status === "error"
          ? "Something went wrong. Please try again."
          : "Unsubscribe anytime."}
      </p>
    </form>
  );
}
