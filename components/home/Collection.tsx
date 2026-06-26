"use client";

import React from "react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "../product/ProductCard";
import type { Product } from "@/types";

interface CollectionProps {
  onOpenModal: (product: Product) => void;
}

export default function Collection({ onOpenModal }: CollectionProps) {
  return (
    <section id="collection" className="py-24 scroll-mt-12 bg-[#020612] border-t border-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[9px] font-bold text-[#C5A059] tracking-[0.4em] uppercase block mb-2">Our Signature Lines</span>
          <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-wide uppercase">The Elixir Collection</h2>
          <div className="w-8 h-[1px] bg-[#C5A059] mx-auto mt-4 opacity-40"></div>
        </div>

        <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-x-visible sm:pb-0">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onClick={onOpenModal} />
          ))}
        </div>

        <p className="text-[8px] text-center text-slate-500 uppercase tracking-widest mt-4 sm:hidden">Swipe Left / Right to Browse Collection ⇄</p>

      </div>
    </section>
  );
}