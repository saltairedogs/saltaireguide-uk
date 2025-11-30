"use client"

import { useEffect, useRef } from "react"

const WHATSAPP_LINK = "https://chat.whatsapp.com/Iv6KTDzUSwX87LfzWN1ZkR"

export default function AnnouncementBar({ href = WHATSAPP_LINK }: { href?: string }) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  // Measure height + respect reduced motion
  useEffect(() => {
    if (typeof window === "undefined") return
    const docEl = document.documentElement

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) docEl.setAttribute("data-reduced-motion", "1")

    const updateVar = () => {
      const h = rootRef.current ? rootRef.current.offsetHeight : 0
      docEl.style.setProperty("--banner-h", `${h}px`)
    }

    updateVar()
    const ro = new ResizeObserver(updateVar)
    if (rootRef.current) ro.observe(rootRef.current)
    window.addEventListener("resize", updateVar)

    return () => {
      ro.disconnect()
      window.removeEventListener("resize", updateVar)
      docEl.style.setProperty("--banner-h", "0px")
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="banner-enter sticky top-0 z-50 border-b border-stone-200/80 bg-amber-50/80 text-stone-900 backdrop-blur supports-[backdrop-filter]:bg-amber-50/70"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm">
        {/* Icon */}
        <span
          aria-hidden="true"
          className="hidden h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-[13px] text-amber-900 ring-1 ring-stone-300 sm:flex"
        >
          💬
        </span>

        {/* Copy */}
        <p className="flex-1 truncate text-[11px] text-stone-800 sm:text-xs">
          <span className="font-semibold tracking-[0.18em] text-amber-900 uppercase mr-2">
            Saltaire WhatsApp
          </span>
          <span className="text-stone-800">
            We have a small WhatsApp group for locals &amp; regulars who like talking about walks, cafés and daily life.
          </span>
        </p>

        {/* CTA */}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap rounded-full border border-amber-900/80 bg-amber-50 px-3 py-1.5 text-[11px] font-semibold text-amber-950 shadow-sm transition hover:bg-amber-900 hover:text-amber-50"
        >
          Join WhatsApp →
        </a>
      </div>

      <style jsx>{`
        .banner-enter {
          animation: banner-enter 200ms ease-out;
        }
        :global(html[data-reduced-motion='1']) .banner-enter {
          animation: none;
        }
        @keyframes banner-enter {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
