"use client";

import Link from "next/link";
import Layout from "@/components/layout/Layout";
import FadeIn from "@/components/ui/FadeIn";
import { XCircle } from "lucide-react";

export default function PaymentFailedPage() {
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
              border-red-500/20
              bg-[#071225]
              p-10
              md:p-14
              text-center
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            "
          >
            <div className="flex justify-center">
              <div className="rounded-full bg-red-500/10 p-6">
                <XCircle
                  size={70}
                  className="text-red-400"
                />
              </div>
            </div>

            <p className="mt-8 uppercase tracking-[0.4em] text-[11px] text-red-400">
              PAYMENT FAILED
            </p>

            <h1 className="mt-5 font-serif text-4xl md:text-5xl text-white">
              Something Went Wrong
            </h1>

            <p className="mt-8 text-slate-400 leading-8 max-w-xl mx-auto">
              Your payment could not be completed.
              <br />
              Don't worry—no amount has been charged.
              Please try again.
            </p>

            <div className="mt-12 flex flex-col md:flex-row gap-5">
              <Link
                href="/checkout"
                className="
                  flex-1
                  rounded-full
                  bg-[#D4AF37]
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              >
                Try Again
              </Link>

              <Link
                href="/cart"
                className="
                  flex-1
                  rounded-full
                  border
                  border-white/10
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
                Back to Cart
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}