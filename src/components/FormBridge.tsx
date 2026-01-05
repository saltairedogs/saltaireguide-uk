"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FORM_TOKEN, DEFAULT_REDIRECT } from "@/lib/forms";

type Props = {
  formName: string;
  redirect?: string; // override default thanks page
  action?: string; // override endpoint if ever needed
  path?: string; // explicit path; otherwise auto-fill from location
  children: React.ReactNode; // form controls
  className?: string;
  noValidate?: boolean;
  method?: "POST" | "GET";
  target?: string;
  encType?: string; // e.g., "multipart/form-data" for file uploads
  noRedirect?: boolean; // when true, prevent native submit and post via fetch with inline status
  showStatus?: boolean; // render a status line below the form
};

export default function FormBridge({
  formName,
  redirect = DEFAULT_REDIRECT,
  action = "/api/submit-form",
  path,
  children,
  className,
  noValidate,
  method = "POST",
  target,
  encType,
  noRedirect = true,
  showStatus = true,
}: Props) {
  const router = useRouter();
  const startedAtRef = useRef<HTMLInputElement | null>(null);
  const pathRef = useRef<HTMLInputElement | null>(null);
  const id = useId(); // unique ids if needed
  const websiteRef = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
    if (!path && pathRef.current) {
      try {
        pathRef.current.value = (window.location?.pathname || "") + (window.location?.hash || "");
      } catch {}
    }
  }, [path]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!noRedirect) return; // let native submission proceed
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const currentPath = pathRef.current?.value || path || "";
    fd.set("formName", formName);
    fd.set("token", FORM_TOKEN);
    fd.set("redirect", redirect);
    fd.set("path", currentPath);
    fd.set("started_at", startedAtRef.current?.value || String(Date.now()));
    fd.set("website", websiteRef.current?.value || "");

    try {
      const res = await fetch(action, { method: "POST", body: fd });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("done");
      formEl.reset();
      if (websiteRef.current) websiteRef.current.value = "";
      if (startedAtRef.current) startedAtRef.current.value = String(Date.now());

      // Redirect after successful submission
      if (data.redirect) {
        setTimeout(() => router.push(data.redirect), 1500);
      }
    } catch (err) {
      console.error("FormBridge submit failed", err);
      setStatus("error");
    }
  }

  return (
    <form
      action={action}
      method={method}
      noValidate={noValidate}
      className={className}
      target={target}
      encType={encType}
      onSubmit={onSubmit}
    >
      {/* required hidden fields */}
      <input type="hidden" name="formName" value={formName} />
      <input type="hidden" name="token" value={FORM_TOKEN} />
      <input type="hidden" name="redirect" value={redirect} />
      <input ref={pathRef} type="hidden" name="path" value={path} />

      {/* anti-spam */}
      <input ref={websiteRef} type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input ref={startedAtRef} type="hidden" name="started_at" />

      {children}

      {showStatus ? (
        <p className="mt-2 text-xs text-gray-600" role="status" aria-live="polite">
          {status === "submitting"
            ? "Submitting…"
            : status === "done"
            ? "Submitted — thank you!"
            : status === "error"
            ? "Something went wrong. Please try again."
            : ""}
        </p>
      ) : null}
    </form>
  );
}
