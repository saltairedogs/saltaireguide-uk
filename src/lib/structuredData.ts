// src/lib/structuredData.ts
type Site = { name: string; url: string; email?: string }
type ArticleProps = { title: string; url: string; date: string; description: string; image?: string; author?: string }
type Faq = { q: string; a: string }

export const ld = {
  website: (s: Site) => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: s.name,
    url: s.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${s.url}/search?q={query}`,
      'query-input': 'required name=query',
    },
  }),

  organization: (s: Site) => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: s.name,
    url: s.url,
    email: s.email,
  }),

  article: (p: ArticleProps) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    url: p.url,
    datePublished: p.date,
    dateModified: p.date,
    description: p.description,
    image: p.image ? [p.image] : undefined,
    author: p.author ? { '@type': 'Person', name: p.author } : undefined,
    publisher: p.author ? undefined : { '@type': 'Organization', name: 'Saltaire Guide' },
  }),

  faqPage: (faqs: Faq[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }),

  breadcrumb: (items: { name: string; url: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  itemList: (items: { name: string; url: string; description?: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url,
      description: it.description,
    })),
  }),
}
