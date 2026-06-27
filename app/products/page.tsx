import Link from "next/link";

import Layout from "@/components/layout/Layout";
import { PRODUCTS, formatPrice } from "@/data/products";

export default function ProductsPage() {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b
from-[#071225]
to-[#020612]
backdrop-blur-md pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-[#C5A059] text-xs mb-4">
              Collection
            </p>

            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Our Fragrances
            </h1>

            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Every fragrance is handcrafted to deliver exceptional projection,
              longevity and unforgettable character.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group border border-white/10 bg-[#030a1c] overflow-hidden hover:border-[#D4AF37] transition-all duration-500"
              >
                <div className="aspect-[5/6] overflow-hidden">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-6 space-y-3">

                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">
                    {product.type}
                  </p>

                  <h2 className="text-2xl text-white font-serif">
                    {product.name}
                  </h2>

                  <p className="text-slate-400 text-sm line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center pt-4">

                    <span className="text-[#D4AF37] text-lg font-semibold">
                      {formatPrice(product.price)}
                    </span>

                    <span className="uppercase tracking-[0.3em] text-[10px] text-white group-hover:text-[#D4AF37] transition">
                      View →
                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>
    </Layout>
  );
}