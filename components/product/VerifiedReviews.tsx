"use client";

import Image from "next/image";
import { REVIEWS } from "./ReviewData";

export default function VerifiedReviews() {
  return (
    <section className="mt-20">

      <div className="overflow-hidden rounded-[30px] bg-[#060E1C]">

        {/* ================= MOBILE ================= */}

        <div className="lg:hidden">

          {/* Reviews */}

          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory px-5 pt-4">

            <div className="flex gap-3 w-max">

              {REVIEWS.map((review, index) => (

                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[175px]"
                >

                  <div
                    className="
                    overflow-hidden
                    rounded-2xl
                    transition-all
                    duration-500
                    hover:scale-[1.02]
                    hover:brightness-105
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

          <div className="px-5 py-5 text-center">

            <h2 className="font-serif text-[28px] leading-tight text-white">
              Real Customer
              <br />
              Experiences
            </h2>

            <p className="mt-2 max-w-[250px] mx-auto text-[13px] leading-6 text-slate-400">
              Real conversations. Real reactions. Nothing speaks louder.
            </p>

            <div className="mt-4">

              <p className="text-[#D4AF37] text-lg">
                ★★★★★
              </p>

              <p className="mt-1 text-[15px] text-white">
                Rated 4.9 / 5
              </p>

              <p className="text-[11px] text-slate-500">
                500+ Happy Customers
              </p>

            </div>

          </div>

        </div>

        {/* ================= DESKTOP ================= */}

        <div className="hidden lg:grid lg:grid-cols-[30%_70%] items-center">

          {/* LEFT */}

          <div className="px-10">

            <h2 className="font-serif text-[38px] leading-tight text-white">
              Real Customer
              <br />
              Experiences
            </h2>

            <p className="mt-4 max-w-[300px] text-[15px] leading-7 text-slate-400">
              Real conversations. Real reactions. Nothing speaks louder.
            </p>

            <div className="mt-6">

              <p className="text-[#D4AF37] text-xl">
                ★★★★★
              </p>

              <p className="mt-1 text-lg text-white">
                Rated 4.9 / 5
              </p>

              <p className="text-sm text-slate-500">
                500+ Happy Customers
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="overflow-x-auto scrollbar-hide py-6 pr-8">

            <div className="flex gap-4 w-max">

              {REVIEWS.map((review, index) => (

                <div
                  key={index}
                  className="w-[220px] flex-shrink-0"
                >

                  <div
                    className="
                    overflow-hidden
                    rounded-2xl
                    transition-all
                    duration-500
                    hover:scale-[1.02]
                    hover:brightness-105
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