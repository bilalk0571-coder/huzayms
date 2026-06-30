import ProductGallery from "@/components/product/ProductGallery";
import Layout from "@/components/layout/Layout";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import VerifiedReviews from "@/components/product/VerifiedReviews"; 
import ProductAccordion from "@/components/product/ProductAccordion";
import ProductCard from "@/components/product/ProductCard";
import Reviews from "@/components/home/Reviews";
import WhyHuzayms from "@/components/product/WhyHuzayms";

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
      title: "Product Not Found | HUZAYM'S",
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,

    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: [product.mainImage],
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
  .sort((a, b) => Number(b.isBundle) - Number(a.isBundle))
  .slice(0, 4);

  return (
    <Layout>
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
          
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
                  <div className="inline-flex mt-3 mb-2">
                    <span className="px-4 py-1 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] uppercase tracking-[0.35em]">
                      Coming Soon
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
                  {product.slug === "celestial-tide"
                    ? "Pre-Order on WhatsApp →"
                    : "Order on WhatsApp →"}
                </a>
                <div className="grid grid-cols-2 gap-5 pt-8 border-t border-white/10">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      Longevity
                    </p>
                    <p className="mt-2 text-white">
                      {LONGEVITY_LABELS[product.performance.longevity]}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      Projection
                    </p>
                    <p className="mt-2 text-white">
                      {PROJECTION_LABELS[product.performance.projection]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ================= 2. FRAGRANCE NOTES Accordion ================= */}
          <FadeIn>
            <ProductAccordion title="Fragrance Notes">
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
            </ProductAccordion>
          </FadeIn>

          {/* ================= 3. PERFORMANCE Accordion ================= */}
          <FadeIn>
            <ProductAccordion title="Performance & Usage">
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
            </ProductAccordion>
          </FadeIn>

          {/* ================= 4. RELATED PRODUCTS GRID ================= */}
          <FadeIn>
            <section className="mt-24">
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
              <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
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