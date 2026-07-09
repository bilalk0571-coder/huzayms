"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/layout/Layout";
import FadeIn from "@/components/ui/FadeIn";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

import { useCart } from "@/hooks/useCart";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, isLoaded } = useCart();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    if (items.length === 0) {
      router.replace("/cart");
    }
  }, [items, isLoaded, router]);

  // Prevent flash of empty state or layout shifts while loading
  if (!isLoaded) return null;
  if (items.length === 0) return null;

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-40">
        <FadeIn>
          <div className="text-center">
            <p className="uppercase tracking-[0.35em] text-[11px] text-[#D4AF37]">
              Checkout
            </p>

            <h1 className="mt-4 font-serif text-4xl md:text-5xl text-white">
              Complete Your Order
            </h1>

            <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
              Just a few more details before your fragrance journey begins.
            </p>
          </div>
        </FadeIn>

        <div
  className="
    mx-auto
    mt-16
    grid
    max-w-6xl
    lg:grid-cols-[1.3fr_0.7fr]
    gap-12
  "
>
          <div className="space-y-8 max-w-3xl">
            <CheckoutForm onValidityChange={setIsValid} />
          </div>

          <OrderSummary canCheckout={isValid} />
        </div>
      </section>
    </Layout>
  );
}