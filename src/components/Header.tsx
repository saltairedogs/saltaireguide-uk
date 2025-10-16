"use client"

import Link from "next/link"
import React from "react"
import { createPortal } from "react-dom"

type NavItem = { name: string; href: string; mdUp?: boolean }

const MAIN_NAV: NavItem[] = [
  { name: "Visit", href: "/visit-saltaire" },
  { name: "Walks", href: "/walks" },
  { name: "Eat & Drink", href: "/food-drink" },
  { name: "What’s On", href: "/events" },
  { name: "Parking", href: "/parking" },
  { name: "Attractions", href: "/saltaire-attractions" },
  { name: "Free", href: "/free-things-to-do-saltaire" },
  { name: "About", href: "/about" },
  { name: "Salts Mill", href: "/salts-mill", mdUp: true },
  { name: "Roberts Park", href: "/roberts-park", mdUp: true },
  { name: "Shops", href: "/shops", mdUp: true },
  { name: "Plan", href: "/plan", mdUp: true },
]

function MobileMenuPortal({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  // Only render on client
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted || !open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
    >
      <div className="absolute inset-0 bg-stone-200/80" onClick={onClose} />
      <div className="absolute top-0 right-0 h-full w-fit min-w-[11rem] max-w-[70vw] rounded-l-xl bg-stone-200 shadow-2xl ring-1 ring-stone-300 focus:outline-none">
        {children}
      </div>
    </div>,
    document.body
  )
}

export default function Header() {
  const [open, setOpen] = React.useState(false)

  // Close on Escape
  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  // Prevent background scroll when open
  React.useEffect(() => {
    const { body } = document
    if (!body) return
    if (open) {
      const prev = body.style.overflow
      body.style.overflow = "hidden"
      return () => {
        body.style.overflow = prev
      }
    }
  }, [open])

  return (
    <header
      role="banner"
      className="sticky z-40 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      style={{ top: "var(--banner-h, 0px)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight md:text-lg"
          aria-label="Home"
        >
          Saltaire Guide
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open main menu"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded px-2.5 py-2 text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Desktop nav (unchanged) */}
        <nav
          aria-label="Primary"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
          className="hidden md:block"
        >
          <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-800">
            {MAIN_NAV.map((item) => (
              <li
                key={item.href}
                itemProp="name"
                className={item.mdUp ? "hidden md:block" : undefined}
              >
                <Link
                  href={item.href}
                  itemProp="url"
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-black"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile menu in a portal so it sits above everything else */}
      <MobileMenuPortal open={open} onClose={() => setOpen(false)}>
        <div className="relative px-4 py-3 border-b border-stone-300">
          <div className="text-base font-semibold text-stone-900">Menu</div>
          <button
            type="button"
            className="absolute right-2.5 top-2.5 rounded p-2 hover:bg-stone-300/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile" className="px-2 py-2">
          <ul className="w-fit divide-y divide-stone-300 text-stone-900">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex whitespace-nowrap px-4 py-3 text-base hover:bg-stone-300/50"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </MobileMenuPortal>
    </header>
  )
}
