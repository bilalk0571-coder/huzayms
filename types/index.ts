// ============================================================
// HUZAYM'S ELIXIRS — Core Type Definitions
// types/index.ts
// ============================================================


export type ConcentrationType =
  | "Eau De Cologne"
  | "Eau De Toilette"
  | "Eau De Parfum"
  | "Extrait De Parfum"
  | "Discovery Set"
  | "Complete Collection"
  | "Limited Bundle"
  ;

/**
 * 1–5 scale. Render as icons in the UI — never expose the raw number.
 * 1 = Very Light / Skin scent   |   5 = Beast Mode / Massive
 */
export type Rating = 1 | 2 | 3 | 4 | 5;

export type Season = "Spring" | "Summer" | "Autumn" | "Winter" | "All Season";

export type Occasion =
  | "Casual"
  | "Office"
  | "Evening"
  | "Wedding"
  | "Date Night"
  | "Formal"
  | "Outdoor"
  | "Daily Wear";


// ------------------------------------------------------------
// PRODUCT NOTES
// Arrays so each ingredient can be rendered as a pill or list
// item without parsing. Never store as comma-run strings.
// ------------------------------------------------------------

export interface ProductNotes {
  top:   string[];
  heart: string[];
  base:  string[];
}


// ------------------------------------------------------------
// PERFORMANCE
// ------------------------------------------------------------

export interface ProductPerformance {
  /** How long the scent lasts on skin. */
  longevity: Rating;
  /** How far the scent carries from the wearer. */
  projection: Rating;
  /** Best seasons to wear. Multiple allowed. */
  season: Season[];
  /** Best contexts. Multiple allowed. */
  occasion: Occasion[];
}

export const LONGEVITY_LABELS: Record<Rating, string> = {
  1: "Very Light (< 2 hrs)",
  2: "Light (2–4 hrs)",
  3: "Moderate (4–6 hrs)",
  4: "Long Lasting (6–10 hrs)",
  5: "Beast Mode (10+ hrs)",
};

export const PROJECTION_LABELS: Record<Rating, string> = {
  1: "Skin Scent",
  2: "Intimate",
  3: "Moderate",
  4: "Strong",
  5: "Massive",
};


// ------------------------------------------------------------
// SEO
// Kept on the product record so content and SEO are edited
// in one place.
// ------------------------------------------------------------

export interface ProductSEO {
  /** Full <title>. Format: "{Name} | Huzaym's Elixirs". Max 60 chars. */
  title: string;
  /** <meta name="description">. Write for clicks, not keywords. Max 160 chars. */
  description: string;
  /** Optional. Omit rather than padding with generic terms. */
  keywords?: string[];
}


// ------------------------------------------------------------
// PRODUCT
// ------------------------------------------------------------

export interface Product {

  // --- Identity ---
  id:   string;
  /**
   * URL-safe, hyphenated. Used in /products/[slug].
   * Never change after a product is indexed — it breaks inbound links.
   */
  slug: string;
  name: string;
  

  // --- Classification ---
  type:                ConcentrationType;
  isBundle:            boolean;
  /** Slugs of member products. Empty array for non-bundles. */
  bundleProductSlugs:  string[];

  // --- Pricing ---
  /** Price in rupees (₹). e.g. 500 */
  price:          number;
  /** Set only when there is an active discount. Omit otherwise. */
  originalPrice?: number;

  // --- Presentation ---
  tagline:     string;
  description: string;
  size:        string;

  // --- Media ---
  mainImage: string;
  /** First item should match mainImage. Minimum 1. */
  images:    string[];

  // --- Notes & Performance ---
  notes:       ProductNotes;
  performance: ProductPerformance;

  // --- SEO ---
  seo: ProductSEO;

  // --- Store Flags ---
  featured:    boolean;
  bestSeller:  boolean;
  /** Set true at launch. Clear manually after ~4 weeks. */
  newArrival?: boolean;
  /** Set false for out-of-stock. Never delete — it breaks links. */
  available:   boolean;
  freeShipping?: boolean;
  // --- Commerce ---
  /** Pre-built WhatsApp deep link. URL-encode the message text. */
  waLink: string;

  // --- Timestamps ---
  /** ISO 8601. e.g. "2026-01-01" */
  createdAt: string;
}


// ------------------------------------------------------------
// REVIEW
// ------------------------------------------------------------

export interface Review {
  id:        string;
  /** References Product.id */
  productId: string;
  quote:     string;
  author:    string;
  badge:     string;
  rating?:   Rating;
  createdAt: string;
}


// ------------------------------------------------------------
// HERO SLIDE
// Decoupled from Product so promotional banners can live in the
// slider without needing a product behind them.
// ------------------------------------------------------------

export interface HeroSlide {
  id:            string;
  image:         string;
  alt:           string;
  /** When set, clicking the slide opens that product. */
  productSlug?:  string;
  badgeLabel?:   string;
}


// ------------------------------------------------------------
// UTILITY TYPES
// ------------------------------------------------------------

/** Minimal shape for the collection grid card. */
export type ProductCardData = Pick<
  Product,
  | "id"
  | "slug"
  | "name"
  | "type"
  | "tagline"
  | "price"
  | "originalPrice"
  | "size"
  | "mainImage"
  | "available"
  | "featured"
  | "bestSeller"
  | "newArrival"
  | "isBundle"
>;

/** Everything needed for the product modal. */
export type ProductModalData = Omit<Product, "seo" | "createdAt">;