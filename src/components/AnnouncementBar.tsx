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
      role="button"
      aria-label="Join our Saltaire WhatsApp group"
      className="banner-enter sticky top-0 z-50 cursor-pointer border-b border-stone-200/80 text-stone-900 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
      style={{
        background:
          "linear-gradient(to right, hsl(36 40% 96%), hsl(34 38% 95%), hsl(36 40% 96%))",
      }}
      onClick={() => window.open(href, "_blank", "noreferrer")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.open(href, "_blank", "noreferrer");
        }
      }}
      tabIndex={0}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-1.5 sm:px-4 sm:py-2">
        {/* Icon (fixed) */}
        <span
          aria-hidden="true"
          className="hidden h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-[13px] text-amber-900 ring-1 ring-stone-300 sm:flex"
        >
          💬
        </span>

        {/* Desktop marquee */}
        <div className="relative hidden flex-1 overflow-hidden sm:block">
          <div className="marquee flex min-w-full flex-nowrap items-center gap-8">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-xs font-medium text-stone-900 sm:text-sm"
              >
                <span className="rounded-full bg-amber-900/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-900">
                  Saltaire WhatsApp
                </span>
                <span>Join our group to talk about walks, daily life and more.</span>
              </span>
            ))}
          </div>
        </div>

        {/* Desktop side CTA to visually balance right edge */}
        <div className="hidden items-center sm:flex">
          <span className="inline-flex items-center justify-center rounded-full border border-amber-900/80 bg-amber-50 px-3 py-1.5 text-[11px] font-semibold text-amber-950 shadow-sm">
            Join WhatsApp
          </span>
        </div>

        {/* Mobile simple CTA */}
        <div className="flex flex-1 items-center justify-between gap-3 sm:hidden">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-900">
              Saltaire WhatsApp
            </p>
            <p className="mt-0.5 text-xs text-stone-800">
              Join our group to talk about walks, daily life and more.
            </p>
          </div>
          <span className="inline-flex items-center justify-center rounded-full border border-amber-900/80 bg-amber-50 px-3 py-1.5 text-[11px] font-semibold text-amber-950 shadow-sm">
            Join
          </span>
        </div>
      </div>

      <style jsx>{`
        .banner-enter {
          animation: banner-enter 220ms ease-out;
        }
        :global(html[data-reduced-motion='1']) .banner-enter {
          animation: none;
        }
        .marquee {
          animation: marquee-scroll 26s linear infinite;
        }
        :global(html[data-reduced-motion='1']) .marquee {
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
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  )
}
