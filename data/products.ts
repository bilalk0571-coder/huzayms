// ============================================================
// HUZAYM'S ELIXIRS — Product Data
// data/products.ts
//
// To add a product: copy any existing record, update the fields,
// append it to the PRODUCTS array. Nothing else needs to change.
//
// Price is in rupees (₹). e.g. price: 500 → displays as ₹500.
// ============================================================

import type { Product, HeroSlide } from "@/types";


export const PRODUCTS: Product[] = [

  // ----------------------------------------------------------
  // 1. MARIANA TRENCH
  // ----------------------------------------------------------
  {
    id:   "mariana",
    slug: "mariana-trench",
    name: "Mariana Trench",
    type: "Eau De Parfum",

    isBundle:           false,
    bundleProductSlugs: [],

    price:    500,

    tagline:     "Aquatic • Fresh • Rusty",
    description:
      "It is an indomitable depth, the unknown, a call towards all and nothing — here, there, everywhere. The wholeness of the sea doesn't need an explanation.",
    size: "30ml / 1.0 fl.oz",

    mainImage: "/images/mariana.jpeg",
    images: [
      "/images/mariana.jpeg",
      "/images/mariana1.jpeg",
      "/images/mariana2.jpeg",
      "/images/mariana3.jpeg",
    ],

    notes: {
      top:   ["Bergamot", "Lemon"],
      heart: ["Seaweed", "Calone", "Hedione"],
      base:  ["Musk", "Ambroxan", "Cedar"],
    },

    performance: {
      longevity:  4,
      projection: 4,
      season:     ["Spring", "Summer"],
      occasion:   [ "Daily Wear", "Outdoor"],
    },

    seo: {
  title: "Mariana Trench Eau de Parfum | HUZAYM'S Elixirs",

  description:
    "Discover Mariana Trench Eau de Parfum by HUZAYM'S Elixirs. A refined aquatic fragrance crafted with bergamot, seaweed and ambroxan, delivering exceptional freshness, depth and lasting elegance.",

  keywords: [
    "Mariana Trench perfume",
    "Luxury aquatic perfume",
    "Marine fragrance India",
    "Fresh Eau de Parfum",
    "Premium perfume India",
    "HUZAYM'S Elixirs",
  ],
},

    featured:   true,
    bestSeller: true,
    available:  true,

    waLink:    "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Mariana%20Trench%20(30ml).",
    createdAt: "2026-01-01",
  },
// ----------------------------------------------------------
  // 2. CELESTIAL TIDE
  // ----------------------------------------------------------
  {
    id: "celestial",
    slug: "celestial-tide",
    name: "Celestial Tide",
    type: "Extrait De Parfum",

    isBundle: false,
    bundleProductSlugs: [],

    price: 500,

    tagline: "Fresh • Tranquil • Refined",
    description:
      "A calm, refreshing and timeless fragrance built around Earl Grey tea, bergamot and cucumber. Finished with soft musk, vanilla and beeswax for an elegant everyday scent. Launching soon.",

    size: "30ml / 1.0 fl.oz",

    mainImage: "/images/celestial.jpeg",

    images: [
      "/images/celestial.jpeg",
      "/images/celestial1.jpeg",
      "/images/celestial2.jpeg",
      "/images/celestial3.jpeg",
    ],

    notes: {
      top: ["Earl Grey Tea", "Bergamot"],
      heart: ["Cucumber"],
      base: ["Musk", "Vanilla", "Beeswax"],
    },

    performance: {
      longevity: 3,
      projection: 3,
      season: ["Spring", "Summer"],
      occasion: ["Daily Wear", "Office", "Casual"],
    },

    seo: {
  title: "Celestial Tide Extrait de Parfum | HUZAYM'S Elixirs",

  description:
    "Experience Celestial Tide Extrait de Parfum by HUZAYM'S Elixirs. A refreshing composition of Earl Grey tea, bergamot and cucumber resting on soft musk and vanilla for timeless everyday elegance.",

  keywords: [
    "Celestial Tide perfume",
    "Tea perfume",
    "Fresh extrait de parfum",
    "Luxury perfume India",
    "Bergamot fragrance",
    "HUZAYM'S Elixirs",
  ],
},

    featured: true,
    bestSeller: false,
    newArrival: true,
    available: true,

    waLink:
      "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Celestial%20Tide%20(30ml).",

    createdAt: "2026-06-28",
  },

  // ----------------------------------------------------------
  // 3. CINNABON
  // ----------------------------------------------------------
  {
    id:   "cinnabon",
    slug: "cinnabon",
    name: "Cinnabon",
    type: "Extrait De Parfum",

    isBundle:           false,
    bundleProductSlugs: [],

    price: 500,

    tagline:     "Sweet • Warm • Seductive",
    description:
      "This is not loud. This is class. For the man who walks in calm, speaks less, and leaves a trail people remember. Office, weddings, winter nights — Cinnabon fits every royal moment.",
    size: "30ml / 1.0 fl.oz",

    mainImage: "/images/cinnabon.jpeg",
    images: [
      "/images/cinnabon.jpeg",
      "/images/cinnabon1.jpeg",
      "/images/cinnabon2.jpeg",
      "/images/cinnabon3.jpeg",
    ],

    notes: {
      top:   ["Cinnamon", "Orange Blossom", "Cardamom", "Bergamot"],
      heart: ["Bourbon Vanilla", "Elemi"],
      base:  ["Praline", "Musk", "Ambroxan", "Guaiac Wood", "Tonka", "Candied Almond"],
    },

    performance: {
      longevity:  5,
      projection: 4,
      season:     ["Autumn", "Winter"],
      occasion:   ["Office", "Wedding", "Formal", "Evening"],
    },

    seo: {
  title: "Cinnabon Extrait de Parfum | HUZAYM'S Elixirs",

  description:
    "Cinnabon Extrait de Parfum blends cinnamon, bourbon vanilla and praline into a rich gourmand fragrance crafted for evenings, celebrations and unforgettable impressions.",

  keywords: [
    "Cinnabon perfume",
    "Vanilla perfume",
    "Gourmand fragrance",
    "Luxury extrait de parfum",
    "Sweet perfume India",
    "HUZAYM'S Elixirs",
  ],
},

    featured:   true,
    bestSeller: false,
    available:  true,

    waLink:    "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Cinnabon%20(30ml).",
    createdAt: "2026-01-01",
  },


  // ----------------------------------------------------------
  // 4. CRIMSON LEATHER
  // ----------------------------------------------------------
  {
    id:   "crimson",
    slug: "crimson-leather",
    name: "Crimson Leather",
    type: "Extrait De Parfum",

    isBundle:           false,
    bundleProductSlugs: [],

    price: 500,

    tagline:     "Rosey • Leathery • Intoxicating",
    description:
      "Crimson Leather. Where rose gets raw and leather gets luxe. Dark, intense, unforgettable. Extrait concentration — beast mode performance all day. Crafted for those who dare to stand out.",
    size: "30ml / 1.0 fl.oz",

    mainImage: "/images/crimson.jpeg",
    images: [
      "/images/crimson.jpeg",
      "/images/crimson1.jpeg",
      "/images/crimson2.jpeg",
      "/images/crimson3.jpeg",
    ],

    notes: {
      top:   ["Plum", "Cotton Candy", "Honeybush", "Cyclopia", "Tobacco Blossom", "Mock Orange"],
      heart: ["Chrysanthemum", "Labdanum", "Agarwood", "Cinnamon", "Rose", "Brazilian Rosewood"],
      base:  ["Patchouli", "Ambergris", "Leather", "Sandalwood", "Castoreum", "Cedar"],
    },

    performance: {
      longevity:  5,
      projection: 5,
      season:     ["Autumn", "Winter"],
      occasion:   ["Evening", "Date Night", "Formal", "Wedding"],
    },

    seo: {
  title: "Crimson Leather Extrait de Parfum | HUZAYM'S Elixirs",

  description:
    "Crimson Leather Extrait de Parfum combines dark rose, leather and precious woods into an intensely refined fragrance with remarkable longevity and unforgettable character.",

  keywords: [
    "Crimson Leather perfume",
    "Leather perfume",
    "Rose leather fragrance",
    "Luxury extrait de parfum",
    "Bold perfume India",
    "HUZAYM'S Elixirs",
  ],
},

    featured:   true,
    bestSeller: false,
    available:  true,

    waLink:    "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Crimson%20Leather%20(30ml).",
    createdAt: "2026-01-01",
  },

  
  
  // ----------------------------------------------------------
// 5. Build Your Own Discovery Set
// ----------------------------------------------------------
{
  id: "trio-bundle",
  slug: "build-your-own-discovery-set",
  name: "Discovery Trio",
  type: "Discovery Set",

  isBundle: true,

  // Will be used later for interactive selection
  bundleProductSlugs: [
    "mariana-trench",
    "cinnabon",
    "crimson-leather",
  ],

  price: 1200,
  originalPrice: 1500,

  tagline: "Choose Any Three. Save More.",

  description:
    "Create your own Discovery Set by selecting any three fragrances from the HUZAYM'S ELIXIRS collection. Whether you prefer fresh aquatics, warm gourmands or bold leather accords, your perfect trio is entirely yours.",

  size: "Any 3 × 30ml Bottles",

  mainImage: "/images/trio-pack.jpeg",

  images: [
    "/images/trio-pack.jpeg",
    "/images/trio-pack1.jpeg",
    "/images/trio-pack2.jpeg",
    "/images/trio-pack3.jpeg",
    "/images/trio-pack4.jpeg",
  ],

  notes: {
  top: ["Your Choice"],
  heart: ["Your Collection"],
  base: ["Your Signature"],
},

  performance: {
    longevity: 5,
    projection: 5,
    season: ["Spring", "Summer", "Autumn", "Winter"],
    occasion: [
      "Casual",
      "Office",
      "Evening",
      "Wedding",
      "Date Night",
      "Formal",
      "Outdoor",
      "Daily Wear",
    ],
  },

  seo: {
  title: "Discovery Trio | HUZAYM'S Elixirs",

  description:
    "Create your own Discovery Trio by selecting any three signature fragrances from HUZAYM'S Elixirs. Experience luxury perfumery tailored to your personal style.",

  keywords: [
    "Discovery perfume set",
    "Luxury perfume gift set",
    "Build your own perfume set",
    "Perfume sampler India",
    "HUZAYM'S Elixirs",
  ],
},

  featured: true,
  bestSeller: false,
  available: true,

  waLink:
    "https://wa.me/918928042335?text=Hi!%20I'd%20like%20to%20build%20my%20own%20Discovery%20Set.%20Please%20help%20me%20choose%20any%203%20fragrances.",

  createdAt: "2026-01-01",
},

// ----------------------------------------------------------
// 6. The Complete Collection
// ----------------------------------------------------------
{
  id: "complete-collection",

  slug: "complete-collection",

  name: "The Complete Collection",

  type: "Complete Collection",

  isBundle: true,

  bundleProductSlugs: [
    "mariana-trench",
    "cinnabon",
    "crimson-leather",
    "celestial-tide",
  ],

  price: 1600,

  originalPrice: 2000,

  tagline: "Four Worlds. One Signature.",

  description:
    "Own the complete HUZAYM'S ELIXIRS collection in one premium set. Four distinct fragrances crafted for every mood, every season and every occasion. From aquatic freshness to warm gourmand sweetness, bold leather intensity and tranquil elegance — experience the entire journey.",

  size: "4 × 30ml Bottles",

  mainImage: "/images/complete-collection1.jpeg",

  images: [
    "/images/complete-collection1.jpeg",
    "/images/complete-collection2.jpeg",
    "/images/complete-collection3.jpeg",
    "/images/complete-collection4.jpeg",
    "/images/complete-collection5.jpeg",
  ],

  notes: {
    top: ["Four Signature Fragrances"],
    heart: ["Complete Luxury Experience"],
    base: ["One Unforgettable Collection"],
  },

  performance: {
    longevity: 5,
    projection: 5,
    season: [
      "Spring",
      "Summer",
      "Autumn",
      "Winter",
    ],
    occasion: [
      "Daily Wear",
      "Office",
      "Casual",
      "Outdoor",
      "Date Night",
      "Wedding",
      "Formal",
      "Evening",
    ],
  },

  seo: {
  title: "The Complete Collection | HUZAYM'S Elixirs",

  description:
    "Experience all four signature fragrances from HUZAYM'S Elixirs in one luxurious collection. A complete fragrance journey crafted for every mood, season and occasion.",

  keywords: [
    "Luxury perfume collection",
    "Perfume gift set India",
    "Premium fragrance bundle",
    "Complete perfume collection",
    "HUZAYM'S Elixirs",
  ],
},

  featured: true,

  bestSeller: true,

  available: true,

  waLink:
    "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20The%20Complete%20Collection%20(4%20Fragrances).",

  createdAt: "2026-01-01",
},

];


