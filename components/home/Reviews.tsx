import React from "react";

const REVIEWS = [
  {
    quote: "The sillage on Mariana Trench is insane. Easily lasts over 8 hours on my clothes, got three compliments on my first day wearing it.",
    author: "Rohan K.",
    badge: "Verified Buyer"
  },
  {
    quote: "Cinnabon is absolute gourmand perfection. It smells exactly like warm, premium cinnamon rolls and vanilla cream. Highly addictive.",
    author: "Aisha M.",
    badge: "Verified Buyer"
  },
  {
    quote: "Crimson Leather strikes the perfect balance between bold Tuscan leather and smooth velvet rose. Exceptional projection.",
    author: "Vikram S.",
    badge: "Verified Buyer"
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-[#020612] border-t border-white/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[9px] font-bold text-[#C5A059] tracking-[0.4em] uppercase block mb-2">Verified Feedback</span>
          <h3 className="text-xl font-serif font-light text-white tracking-wide uppercase">What Our Buyers Say</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, i) => (
            <div key={i} className="bg-[#030a1c] border border-white/[0.03] p-6 flex flex-col justify-between">
              <p className="text-slate-300 font-light italic text-xs leading-relaxed tracking-wide">
                "{rev.quote}"
              </p>
              <div className="mt-5 flex items-center justify-between pt-3 border-t border-white/[0.03]">
                <span className="text-xs font-serif text-white tracking-wide">{rev.author}</span>
                <span className="text-[8px] font-bold text-[#C5A059] bg-white/[0.02] px-2 py-0.5 uppercase tracking-widest">{rev.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}