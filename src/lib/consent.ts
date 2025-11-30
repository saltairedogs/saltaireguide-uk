// No server cookie access required in current implementation; analytics gating is client-side.

export const CONSENT_COOKIE = 'sg_consent'
const CONSENT_VERSION = 1

export type Consent = {
  version: number
  necessary: true
  functional: boolean
  analytics: boolean
  marketing?: boolean
  timestamp: string
}

export function defaultConsent(): Consent {
  return {
    version: CONSENT_VERSION,
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
  }
}

export function parseConsent(raw: string | undefined | null): Consent | null {
  if (!raw) return null
  try {
    const obj = JSON.parse(raw) as Partial<Consent>
    if (!obj || typeof obj !== 'object') return null
    if (obj.version !== CONSENT_VERSION) return null
    if (obj.necessary !== true) return null
    return {
      version: CONSENT_VERSION,
      necessary: true,
      functional: Boolean(obj.functional),
      analytics: Boolean(obj.analytics),
      marketing: Boolean(obj.marketing),
      timestamp: typeof obj.timestamp === 'string' ? obj.timestamp : new Date().toISOString(),
    }
  } catch {
    return null
  }
}

// Server-only: read consent from request cookies
// Removed server-side readConsent to avoid Next.js 15 type error with async cookies() and preserve static rendering.

export function allow(category: 'analytics' | 'functional' | 'marketing', c: Consent | null): boolean {
  if (!c) return false
  if (category === 'marketing') return Boolean(c.marketing)
  if (category === 'functional') return Boolean(c.functional)
  if (category === 'analytics') return Boolean(c.analytics)
  return false
}

export function serializeConsent(input: Partial<Consent>): string {
  const base = defaultConsent()
  const merged: Consent = {
    ...base,
    functional: Boolean(input.functional ?? base.functional),
    analytics: Boolean(input.analytics ?? base.analytics),
    marketing: Boolean(input.marketing ?? base.marketing),
    timestamp: new Date().toISOString(),
  }
  return JSON.stringify(merged)
}
