"use client";

import React, { useState } from "react";

export default function SignupFormClient({ category }: { category: string }) {
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({
    business: "",
    contact: "",
    email: "",
    phone: "",
    service: category || "",
    featured: "no",
    notes: "",
  });

  function update(k: string, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("ok");
      } else {
        setStatus("error");
        console.error(data);
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-2">
      <input required placeholder="Business name" value={form.business} onChange={(e)=>update("business", e.target.value)} className="border rounded p-2" />
      <input placeholder="Contact name" value={form.contact} onChange={(e)=>update("contact", e.target.value)} className="border rounded p-2" />
      <input required type="email" placeholder="Email" value={form.email} onChange={(e)=>update("email", e.target.value)} className="border rounded p-2" />
      <input placeholder="Phone" value={form.phone} onChange={(e)=>update("phone", e.target.value)} className="border rounded p-2" />
      <select value={form.featured} onChange={(e)=>update("featured", e.target.value)} className="border rounded p-2">
        <option value="no">Basic listing (free)</option>
        <option value="yes">Featured (paid)</option>
      </select>
      <textarea placeholder="Short description" value={form.notes} onChange={(e)=>update("notes", e.target.value)} className="border rounded p-2"></textarea>
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
