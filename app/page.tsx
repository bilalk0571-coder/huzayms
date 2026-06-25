"use client";

import { useState, useEffect, useRef } from "react";
import { PRODUCTS, HERO_SLIDES, formatPrice } from "@/data/products";
import type { Product } from "@/types";

// ─── REVIEWS (unchanged — still static, extracted in Phase 3) ──────────────
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

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const heroScrollRef = useRef<HTMLDivElement>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const isUserInteracting = useRef(false);

  // Fluid continuous engine cycles banner automatically when user isn't physically interacting
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isUserInteracting.current && heroScrollRef.current) {
        const nextIndex = (currentSlide + 1) % HERO_SLIDES.length;
        const targetScrollLeft = heroScrollRef.current.clientWidth * nextIndex;

        heroScrollRef.current.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth"
        });
        setCurrentSlide(nextIndex);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  // Tracks manual touch-swipes/scroll movements to keep indicators perfectly accurate
  const handleHeroScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const slideWidth = e.currentTarget.clientWidth;
    if (slideWidth > 0) {
      const nextCalculatedIndex = Math.round(e.currentTarget.scrollLeft / slideWidth);
      if (nextCalculatedIndex !== currentSlide && nextCalculatedIndex < HERO_SLIDES.length) {
        setCurrentSlide(nextCalculatedIndex);
      }
    }
  };

  const handleIndicatorClick = (index: number) => {
    if (heroScrollRef.current) {
      isUserInteracting.current = true;
      heroScrollRef.current.scrollTo({
        left: heroScrollRef.current.clientWidth * index,
        behavior: "smooth"
      });
      setCurrentSlide(index);
      setTimeout(() => { isUserInteracting.current = false; }, 1000);
    }
  };

  const handleOpenModal = (product: Product) => {
    setModalImageIndex(0);
    setActiveProduct(product);
  };

  const handleModalScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const slideWidth = e.currentTarget.clientWidth;
    if (slideWidth > 0 && activeProduct) {
      const newIndex = Math.round(e.currentTarget.scrollLeft / slideWidth);
      if (newIndex !== modalImageIndex && newIndex < activeProduct.images.length) {
        setModalImageIndex(newIndex);
      }
    }
  };

  const handleModalWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (modalScrollRef.current && e.deltaY !== 0) {
      e.preventDefault();
      modalScrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <main className="bg-[#020612] text-slate-100 min-h-screen font-sans antialiased selection:bg-[#D4AF37] selection:text-black">

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020612]/90 backdrop-blur-xl border-b border-white/[0.02] px-4 sm:px-6 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              src="/images/logo1.png"
              alt="Huzaym's Elixirs Crest"
              className="w-5 h-auto sm:w-6 object-contain brightness-110 flex-shrink-0"
            />
            <span className="font-serif tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs uppercase font-semibold bg-gradient-to-r from-[#C5A059] to-[#FDF6C7] bg-clip-text text-transparent truncate">
              HUZAYM'S ELIXIRS
            </span>
          </div>
          <div className="flex gap-4 sm:gap-8 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] font-medium text-slate-400 flex-shrink-0">
            <a href="#" className="hover:text-[#D4AF37] transition-colors uppercase">HOME</a>
            <a href="#collection" className="hover:text-[#D4AF37] transition-colors uppercase">COLLECTION</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors uppercase">STORY</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden bg-[#020612]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full relative z-10">

          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8">
            <img
              src="/images/logo1.png"
              alt="Huzaym's Elixirs Crest"
              className="h-28 w-auto object-contain brightness-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            />
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-[0.06em] uppercase leading-[1.15] text-white">
                HUZAYM'S <br className="hidden lg:block"/>ELIXIRS
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-400 font-light tracking-[0.35em] uppercase">
                Crafted Fragrances • Lasting Impressions
              </p>
            </div>
            <div className="pt-2 w-full sm:w-auto">
              <a href="#collection">
                <button className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] text-black font-bold uppercase tracking-[0.3em] text-[10px] hover:opacity-95 transition-all rounded-none cursor-pointer">
                  Explore Collection
                </button>
              </a>
            </div>
          </div>

          {/* Swipeable Hero Slider */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center w-full">
            <div className="relative w-full max-w-sm aspect-[4/5] shadow-[0_30px_70px_rgba(0,0,0,0.85)] border border-white/[0.05] bg-[#010307] group transition-all duration-300">

              <div
                ref={heroScrollRef}
                onScroll={handleHeroScroll}
                onTouchStart={() => { isUserInteracting.current = true; }}
                onTouchEnd={() => { setTimeout(() => { isUserInteracting.current = false; }, 2000); }}
                onMouseDown={() => { isUserInteracting.current = true; }}
                onMouseLeave={() => { isUserInteracting.current = false; }}
                className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {HERO_SLIDES.map((slide, index) => {
                  // Match slide to product via productSlug → Product.slug
                  const targeted = slide.productSlug
                    ? PRODUCTS.find((p) => p.slug === slide.productSlug)
                    : undefined;

                  return (
                    <div
  key={index}
  onClick={() => {
    if (targeted) {
      handleOpenModal(targeted);
    }
  }}
  className={`w-full h-full flex-shrink-0 snap-center relative ${
    targeted ? "cursor-pointer" : "cursor-default"
  }`}
>
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5 flex justify-between items-end">
                       <span className="text-[8px] text-slate-300 tracking-widest uppercase font-medium group-hover:text-white transition-colors">
  {targeted ? "Details →" : "Launching Soon"}
</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Slide indicators */}
            <div className="flex gap-2.5 mt-5">
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`h-1 rounded-none transition-all duration-300 cursor-pointer ${
                    index === currentSlide ? "w-6 bg-[#D4AF37]" : "w-1.5 bg-white/10 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Collection Grid */}
      <section id="collection" className="py-24 scroll-mt-12 bg-[#020612] border-t border-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-[9px] font-bold text-[#C5A059] tracking-[0.4em] uppercase block mb-2">Our Signature Lines</span>
            <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-wide uppercase">The Elixir Collection</h2>
            <div className="w-8 h-[1px] bg-[#C5A059] mx-auto mt-4 opacity-40"></div>
          </div>

          <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-x-visible sm:pb-0">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                onClick={() => handleOpenModal(product)}
                className="cursor-pointer group flex flex-col justify-between bg-[#030a1c] rounded-none border border-white/[0.04] transition-all duration-300 hover:border-white/10 min-w-[80vw] sm:min-w-0 snap-center"
              >
                <div>
                  <div className="w-full aspect-[4/5] overflow-hidden bg-[#010307] relative border-b border-white/[0.02]">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Badges — driven by store flags */}
                    {product.bestSeller && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#D4AF37] text-black font-bold text-[8px] tracking-widest uppercase px-2.5 py-1">
                          Best Seller
                        </span>
                      </div>
                    )}
                    {product.isBundle && !product.bestSeller && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#D4AF37] text-black font-bold text-[8px] tracking-widest uppercase px-2.5 py-1">
                          Limited Offer
                        </span>
                      </div>
                    )}
                    {product.newArrival && !product.bestSeller && !product.isBundle && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#D4AF37] text-black font-bold text-[8px] tracking-widest uppercase px-2.5 py-1">
                          New Arrival
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 px-4">
                    <h3 className="text-xs font-serif font-medium text-white tracking-wide uppercase group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[9px] text-slate-400 tracking-[0.2em] uppercase mt-1 line-clamp-1">
                      {product.type}
                    </p>
                    <p className="text-[8px] text-slate-500 tracking-wider mt-0.5">{product.size}</p>

                    <div className="flex items-center gap-1 mt-2.5">
                      <span className="text-[#D4AF37] text-[8px]">★★★★★</span>
                      <span className="text-[8px] font-medium tracking-widest text-slate-500 uppercase">Premium Concentration</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 pb-4 px-4 border-t border-white/[0.03] flex justify-between items-center">
                  <span className="text-xs font-medium text-[#C5A059] tracking-wider">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-[8px] tracking-widest font-semibold uppercase text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                    DETAILS →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[8px] text-center text-slate-500 uppercase tracking-widest mt-4 sm:hidden">Swipe Left / Right to Browse Collection ⇄</p>

        </div>
      </section>

      {/* Reviews */}
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

      {/* Story */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-12 text-center">
        <span className="text-[9px] font-bold tracking-[0.4em] text-[#C5A059] uppercase block mb-2">The House of Elixirs</span>
        <h2 className="text-xl md:text-3xl font-serif font-light uppercase mt-2 mb-5 tracking-wide text-white">Our Heritage Story</h2>
        <p className="text-slate-400 leading-relaxed font-light text-xs max-w-2xl mx-auto tracking-widest space-y-3">
          At HUZAYM'S ELIXIRS, we believe a fragrance is more than just a scent—it's a bold signature statement.
          Every bottle in our boutique collection is engineered with meticulously sourced, high-concentration oils
          designed to deliver extraordinary sillage, projection, and timeless depth. We blend classical luxury
          perfumery with a clean modern edge.
        </p>
      </section>

      {/* Product Modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
          <div className="bg-[#030a1c] max-w-md w-full max-h-[95vh] flex flex-col relative border border-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">

            <div className="flex justify-between items-center p-5 border-b border-white/5 bg-[#030a1c]">
              <div>
                <h4 className="text-sm font-serif font-medium text-white uppercase tracking-wider">{activeProduct.name}</h4>
                <p className="text-[8px] text-[#C5A059] uppercase tracking-[0.2em] mt-0.5">{activeProduct.type}</p>
              </div>
              <button
                onClick={() => setActiveProduct(null)}
                className="w-7 h-7 bg-white/5 text-slate-300 hover:bg-[#D4AF37] hover:text-black font-light transition-all flex items-center justify-center text-[10px] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

              {/* Image gallery */}
              <div
                onWheel={handleModalWheel}
                className="relative w-full aspect-[4/5] mx-auto bg-[#010307] border border-white/5 overflow-hidden group/modal"
              >
                <div
                  ref={modalScrollRef}
                  onScroll={handleModalScroll}
                  className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {activeProduct.images.map((imgUrl, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 snap-center">
                      <img
                        src={imgUrl}
                        alt={`${activeProduct.name} View ${idx + 1}`}
                        className="h-full w-full object-cover select-none pointer-events-none"
                      />
                    </div>
                  ))}
                </div>

                {/* Desktop nav arrows */}
                {activeProduct.images.length > 1 && (
                  <>
                    <button
                      onClick={() => {
                        if (modalScrollRef.current) {
                          modalScrollRef.current.scrollLeft -= modalScrollRef.current.clientWidth;
                        }
                      }}
                      className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 border border-white/10 text-white items-center justify-center text-xs opacity-0 group-hover/modal:opacity-100 transition-opacity hover:bg-[#D4AF37] hover:text-black cursor-pointer"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => {
                        if (modalScrollRef.current) {
                          modalScrollRef.current.scrollLeft += modalScrollRef.current.clientWidth;
                        }
                      }}
                      className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 border border-white/10 text-white items-center justify-center text-xs opacity-0 group-hover/modal:opacity-100 transition-opacity hover:bg-[#D4AF37] hover:text-black cursor-pointer"
                    >
                      →
                    </button>
                  </>
                )}

                {/* Dot indicators */}
                {activeProduct.images.length > 1 && (
                  <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-10 pointer-events-none">
                    {activeProduct.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 transition-all rounded-none ${
                          idx === modalImageIndex ? "w-6 bg-[#D4AF37]" : "w-2 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {activeProduct.images.length > 1 && (
                <p className="text-[8px] text-center text-slate-500 uppercase tracking-widest -mt-2">Scroll / Swipe Image to View Gallery ⇄</p>
              )}

              <div className="text-center">
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase bg-black px-3 py-1.5 border border-[#D4AF37]/20">
                  {activeProduct.tagline}
                </span>
              </div>

              <div>
                <h5 className="text-[9px] font-bold text-[#C5A059] uppercase tracking-[0.2em] mb-1">Description Portfolio</h5>
                <p className="text-slate-300 text-xs font-light leading-relaxed tracking-wide">
                  {activeProduct.description}
                </p>
              </div>

              {/* Notes — arrays joined to match original string rendering */}
              <div>
                <h5 className="text-[9px] font-bold text-[#C5A059] uppercase tracking-[0.2em] mb-2.5">Olfactory Architecture</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-white/5 py-4 bg-black/20">
                  <div className="text-center md:px-2 md:border-r border-white/5">
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.15em] block mb-0.5">Top Notes</span>
                    <p className="text-slate-200 text-xs font-light">{activeProduct.notes.top.join(", ")}</p>
                  </div>
                  <div className="text-center md:px-2 md:border-r border-white/5 border-t border-white/5 md:border-t-0 pt-2 md:pt-0">
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.15em] block mb-0.5">Heart Profile</span>
                    <p className="text-slate-200 text-xs font-light">{activeProduct.notes.heart.join(", ")}</p>
                  </div>
                  <div className="text-center md:px-2 border-t border-white/5 md:border-t-0 pt-2 md:pt-0">
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.15em] block mb-0.5">Base Finish</span>
                    <p className="text-slate-200 text-xs font-light">{activeProduct.notes.base.join(", ")}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-black/20 p-4 border border-white/5">
                <div>
                  <span className="text-[8px] text-slate-500 uppercase tracking-wider block">Volume Scale</span>
                  <span className="text-xs font-medium text-white">{activeProduct.size}</span>
                </div>
                <div className="text-right">
                  <span className="text-[8px] text-slate-500 uppercase tracking-wider block">Total Price</span>
                  <span className="text-sm font-bold text-[#D4AF37]">{formatPrice(activeProduct.price)}</span>
                </div>
              </div>

            </div>

            <div className="p-4 bg-[#030a1c] border-t border-white/5">
              <a href={activeProduct.waLink} target="_blank" rel="noopener noreferrer" className="block">
                <button className="w-full bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] text-black py-4 font-bold tracking-[0.3em] uppercase text-[10px] cursor-pointer hover:opacity-90 transition-all">
                  Secure Checkout via WhatsApp
                </button>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#010307] pt-12 pb-8 text-slate-600 tracking-[0.2em] text-[9px]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <span className="font-serif text-xs font-semibold tracking-[0.25em] bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] bg-clip-text text-transparent uppercase">
            HUZAYM'S ELIXIRS
          </span>
          <div className="flex gap-8 uppercase font-medium">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">INSTAGRAM</a>
            <a href="https://wa.me/918928042335" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">WHATSAPP</a>
          </div>
          <div className="text-slate-700 text-[8px]">
            <p>&copy; 2026 HUZAYM'S ELIXIRS. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
