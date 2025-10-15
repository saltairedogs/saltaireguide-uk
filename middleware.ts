import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const host = req.headers.get('host') || ''

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
