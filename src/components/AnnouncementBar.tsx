"use client"

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function AnnouncementBar({ href = '/for-business/free-audit-free-listing' }: { href?: string }) {
  const [open, setOpen] = useState(true)
  const copy = 'Click to Claim Your FREE Business Listing'
  const rootRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const hide = pathname?.startsWith('/for-business/free-audit-free-listing')

  // Respect users who prefer reduced motion
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) document.documentElement.setAttribute('data-reduced-motion', '1')

    // If hidden (target page) or closed, force 0 height and skip observers
    if (hide || !open) {
      document.documentElement.style.setProperty('--banner-h', '0px')
      return () => {
        document.documentElement.style.setProperty('--banner-h', '0px')
      }
    }

    const updateVar = () => {
      const h = rootRef.current ? rootRef.current.offsetHeight : 0
      document.documentElement.style.setProperty('--banner-h', `${h}px`)
    }
    updateVar()
    const ro = new ResizeObserver(updateVar)
    if (rootRef.current) ro.observe(rootRef.current)
    window.addEventListener('resize', updateVar)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', updateVar)
      document.documentElement.style.setProperty('--banner-h', '0px')
    }
  }, [open, hide])

  if (!open || hide) return null

  return (
    <div
      role="region"
      aria-label="Announcement: claim your free listing today"
      className="sticky top-0 z-50 border-b"
      style={{ background: 'hsl(40 35% 96%)', borderColor: 'hsl(var(--border))' }}
      ref={rootRef}
    >
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Clickable marquee link */}
        <Link
          href={href}
          aria-label="Go to free listing form"
          className="no-underline block"
          style={{ color: 'hsl(var(--accent))', fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          <div className="scroller h-8 overflow-hidden pr-28">
            <div className="track flex items-center justify-center gap-10 text-sm font-semibold">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={`t1-${i}`} className="whitespace-nowrap underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-200 hover:decoration-black">
                  {copy}
                </span>
              ))}
            </div>
            <div className="track mirror flex items-center justify-center gap-10 text-sm font-semibold" aria-hidden>
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={`t2-${i}`} className="whitespace-nowrap underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-200 hover:decoration-black">
                  {copy}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* Right fade to keep close control readable */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0), hsl(40 35% 96%))' }}
        />

        {/* Dismiss control */}
        <button
          type="button"
          aria-label="Dismiss announcement"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-xs font-semibold text-[hsl(var(--ink))] px-2 py-1 rounded-full border hover:shadow-sm"
          style={{ background: 'hsl(40 35% 96% / 0.95)', borderColor: 'hsl(var(--border))' }}
          onClick={() => {
            setOpen(false)
            if (typeof document !== 'undefined') document.documentElement.style.setProperty('--banner-h', '0px')
          }}
        >
          Close this ad →
        </button>
      </div>
      <style jsx>{`
        .scroller { display: grid; grid-auto-rows: 2rem; align-items: center; }
  .track { width: max-content; animation: scroll-left 40s linear infinite; }
  .mirror { animation-delay: 20s; }
        :global(html[data-reduced-motion='1']) .track { animation: none; }
        .track:hover { animation-play-state: paused; }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}
