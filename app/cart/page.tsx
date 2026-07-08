"use client";

import Layout from "@/components/layout/Layout";
import EmptyCart from "@/components/cart/EmptyCart";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import FadeIn from "@/components/ui/FadeIn";
import { useCart } from "@/hooks/useCart";
import {
  getCartProducts,
  calculateItemCount,
} from "@/lib/cart";

export default function CartPage() {
  const {
  items,
  removeFromCart,
  updateQuantity,
  isLoaded,
} = useCart();

if (!isLoaded) {
  return (
    <Layout>
      <section className="pt-40 pb-40" />
    </Layout>
  );
}

  const cartProducts = getCartProducts(items);
  const itemCount = calculateItemCount(items);

  if (cartProducts.length === 0) {
    return (
      <Layout>
        <EmptyCart />
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-40 lg:pb-20">
        {/* Heading */}
        <FadeIn>
          <div className="mb-12">
            <p className="uppercase tracking-[0.35em] text-[11px] text-[#D4AF37]">
              Shopping Cart
            </p>

            <h1 className="mt-4 font-serif text-5xl text-white">
              Your Cart
            </h1>

            <p className="mt-4 text-slate-400">
              {itemCount} {itemCount === 1 ? "Item" : "Items"}
            </p>
          </div>
        </FadeIn>

        {/* Layout */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 pb-40 lg:pb-0">
          {/* Cart Items */}
          <FadeIn>
            <div className="space-y-6">
              {cartProducts.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onIncrease={() =>
                    updateQuantity(
                      item.product.id,
                      item.quantity + 1
                    )
                  }
                  onDecrease={() => {
                    if (item.quantity <= 1) {
                      removeFromCart(item.product.id);
                      return;
                    }

                    updateQuantity(
                      item.product.id,
                      item.quantity - 1
                    );
                  }}
                  onRemove={() =>
                    removeFromCart(item.product.id)
                  }
                />
              ))}
            </div>
          </FadeIn>

          {/* Summary */}
          {/* Desktop */}
<div className="hidden lg:block">
  <FadeIn>
    <CartSummary />
  </FadeIn>
</div>

{/* Mobile Sticky Bottom */}
<div
  className="
    lg:hidden
    fixed
    bottom-0
    left-0
    right-0
    z-50
    border-t
    border-[#D4AF37]/10
    bg-[#071225]/95
    backdrop-blur-xl
    px-5
    py-4
    shadow-[0_-10px_30px_rgba(0,0,0,0.45)]
  "
>
  <CartSummary compact />
</div>
        </div>
      </section>
    </Layout>
  );
}