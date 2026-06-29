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
rounded-[26px]
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

      <div className="relative overflow-hidden aspect-[4/4.6] bg-[#010307]">
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

      <div className="px-5 py-4 flex flex-col flex-1">

        <h3 className="font-serif text-[1.55rem] leading-none text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
          {product.name}
        </h3>

        <div className="w-10 h-px bg-[#D4AF37]/40 mt-3 mb-3 transition-all duration-300 group-hover:w-16" />

        <p className="text-slate-400 text-[14px] leading-6">
          {teaser}
        </p>

        {/* INFO */}

        <div className="pt-4 space-y-1.5">

          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
            {product.size}
          </p>

          <p className="text-[10px] uppercase tracking-[0.30em] text-slate-500">
            {product.type}
          </p>

          <p className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37]">
            Luxury Concentration
          </p>

        </div>

        {/* PRICE */}

        <div className="mt-5 border-t border-white/5 pt-4">

          <p className="text-[9px] uppercase tracking-[0.35em] text-slate-500 mb-1">
            Starting At
          </p>

          <p className="text-[30px] font-semibold text-[#D4AF37] leading-none">
            {formatPrice(product.price)}
          </p>

          <span className="inline-flex items-center mt-4 text-[12px] uppercase tracking-[0.28em] text-[#D4AF37] transition-all duration-300 group-hover:tracking-[0.34em]">
            Explore →
          </span>

        </div>

      </div>
    </Link>
  );
}