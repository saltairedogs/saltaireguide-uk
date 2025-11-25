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
      role="region"
      aria-label="Announcement: join our Saltaire WhatsApp group"
      className="banner-enter sticky top-0 z-50 border-b border-stone-200/80 text-stone-900 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
      style={{
        background:
          "linear-gradient(to right, hsl(36 40% 96%), hsl(34 38% 95%), hsl(36 40% 96%))",
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center gap-3 py-2.5 sm:py-3">
          {/* Icon + copy */}
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-[13px] text-amber-900 ring-1 ring-stone-300"
            >
              💬
            </span>
            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-900 sm:text-[11px]">
                Saltaire locals WhatsApp
              </p>
              <p className="mt-0.5 line-clamp-2 text-xs text-stone-800 sm:text-sm">
                Join our WhatsApp group to chat with Saltaire &amp; nearby locals about walks,
                cafés, events and daily life.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center rounded-full border border-amber-900/80 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-950 shadow-sm transition hover:bg-amber-100 hover:shadow-md sm:px-4 sm:py-2 sm:text-sm"
            >
              <span className="whitespace-nowrap">Join WhatsApp</span>
              <span
                aria-hidden="true"
                className="ml-1.5 text-[11px] transition-transform group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .banner-enter {
          animation: banner-enter 220ms ease-out;
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
