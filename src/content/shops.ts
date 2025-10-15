// src/content/shops.ts
// Curated Saltaire shops directory (verified Oct 2025)
// - Scope: retail + maker spaces you can actually shop at in/around the village
// - Fields are deliberately practical for UX + SEO on /shops
// - Keep descriptions human + helpful; avoid hype

export type Shop = {
  slug: string
  name: string
  area:
    | 'Salts Mill'
    | 'Victoria Road'
    | 'Bingley Road'
    | 'Saltaire Road'
    | 'Dockfield'
  address: string
  summary: string
  whatToBuy: string[]
  bestTime: string
  accessibility: string
  website?: string
  instagram?: string
  phone?: string
  map?: string
  tags?: string[]
}

export const SHOPS: Shop[] = [
  {
    slug: 'the-home-salts-mill',
    name: 'The Home at Salts Mill',
    area: 'Salts Mill',
    address: 'Salts Mill, Victoria Road, Saltaire, BD18 3LA',
    summary:
      'Design-led furniture, kitchenware and gifts inside Salts Mill — “the beautiful, the useful and the unusual”.',
    whatToBuy: [
      'quality kitchen + tableware',
      'design gifts/cards',
      'home storage and textiles',
    ],
    bestTime:
      'Weekdays or early weekend mornings for quieter browsing; rainy days get busy.',
    accessibility:
      'Level access via main mill entrances, wide aisles; staff happy to help with heavier items.',
    website: 'https://saltsmillshop.co.uk/',
    instagram: 'https://www.instagram.com/saltsmillofficial/',
    tags: ['home', 'gifts', 'design'],
  },
  {
    slug: 'salts-book-and-poster-shop',
    name: 'Salts Book & Poster Shop',
    area: 'Salts Mill',
    address: '2nd Floor, Salts Mill, Victoria Road, Saltaire, BD18 3LA',
    summary:
      'Vast independent bookshop + poster store: art, design and general books, with Hockney posters and more.',
    whatToBuy: [
      'new + collectible books',
      'art/design titles',
      'archive + Hockney posters',
    ],
    bestTime:
      'Mornings; late morning–afternoons at weekends are peak. Check opening days before a special trip.',
    accessibility:
      'Lift access inside the mill to upper floors; level flooring around displays.',
    website: 'https://saltsmillshop.co.uk/collections/books',
    instagram: 'https://www.instagram.com/saltsmillofficial/',
    tags: ['books', 'posters'],
  },
  {
    slug: 'gold-lark-jewellery',
    name: 'Gold Lark Jewellery',
    area: 'Salts Mill',
    address: 'Salts Mill, Victoria Road, Saltaire, BD18 3LA',
    summary:
      'Independent contemporary jewellery at Salts Mill — handcrafted pieces and curated designers.',
    whatToBuy: ['handmade jewellery', 'one-off gifts', 'designers to discover'],
    bestTime: 'Afternoons are livelier; visit mornings for focused browsing.',
    accessibility: 'Level access within the mill; staff assistance available.',
    website: 'https://goldlarkjewellery.com/',
    instagram: 'https://www.facebook.com/goldlarkjewellery/',
    tags: ['jewellery', 'independent'],
  },
  {
    slug: 'early-music-shop',
    name: 'The Early Music Shop',
    area: 'Salts Mill',
    address: 'Salts Mill, Victoria Road, Saltaire, BD18 3LA',
    summary:
      'World-renowned specialist for recorders, lutes, harps and historical instruments with sheet music and accessories.',
    whatToBuy: [
      'recorders + early instruments',
      'sheet music',
      'accessories + gifts',
    ],
    bestTime:
      'Weekdays for trying instruments; call ahead if you want a specific model out.',
    accessibility:
      'Inside the mill with level access; space to manoeuvre when quieter.',
    website: 'https://earlymusicshop.com/',
    instagram: 'https://www.facebook.com/earlymusicshop/',
    tags: ['music', 'specialist'],
  },
  {
    slug: 'saltaire-vintage-shop',
    name: 'Saltaire Vintage Shop',
    area: 'Victoria Road',
    address: '79 Victoria Road, Saltaire, BD18 3LA',
    summary:
      'Curated vintage clothing and homeware on the corner of Victoria Road — classic pieces with local charm.',
    whatToBuy: ['vintage clothes', 'homeware', 'collectables'],
    bestTime: 'Afternoons or festival days for fuller rails; mornings for quiet.',
    accessibility:
      'Historic shopfront; single threshold step common — ask staff for help if needed.',
    instagram: 'https://www.instagram.com/saltairevintageshop/',
    tags: ['vintage', 'clothing', 'homeware'],
  },
  {
    slug: 'radstudio',
    name: 'RADSTUDIO',
    area: 'Victoria Road',
    address: '2 Victoria Road, Saltaire, BD18 3LA',
    summary:
      'Modern gift & lifestyle store — playful, functional homewares, cards and design-led treats.',
    whatToBuy: ['gifts', 'home accessories', 'cards + wrap'],
    bestTime:
      'Late morning or later afternoon; evenings on Thu are good for locals.',
    accessibility:
      'Level entry from pavement; compact aisles when busy — staff are helpful.',
    website: 'https://radstudio.shop/',
    instagram: 'https://www.instagram.com/radstudio/',
    tags: ['gifts', 'home', 'cards'],
  },
  {
    slug: 'giddy-arts',
    name: 'Giddy Arts',
    area: 'Victoria Road',
    address: '1 Victoria Road, Saltaire, BD18 3LA',
    summary:
      'Refill shop + craft gallery + speciality coffee. Sustainable household refills and work from local makers.',
    whatToBuy: [
      'eco refills (bring containers)',
      'local craft + prints',
      'coffee + small gifts',
    ],
    bestTime:
      'Mid-week daytime for relaxed browsing; weekends are lively. Refill station quieter before lunch.',
    accessibility:
      'Level entry; some fixtures snug when busy. Staff can weigh/fill for you.',
    website: 'https://www.giddyarts.co.uk/',
    instagram: 'https://www.instagram.com/giddy_arts/',
    tags: ['refill', 'craft', 'coffee'],
  },
  {
    slug: 'little-craft-house',
    name: 'The Little Craft House',
    area: 'Saltaire Road',
    address: '101 Saltaire Road, Saltaire, BD18 3HD',
    summary:
      'Yarn, haberdashery and friendly workshops (crochet, knitting, textiles) with expert advice.',
    whatToBuy: ['yarn + needles', 'kits + patterns', 'workshops'],
    bestTime:
      'Wed–Sat opening; check workshop times. Quieter in early afternoons.',
    accessibility:
      'Level approach; plenty of seating for advice and 1-to-1 support.',
    website: 'https://www.little-craft-house.com/',
    instagram: 'https://www.instagram.com/thelittle.crafthouse/',
    phone: '07493 117520',
    tags: ['craft', 'yarn', 'workshops'],
  },
  {
    slug: 'salt-pots-ceramic-studio',
    name: 'Salt Pots Ceramic Studio',
    area: 'Bingley Road',
    address: '97 Bingley Road, Saltaire, BD18 4SB',
    summary:
      'Paint-your-own pottery studio: parties, keepsakes and late sessions. Book ahead in holidays.',
    whatToBuy: [
      'pottery painting',
      'hand/footprint gifts',
      'gift vouchers + kits',
    ],
    bestTime:
      'Weekdays in term-time are calm; weekends/half-terms get busy — pre-book.',
    accessibility:
      'Bright, level studio; tables can be arranged for wheelchairs and buggies.',
    website: 'https://saltpots.co.uk/',
    instagram: 'https://www.instagram.com/saltpots/',
    phone: '01274 270210',
    tags: ['family', 'craft', 'experiences'],
  },
  {
    slug: 'saltaire-wines-post-office',
    name: 'Saltaire Wines & Post Office',
    area: 'Bingley Road',
    address: '32 Bingley Road, Saltaire, BD18 4RU',
    summary:
      'Specialist wines, beers and spirits alongside full Post Office services — handy late opening most days.',
    whatToBuy: ['interesting wines', 'craft beers/spirits', 'cards + PO services'],
    bestTime:
      'Late afternoon/early evening for bottle shopping; avoid lunch rush for PO queues.',
    accessibility:
      'Level entrance; service counters at standard height; staff assist happily.',
    website: 'https://www.postoffice.co.uk/branch-finder/6174582/saltaire',
    instagram: 'https://www.facebook.com/SaltairewinesPostoffice/',
    phone: '01274 530580',
    tags: ['wine', 'post-office', 'convenience'],
  },
  {
    slug: 'serendipity',
    name: 'Serendipity',
    area: 'Bingley Road',
    address: '85 Bingley Road, Saltaire, BD18 4SB',
    summary:
      'Independent gift shop: homeware, Belgian chocolates, popular brands and great cards.',
    whatToBuy: ['home + gifts', 'Jellycat + Wrendale', 'belgian chocolates'],
    bestTime:
      'Mornings for space to browse; after-school gets busier for cards/wrap.',
    accessibility:
      'Shallow threshold typical of heritage shopfronts; staff on hand to help.',
    website: 'https://www.visitbradford.com/things-to-do/shopping/serendipity-p1621081',
    instagram: 'https://www.facebook.com/serendipitysaltaire/',
    phone: '01274 530580',
    tags: ['gifts', 'cards', 'chocolate'],
  },
  {
    slug: 'saltaire-brewery-taproom',
    name: 'Saltaire Brewery Taproom & Shop',
    area: 'Dockfield',
    address: 'Unit 7, County Works, Dockfield Road, Shipley, BD17 7AR',
    summary:
      'Local brewery tap with take-out cans/growlers and merch. Tours on Saturdays; family- and dog-friendly.',
    whatToBuy: ['fresh cans', 'seasonals + merch', 'gift packs'],
    bestTime:
      'Weds–Thu evenings for a quieter pint; Fri–Sat are buzzy. Check tour slots.',
    accessibility:
      'Level access; accessible loos available. Outdoor space good for prams/dogs.',
    website: 'https://saltairebrewery.com/pages/tap-room',
    instagram: 'https://www.instagram.com/saltairetaproom/',
    phone: '01274 452098',
    tags: ['beer', 'local-producer', 'taproom'],
  },
]

export default SHOPS
