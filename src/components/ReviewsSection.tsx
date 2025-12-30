// src/components/ReviewsSection.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Review = {
  id: string;
  rating: number;
  display_name: string;
  body: string;
  created_at: string;
};

type Status =
  | { type: "idle" }
  | { type: "ok"; msg: string }
  | { type: "err"; msg: string };

const BRAND = {
  forest: "#0f3b2e",
  orange: "#c24a1a",
  paper: "#fbf7f1",
  desk: "#f6efe6",
};

function StarIcon({
  filled,
  className = "",
}: {
  filled: boolean;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill="currentColor"
        opacity={filled ? 1 : 0.18}
      />
    </svg>
  );
}

function StarsDisplay({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          filled={i < full}
          className="h-4 w-4"
          // color via parent
        />
      ))}
    </div>
  );
}

function StarRatingInput({
  value,
  onChange,
  disabled,
}: {
  value: number;
  onChange: (v: number) => void;
  disabled?: boolean;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const shown = hover ?? value;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const v = i + 1;
        const filled = v <= shown;
        return (
          <button
            key={v}
            type="button"
            disabled={disabled}
            onMouseEnter={() => setHover(v)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(v)}
            onBlur={() => setHover(null)}
            onClick={() => onChange(v)}
            className="rounded-lg p-1 transition hover:bg-black/5 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            style={
              {
                // custom focus ring color
                boxShadow: "none",
              } as any
            }
            aria-label={`${v} star${v === 1 ? "" : "s"}`}
          >
            <StarIcon
              filled={filled}
              className="h-6 w-6"
              // color via parent
            />
          </button>
        );
      })}
      <span className="ml-2 text-[12px] font-medium text-stone-700">{value} / 5</span>
    </div>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("");
}

