import ProductGallery from "@/components/product/ProductGallery";
import Layout from "@/components/layout/Layout";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import VerifiedReviews from "@/components/product/VerifiedReviews"; 
import ProductAccordion from "@/components/product/ProductAccordion";
import ProductCard from "@/components/product/ProductCard";
import Reviews from "@/components/home/Reviews";
import WhyHuzayms from "@/components/product/WhyHuzayms";
import AddToCartButton from "@/components/product/AddToCartButton";

// Import your existing FadeIn component
import FadeIn from "@/components/ui/FadeIn"; 

import {
  PRODUCTS,
  getProductBySlug,
  formatPrice,
} from "@/data/products";

import {
  LONGEVITY_LABELS,
  PROJECTION_LABELS,
} from "@/types";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | HUZAYM'S Elixirs",
    };
  }

  return {
    title: product.seo.title,

    description: product.seo.description,

    keywords: product.seo.keywords,

    alternates: {
      canonical: `https://huzayms.vercel.app/products/${product.slug}`,
    },

    openGraph: {
      title: product.seo.title,

      description: product.seo.description,

      url: `https://huzayms.vercel.app/products/${product.slug}`,

      siteName: "HUZAYM'S Elixirs",

      images: [
        {
          url: product.mainImage,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],

      locale: "en_IN",

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: product.seo.title,

      description: product.seo.description,

      images: [product.mainImage],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProductPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS
  .filter((p) => p.slug !== product.slug)
  .sort((a, b) => {

    // Bundles first
    if (a.isBundle !== b.isBundle) {
      return Number(b.isBundle) - Number(a.isBundle);
    }

    // Featured fragrances next
    if (a.featured !== b.featured) {
      return Number(b.featured) - Number(a.featured);
    }

    // New arrivals after featured
    if ((a.newArrival ?? false) !== (b.newArrival ?? false)) {
      return Number(b.newArrival ?? false) - Number(a.newArrival ?? false);
    }

    // Otherwise keep original order
    return 0;

  })
  .slice(0, 5);

  const productSchema = {
  "@context": "https://schema.org",

  "@type": "Product",

  name: product.name,

  image: [
    `https://huzayms.vercel.app${product.mainImage}`,
  ],

  description: product.seo.description,

  sku: product.id,

  brand: {
    "@type": "Brand",
    name: "HUZAYM'S Elixirs",
  },

  offers: {
    "@type": "Offer",

    url: `https://huzayms.vercel.app/products/${product.slug}`,

    priceCurrency: "INR",

    price: product.price,

    availability: product.available
      ? "https://schema.org/InStock"
      : "https://schema.org/OutOfStock",

    itemCondition: "https://schema.org/NewCondition",
  },
};

  return (
    <Layout>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema),
      }}
    />


      <div className="pb-0">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-6">
          
          {/* ================= 1. MAIN PRODUCT SHOWCASE ================= */}
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 mb-8">
              <ProductGallery
                images={product.images}
                productName={product.name}
              />

              {/* Details */}
              <div className="space-y-6 lg:sticky lg:top-24 h-fit">
                <h1 className="text-4xl md:text-5xl font-bold">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">★★★★★</span>
                  <span className="text-slate-400 text-sm">
                    4.9 / 5
                  </span>
                </div>
                {product.slug === "celestial-tide" && (
                  <div className="inline-flex mt-1 mb-1">
                    <span className="px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] uppercase tracking-[0.35em]">
                    New Arrival
                    </span>
                  </div>
                )}
                <p className="text-[#D4AF37] text-4xl font-semibold">
                  {product.slug === "celestial-tide"
                    ? "Launch Price • ₹500"
                    : formatPrice(product.price)}
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  {product.size}
                </p>

                {product.originalPrice && (
                  <p className="text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </p>
                )}

                <p className="max-w-lg text-slate-400 leading-8 text-[15px]">
                  {product.description}
                </p>
                <AddToCartButton productId={product.id} />
                <a
                  href={product.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D4AF37]
                    px-8
                    py-4
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:shadow-[0_12px_30px_rgba(212,175,55,0.35)]
                  "
                >
                  Order on WhatsApp →
                </a>
                
              </div>
            </div>
          </FadeIn>

          {/* ================= 2. FRAGRANCE NOTES / BUNDLE ================= */}

<FadeIn>

  <ProductAccordion
    title={product.isBundle ? "What's Included" : "Fragrance Notes"}
  >
              {product.isBundle ? (

<div className="space-y-6">

  <div className="flex justify-between items-center border-b border-white/10 pb-5">

    <div>

      <h3 className="text-white text-xl font-serif">
        Mariana Trench
      </h3>

      <p className="text-slate-400 text-sm mt-1">
        Fresh • Aquatic • Mysterious
      </p>

    </div>

  </div>

  <div className="flex justify-between items-center border-b border-white/10 pb-5">

    <div>

      <h3 className="text-white text-xl font-serif">
        Cinnabon
      </h3>

      <p className="text-slate-400 text-sm mt-1">
        Sweet • Warm • Addictive
      </p>

    </div>

  </div>

  <div className="flex justify-between items-center border-b border-white/10 pb-5">

    <div>

      <h3 className="text-white text-xl font-serif">
        Crimson Leather
      </h3>

      <p className="text-slate-400 text-sm mt-1">
        Rose • Leather • Bold
      </p>

    </div>

  </div>

  <div className="flex justify-between items-center">

    <div>

      <h3 className="text-white text-xl font-serif">
        Celestial Tide
      </h3>

      <p className="text-slate-400 text-sm mt-1">
        Fresh • Tea • Citrus
      </p>

    </div>

  </div>

  <div className="pt-4">

    <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs">

      {product.slug === "complete-collection"

        ? "Includes all four signature fragrances."

        : "Choose any three during WhatsApp ordering."}

    </p>

  </div>

</div>

) : (

<div className="grid md:grid-cols-3 gap-8">

  <div>

    <p className="uppercase tracking-[0.25em] text-[10px] text-slate-500">
      Top Notes
    </p>

    <p className="mt-3 font-serif text-2xl text-white leading-relaxed">
      {product.notes.top.join(" • ")}
    </p>

  </div>

  <div>

    <p className="uppercase tracking-[0.25em] text-[10px] text-slate-500">
      Heart Notes
    </p>

    <p className="mt-3 font-serif text-2xl text-white leading-relaxed">
      {product.notes.heart.join(" • ")}
    </p>

  </div>

  <div>

    <p className="uppercase tracking-[0.25em] text-[10px] text-slate-500">
      Base Notes
    </p>

    <p className="mt-3 font-serif text-2xl text-white leading-relaxed">
      {product.notes.base.join(" • ")}
    </p>

  </div>

</div>

)}
            </ProductAccordion>
          </FadeIn>

          {/* ================= 3. PERFORMANCE Accordion ================= */}
          <FadeIn>
            <ProductAccordion title="Performance & Usage">
              {product.isBundle ? (

<div className="grid md:grid-cols-2 gap-8">

  <div>
    <p className="uppercase tracking-[0.25em] text-[10px] text-slate-500">
      Collection
    </p>

    <p className="mt-2 text-white text-lg">
      {product.slug === "complete-collection"
        ? "All 4 Signature Fragrances"
        : "Choose Any 3 Fragrances"}
    </p>
  </div>

  <div>
    <p className="uppercase tracking-[0.25em] text-[10px] text-slate-500">
      Bottle Size
    </p>

    <p className="mt-2 text-white text-lg">
      {product.size}
    </p>
  </div>

  <div>
    <p className="uppercase tracking-[0.25em] text-[10px] text-slate-500">
      Best For
    </p>

    <p className="mt-2 text-white leading-7">
      Discovering every signature fragrance.
    </p>
  </div>

  <div>
    <p className="uppercase tracking-[0.25em] text-[10px] text-slate-500">
      Savings
    </p>

    <p className="mt-2 text-[#D4AF37] text-lg">
      Save ₹{product.originalPrice! - product.price}
    </p>
  </div>

</div>

) : (

<div className="grid md:grid-cols-2 gap-8">

  <div>
    <p className="uppercase tracking-[0.25em] text-[10px] text-slate-500">
      Longevity
    </p>

    <p className="mt-2 text-white text-lg">
      {LONGEVITY_LABELS[product.performance.longevity]}
    </p>
  </div>

  <div>
    <p className="uppercase tracking-[0.25em] text-[10px] text-slate-500">
      Projection
    </p>

    <p className="mt-2 text-white text-lg">
      {PROJECTION_LABELS[product.performance.projection]}
    </p>
  </div>

  <div>
    <p className="uppercase tracking-[0.25em] text-[10px] text-slate-500">
      Best Season
    </p>

    <p className="mt-2 text-white leading-7">
      {product.performance.season.join(" • ")}
    </p>
  </div>

  <div>
    <p className="uppercase tracking-[0.25em] text-[10px] text-slate-500">
      Best Occasion
    </p>

    <p className="mt-2 text-white leading-7">
      {product.performance.occasion.join(" • ")}
    </p>
  </div>

</div>

)}
            </ProductAccordion>
          </FadeIn>

          {/* ================= 4. RELATED PRODUCTS GRID ================= */}
          <FadeIn>
            <section className="mt-12">
              <div className="text-center mb-12">
                <p className="uppercase tracking-[0.35em] text-[11px] text-[#D4AF37]">
                  Discover More
                </p>
                <h2 className="mt-4 font-serif text-3xl md:text-5xl text-white">
                  You May Also Like
                </h2>
                <div
                  className="
                    w-20
                    h-px
                    mx-auto
                    mt-6
                    bg-gradient-to-r
                    from-transparent
                    via-[#D4AF37]
                    to-transparent
                  "
                />
                <p className="mt-5 text-slate-400 max-w-xl mx-auto">
                  Explore more signature creations from the HUZAYM'S collection.
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-5 max-w-7xl mx-auto">
                {relatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    compact
                  />
                ))}
              </div>
            </section>
          </FadeIn>

          {/* ================= 5. VERIFIED CUSTOMER REVIEWS BANNER ================= */}
<FadeIn>
  <VerifiedReviews />
</FadeIn>

</div>
</div>

{/* ================= 6. CAROUSEL REVIEWS COMPONENT ================= */}
<FadeIn>
  <WhyHuzayms />
</FadeIn>
    </Layout>
  );
}