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
    waLink: "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Mariana%20Trench%20(30ml)."
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
    waLink: "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Cinnabon%20(30ml)."
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
    waLink: "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Crimson%20Leather%20(30ml)."
  }
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<any>(null);

  return (
    <main className="bg-white text-slate-900 min-h-screen font-sans antialiased selection:bg-slate-900 selection:text-white">
      
      {/* Premium, Compressed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A192F]/90 backdrop-blur-lg border-b border-white/5 px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.jpeg" 
              alt="Logo" 
              className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10" 
            />
            <span className="text-white font-bold tracking-[0.15em] text-xs md:text-sm uppercase bg-clip-text">
              HUZAYM'S ELIXIRS
            </span>
          </div>
          <div className="flex gap-4 md:gap-6 text-[9px] md:text-[11px] tracking-widest font-medium text-slate-300">
            <a href="#" className="hover:text-white transition-colors duration-200">HOME</a>
            <a href="#collection" className="hover:text-white transition-colors duration-200">COLLECTION</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">STORY</a>
          </div>
        </div>
      </nav>

      {/* Luxury Immersive Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 text-center bg-gradient-to-b from-[#0A192F] via-[#0F223F] to-white text-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Framed White Logo Emblem with proper spacing */}
          <div className="mb-6 p-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-xl">
            <img 
              src="/images/logo-white.png" 
              alt="Huzaym's Elixirs Crest" 
              className="h-20 w-auto md:h-28 object-contain"
            />
          </div>

          <h1 className="text-3xl md:text-6xl font-extrabold tracking-[0.05em] uppercase text-white leading-tight drop-shadow-sm">
            HUZAYM'S ELIXIRS
          </h1>
          <p className="mt-4 text-xs md:text-base text-slate-300 max-w-sm mx-auto font-light tracking-widest uppercase leading-relaxed opacity-90">
            Crafted Fragrances • Lasting Impressions
          </p>
          <div className="mt-8">
            <a href="#collection">
              <button className="px-8 py-3 bg-white text-[#0A192F] font-semibold uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#0A192F] hover:text-white border border-white transition-all duration-300 shadow-xl rounded-none">
                Explore Collection
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="collection" className="py-16 md:py-24 max-w-6xl mx-auto scroll-mt-12 bg-white">
        <div className="text-center px-4 mb-12 md:mb-16">
          <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase block mb-2">Our Signature Lines</span>
          <h2 className="text-2xl md:text-4xl font-light text-slate-900 tracking-wide uppercase">The Elixir Collection</h2>
          <div className="w-12 h-[1px] bg-[#0A192F] mx-auto mt-4 opacity-30"></div>
        </div>

        {/* Exclusive Bundle Offer Banner */}
        <div className="mx-4 md:mx-auto max-w-3xl mb-16 bg-slate-50 border border-slate-100 p-6 md:p-8 text-center rounded-xl shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200"></div>
          <span className="bg-[#0A192F] text-white text-[8px] tracking-[0.2em] font-bold px-3 py-1 uppercase rounded-none inline-block">
            Limited Discovery Offer
          </span>
          <h3 className="text-lg md:text-2xl font-medium mt-4 tracking-wide text-slate-900 uppercase">The Complete Discovery Trio</h3>
          <div className="flex items-center justify-center gap-3 mt-3 mb-5">
            <span className="text-slate-400 line-through text-xs">₹1,500</span>
            <span className="text-xl md:text-2xl font-bold text-[#0A192F]">₹1,200</span>
            <span className="text-[9px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 border border-emerald-200/60 uppercase tracking-wider">Save 20%</span>
          </div>
          <a
            href="https://wa.me/918928042335?text=Hi!%20I%20want%20to%20claim%20the%20Complete%20Collection%20Trio%20bundle%20offer%20(All%203%20bottles%20for%20₹1200)."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2.5 bg-[#0A192F] text-white font-medium text-[10px] tracking-widest uppercase hover:bg-slate-800 transition duration-300 rounded-none">
              Claim Offer via WhatsApp
            </button>
          </a>
          <p className="text-[9px] text-slate-400 mt-3 tracking-wider">Includes 3 x 30ml Luxury Bottles</p>
        </div>

        {/* Beautiful Horizontal Products Scroller with consistent inline margins */}
        <div className="flex gap-6 overflow-x-auto px-4 pb-8 pt-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0 md:px-0 scrollbar-none">
          {PERFUMES.map((perfume) => (
            <div 
              key={perfume.id}
              onClick={() => setActiveProduct(perfume)}
              className="cursor-pointer group flex flex-col justify-between min-w-[82%] sm:min-w-[45%] md:min-w-0 snap-center bg-white border border-slate-100 rounded-lg p-3 transition-all duration-300 hover:shadow-md md:border-none md:p-0 md:rounded-none"
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
                    <h3 className="text-xs md:text-sm font-semibold text-slate-900 tracking-wide uppercase group-hover:text-[#0A192F] transition-colors">{perfume.name}</h3>
                    <p className="text-[10px] text-slate-400 tracking-wider mt-0.5">{perfume.type} • {perfume.size}</p>
                    <p className="text-xs font-bold text-slate-900 mt-1.5">{perfume.price}</p>
                  </div>
                  <div className="text-[10px] tracking-widest font-medium uppercase text-slate-400 border-b border-transparent group-hover:text-[#0A192F] group-hover:border-[#0A192F] transition-all pt-1">
                    Discover →
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
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#0A192F] uppercase block mb-2">The House of Elixirs</span>
          <h2 className="text-xl md:text-3xl font-light uppercase mt-2 mb-6 tracking-wide text-slate-900">Our Heritage Story</h2>
          <p className="text-slate-500 leading-relaxed font-light text-xs md:text-sm max-w-2xl mx-auto space-y-4">
            At HUZAYM'S ELIXIRS, we believe a fragrance is more than just a scent—it's a bold signature statement. 
            Every bottle in our boutique collection is engineered with meticulously sourced, high-concentration oils 
            designed to deliver extraordinary sillage, projection, and timeless depth. We blend classical luxury 
            perfumery with a clean modern edge, creating unforgettable olfactory trails that linger long after you exit the room.
          </p>
        </div>
      </section>

      {/* Modal Slide-over Drawer Overlay */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-white max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col rounded-none">
            
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <div>
                <h4 className="text-sm md:text-base font-bold text-slate-900 uppercase tracking-wider">{activeProduct.name}</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">{activeProduct.type}</p>
              </div>
              <button 
                onClick={() => setActiveProduct(null)}
                className="w-8 h-8 rounded-full bg-slate-50 text-slate-500 hover:bg-[#0A192F] hover:text-white font-light transition-all duration-200 flex items-center justify-center text-xs"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
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
                  <span className="text-[9px] font-semibold text-[#0A192F] uppercase tracking-widest bg-slate-50 px-3 py-1 border border-slate-200/50">
                    {activeProduct.tagline}
                  </span>
                </div>
                
                <div className="pt-2">
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Fragrance Description</h5>
                  <p className="text-slate-600 text-xs font-light leading-relaxed">
                    {activeProduct.description}
                  </p>
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

                <a 
                  href={activeProduct.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pt-2"
                >
                  <button className="w-full bg-[#0A192F] hover:bg-slate-800 text-white py-3.5 font-semibold tracking-widest uppercase text-[11px] shadow-lg transition-all duration-300 rounded-none">
                    Order via WhatsApp Concierge
                  </button>
                </a>
              </div>
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