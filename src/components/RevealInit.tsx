"use client";

import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'));

    const show = (el: HTMLElement) => {
      const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
      window.setTimeout(() => el.classList.add('is-visible'), delay);
    };

    // Immediately reveal items currently in view to avoid blank content on first paint
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) show(el);
    });

    let io: IntersectionObserver | null = null;
    if (!prefersReduced && 'IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        for (const e of entries) if (e.isIntersecting) { show(e.target as HTMLElement); io!.unobserve(e.target); }
      }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
      els.forEach((el) => { if (!el.classList.contains('is-visible')) io!.observe(el); });
    } else {
      els.forEach(show);
    }

    // Parallax + anchor highlighting
    let cleanupScroll: (() => void) | undefined;
    if (!prefersReduced) {
      const root = document.documentElement;
      const onScroll = () => {
        const y = Math.min(40, window.scrollY * 0.08);
        root.style.setProperty('--heroY', y + 'px');
        const anchors = document.querySelectorAll<HTMLElement>('.anchor-link');
        const ids = ['#top-5','#itineraries','#parking','#food','#walks','#best-time','#photo-spots','#faq'];
        const sections = ids.map((id) => document.querySelector(id)).filter(Boolean) as HTMLElement[];
        let active = '';
        for (const sec of sections) {
          const rect = sec.getBoundingClientRect();
          if (rect.top < 120 && rect.bottom > 180) { active = '#' + sec.id; break; }
        }
        anchors.forEach((a) => a.classList.toggle('text-white', (a as HTMLAnchorElement).getAttribute('href') === active));
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      cleanupScroll = () => window.removeEventListener('scroll', onScroll);
    }

    return () => {
      if (io) io.disconnect();
      if (cleanupScroll) cleanupScroll();
    };
  }, []);

  return null;
}
