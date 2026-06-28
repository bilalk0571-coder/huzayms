"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCTS, formatPrice } from "@/data/products";

export default function SignatureFinder() {
  const categories = [
    {
      name: "Fresh",
      slug: "mariana-trench",
    },
    {
      name: "Sweet",
      slug: "cinnabon",
    },
    {
      name: "Dark",
      slug: "crimson-leather",
    },
    {
      name: "Collection",
      slug: "complete-discovery-trio",
    },
  ];

  const [active, setActive] = useState(0);

  const product =
    PRODUCTS.find((p) => p.slug === categories[active].slug) || PRODUCTS[0];

  const teasers: Record<string, string> = {
    "mariana-trench": "Dive into the depths of luxury.",
    cinnabon: "Warm vanilla wrapped in irresistible sweetness.",
    "crimson-leather": "Where rose meets leather in perfect darkness.",
    "complete-discovery-trio": "Experience every signature in one luxurious collection.",
  };

  const teaser = teasers[product.slug] || product.description;

  return (
    <section className="relative py-28 px-6 bg-[#020612] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-[#D4AF37] text-xs mb-4">
            Find Your Signature
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Discover Your Signature
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 leading-relaxed">
            Discover the fragrance that reflects your personality.
          </p>
        </div>

        {/* Category buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActive(index)}
              className={`relative px-2 pb-2 text-sm uppercase tracking-[0.3em] transition-all duration-300 ${
                active === index
                  ? "text-[#D4AF37]"
                  : "text-slate-500 hover:text-white"
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                  active === index ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Product Card */}
        <Link
          href={`/products/${product.slug}`}
          className="group block max-w-md mx-auto text-center border border-white/10 bg-gradient-to-b from-[#081326] to-[#030814] rounded-[32px] overflow-hidden transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(212,175,55,0.08)] pb-10"
        >
          {/* Edge-to-Edge Image */}
          <div className="relative w-full h-[430px] overflow-hidden mb-8">
            <img
              key={product.slug}
              src={product.mainImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out opacity-100 group-hover:scale-105"
            />
            {/* Gradient Overlay to blend with the card background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          {/* Content Wrapper */}
          <div className="px-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <p className="text-[10px] uppercase tracking-[0.45em] text-[#D4AF37]">
                Available Now
              </p>
            </div>

            <h3 className="font-serif text-4xl text-white mb-3 transition-colors duration-300 group-hover:text-[#D4AF37]">
              {product.name}
            </h3>

            <p className="text-[#D4AF37] uppercase tracking-[0.12em] sm:tracking-[0.28em] text-[9px] sm:text-xs mb-5 whitespace-nowrap">
  {product.tagline}
</p>

            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm mx-auto">
              {teaser}
            </p>

            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500 mb-2">
                Starting At
              </p>
              <p className="text-3xl font-semibold text-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.15)]">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Changed from <Link> to <span> to avoid invalid nested <a> tags */}
            <span className="inline-block uppercase tracking-[0.3em] text-sm text-[#D4AF37] group-hover:tracking-[0.35em] transition-all">
              Explore →
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}