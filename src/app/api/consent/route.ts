import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { CONSENT_COOKIE, serializeConsent, parseConsent } from '@/lib/consent'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const payload = {
      functional: Boolean(body?.functional),
      analytics: Boolean(body?.analytics),
      marketing: Boolean(body?.marketing),
    }
    const value = serializeConsent(payload)

    const res = NextResponse.json({ ok: true, consent: parseConsent(value) })
    res.cookies.set(CONSENT_COOKIE, value, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 180, // ~6 months
    })
    return res
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}

export async function GET(req: NextRequest) {
  const raw = req.cookies.get(CONSENT_COOKIE)?.value
  const consent = parseConsent(raw)
  return NextResponse.json({ ok: true, consent })
}
