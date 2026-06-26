"use client";

import React from "react";
import { formatPrice } from "@/data/products";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={() => onClick(product)}
      className="cursor-pointer group flex flex-col justify-between bg-[#030a1c] rounded-none border border-white/[0.04] transition-all duration-300 hover:border-white/10 min-w-[80vw] sm:min-w-0 snap-center"
    >
      <div>
        <div className="w-full aspect-[4/5] overflow-hidden bg-[#010307] relative border-b border-white/[0.02]">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />

          {product.bestSeller && (
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-[#D4AF37] text-black font-bold text-[8px] tracking-widest uppercase px-2.5 py-1">
                Best Seller
              </span>
            </div>
          )}
          {product.isBundle && !product.bestSeller && (
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-[#D4AF37] text-black font-bold text-[8px] tracking-widest uppercase px-2.5 py-1">
                Limited Offer
              </span>
            </div>
          )}
          {product.newArrival && !product.bestSeller && !product.isBundle && (
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-[#D4AF37] text-black font-bold text-[8px] tracking-widest uppercase px-2.5 py-1">
                New Arrival
              </span>
            </div>
          )}
        </div>

        <div className="mt-5 px-4">
          <h3 className="text-xs font-serif font-medium text-white tracking-wide uppercase group-hover:text-[#D4AF37] transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-[9px] text-slate-400 tracking-[0.2em] uppercase mt-1 line-clamp-1">
            {product.type}
          </p>
          <p className="text-[8px] text-slate-500 tracking-wider mt-0.5">{product.size}</p>

          <div className="flex items-center gap-1 mt-2.5">
            <span className="text-[#D4AF37] text-[8px]">★★★★★</span>
            <span className="text-[8px] font-medium tracking-widest text-slate-500 uppercase">Premium Concentration</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-3 pb-4 px-4 border-t border-white/[0.03] flex justify-between items-center">
        <span className="text-xs font-medium text-[#C5A059] tracking-wider">
          {formatPrice(product.price)}
        </span>
        <span className="text-[8px] tracking-widest font-semibold uppercase text-slate-400 group-hover:text-[#D4AF37] transition-colors">
          DETAILS →
        </span>
      </div>
    </div>
  );
}