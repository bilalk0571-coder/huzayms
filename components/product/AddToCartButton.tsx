"use client";

import { useCart } from "@/hooks/useCart";

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({
  productId,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(productId)}
      className="
        mt-3
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
      Add to Cart
    </button>
  );
}