"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { createPortal } from "react-dom";

type NavItem = {
  name: string;
  href?: string;
  mdUp?: boolean;
  description?: string;
  children?: NavItem[];
};

/**
 * Single source of truth for navigation.
 * Focused navigation: key "money" pages + Site menu.
 * URLs can stay Saltaire-focused while labels reflect Saltaire & Shipley.
 */
const NAV_ITEMS: NavItem[] = [
  { name: "Visit", href: "/visit-saltaire" },
  { name: "Parking", href: "/parking" },
  { name: "Food & Drink", href: "/food-drink" },
  { name: "Walks & routes", href: "/walks" },
  { name: "Site menu", href: "/site-menu" },
];

function MobileMenuPortal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  // Only render on client
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted || !open) return null;

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
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] =
    React.useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] =
    React.useState<string | null>(null);

  // small delay so moving from "History" → dropdown doesn't instantly close it
  const closeDropdownTimeout = React.useRef<number | null>(null);

  const clearDropdownCloseTimeout = () => {
    if (closeDropdownTimeout.current !== null) {
      window.clearTimeout(closeDropdownTimeout.current);
      closeDropdownTimeout.current = null;
    }
  };

  const openDropdown = (name: string) => {
    clearDropdownCloseTimeout();
    setOpenDesktopDropdown(name);
  };

  const scheduleCloseDropdown = () => {
    clearDropdownCloseTimeout();
    closeDropdownTimeout.current = window.setTimeout(() => {
      setOpenDesktopDropdown(null);
    }, 140); // tweak delay to taste
  };

  // Close on Escape (mobile menu)
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Prevent background scroll when mobile menu open
  React.useEffect(() => {
    const { body } = document;
    if (!body) return;
    if (open) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      role="banner"
      className="sticky z-40 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      style={{ top: "var(--banner-h, 0px)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Brand: logo + wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Saltaire Guide home"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-stone-200 bg-stone-100 md:h-9 md:w-9">
            <Image
              src="/images/saltaireguide-logo.jpg"
              alt="Saltaire Guide logo"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-stone-900 md:text-lg">
              Saltaire Guide
            </span>
            <span className="hidden text-[11px] text-stone-600 sm:inline md:text-xs">
              Saltaire &amp; Shipley
            </span>
          </div>
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close main menu" : "Open main menu"}
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded px-2.5 py-2 text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
          className="hidden items-center gap-4 md:flex"
        >
          <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-800">
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children && item.children.length > 0;
              const hiddenOnSmall = item.mdUp ? "hidden md:block" : undefined;

              if (!hasChildren) {
                return (
                  <li key={item.name} itemProp="name" className={hiddenOnSmall}>
                    {item.href && (
                      <Link
                        href={item.href}
                        itemProp="url"
                        className="underline decoration-transparent underline-offset-4 transition hover:decoration-black"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              }

              // Desktop dropdown (e.g. future multi-level sections)
              return (
                <li
                  key={item.name}
                  itemProp="name"
                  className={`relative ${hiddenOnSmall ?? ""}`}
                  onMouseEnter={() => openDropdown(item.name)}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  <Link
                    href={item.href ?? "#"}
                    itemProp="url"
                    className="inline-flex items-center gap-1 underline decoration-transparent underline-offset-4 transition hover:decoration-black"
                  >
                    <span>{item.name}</span>
                    <svg
                      aria-hidden="true"
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      className="mt-[1px]"
                    >
                      <path
                        d="M5 7l5 5 5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {openDesktopDropdown === item.name && (
                    <div
                      className="absolute right-0 mt-2 w-screen max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-lg"
                      onMouseEnter={() => openDropdown(item.name)}
                      onMouseLeave={scheduleCloseDropdown}
                    >
                      {/* Featured children with descriptions */}
                      <div className="space-y-2">
                        {item.children
                          ?.filter((c) => c.description)
                          .map((child) => (
                            <Link
                              key={child.name}
                              href={child.href ?? "#"}
                              className="block rounded-lg p-2 hover:bg-gray-50"
                            >
                              <div className="text-sm font-semibold text-gray-900">
                                {child.name}
                              </div>
                              <p className="text-xs text-gray-600">
                                {child.description}
                              </p>
                            </Link>
                          ))}
                      </div>

                      {/* Simple list of the rest */}
                      <div className="mt-3 border-t border-gray-100 pt-3">
                        <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          All {item.name} pages
                        </div>
                        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                          {item.children
                            ?.filter((c) => !c.description)
                            .map((child) => (
                              <Link
                                key={child.name}
                                href={child.href ?? "#"}
                                className="underline decoration-transparent underline-offset-4 hover:decoration-gray-700"
                              >
                                {child.name}
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Instagram button */}
          <a
            href="https://www.instagram.com/saltaireguide.uk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-50"
          >
            <span>Instagram</span>
            <span className="hidden sm:inline">@saltaireguide.uk</span>
          </a>
        </nav>
      </div>

      {/* Mobile menu in a portal so it sits above everything else */}
      <MobileMenuPortal open={open} onClose={() => setOpen(false)}>
        <div className="relative border-b border-stone-300 px-4 py-3">
          <div className="text-base font-semibold text-stone-900">
            Menu
          </div>
          <button
            type="button"
            className="absolute right-2.5 top-2.5 rounded p-2 hover:bg-stone-300/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="px-2 py-2">
          <ul className="w-fit divide-y divide-stone-300 text-stone-900">
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children && item.children.length > 0;

              // mdUp flag only affects DESKTOP – mobile should show everything.
              if (!hasChildren) {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href ?? "#"}
                      onClick={() => setOpen(false)}
                      className="inline-flex whitespace-nowrap px-4 py-3 text-base hover:bg-stone-300/50"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              }

              const isOpen = openMobileSection === item.name;

              return (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileSection((prev) =>
                        prev === item.name ? null : item.name
                      )
                    }
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-base hover:bg-stone-300/50"
                  >
                    <span>{item.name}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className={`transform transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M5 7l5 5 5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <ul className="pb-2 pl-2 text-sm">
                      {item.children?.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href ?? "#"}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 pr-6 text-sm hover:bg-stone-300/40"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-3 border-t border-stone-300 px-2 pb-3 pt-2">
            <a
              href="https://www.instagram.com/saltaireguide.uk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-stone-400 px-3 py-1.5 text-xs font-medium text-stone-900 hover:bg-stone-300/60"
            >
              <span>Instagram</span>
              <span className="hidden xs:inline">@saltaireguide.uk</span>
            </a>
          </div>
        </nav>
      </MobileMenuPortal>
    </header>
  );
}
