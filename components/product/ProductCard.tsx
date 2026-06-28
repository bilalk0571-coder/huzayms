"use client";

import React from "react";
import Link from "next/link";
import { formatPrice } from "@/data/products";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const teasers: Record<string, string> = {
  "mariana-trench": "Dive into the depths of luxury.",
  cinnabon: "Warm vanilla wrapped in irresistible sweetness.",
  "crimson-leather": "Where rose meets leather in perfect darkness.",
  "complete-discovery-trio":
    "Experience every signature in one luxurious collection.",
};

export default function ProductCard({ product }: ProductCardProps) {
  const teaser = teasers[product.slug] || product.tagline;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="
group
flex
flex-col
bg-[#030a1c]
rounded-[28px]
overflow-hidden
border
border-white/5
transition-all
duration-500
hover:border-[#D4AF37]/60
hover:-translate-y-2
hover:shadow-[0_20px_50px_rgba(212,175,55,0.10)]
min-w-[80vw]
sm:min-w-0
snap-center
h-full
"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden aspect-[4/5] bg-[#010307]">
        <img
          src={product.mainImage}
          alt={product.name}
          className="
w-full
h-full
object-cover
object-top
transition-transform
duration-700
group-hover:scale-105
"
        />

        {/* Badges */}

        {product.bestSeller && (
          <span className="absolute top-4 left-4 bg-[#D4AF37] text-black text-[8px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full">
            Best Seller
          </span>
        )}

        {!product.bestSeller && product.isBundle && (
          <span className="absolute top-4 left-4 bg-[#D4AF37] text-black text-[8px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full">
            Limited Offer
          </span>
        )}

        {!product.bestSeller &&
          !product.isBundle &&
          product.newArrival && (
            <span className="absolute top-4 left-4 bg-[#D4AF37] text-black text-[8px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full">
              New Arrival
            </span>
          )}
      </div>

      {/* CONTENT */}

      <div className="px-6 py-6 flex flex-col flex-1 h-full">

        <h3 className="font-serif text-2xl text-white mb-3 transition-colors duration-300 group-hover:text-[#D4AF37]">
          {product.name}
        </h3>

        <div className="w-10 h-px bg-[#D4AF37]/40 mb-4 transition-all duration-300 group-hover:w-16" />

        <p className="text-slate-400 leading-relaxed text-sm min-h-[64px]">
          {teaser}
        </p>

        {/* Product Info */}

        <div className="mt-auto pt-6">

          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
            {product.size}
          </p>

          <p className="mt-2 text-[11px] uppercase tracking-[0.30em] text-slate-500">
            {product.type}
          </p>

          <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
            Luxury Concentration
          </p>

        </div>

        {/* PRICE */}

        <div className="mt-8 border-t border-white/5 pt-6">

          <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500 mb-2">
            Starting At
          </p>

          <p className="text-3xl font-semibold text-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.15)]">
            {formatPrice(product.price)}
          </p>

          <span className="inline-flex items-center mt-6 text-sm uppercase tracking-[0.28em] text-[#D4AF37] transition-all duration-300 group-hover:tracking-[0.34em]">
            Explore →
          </span>

        </div>

      </div>
    </Link>
  );
}