import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const host = req.headers.get('host') || ''

  // Skip canonical redirects in local/dev to avoid forcing HTTPS on localhost
  const isDev = process.env.NODE_ENV !== 'production'
  const isLocal = host.startsWith('localhost') || host.startsWith('127.0.0.1')
  if (isDev || isLocal) {
    return NextResponse.next()
  }

  // Enforce apex + HTTPS in production
  const isWWW = host.startsWith('www.')
  const isHttp = url.protocol === 'http:'
  if (isWWW || isHttp) {
    const newHost = isWWW ? host.slice(4) : host
    url.host = newHost
    url.protocol = 'https'
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

// Don’t run on static asset paths
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
