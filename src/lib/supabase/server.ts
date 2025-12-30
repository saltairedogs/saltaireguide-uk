// src/lib/supabase/server.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Server-side Supabase client (ANON key only).
 *
 * Supports:
 * - Server Components (cookie writes may throw -> best-effort)
 * - Route Handlers / Server Actions (cookie writes allowed)
 *
 * Important:
 * - This MUST be async on Next versions where `cookies()` is async.
 * - Middleware should still be responsible for refresh, but we attempt writes when allowed.
 */

/** Toggle noisy diagnostics without leaking secrets. */
const DEBUG =
  process.env.NODE_ENV !== "production" &&
  (process.env.SUPABASE_DEBUG === "1" || process.env.SUPABASE_DEBUG === "true");

function logDebug(message: string, meta?: Record<string, unknown>) {
  if (!DEBUG) return;
  // Never log secrets. Meta must be safe.
  // eslint-disable-next-line no-console
  console.warn(`[supabase/server] ${message}`, meta ?? "");
}

function requireEnv(name: "NEXT_PUBLIC_SUPABASE_URL" | "NEXT_PUBLIC_SUPABASE_ANON_KEY"): string {
  const v = process.env[name];
  if (!v || !String(v).trim()) {
    // Fail fast, fail loud. This saves hours of “it redirects randomly” debugging.
    throw new Error(
      `Missing ${name}. Set it in your environment (.env.local for dev, Vercel env for prod).`
    );
  }
  return v;
}

function assertLooksLikeUrl(url: string) {
  try {
    // Basic sanity check. Not perfect, but catches common copy/paste mistakes.
    // eslint-disable-next-line no-new
    new URL(url);
  } catch {
    throw new Error(
      `NEXT_PUBLIC_SUPABASE_URL is not a valid URL. Got: "${url}". Expected "https://<project-ref>.supabase.co".`
    );
  }
}

type CookieSet = { name: string; value: string; options?: Parameters<Awaited<ReturnType<typeof cookies>>["set"]>[2] };

export async function createSupabaseServerClient<TDatabase = any>() {
  const supabaseUrl = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
  const supabaseAnonKey = requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");
  assertLooksLikeUrl(supabaseUrl);

  // Next requires awaiting cookies() in newer versions.
  const cookieStore = await cookies();

  const client = createServerClient<TDatabase>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        const all = cookieStore.getAll();
        logDebug("cookies.getAll()", { count: all.length });
        return all;
      },

      setAll(cookiesToSet: CookieSet[]) {
        // “Best effort” because Server Components can be read-only.
        // Route Handlers / Actions should succeed.
        try {
          for (const c of cookiesToSet) {
            cookieStore.set(c.name, c.value, c.options);
          }
          logDebug("cookies.setAll()", { count: cookiesToSet.length });
        } catch (err) {
          // Don’t crash the request. Middleware is primary refresh mechanism.
          // But DO log in debug to avoid silent failure in dev.
          logDebug("cookies.setAll() blocked (likely Server Component read-only context)", {
            error: err instanceof Error ? err.message : String(err),
            count: cookiesToSet.length,
          });
        }
      },
    },
  });

  return client;
}
