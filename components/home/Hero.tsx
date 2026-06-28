"use client";

import React from "react";
import { HERO_SLIDES, PRODUCTS } from "@/data/products";
import Link from "next/link";

interface HeroProps {
  currentSlide: number;
  heroScrollRef: React.RefObject<HTMLDivElement | null>;
  isUserInteracting: React.MutableRefObject<boolean>;
  onHeroScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  onIndicatorClick: (index: number) => void;
}

export default function Hero({
  currentSlide,
  heroScrollRef,
  isUserInteracting,
  onHeroScroll,
  onIndicatorClick,
}: HeroProps) {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-40 md:pt-36 pb-8 md:pb-16 px-6 overflow-hidden bg-[#020612]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full relative z-10">
        
        <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-6 lg:space-y-8">
          <img
            src="/images/logo1.png"
            alt="Huzaym's Elixirs Crest"
            className="h-20 sm:h-24 lg:h-28 w-auto object-contain brightness-110 drop-shadow-[0_0_30px_rgba(212,175,55,0.18)]"
          />
          <div className="space-y-4">
            <h1 className="
text-3xl
sm:text-5xl
lg:text-6xl
font-serif
font-light
tracking-[0.06em]
uppercase
leading-[1.15]
bg-gradient-to-r
from-[#BF953F]
via-[#E6C97A]
to-[#FCF6BA]
bg-clip-text
text-transparent
">
              HUZAYM'S <br className="hidden lg:block"/>ELIXIRS
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-400 font-light tracking-[0.35em] uppercase">
              Crafted Fragrances • Lasting Impressions
            </p>
          </div>
          <div className="pt-5 w-full sm:w-auto">
            <Link href="/products">
                <button className="
w-full
sm:w-auto
px-12
py-3.5
bg-gradient-to-r
from-[#BF953F]
via-[#E6C97A]
to-[#FCF6BA]
text-black
font-bold
uppercase
tracking-[0.3em]
text-[10px]
hover:scale-[1.02]
hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
transition-all
duration-300
rounded-none
cursor-pointer
">
    Explore Fragrances
             </button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center items-center w-full">
          <div className="
relative
w-full
max-w-[320px]
sm:max-w-[430px]
lg:max-w-[470px]
aspect-[4/5] mb-2
shadow-[0_30px_70px_rgba(0,0,0,0.85)]
border
border-white/[0.05]
bg-[#010307]
group
transition-all
duration-300
"
>
            <div
              ref={heroScrollRef}
              onScroll={onHeroScroll}
              onTouchStart={() => { isUserInteracting.current = true; }}
              onTouchEnd={() => { setTimeout(() => { isUserInteracting.current = false; }, 2000); }}
              onMouseDown={() => { isUserInteracting.current = true; }}
              onMouseLeave={() => { isUserInteracting.current = false; }}
              className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {HERO_SLIDES.map((slide, index) => {
                const targeted = slide.productSlug
                  ? PRODUCTS.find((p) => p.slug === slide.productSlug)
                  : undefined;

                return (
                  <Link
  key={index}
  href={targeted ? `/products/${targeted.slug}` : "#"}
  className={`block w-full h-full flex-shrink-0 snap-center relative ${
    targeted ? "cursor-pointer" : "cursor-default"
  }`}
>
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    <div
  className="
    absolute
    inset-x-0
    bottom-0
    flex
    items-end
    px-6
    pb-6
    pt-20
    bg-gradient-to-t
    from-black/80
    via-black/20
    to-transparent
  "
>
  <span
    className="
      text-[9px]
      uppercase
      tracking-[0.28em]
      font-medium
      text-white/85
      transition-all
      duration-300
      group-hover:text-[#D4AF37]
      group-hover:translate-x-1
    "
  >
    {targeted?.slug === "celestial-tide"
      ? "Pre-Order →"
      : targeted
      ? "Details →"
      : "Launching Soon"}
  </span>
</div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mt-4">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => onIndicatorClick(index)}
               className={`rounded-full transition-all duration-300 cursor-pointer ${
  index === currentSlide
    ? "w-8 h-1.5 bg-[#D4AF37]"
    : "w-2 h-2 bg-white/20 hover:bg-white/40"
}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}