// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";

  const isDev = process.env.NODE_ENV !== "production";
  const isLocal = host.startsWith("localhost") || host.startsWith("127.0.0.1");

  // Decide response first (so we can attach any Supabase cookie updates to it).
  let res: NextResponse;

  if (isDev || isLocal) {
    // No forced HTTPS / apex on localhost or non-prod, but DO NOT early-return.
    res = NextResponse.next();
  } else {
    // Enforce apex + HTTPS in production
    const isWWW = host.startsWith("www.");
    const isHttp =
      req.headers.get("x-forwarded-proto") === "http" || url.protocol === "http:";

    if (isWWW || isHttp) {
      const newHost = isWWW ? host.slice(4) : host;
      url.host = newHost;
      url.protocol = "https";
      res = NextResponse.redirect(url, 308);
    } else {
      res = NextResponse.next();
    }
  }

  // Supabase SSR session refresh (always run, even in dev/local).
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseAnonKey) {
    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
        },
      },
    });

    // This call triggers refresh when needed. Do not remove.
    await supabase.auth.getUser();
  }

  return res;
}

// Don’t run on static asset paths
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
