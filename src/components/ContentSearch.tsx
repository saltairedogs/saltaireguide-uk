'use client'

// src/components/ContentSearch.tsx
// Advanced fuzzy search with instant filtering for the blog/content hub
// - Client-side for instant results
// - Fuzzy matching on title, description, keywords
// - Category filtering
// - Vintage styling

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export type ContentPage = {
  slug: string
  title: string
  description: string
  category: string
  keywords: string[]
  image: string
  icon?: string
}

type Props = {
  pages: ContentPage[]
}

// Simple fuzzy match - checks if all search chars appear in order in target
function fuzzyMatch(search: string, target: string): boolean {
  const s = search.toLowerCase()
  const t = target.toLowerCase()
  let si = 0
  for (let ti = 0; ti < t.length && si < s.length; ti++) {
    if (t[ti] === s[si]) si++
  }
  return si === s.length
}

// Calculate relevance score for sorting
function scoreMatch(page: ContentPage, query: string): number {
  const q = query.toLowerCase()
  let score = 0

  // Exact title match = highest priority
  if (page.title.toLowerCase().includes(q)) score += 100
  
  // Keyword exact match = high priority
  if (page.keywords.some(k => k.toLowerCase().includes(q))) score += 50
  
  // Category match = medium priority
  if (page.category.toLowerCase().includes(q)) score += 30
  
  // Description match = lower priority
  if (page.description.toLowerCase().includes(q)) score += 20

  // Fuzzy matches get partial credit
  if (fuzzyMatch(q, page.title)) score += 10
  if (page.keywords.some(k => fuzzyMatch(q, k))) score += 5

  return score
}

export function ContentSearch({ pages }: Props) {
  const [query, setQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(pages.map(p => p.category))
    return ['all', ...Array.from(cats).sort()]
  }, [pages])

  // Filter and score results
  const results = useMemo(() => {
    if (!query && categoryFilter === 'all') {
      return pages
    }

    let filtered = pages

    // Apply category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category === categoryFilter)
    }

    // Apply search query
    if (query) {
      const scored = filtered
        .map(page => ({
          page,
          score: scoreMatch(page, query)
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)

      return scored.map(item => item.page)
    }

    return filtered
  }, [query, categoryFilter, pages])

  return (
    <div className="space-y-6">
      {/* Search controls */}
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <div className="relative">
          <input
            type="search"
            placeholder="Search for food, walks, parking, history..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input w-full pl-12 text-lg"
            aria-label="Search content"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="select"
          aria-label="Filter by category"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All categories' : cat}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <p>
          {results.length} {results.length === 1 ? 'page' : 'pages'} found
          {query && <span className="font-semibold ml-1">for &ldquo;{query}&rdquo;</span>}
        </p>
        {(query || categoryFilter !== 'all') && (
          <button
            onClick={() => {
              setQuery('')
              setCategoryFilter('all')
            }}
            className="text-sm underline hover:text-black"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Results grid */}
      {results.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map(page => (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <Link
              key={page.slug}
              href={page.slug as any}
              className="card card-hover group no-underline"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-gray-100">
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="card-body space-y-2">
                <div className="flex items-center justify-between">
                  <span className="badge">{page.category}</span>
                  {page.icon && <span className="text-2xl">{page.icon}</span>}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-black transition-colors line-clamp-2">
                  {page.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {page.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {page.keywords.slice(0, 4).map(keyword => (
                    <span
                      key={keyword}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card card-body text-center py-12">
          <p className="text-lg text-gray-600">No pages found matching your search.</p>
          <p className="text-sm text-gray-500 mt-2">
            Try different keywords or browse all categories.
          </p>
        </div>
      )}
    </div>
  )
}
