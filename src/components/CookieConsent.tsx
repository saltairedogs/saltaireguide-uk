'use client'

import { useEffect, useState } from 'react'
import type { Consent } from '@/lib/consent'

type Props = { initialConsent: Consent | null }

export default function CookieConsent({ initialConsent }: Props) {
  // Always show on page load / refresh
  const [open, setOpen] = useState<boolean>(true)
  const [saving, setSaving] = useState(false)

  // Lock scroll while the gate is open
  useEffect(() => {
    if (!open) return
    const originalOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = originalOverflow
    }
  }, [open])

  if (!open) return null

  async function acceptAll() {
    if (saving) return
    setSaving(true)
    try {
      await fetch('/api/consent', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ functional: true, analytics: true }),
        keepalive: true,
      })
      try {
        const ts = Date.now()
        localStorage.setItem('sg_consent_ts', String(ts))
        window.dispatchEvent(new CustomEvent('sg:consent-chosen', { detail: { ts, analytics: true, functional: true } }))
      } catch {}
      setOpen(false)
    } catch {
      // keep gate open on error
    } finally {
      setSaving(false)
    }
  }

  async function necessaryOnly() {
    if (saving) return
    setSaving(true)
    try {
      await fetch('/api/consent', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // No optional cookies
        body: JSON.stringify({ functional: false, analytics: false }),
        keepalive: true,
      })
      try {
        const ts = Date.now()
        localStorage.setItem('sg_consent_ts', String(ts))
        window.dispatchEvent(
          new CustomEvent('sg:consent-chosen', { detail: { ts, analytics: false, functional: false } })
        )
      } catch {}
      setOpen(false)
    } catch {
      // keep gate open on error
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="mx-3 w-full max-w-xl rounded-2xl border border-amber-500/60 bg-[rgba(38,24,16,0.98)] px-5 py-4 text-sm text-amber-50 shadow-[0_20px_45px_rgba(0,0,0,0.65)] sm:px-7 sm:py-6">
        <div className="space-y-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
              Cookies
            </div>
            <p className="mt-1 text-amber-100/95">
              We use cookies to run this site and to understand how it&apos;s used. You can keep only the necessary
              cookies, or accept all.
            </p>
          </div>

          <div className="rounded-xl border border-stone-600/70 bg-stone-900/40 p-3 text-xs text-amber-100/90">
            <p>
              <strong>Necessary:</strong> keep the site secure and working.
            </p>
            <p className="mt-1">
              <strong>Optional:</strong> help us improve the site and remember extra preferences.
            </p>
          </div>

          <a
            href="/legal/privacy#cookies"
            className="inline-block text-xs underline decoration-amber-300/80 underline-offset-4 hover:decoration-amber-100"
          >
            Privacy &amp; cookie details
          </a>

          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={necessaryOnly}
              disabled={saving}
              className="w-full rounded-lg border border-amber-400/60 bg-amber-900/20 px-4 py-2 text-center text-sm font-semibold text-amber-50 hover:bg-amber-900/40 disabled:opacity-60 sm:w-auto"
            >
              Necessary cookies only
            </button>
            <button
              type="button"
              onClick={acceptAll}
              disabled={saving}
              className="w-full rounded-lg bg-amber-600 px-4 py-2 text-center text-sm font-semibold text-amber-50 shadow hover:bg-amber-500 disabled:opacity-60 sm:w-auto"
            >
              {saving ? 'Saving…' : 'Accept all cookies'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
