"use client";

import CartSummary from "@/components/cart/CartSummary";

interface OrderSummaryProps {
  canCheckout: boolean;
}

export default function OrderSummary({
  canCheckout,
}: OrderSummaryProps) {
  return (
    <div className="lg:sticky lg:top-28">
      <CartSummary
        mode="checkout"
        canCheckout={canCheckout}
      />
    </div>
  );
}