import ProductGallery from "@/components/product/ProductGallery";
import Layout from "@/components/layout/Layout";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

  const relatedProducts = PRODUCTS.filter(
    (p) => p.slug !== product.slug
  ).slice(0, 3);

  return (
    <Layout>
      <div className="pb-16">
        {/* Adjusted to sit beneath the new fixed global Navbar */}
        <div className="border-b border-white/5 bg-[#020612] pt-24 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a
              href="/"
              className="text-xs uppercase tracking-[0.25em] text-slate-400 hover:text-[#D4AF37] transition"
            >
              ← Back
            </a>
            <span className="font-serif text-sm tracking-[0.3em] uppercase bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] bg-clip-text text-transparent">
              HUZAYM'S ELIXIRS
            </span>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Product */}
          <div className="grid lg:grid-cols-2 gap-12">
            <ProductGallery
              images={product.images}
              productName={product.name}
            />

            {/* Details */}
            <div className="space-y-6 lg:sticky lg:top-24 h-fit">
              <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                {product.type}
              </p>

              <h1 className="text-4xl md:text-5xl font-bold">
                {product.name}
              </h1>

              <p className="text-[#D4AF37] text-xl">
                {formatPrice(product.price)}
              </p>

              {product.originalPrice && (
                <p className="text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </p>
              )}

              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Notes */}
          <section className="mt-20">
            <h2 className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-8">
              Olfactory Architecture
            </h2>

            <div className="grid md:grid-cols-3 border-y border-white/10">
              <div className="py-8 text-center md:border-r border-white/10">
                <h3 className="text-slate-500 uppercase tracking-[0.25em] text-xs mb-4">
                  Top Notes
                </h3>
                <p className="text-white text-xl font-light">
                  {product.notes.top.join(" & ")}
                </p>
              </div>

              <div className="py-8 text-center md:border-r border-white/10">
                <h3 className="text-slate-500 uppercase tracking-[0.25em] text-xs mb-4">
                  Heart Profile
                </h3>
                <p className="text-white text-xl font-light">
                  {product.notes.heart.join(" & ")}
                </p>
              </div>

              <div className="py-8 text-center">
                <h3 className="text-slate-500 uppercase tracking-[0.25em] text-xs mb-4">
                  Base Finish
                </h3>
                <p className="text-white text-xl font-light">
                  {product.notes.base.join(" & ")}
                </p>
              </div>
            </div>
          </section>

          {/* Performance */}
          <section className="mt-20">
            <h2 className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-8">
              Performance
            </h2>

            <div className="border-t border-white/10">
              <div className="flex justify-between py-5 border-b border-white/10">
                <span className="text-slate-400">
                  Longevity
                </span>
                <span className="text-white">
                  {LONGEVITY_LABELS[product.performance.longevity]}
                </span>
              </div>

              <div className="flex justify-between py-5 border-b border-white/10">
                <span className="text-slate-400">
                  Projection
                </span>
                <span className="text-white">
                  {PROJECTION_LABELS[product.performance.projection]}
                </span>
              </div>

              <div className="flex justify-between py-5 border-b border-white/10">
                <span className="text-slate-400">
                  Best Seasons
                </span>
                <span className="text-white text-right">
                  {product.performance.season.join(", ")}
                </span>
              </div>

              <div className="flex justify-between py-5 border-b border-white/10">
                <span className="text-slate-400">
                  Best Occasions
                </span>
                <span className="text-white text-right">
                  {product.performance.occasion.join(", ")}
                </span>
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-white">
              You May Also Like
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <a
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37] transition group bg-[#030a1c]"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-[#010307]">
                    <img
                      src={item.mainImage}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-white group-hover:text-[#D4AF37] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[#C5A059]">
                    {formatPrice(item.price)}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={product.waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed
          bottom-5
          right-5
          z-50
          bg-gradient-to-r from-[#BF953F] to-[#FCF6BA]
          text-black
          px-5
          py-3
          rounded-full
          font-bold
          tracking-widest
          uppercase
          text-[10px]
          shadow-[0_4px_14px_0_rgba(212,175,55,0.39)]
          hover:scale-105
          hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)]
          transition-all
          duration-300
        "
      >
        {formatPrice(product.price)} • Order →
      </a>
    </Layout>
  );
}