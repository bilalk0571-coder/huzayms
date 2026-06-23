"use client";

import { useState } from "react";

const PERFUMES = [
  {
    id: "mariana",
    name: "Mariana Trench",
    type: "Eau De Parfum",
    price: "₹500",
    size: "30ml / 1.0 fl.oz",
    tagline: "Aquatic • Fresh • Mysterious",
    description: "Dive into the depths of pure luxury. Mariana Trench opens with a crushing wave of marine freshness, deep sea salt, and mineral ambergris. It is designed for the modern trailblazer who commands presence. Perfect for daily wear and warm evenings.",
    mainImage: "/images/mariana-new.jpeg", 
    images: ["/images/mariana-new.jpeg", "/images/mariana-trench.jpeg"], 
    waLink: "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Mariana%20Trench%20(30ml).",
    notes: {
      top: "Marine Freshness, Sea Salt",
      heart: "Mineral Accord",
      base: "Ambergris, Driftwood"
    }
  },
  {
    id: "cinnabon",
    name: "Cinnabon",
    type: "Extrait De Parfum",
    price: "₹500",
    size: "30ml / 1.0 fl.oz",
    tagline: "Sweet • Vanillic • Addictive",
    description: "Indulge in timeless comfort. Cinnabon delivers a rich, gourmand experience layered with warm cinnamon bark, whipped vanilla cream, and a smooth touch of toasted brown sugar. A cozy, intoxicating trail that captures pure indulgence.",
    mainImage: "/images/cinnabon-new.jpeg", 
    images: ["/images/cinnabon-new.jpeg", "/images/cinnabon.jpeg"], 
    waLink: "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Cinnabon%20(30ml).",
    notes: {
      top: "Warm Cinnamon Bark",
      heart: "Toasted Brown Sugar, Whipped Vanilla",
      base: "Creamy Amber"
    }
  },
  {
    id: "crimson",
    name: "Crimson Leather",
    type: "Extrait De Parfum",
    price: "₹500",
    size: "30ml / 1.0 fl.oz",
    tagline: "Rosey • Leathery • Intoxicating",
    description: "Dare to be unforgettable. Crimson Leather is a bold fusion of velvet crimson rose petals wrapped tightly in rich Tuscan leather, dark wood notes, and warm saffron. Seductive, striking, and designed for commanding attention during late nights out.",
    mainImage: "/images/crimson-new.jpeg", 
    images: ["/images/crimson-new.jpeg", "/images/crimson-leather.jpeg"], 
    waLink: "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Crimson%20Leather%20(30ml).",
    notes: {
      top: "Crimson Rose Petals, Saffron",
      heart: "Tuscan Leather",
      base: "Dark Agarwood"
    }
  }
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<any>(null);

  return (
    <main className="bg-white text-slate-950 min-h-screen font-sans antialiased selection:bg-slate-900 selection:text-white">
      
      {/* Premium, Compressed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A192F]/90 backdrop-blur-lg border-b border-white/5 px-6 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.jpeg" 
              alt="Logo" 
              className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10" 
            />
            <span className="text-white font-serif tracking-[0.25em] text-xs md:text-sm uppercase bg-clip-text font-medium">
              HUZAYM'S ELIXIRS
            </span>
          </div>
          <div className="flex gap-6 text-[9px] md:text-[10px] tracking-[0.3em] font-light text-slate-300">
            <a href="#" className="hover:text-white transition-colors duration-200 uppercase">HOME</a>
            <a href="#collection" className="hover:text-white transition-colors duration-200 uppercase">COLLECTION</a>
            <a href="#about" className="hover:text-white transition-colors duration-200 uppercase">STORY</a>
          </div>
        </div>
      </nav>

      {/* Luxury Immersive Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 text-center bg-gradient-to-b from-[#0A192F] via-[#0F223F] to-white text-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Framed White Logo Emblem with proper spacing */}
          <div className="mb-6 p-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-xl animate-fade-in">
            <img 
              src="/images/logo-white.png" 
              alt="Huzaym's Elixirs Crest" 
              className="h-20 w-auto md:h-28 object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-7xl font-serif font-light tracking-[0.1em] uppercase text-white leading-tight drop-shadow-sm">
            HUZAYM'S ELIXIRS
          </h1>
          <p className="mt-5 text-[10px] md:text-xs text-slate-300 max-w-sm mx-auto font-light tracking-[0.3em] uppercase leading-relaxed opacity-90">
            Crafted Fragrances • Lasting Impressions
          </p>
          <div className="mt-8">
            <a href="#collection">
              <button className="px-10 py-4 bg-white text-[#0A192F] font-medium uppercase tracking-[0.25em] text-[10px] hover:bg-transparent hover:text-white border border-white transition-all duration-300 shadow-xl rounded-none cursor-pointer">
                Explore Collection
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="collection" className="py-16 md:py-24 max-w-6xl mx-auto scroll-mt-12 bg-white">
        <div className="text-center px-4 mb-12 md:mb-16">
          <span className="text-[9px] font-medium text-slate-400 tracking-[0.35em] uppercase block mb-2">Our Signature Lines</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-900 tracking-wide uppercase">The Elixir Collection</h2>
          <div className="w-12 h-[1px] bg-[#0A192F] mx-auto mt-5 opacity-30"></div>
        </div>

        {/* Exclusive Bundle Offer Banner */}
        <div className="mx-6 md:mx-auto max-w-3xl mb-16 bg-slate-50 border border-slate-100 p-6 md:p-8 text-center rounded-xl shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200"></div>
          <span className="bg-[#0A192F] text-white text-[9px] tracking-[0.25em] font-medium px-4 py-1.5 uppercase rounded-none inline-block">
            Limited Discovery Offer
          </span>
          <h3 className="text-xl md:text-3xl font-serif font-light mt-4 tracking-wide text-slate-900 uppercase">The Complete Discovery Trio</h3>
          <div className="flex items-center justify-center gap-3 mt-3 mb-5">
            <span className="text-slate-400 line-through text-xs font-light">₹1,500</span>
            <span className="text-xl md:text-2xl font-semibold text-[#0A192F]">₹1,200</span>
            <span className="text-[9px] text-emerald-700 font-medium bg-emerald-50 px-2.5 py-0.5 border border-emerald-200/60 uppercase tracking-[0.15em]">Save 20%</span>
          </div>
          <a
            href="https://wa.me/918928042335?text=Hi!%20I%20want%20to%20claim%20the%20Complete%20Collection%20Trio%20bundle%20offer%20(All%203%20bottles%20for%20₹1200)."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3.5 bg-[#0A192F] text-white font-medium text-[9px] tracking-[0.25em] uppercase hover:bg-slate-900 transition duration-300 rounded-none cursor-pointer">
              Claim Offer via WhatsApp
            </button>
          </a>
          <p className="text-[9px] text-slate-400 mt-3 tracking-[0.15em] uppercase font-light">Includes 3 x 30ml Luxury Bottles</p>
        </div>

        {/* Beautiful Horizontal Products Scroller with consistent inline margins */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-8 pt-2 snap-x snap-mandatory scroll-pl-6 md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0 md:px-0 scrollbar-none">
          {PERFUMES.map((perfume) => (
            <div 
              key={perfume.id}
              onClick={() => setActiveProduct(perfume)}
              className="cursor-pointer group flex flex-col justify-between min-w-[80%] sm:min-w-[45%] md:min-w-0 snap-start bg-white border border-slate-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md md:border-none md:p-0 md:rounded-none"
            >
              <div>
                <div className="bg-[#F8F9FA] overflow-hidden flex items-center justify-center border border-slate-100/80 group-hover:border-slate-200 transition duration-300">
                  <img
                    src={perfume.mainImage}
                    alt={perfume.name}
                    className="w-full h-72 md:h-96 object-contain group-hover:scale-105 transition duration-700 p-4"
                  />
                </div>
                <div className="mt-4 px-1 flex justify-between items-start">
                  <div>
                    <h3 className="text-sm md:text-base font-serif font-medium text-slate-900 tracking-wide uppercase group-hover:text-[#0A192F] transition-colors">{perfume.name}</h3>
                    <p className="text-[9px] text-slate-400 tracking-[0.2em] uppercase mt-1">{perfume.type} • {perfume.size}</p>
                    <p className="text-xs font-semibold text-slate-800 tracking-wider mt-2">{perfume.price}</p>
                  </div>
                  <div className="text-[9px] tracking-[0.25em] font-medium uppercase text-slate-400 border-b border-transparent group-hover:text-[#0A192F] group-hover:border-[#0A192F] transition-all pt-1 pb-0.5 whitespace-nowrap">
                    VIEW ELIXIR →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-center text-slate-400 uppercase tracking-[0.15em] mt-4 md:hidden">Swipe side-to-side to browse fragrances ⇄</p>
      </section>

      {/* Our Heritage Story Section */}
      <section id="about" className="py-20 md:py-28 px-6 max-w-4xl mx-auto border-t border-slate-100 scroll-mt-12">
        <div className="text-center">
          <span className="text-[9px] font-medium tracking-[0.35em] text-[#0A192F] uppercase block mb-2">The House of Elixirs</span>
          <h2 className="text-2xl md:text-4xl font-serif font-light uppercase mt-2 mb-6 tracking-wide text-slate-900">Our Heritage Story</h2>
          <p className="text-slate-500 leading-relaxed font-light text-xs md:text-sm max-w-2xl mx-auto tracking-wide space-y-4">
            At HUZAYM'S ELIXIRS, we believe a fragrance is more than just a scent—it's a bold signature statement. 
            Every bottle in our boutique collection is engineered with meticulously sourced, high-concentration oils 
            designed to deliver extraordinary sillage, projection, and timeless depth. We blend classical luxury 
            perfumery with a clean modern edge, creating unforgettable olfactory trails that linger long after you exit the room.
          </p>
        </div>
      </section>

      {/* Modal Slide-over Drawer Overlay */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/70 backdrop-blur-md p-0 md:p-4 animate-fade-in">
          <div className="bg-white max-w-2xl w-full h-[100dvh] md:h-auto max-h-[100dvh] md:max-h-[90vh] shadow-2xl flex flex-col rounded-t-2xl md:rounded-none relative overflow-hidden">
            
            <div className="flex justify-between items-center p-5 border-b border-slate-100 bg-white z-10">
              <div>
                <h4 className="text-base md:text-lg font-serif font-medium text-slate-900 uppercase tracking-wider">{activeProduct.name}</h4>
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] mt-0.5">{activeProduct.type}</p>
              </div>
              <button 
                onClick={() => setActiveProduct(null)}
                className="w-8 h-8 rounded-full bg-slate-50 text-slate-500 hover:bg-[#0A192F] hover:text-white font-light transition-all duration-200 flex items-center justify-center text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 pb-28 md:pb-6">
              {/* Product Alternate Images Carousel */}
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
                {activeProduct.images.map((imgUrl: string, idx: number) => (
                  <div key={idx} className="min-w-[85%] sm:min-w-[60%] h-72 md:h-80 bg-[#F8F9FA] border border-slate-100 rounded-none overflow-hidden snap-center flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={imgUrl} 
                      alt={`${activeProduct.name} View ${idx + 1}`} 
                      className="h-full w-full object-contain p-6"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[8px] text-center text-slate-400 uppercase tracking-widest mt-1 mb-6">Swipe left/right to view details ⇄</p>

              <div className="space-y-5">
                <div className="text-center md:text-left">
                  <span className="text-[9px] font-medium tracking-[0.25em] text-[#0A192F] uppercase bg-slate-50 px-3 py-1.5 border border-slate-200/50">
                    {activeProduct.tagline}
                  </span>
                </div>
                
                <div className="pt-2">
                  <h5 className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.25em] mb-1">Fragrance Description</h5>
                  <p className="text-slate-600 text-xs font-light leading-relaxed">
                    {activeProduct.description}
                  </p>
                </div>

                {/* Scent Notes Grid */}
                <div className="pt-2">
                  <h5 className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.25em] mb-3">Fragrance Notes</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 border-y border-slate-100 py-5">
                    <div className="text-center md:px-4 md:border-r border-slate-100">
                      <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-[0.2em] block mb-1">Top Notes</span>
                      <p className="text-slate-700 text-xs font-light leading-relaxed">{activeProduct.notes.top}</p>
                    </div>
                    <div className="text-center md:px-4 md:border-r border-slate-100 md:border-t-0 border-t border-slate-100 pt-3 md:pt-0">
                      <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-[0.2em] block mb-1">Heart Notes</span>
                      <p className="text-slate-700 text-xs font-light leading-relaxed">{activeProduct.notes.heart}</p>
                    </div>
                    <div className="text-center md:px-4 md:border-t-0 border-t border-slate-100 pt-3 md:pt-0">
                      <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-[0.2em] block mb-1">Base Notes</span>
                      <p className="text-slate-700 text-xs font-light leading-relaxed">{activeProduct.notes.base}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-[#F8F9FA] p-4 border border-slate-100 mt-6">
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider block">Volume Size</span>
                    <span className="text-xs font-medium text-slate-800">{activeProduct.size}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider block">Retail Price</span>
                    <span className="text-lg font-bold text-[#0A192F]">{activeProduct.price}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky call to action bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 md:relative md:border-t-0 md:p-6 md:pt-0 z-20">
              <a 
                href={activeProduct.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full bg-[#0A192F] hover:bg-slate-900 text-white py-4 font-medium tracking-[0.25em] uppercase text-[10px] shadow-lg transition-all duration-300 rounded-none cursor-pointer">
                  Order via WhatsApp Concierge
                </button>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Luxury Minimalist Footer */}
      <footer className="border-t border-slate-100 bg-[#FAFBFB] py-12 text-center text-[9px] text-slate-400 tracking-[0.2em] uppercase">
        <p>&copy; {new Date().getFullYear()} HUZAYM'S ELIXIRS. All rights reserved.</p>
        <p className="mt-1.5 text-[8px] text-slate-300 font-light tracking-[0.25em]">Engineered for True Elegance.</p>
      </footer>

    </main>
  );
}