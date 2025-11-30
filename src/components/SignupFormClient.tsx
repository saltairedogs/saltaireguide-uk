"use client";

import { useEffect, useRef, useState } from "react";
import { WEB_APP_URL, FORM_TOKEN, DEFAULT_REDIRECT } from "@/lib/forms";

export default function SignupFormClient({ category }: { category: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [path, setPath] = useState("");
  const [startedAt, setStartedAt] = useState<number>(() => Date.now());
  const honeypotRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      setPath((window.location?.pathname || "") + (window.location?.hash || ""));
    } catch {}
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const nextPath = path || (window.location?.pathname || "") + (window.location?.hash || "");

    formData.set("formName", "Listings: request");
    formData.set("token", FORM_TOKEN);
    formData.set("redirect", DEFAULT_REDIRECT);
    formData.set("path", nextPath);
    formData.set("started_at", String(startedAt));
    formData.set("website", honeypotRef.current?.value || "");

    try {
      await fetch(WEB_APP_URL, { method: "POST", body: formData, mode: "no-cors" });
      setStatus("ok");
      formEl.reset();
      if (honeypotRef.current) honeypotRef.current.value = "";
      setStartedAt(Date.now());
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-2" noValidate>
      <input type="hidden" name="formName" value="Listings: request" readOnly />
      <input type="hidden" name="token" value={FORM_TOKEN} readOnly />
      <input type="hidden" name="redirect" value={DEFAULT_REDIRECT} readOnly />
      <input type="hidden" name="path" value={path} readOnly />
      <input type="hidden" name="started_at" value={String(startedAt)} readOnly />
      <input type="hidden" name="service" value={category} readOnly />
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <input name="business" required placeholder="Business name" className="border rounded p-2" />
      <input name="contact" placeholder="Contact name" className="border rounded p-2" />
      <input name="email" required type="email" placeholder="Email" className="border rounded p-2" />
      <input name="phone" placeholder="Phone" className="border rounded p-2" />
      <select name="featured" defaultValue="no" className="border rounded p-2">
        <option value="no">Basic listing (free)</option>
        <option value="yes">Featured (paid)</option>
      </select>
      <textarea name="notes" placeholder="Short description" className="border rounded p-2"></textarea>
      <div>
        <button type="submit" className="px-4 py-2 rounded bg-sky-600 text-white">
          {status === "sending" ? "Sending…" : "Request listing"}
        </button>
        {status === "ok" && <span className="ml-3 text-green-600">Sent — we will reply</span>}
        {status === "error" && <span className="ml-3 text-red-600">Error — try again</span>}
      </div>
    </form>
  );
}
