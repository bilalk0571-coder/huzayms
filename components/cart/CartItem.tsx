"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";

import { formatPrice } from "@/data/products";
import type { CartProduct } from "@/lib/cart";

interface CartItemProps {
  item: CartProduct;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  const { product, quantity, lineTotal } = item;

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#071225]
        p-5
        transition
        hover:border-[#D4AF37]/30
      "
    >
      <div className="flex flex-col md:flex-row gap-6">

        {/* Product Image */}

        <Link
          href={`/products/${product.slug}`}
          className="shrink-0"
        >
          <div className="relative w-full md:w-36 aspect-square overflow-hidden rounded-2xl">
            <Image
              src={product.mainImage}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </Link>

        {/* Product Details */}

        <div className="flex-1 flex flex-col justify-between">

          <div>

            <Link
              href={`/products/${product.slug}`}
              className="hover:text-[#D4AF37] transition"
            >
              <h2 className="text-2xl font-serif text-white">
                {product.name}
              </h2>
            </Link>

            <p className="mt-2 text-slate-400">
              {product.type}
            </p>

            <p className="mt-4 text-[#D4AF37] text-xl font-semibold">
              {formatPrice(product.price)}
            </p>

          </div>

          {/* Controls */}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

            {/* Quantity */}

            <div
              className="
                flex
                items-center
                rounded-full
                border
                border-white/10
                overflow-hidden
              "
            >
              <button
                onClick={onDecrease}
                className="
                  h-10
                  w-10
                  text-white
                  hover:bg-white/5
                  transition
                "
              >
                −
              </button>

              <span
                className="
                  w-12
                  text-center
                  text-white
                  font-medium
                "
              >
                {quantity}
              </span>

              <button
                onClick={onIncrease}
                className="
                  h-10
                  w-10
                  text-white
                  hover:bg-white/5
                  transition
                "
              >
                +
              </button>
            </div>

            {/* Right Side */}

            <div className="flex items-center gap-5">

              <p className="text-white font-semibold text-lg">
                {formatPrice(lineTotal)}
              </p>

              <button
                onClick={onRemove}
                className="
                  text-red-400
                  hover:text-red-300
                  transition
                "
                aria-label={`Remove ${product.name}`}
              >
                <Trash2 size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}