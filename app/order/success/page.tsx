"use client";

import Link from "next/link";
import Layout from "@/components/layout/Layout";
import FadeIn from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <Layout>
      <section
        className="
          min-h-screen
          px-6
          pt-36
          pb-24
        "
      >
        <FadeIn>
          <div
            className="
              mx-auto
              w-full
              max-w-2xl
              rounded-[36px]
              border
              border-[#D4AF37]/20
              bg-[#071225]
              p-10
              md:p-14
              text-center
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            "
          >
            <div className="flex justify-center">
              <div className="rounded-full bg-[#D4AF37]/10 p-6">
                <CheckCircle2
                  size={70}
                  className="text-[#D4AF37]"
                />
              </div>
            </div>

            <p className="mt-8 uppercase tracking-[0.4em] text-[11px] text-[#D4AF37]">
              ORDER CONFIRMED
            </p>

            <h1 className="mt-5 font-serif text-4xl md:text-5xl text-white">
              Thank You.
            </h1>

            <p className="mt-8 text-slate-400 leading-8 max-w-xl mx-auto">
              Your order has been placed successfully.
              <br />
              We're now preparing your fragrance with care.
              You'll receive updates as soon as it ships.
            </p>

            <div className="mt-12 rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="flex justify-between py-3 border-b border-white/10">
                <span className="text-slate-400">
                  Order Status
                </span>

                <span className="text-[#D4AF37] font-semibold">
                  Confirmed
                </span>
              </div>

              <div className="flex justify-between py-3 border-b border-white/10">
                <span className="text-slate-400">
                  Estimated Delivery
                </span>

                <span className="text-white">
                  3–7 Business Days
                </span>
              </div>

              <div className="flex justify-between pt-3">
                <span className="text-slate-400">
                  Payment
                </span>

                <span className="text-green-400">
                  Successful
                </span>
              </div>
            </div>

            <Link
              href="/products"
              className="
                mt-12
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#D4AF37]
                px-10
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-black
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-[0_15px_35px_rgba(212,175,55,0.35)]
              "
            >
              Continue Shopping
            </Link>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}