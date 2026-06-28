"use client";

import { useState } from "react";

const REVIEWS = [
  {
    author: "Rohan K.",
    location: "Delhi",
    quote: "The sillage on Mariana Trench is insane. Easily lasts over 8 hours on my clothes, got three compliments on my first day wearing it."
  },
  {
    author: "Aisha M.",
    location: "Mumbai",
    quote: "Cinnabon is absolute gourmand perfection. It smells exactly like warm, premium cinnamon rolls and vanilla cream. Highly addictive."
  },
  {
    author: "Vikram S.",
    location: "Bangalore",
    quote: "Crimson Leather strikes the perfect balance between bold Tuscan leather and smooth velvet rose. Exceptional projection."
  },
  {
    author: "Kabir T.",
    location: "Pune",
    quote: "Absolutely blown away by the quality. These fragrances easily compete with my niche designer collection. Will definitely be ordering again."
  },
  {
    author: "Neha R.",
    location: "Hyderabad",
    quote: "The discovery trio was the perfect introduction. Each scent tells a completely different story. Mariana Trench is my absolute favorite."
  },
  {
    author: "Arjun D.",
    location: "Chennai",
    quote: "Fast shipping and incredible packaging. The scent profile of Crimson Leather is deep, smoky, and extremely sophisticated."
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === REVIEWS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? REVIEWS.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-[#020612] border-t border-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Headings */}
        <div className="text-center mb-16">
          <span className="text-[9px] font-bold text-[#C5A059] tracking-[0.4em] uppercase block mb-3">
            Verified Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide uppercase">
            What Our Buyers Say
          </h2>
        </div>

        {/* Fixed-height relative container ensures the layout doesn't jump up and down 
          when switching between reviews of slightly different lengths.
          Absolute positioning of children allows for smooth crossfade transitions.
        */}
        <div className="relative w-full min-h-[320px] flex items-center justify-center">
          {REVIEWS.map((review, index) => (
            <div 
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
                index === currentIndex 
                  ? "opacity-100 z-10 pointer-events-auto" 
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-slate-300 font-light text-center leading-relaxed max-w-3xl mb-8 italic">
                "{review.quote}"
              </p>

              <h3 className="text-lg md:text-xl font-serif text-white mb-4 tracking-wide">
                {review.author} – {review.location}
              </h3>

              <span className="text-[9px] font-bold text-[#C5A059] bg-white/[0.02] border border-white/[0.05] px-3 py-1 uppercase tracking-widest rounded-sm">
                Verified Buyer
              </span>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 group"
            aria-label="Previous Review"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex gap-2">
  {REVIEWS.map((_, index) => (
    <span
      key={index}
      className={`h-2 rounded-full transition-all duration-300 ${
        index === currentIndex
          ? "w-8 bg-[#D4AF37]"
          : "w-2 bg-white/20"
      }`}
    />
  ))}
</div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 group"
            aria-label="Next Review"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}