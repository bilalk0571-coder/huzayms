"use client";

import { useState, useEffect, useRef } from "react";
import { HERO_SLIDES, formatPrice } from "@/data/products";
import type { Product } from "@/types";

import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Collection from "@/components/home/Collection";
import Reviews from "@/components/home/Reviews";
import Story from "@/components/home/Story";

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const heroScrollRef = useRef<HTMLDivElement>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const isUserInteracting = useRef(false);

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
    <Layout>
      
      <Hero
        currentSlide={currentSlide}
        heroScrollRef={heroScrollRef}
        isUserInteracting={isUserInteracting}
        onHeroScroll={handleHeroScroll}
        onIndicatorClick={handleIndicatorClick}
        onOpenModal={handleOpenModal}
      />
      
      <Collection onOpenModal={handleOpenModal} />
      
      <Reviews />
      
      <Story />

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

    </Layout>
  );
}