// ------------------------------------------------------------
// HERO SLIDES
// ------------------------------------------------------------

export const HERO_SLIDES: HeroSlide[] = [
 {
  id: "hero-celestial",
  image: "/images/hero-celestial.jpeg",
  alt: "Celestial Tide Launch",
  productSlug: "celestial-tide",
  badgeLabel: "New Arrival",
},
{
  id: "hero-complete",

  image: "/images/complete-collection.jpeg",

  alt: "The Complete Collection",

  productSlug: "complete-collection",

  badgeLabel: "Save ₹400",
},

  {
    id: "hero-trio",
    image: "/images/hero-trio.jpeg",
    alt: "Complete Trio Pack Banner Ad",
    productSlug: "build-your-own-discovery-set",
    badgeLabel: "Discovery Offer",
  },

  {
    id: "hero-mariana",
    image: "/images/hero-mariana.jpeg",
    alt: "Mariana Trench Premium Ad",
    productSlug: "mariana-trench",
    badgeLabel: "Boutique Fragrance",
  },

  {
    id: "hero-cinnabon",
    image: "/images/hero-cinnabon.jpeg",
    alt: "Cinnabon Luxury Ad",
    productSlug: "cinnabon",
    badgeLabel: "Boutique Fragrance",
  },

  {
    id: "hero-crimson",
    image: "/images/hero-crimson.jpeg",
    alt: "Crimson Leather Bold Ad",
    productSlug: "crimson-leather",
    badgeLabel: "Boutique Fragrance",
  },
];

// ------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------

/** ₹500 → "₹500"  |  ₹1200 → "₹1,200" */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style:                 "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Discount % between two prices.
 * calcDiscount(1200, 1500) → "20"
 */
export function calcDiscount(price: number, originalPrice: number): string {
  if (originalPrice <= price) return "0";
  return Math.round(((originalPrice - price) / originalPrice) * 100).toString();
}

/** Returns undefined if not found — always handle that case in the caller. */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Products shown in the hero slider. */
export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured && p.available);
}