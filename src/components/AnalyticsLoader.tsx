'use client'

import { useEffect, useState } from 'react'

type Props = { children: React.ReactNode }

export default function AnalyticsLoader({ children }: Props) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    let active = true
    async function check() {
      try {
        const res = await fetch('/api/consent', { method: 'GET', headers: { accept: 'application/json' } })
        if (!res.ok) return
        const data = await res.json()
        if (active && data?.consent?.analytics) setEnabled(true)
      } catch {
        // no-op
      }
    }
    check()
    return () => {
      active = false
    }
  }, [])

  if (!enabled) return null
  return <>{children}</>
}
