"use client";

import { useEffect, useId, useRef } from "react";
import { WEB_APP_URL, FORM_TOKEN, DEFAULT_REDIRECT } from "@/lib/forms";

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
};

export default function FormBridge({
  formName,
  redirect = DEFAULT_REDIRECT,
  action = WEB_APP_URL,
  path,
  children,
  className,
  noValidate,
  method = "POST",
  target,
  encType,
}: Props) {
  const startedAtRef = useRef<HTMLInputElement | null>(null);
  const pathRef = useRef<HTMLInputElement | null>(null);
  const id = useId(); // unique ids if needed

  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
    if (!path && pathRef.current) {
      try {
        pathRef.current.value = (window.location?.pathname || "") + (window.location?.hash || "");
      } catch {}
    }
  }, [path]);

  return (
    <form action={action} method={method} noValidate={noValidate} className={className} target={target} encType={encType}>
      {/* required hidden fields */}
      <input type="hidden" name="formName" value={formName} />
      <input type="hidden" name="token" value={FORM_TOKEN} />
      <input type="hidden" name="redirect" value={redirect} />
      <input ref={pathRef} type="hidden" name="path" value={path} />

      {/* anti-spam */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input ref={startedAtRef} type="hidden" name="started_at" />

      {children}
    </form>
  );
}
