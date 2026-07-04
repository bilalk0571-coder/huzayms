"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HERO_SLIDES } from "@/data/heroSlides";

export default function HeroCampaign() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
const touchEndX = useRef<number | null>(null);

const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
  startAutoSlide();

  return stopAutoSlide;
}, []);

const stopAutoSlide = () => {
  if (intervalRef.current) clearInterval(intervalRef.current);
};

const startAutoSlide = () => {
  stopAutoSlide();

  intervalRef.current = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, 5000);
};

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
};

const previousSlide = () => {
  setCurrentSlide((prev) =>
    prev === 0 ? HERO_SLIDES.length - 1 : prev - 1
  );
};

  return (
  <section
  className="relative h-[85svh] lg:h-[92vh]"
  onTouchStart={(e) => {
    stopAutoSlide();
    touchStartX.current = e.touches[0].clientX;
  }}
  onTouchMove={(e) => {
    touchEndX.current = e.touches[0].clientX;
  }}
  onTouchEnd={() => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null
    ) {
      const distance = touchStartX.current - touchEndX.current;

      if (distance > 60) nextSlide();

      if (distance < -60) previousSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;

    startAutoSlide();
  }}
>

    {HERO_SLIDES.map((slide, index) => (
      <Link
        key={slide.id}
        href={slide.href}
        className={`
          absolute
          inset-0
          transition-opacity
          duration-1000 ease-in-out
          ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
        `}
      >
        <picture>
  <source
    media="(min-width:1200px)"
    srcSet={slide.desktopImage}
  />

  <img
    src={slide.mobileImage}
    alt={slide.alt}
    className="w-full h-full object-cover object-center"
  />
</picture>
      </Link>
    ))}

    {/* Indicators */}

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">

      {HERO_SLIDES.map((_, index) => (

        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`transition-all duration-300 rounded-full ${
            currentSlide === index
              ? "w-8 h-1.5 bg-[#D4AF37]"
              : "w-2 h-2 bg-white/40"
          }`}
        />

      ))}

    </div>

  </section>
);
}