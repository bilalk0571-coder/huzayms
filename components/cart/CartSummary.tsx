"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { sendOrderToWhatsApp } from "@/lib/whatsapp";

import {
  getCartProducts,
  calculateSubtotal,
} from "@/lib/cart";

interface CartSummaryProps {
  mode?: "cart" | "checkout";
  canCheckout?: boolean;
  compact?: boolean;
}

export default function CartSummary({
  mode = "cart",
  canCheckout = true,
  compact = false,
}: CartSummaryProps) {
  const { items } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const cartProducts = getCartProducts(items);
  const subtotal = calculateSubtotal(cartProducts);
  
  const FREE_SHIPPING_THRESHOLD = 1600;
const SHIPPING_CHARGE = 79;

const hasFreeShippingItem = cartProducts.some(
  (item) => item.product.freeShipping
);

const shipping =
  hasFreeShippingItem || subtotal >= FREE_SHIPPING_THRESHOLD
    ? 0
    : SHIPPING_CHARGE;

  const total = subtotal + shipping;

  async function handleCheckout() {
    if (isProcessing || !canCheckout) return;

    setIsProcessing(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    sendOrderToWhatsApp(items);

    setIsProcessing(false);
  }

  if (compact) {
    return (
      <aside className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400">
            Total
          </p>

          <p className="text-2xl font-bold text-[#D4AF37]">
            {formatPrice(total)}
          </p>
        </div>

        <Link
          href="/checkout"
          className="
            rounded-full
            bg-[#D4AF37]
            px-6
            py-3
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-black
          "
        >
          Checkout
        </Link>
      </aside>
    );
  }

  return (
    <>
      {/* Desktop Layout */}
      <aside
        className="
          hidden
          lg:block
          sticky
          top-28
          rounded-3xl
          border
          border-white/10
          bg-[#071225]
          p-8
        "
      >
        <p className="uppercase tracking-[0.35em] text-[11px] text-[#D4AF37]">
          Order Summary
        </p>

        <h2 className="mt-4 font-serif text-3xl text-white">
          Summary
        </h2>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Subtotal
          </span>
          <span className="text-white font-medium">
            {formatPrice(subtotal)}
          </span>
        </div>

        {/* Shipping */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-slate-400">
            Shipping
          </span>
          <span className="text-[#D4AF37] font-medium">
            {shipping === 0
              ? "FREE"
              : formatPrice(shipping)}
          </span>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-lg text-white font-semibold">
            Total
          </span>
          <span className="text-2xl font-bold text-[#D4AF37]">
            {formatPrice(total)}
          </span>
        </div>

        {/* Desktop Checkout Action Element */}
        {mode === "cart" ? (
          <Link
            href="/checkout"
            className="
              mt-10
              flex
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#D4AF37]
              px-6
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-black
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_12px_30px_rgba(212,175,55,0.35)]
            "
          >
            Proceed to Checkout
          </Link>
        ) : (
          <button
            onClick={handleCheckout}
            disabled={!canCheckout || isProcessing}
            className="
              mt-10
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#D4AF37]
              px-6
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-black
              transition-all
              duration-300
              disabled:opacity-50
              disabled:cursor-not-allowed
              disabled:hover:scale-100
            "
          >
            {isProcessing && (
              <span
                className="
                  h-4
                  w-4
                  animate-spin
                  rounded-full
                  border-2
                  border-black
                  border-t-transparent
                "
              />
            )}
            {isProcessing
              ? "Preparing Order..."
              : "Place Order on WhatsApp"}
          </button>
        )}

        {/* Continue Shopping */}
        {mode === "cart" && (
          <Link
            href="/products"
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-[#D4AF37]/20
              px-6
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white
              transition-all
              duration-300
              hover:border-[#D4AF37]
              hover:text-[#D4AF37]
            "
          >
            Continue Shopping
          </Link>
        )}

        <p className="mt-6 text-center text-xs text-slate-500 leading-6">
          Your order will be securely shared with us on WhatsApp.<br />
          We'll confirm availability and payment before processing.
        </p>
      </aside>

      {/* Mobile Sticky Drawer Layout */}
      <div
  className="
    lg:hidden
    fixed
    bottom-0
    inset-x-0
    z-50
    box-border
    border-t
    border-white/10
    bg-[#071225]/95
    backdrop-blur-xl
    px-5
    pt-5
    pb-[calc(env(safe-area-inset-bottom)+20px)]
    shadow-[0_-10px_30px_rgba(0,0,0,0.5)]
  "
>
        <h3 className="font-serif text-lg text-white">
          Summary
        </h3>

        {/* Subtotal */}
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-slate-400">Subtotal</span>
          <span className="text-white font-medium">
            {formatPrice(subtotal)}
          </span>
        </div>

        {/* Shipping */}
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-slate-400">Shipping</span>
          <span className="text-[#D4AF37] font-medium">
            {shipping === 0
              ? "FREE"
              : formatPrice(shipping)}
          </span>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-white/10" />

        {/* Total */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-white font-semibold">
            Total
          </span>
          <span className="text-2xl font-bold text-[#D4AF37]">
            {formatPrice(total)}
          </span>
        </div>

        {/* Mobile Checkout Action Element */}
        {mode === "cart" ? (
          <Link
            href="/checkout"
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#D4AF37]
              px-6
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-black
              transition-all
              duration-300
              active:scale-[0.98]
            "
          >
            Proceed to Checkout
          </Link>
        ) : (
          <button
            onClick={handleCheckout}
            disabled={!canCheckout || isProcessing}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#D4AF37]
              px-6
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-black
              transition-all
              duration-300
              active:scale-[0.98]
              disabled:opacity-50
              disabled:cursor-not-allowed
              disabled:hover:scale-100
            "
          >
            {isProcessing && (
              <span
                className="
                  h-4
                  w-4
                  animate-spin
                  rounded-full
                  border-2
                  border-black
                  border-t-transparent
                "
              />
            )}
            {isProcessing
              ? "Preparing Order..."
              : "Place Order on WhatsApp"}
          </button>
        )}
      </div>
    </>
  );
}