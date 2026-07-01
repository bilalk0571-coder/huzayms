"use client";

import Image from "next/image";
import { REVIEWS } from "./ReviewData";

export default function VerifiedReviews() {
  return (
    <section className="mt-12">
      <div
        className="
          group
          overflow-hidden
          rounded-[26px]
          bg-[#030a1c]
          border
          border-white/5
          transition-all
          duration-500
          hover:border-[#D4AF37]/60
          hover:-translate-y-2
          hover:shadow-[0_20px_50px_rgba(212,175,55,0.10)]
        "
      >
        {/* ================= MOBILE ================= */}

        <div className="lg:hidden">
          {/* Reviews */}

          <div className="overflow-hidden px-5 pt-5">
            <div className="animate-review-scroll gap-3">
              {[...REVIEWS, ...REVIEWS].map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[175px]"
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-2xl
                      transition-transform
                      duration-700
                      hover:scale-[1.03]
                    "
                  >
                    <Image
                      src={review}
                      alt={`Review ${index + 1}`}
                      width={400}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}

          <div className="px-6 py-6 text-center">
            <h2
              className="
                font-serif
                text-[1.8rem]
                leading-none
                text-white
                transition-colors
                duration-300
                group-hover:text-[#D4AF37]
              "
            >
              Trusted By
              <br />
              Fragrance Lovers
            </h2>

            <div
              className="
                w-10
                h-px
                mx-auto
                bg-[#D4AF37]/40
                mt-4
                mb-4
                transition-all
                duration-300
                group-hover:w-16
              "
            />

            <p
              className="
                max-w-[250px]
                mx-auto
                text-[14px]
                leading-6
                text-slate-400
              "
            >
              Honest conversations and genuine reactions from customers across
              India.
            </p>

            <div className="mt-5">
              <p className="text-[#D4AF37] text-lg tracking-[0.15em]">
                ★★★★★
              </p>

              <p className="mt-2 text-white text-[15px] font-medium">
                Rated 4.9 / 5
              </p>

              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                500+ Verified Customers
              </p>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}

        <div className="hidden lg:grid lg:grid-cols-[30%_70%] items-center">
          {/* LEFT */}

          <div className="px-10">
            <h2
              className="
                font-serif
                text-[2.4rem]
                leading-none
                text-white
                transition-colors
                duration-300
                group-hover:text-[#D4AF37]
              "
            >
              Trusted By
              <br />
              Fragrance Lovers
            </h2>

            <div
              className="
                w-10
                h-px
                bg-[#D4AF37]/40
                mt-4
                mb-4
                transition-all
                duration-300
                group-hover:w-16
              "
            />

            <p
              className="
                max-w-[300px]
                text-[14px]
                leading-6
                text-slate-400
              "
            >
              Honest conversations and genuine reactions from customers across
              India.
            </p>

            <div className="mt-6">
              <p className="text-[#D4AF37] text-lg tracking-[0.15em]">
                ★★★★★
              </p>

              <p className="mt-2 text-white text-[15px] font-medium">
                Rated 4.9 / 5
              </p>

              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                500+ Verified Customers
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div className="overflow-hidden py-6 pr-8">
            <div className="animate-review-scroll gap-4">
              {[...REVIEWS, ...REVIEWS].map((review, index) => (
                <div
                  key={index}
                  className="w-[220px] flex-shrink-0"
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-2xl
                      transition-transform
                      duration-700
                      hover:scale-[1.03]
                    "
                  >
                    <Image
                      src={review}
                      alt={`Review ${index + 1}`}
                      width={500}
                      height={1000}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}