"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function EmptyCart() {
  return (
    <section className="min-h-[70vh] px-6 pt-32 md:pt-36">
      <div className="max-w-lg w-full text-center mx-auto">

        <div
          className="
            mx-auto
            mb-8
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            border
            border-[#D4AF37]/20
            bg-[#071225]
          "
        >
          <ShoppingBag
            size={40}
            className="text-[#D4AF37]"
            strokeWidth={1.7}
          />
        </div>

        <p className="uppercase tracking-[0.35em] text-[11px] text-[#D4AF37]">
          Your Cart
        </p>

        <h1 className="mt-4 font-serif text-4xl text-white">
          Your cart is empty
        </h1>

        <p className="mt-6 text-slate-400 leading-8">
          Looks like you haven't added any fragrances yet.
          Discover our signature collection and find your
          next scent.
        </p>

        <Link
          href="/products"
          className="
            mt-10
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
          Continue Shopping
        </Link>

      </div>
    </section>
  );
}