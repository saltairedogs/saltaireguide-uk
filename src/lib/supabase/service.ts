// src/lib/supabase/service.ts
import { createClient } from "@supabase/supabase-js";

/**
 * Service-role Supabase client (SERVER ONLY).
 *
 * - Uses SUPABASE_SERVICE_ROLE_KEY (never NEXT_PUBLIC)
 * - Bypasses RLS (this is why it must only be used in Route Handlers / Server Actions)
 * - Do NOT import this in client components.
 */

const DEBUG =
  process.env.NODE_ENV !== "production" &&
  (process.env.SUPABASE_DEBUG === "1" || process.env.SUPABASE_DEBUG === "true");

function requireEnv(name: "NEXT_PUBLIC_SUPABASE_URL" | "SUPABASE_SERVICE_ROLE_KEY"): string {
  const v = process.env[name];
  if (!v || !String(v).trim()) {
    throw new Error(`Missing ${name}. Set it in .env.local (dev) / Vercel env (prod).`);
  }
  return v;
}

function assertLooksLikeUrl(url: string) {
  try {
    // eslint-disable-next-line no-new
    new URL(url);
  } catch {
    throw new Error(
      `NEXT_PUBLIC_SUPABASE_URL is not a valid URL. Got: "${url}". Expected "https://<project-ref>.supabase.co".`
    );
  }
}

// Keep a single instance per server runtime.
declare global {
  // eslint-disable-next-line no-var
  var __supabaseServiceClient: ReturnType<typeof createClient> | undefined;
}

export function createSupabaseServiceClient<TDatabase = any>() {
  if (globalThis.__supabaseServiceClient) return globalThis.__supabaseServiceClient as any;

  const url = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
  const serviceKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
  assertLooksLikeUrl(url);

  const client = createClient<TDatabase>(url, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  if (DEBUG) {
    // eslint-disable-next-line no-console
    console.warn("[supabase/service] service client initialised (server-only)");
  }

  globalThis.__supabaseServiceClient = client as any;
  return client as any;
}