function clampRating(n: number) {
  return Math.max(1, Math.min(5, Math.round(n)));
}

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export default function ReviewsSection({
  siteSlug,
  entityType,
  slug,
  name,
}: {
  siteSlug: string;
  entityType: string;
  slug: string;
  name: string;
}) {
  const endpoint = useMemo(
    () => `/api/reviews/${siteSlug}/${entityType}/${slug}`,
    [siteSlug, entityType, slug]
  );

  const formRef = useRef<HTMLDivElement | null>(null);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const [rating, setRating] = useState(5);
  const [displayName, setDisplayName] = useState("");
  const [body, setBody] = useState("");
  const [hp, setHp] = useState(""); // honeypot

  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);

  const [sort, setSort] = useState<"newest" | "highest" | "lowest">("newest");
  const [showForm, setShowForm] = useState(false);

  async function fetchReviews() {
    setLoading(true);
    try {
      const res = await fetch(endpoint, { cache: "no-store" });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        // Fail closed: show no reviews, but don’t blow up UI.
        setReviews([]);
        setLoading(false);
        return;
      }
      const list = Array.isArray(json.reviews) ? (json.reviews as Review[]) : [];
      setReviews(list);
      setLoading(false);
    } catch {
      setReviews([]);
      setLoading(false);
    }
  }

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (cancelled) return;
      await fetchReviews();
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  const sorted = useMemo(() => {
    const copy = [...reviews].map((r) => ({ ...r, rating: clampRating(r.rating) }));
    if (sort === "highest") return copy.sort((a, b) => b.rating - a.rating);
    if (sort === "lowest") return copy.sort((a, b) => a.rating - b.rating);
    return copy.sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [reviews, sort]);

  const count = reviews.length;

  const avg = useMemo(() => {
    if (!count) return 0;
    return reviews.reduce((a, r) => a + clampRating(r.rating), 0) / count;
  }, [reviews, count]);

  const dist = useMemo(() => {
    const counts = [0, 0, 0, 0, 0]; // index 0 => 1★
    for (const r of reviews) counts[clampRating(r.rating) - 1] += 1;
    return counts;
  }, [reviews]);

  const pct = (n: number) => (count ? Math.round((n / count) * 100) : 0);

  function openForm() {
    setShowForm(true);
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "idle" });
    setSubmitting(true);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          displayName,
          body,
          hp,
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({ type: "err", msg: json?.error ?? "Could not submit review." });
        setSubmitting(false);
        return;
      }

      setStatus({
        type: "ok",
        msg:
          json?.message ??
          "Submitted. Once approved, it will appear publicly on this page.",
      });

      setDisplayName("");
      setBody("");
      setRating(5);
      setHp("");
      setSubmitting(false);

      // Refresh list after submit (still moderated, but keeps UI consistent)
      await fetchReviews();
    } catch {
      setStatus({ type: "err", msg: "Could not submit review." });
      setSubmitting(false);
    }
  }

  return (
    <section
      className="rounded-3xl border p-5 shadow-sm sm:p-6"
      style={{
        borderColor: "rgba(15, 59, 46, 0.18)",
        backgroundColor: BRAND.desk,
        backgroundImage:
          "radial-gradient(900px 420px at 0% 0%, rgba(15,59,46,0.10), transparent 55%), radial-gradient(900px 420px at 100% 0%, rgba(194,74,26,0.12), transparent 60%)",
      }}
    >
      {/* 2 cards on desktop */}
      <div className="grid gap-4 lg:grid-cols-5">
        {/* LEFT CARD: Trust + stats + CTA + (expandable) form */}
        <div
          className="rounded-3xl border bg-white/90 p-5 lg:col-span-2"
          style={{
            borderColor: "rgba(15, 59, 46, 0.14)",
            backgroundImage:
              "linear-gradient(to bottom, rgba(251,247,241,0.80), rgba(255,255,255,0.92))",
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-[18px] font-semibold" style={{ color: BRAND.forest }}>
                Community reviews
              </h2>
              <p className="mt-1 text-[13px] leading-relaxed text-stone-700">
                Human notes, moderated for spam and abuse. Built for locals—not advertisers.
              </p>
            </div>

            <button
              type="button"
              onClick={openForm}
              className="shrink-0 rounded-xl px-3 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none"
              style={{ backgroundColor: BRAND.orange }}
            >
              Write a review
            </button>
          </div>

          <div className="mt-4 rounded-2xl border bg-white p-4"
               style={{ borderColor: "rgba(15, 59, 46, 0.12)" }}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[12px] text-stone-600">Average rating</div>
                <div className="mt-0.5 flex items-end gap-2">
                  <div className="text-[30px] font-semibold text-stone-900">
                    {count ? avg.toFixed(1) : "—"}
                  </div>
                  <div className="pb-1 text-[12px] text-stone-600">
                    {count ? `${count} review${count === 1 ? "" : "s"}` : "No reviews yet"}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[12px]"
                     style={{ borderColor: "rgba(15,59,46,0.16)", color: BRAND.forest }}>
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ backgroundColor: BRAND.forest }}
                  />
                  Moderated
                </div>
                <div className="mt-2 flex justify-end" style={{ color: BRAND.orange }}>
                  <StarsDisplay value={count ? avg : 0} />
                </div>
              </div>
            </div>

            {/* Distribution only when it means something (removes empty whitespace) */}
            {count >= 3 ? (
              <div className="mt-4 space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const c = dist[stars - 1];
                  const w = (c / count) * 100;
                  return (
                    <div key={stars} className="flex items-center gap-2">
                      <div className="w-10 text-[11px] text-stone-600">{stars}★</div>
                      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-black/5">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${w}%`, backgroundColor: BRAND.orange, opacity: 0.75 }}
                        />
                      </div>
                      <div className="w-10 text-right text-[11px] text-stone-600">{pct(c)}%</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="mt-4 rounded-xl border p-3"
                   style={{ borderColor: "rgba(194,74,26,0.22)", backgroundColor: BRAND.paper }}>
                <div className="text-[13px] font-medium" style={{ color: BRAND.forest }}>
                  Be the first to leave something useful.
                </div>
                <div className="mt-1 text-[12px] text-stone-700">
                  Practical prompts: best drink/food, value for money, atmosphere, and any timing tips.
                </div>
              </div>
            )}
          </div>

          {/* Expandable form lives INSIDE left card (keeps 2-card desktop layout) */}
          <div ref={formRef} className="mt-4">
            <button
              type="button"
              onClick={() => setShowForm((s) => !s)}
              className="w-full rounded-2xl border bg-white px-4 py-3 text-left transition hover:bg-black/5"
              style={{ borderColor: "rgba(15,59,46,0.14)" }}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[13px] font-semibold" style={{ color: BRAND.forest }}>
                    Leave a review
                  </div>
                  <div className="mt-0.5 text-[12px] text-stone-700">
                    Short, specific details beat hype.
                  </div>
                </div>
                <div className="text-[12px] font-semibold" style={{ color: BRAND.orange }}>
                  {showForm ? "Hide" : "Open"}
                </div>
              </div>
            </button>

            {showForm ? (
              <form onSubmit={submit} className="mt-3 rounded-2xl border bg-white p-4"
                    style={{ borderColor: "rgba(15,59,46,0.14)" }}>
                {/* honeypot */}
                <input
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-3">
                  <label>
                    <span className="block text-[12px] font-medium text-stone-700">Your name</span>
                    <input
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-[14px] outline-none"
                      style={{
                        borderColor: "rgba(15,59,46,0.18)",
                      }}
                      placeholder="e.g. Sam"
                      required
                      minLength={2}
                      maxLength={40}
                      disabled={submitting}
                    />
                  </label>

                  <div>
                    <span className="block text-[12px] font-medium text-stone-700">Rating</span>
                    <div className="mt-1" style={{ color: BRAND.orange }}>
                      <StarRatingInput value={rating} onChange={setRating} disabled={submitting} />
                    </div>
                  </div>

                  <label>
                    <span className="block text-[12px] font-medium text-stone-700">Your review</span>
                    <textarea
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-[14px] outline-none"
                      style={{
                        borderColor: "rgba(15,59,46,0.18)",
                      }}
                      rows={5}
                      placeholder={`What should someone know before visiting ${name}?`}
                      required
                      minLength={20}
                      maxLength={1200}
                      disabled={submitting}
                    />
                    <div className="mt-1 text-[11px] text-stone-600">
                      Keep it about your experience. No personal info.
                    </div>
                  </label>

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition disabled:cursor-not-allowed disabled:opacity-60"
                      style={{ backgroundColor: BRAND.orange }}
                    >
                      {submitting ? "Submitting…" : "Submit review"}
                    </button>

                    {status.type === "ok" ? (
                      <p className="m-0 text-[12px]" style={{ color: BRAND.forest }}>
                        {status.msg}
                      </p>
                    ) : status.type === "err" ? (
                      <p className="m-0 text-[12px] text-rose-700">{status.msg}</p>
                    ) : (
                      <span className="text-[12px] text-stone-600">Appears after approval.</span>
                    )}
                  </div>
                </div>
              </form>
            ) : null}
          </div>
        </div>

        {/* RIGHT CARD: Recent / published reviews */}
        <div
          className="rounded-3xl border bg-white/90 p-5 lg:col-span-3"
          style={{
            borderColor: "rgba(15, 59, 46, 0.14)",
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.92), rgba(251,247,241,0.65))",
          }}
        >
          <div className="flex items-end justify-between gap-3">
            <div>
              <h3 className="text-[14px] font-semibold" style={{ color: BRAND.forest }}>
                Recent reviews
              </h3>
              <p className="mt-1 text-[12px] text-stone-700">
                Sorted and moderated. No paid placements.
              </p>
            </div>

            <label className="flex items-center gap-2 text-[12px] text-stone-600">
              Sort
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as "newest" | "highest" | "lowest")}
                className="rounded-lg border bg-white px-2 py-1 text-[12px]"
                style={{ borderColor: "rgba(15,59,46,0.18)" }}
              >
                <option value="newest">Newest</option>
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
              </select>
            </label>
          </div>

          {loading ? (
            <ul className="mt-4 space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <li key={i} className="rounded-2xl border bg-white p-4"
                    style={{ borderColor: "rgba(15,59,46,0.12)" }}>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 animate-pulse rounded-full bg-black/5" />
                    <div className="flex-1">
                      <div className="h-3 w-40 animate-pulse rounded bg-black/5" />
                      <div className="mt-2 h-3 w-24 animate-pulse rounded bg-black/5" />
                      <div className="mt-4 h-3 w-full animate-pulse rounded bg-black/5" />
                      <div className="mt-2 h-3 w-5/6 animate-pulse rounded bg-black/5" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : sorted.length === 0 ? (
            <div className="mt-4 rounded-2xl border bg-white p-5"
                 style={{ borderColor: "rgba(15,59,46,0.12)" }}>
              <div className="text-[14px] font-semibold" style={{ color: BRAND.forest }}>
                No published reviews yet
              </div>
              <div className="mt-1 text-[13px] text-stone-700">
                If you’ve been, add a short note that helps the next person: what you ordered, what it cost,
                and whether you’d go back.
              </div>
              <button
                type="button"
                onClick={openForm}
                className="mt-3 inline-flex items-center justify-center rounded-xl px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: BRAND.orange }}
              >
                Write the first review
              </button>
            </div>
          ) : (
            <ul className="mt-4 space-y-3">
              {sorted.slice(0, 6).map((r) => (
                <li
                  key={r.id}
                  className="rounded-2xl border bg-white p-4 shadow-sm"
                  style={{ borderColor: "rgba(15,59,46,0.12)" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border text-[12px] font-semibold"
                      style={{
                        borderColor: "rgba(15,59,46,0.18)",
                        backgroundColor: BRAND.paper,
                        color: BRAND.forest,
                      }}
                    >
                      {initials(r.display_name) || "?"}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="truncate text-[14px] font-semibold text-stone-900">
                            {r.display_name}
                          </div>
                          <div className="text-[12px] text-stone-600">{formatDate(r.created_at)}</div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div style={{ color: BRAND.orange }}>
                            <StarsDisplay value={clampRating(r.rating)} />
                          </div>
                          <span className="text-[12px] font-semibold" style={{ color: BRAND.forest }}>
                            {clampRating(r.rating)}.0
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 whitespace-pre-wrap text-[14px] leading-relaxed text-stone-800">
                        {r.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {!loading && sorted.length > 6 ? (
            <div className="mt-4 text-[12px] text-stone-600">
              Showing 6 of {sorted.length}. (You can add pagination later; keep it simple for now.)
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
