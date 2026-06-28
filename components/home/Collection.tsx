"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import ProductCard from "../product/ProductCard";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Collection() {
  return (
    <section
      id="collection"
      className="py-24 scroll-mt-12 bg-[#020612] border-t border-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[9px] font-bold text-[#C5A059] tracking-[0.4em] uppercase block mb-2">
            Curated Signature Collection
          </span>

          <h2 className="text-3xl md:text-5xl font-serif font-light text-white tracking-wide uppercase">
            The Elixir Collection
          </h2>

          <div className="w-8 h-[1px] bg-[#C5A059] mx-auto mt-4 opacity-40" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="flex overflow-x-auto pb-6 gap-8 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-x-visible sm:pb-0"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <p className="text-[8px] text-center text-slate-500 uppercase tracking-widest mt-4 sm:hidden">
          Swipe Left / Right to Browse Collection ⇄
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="/products"
          className="inline-flex items-center border border-[#D4AF37] px-8 py-4 uppercase tracking-[0.3em] text-xs text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
        >
          Explore All Fragrances →
        </Link>
      </div>
    </section>
  );
}