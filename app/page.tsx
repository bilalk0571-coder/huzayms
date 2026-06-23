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
  const [activeProduct, setActiveProduct] = useState<any>(null);

  return (
    <main className="bg-[#030914] text-slate-100 min-h-screen font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      
      {/* Premium Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030914]/80 backdrop-blur-xl border-b border-white/[0.03] px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo1.png" 
              alt="Huzaym's Elixirs Crest" 
              className="w-7 h-auto object-contain brightness-125" 
            />
            <span className="font-serif tracking-[0.3em] text-xs md:text-sm uppercase font-semibold bg-gradient-to-r from-[#C5A059] via-[#FDF6C7] to-[#B38728] bg-clip-text text-transparent">
              HUZAYM'S ELIXIRS
            </span>
          </div>
          <div className="flex gap-6 text-[9px] md:text-[10px] tracking-[0.3em] font-medium text-slate-400">
            <a href="#" className="hover:text-[#D4AF37] transition-colors uppercase">HOME</a>
            <a href="#collection" className="hover:text-[#D4AF37] transition-colors uppercase">COLLECTION</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors uppercase">STORY</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-36 px-6 overflow-hidden bg-[#030914]">
        {/* Ambient background blur elements matching gd.PNG style */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full bg-gradient-to-br from-[#BF953F] via-[#2A1E08] to-transparent blur-[120px] transform -rotate-12"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[70%] rounded-full bg-gradient-to-tl from-[#1E3A8A] via-[#030914] to-transparent blur-[100px]"></div>
          <div className="absolute top-[10%] right-[15%] w-[35%] h-[45%] rounded-full bg-cyan-500/10 blur-[90px]"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Content Column */}
          <div className="md:col-span-6 text-center md:text-left flex flex-col items-center md:items-start space-y-6">
            <img 
              src="/images/logo1.png" 
              alt="Huzaym's Elixirs Crest" 
              className="h-24 md:h-32 w-auto object-contain brightness-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            />
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-[0.08em] uppercase leading-tight bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
                HUZAYM'S ELIXIRS
              </h1>
              <p className="text-[10px] md:text-xs text-slate-400 font-light tracking-[0.35em] uppercase">
                Crafted Fragrances • Lasting Impressions
              </p>
            </div>
            <div className="pt-4 w-full sm:w-auto">
              <a href="#collection">
                <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black font-bold uppercase tracking-[0.3em] text-[10px] hover:brightness-110 transition-all rounded-none cursor-pointer shadow-[0_10px_30px_rgba(212,175,55,0.15)]">
                  Explore Collection
                </button>
              </a>
            </div>
          </div>

          {/* Right Product Showcase Frame - Fixed image path from Capture111.PNG */}
          <div className="md:col-span-6 flex justify-center items-center px-4">
            <div className="relative max-w-md w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] border border-white/[0.06] bg-[#02050c] p-1">
              <img 
                src="/images/trio-pack.jpeg" 
                alt="The Luxury Trio Showcase" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Collection Section - Seamless baseline setup */}
      <section id="collection" className="py-24 md:py-32 scroll-mt-12 relative bg-[#030914]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030914] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-[5%] left-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-tr from-[#9A7B36]/20 to-transparent blur-[140px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-20">
            <span className="text-[9px] font-bold text-[#C5A059] tracking-[0.4em] uppercase block mb-3">Our Signature Lines</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-white tracking-wide uppercase">The Elixir Collection</h2>
            <div className="w-12 h-[1px] bg-gradient-to-r from-[#BF953F] to-[#B38728] mx-auto mt-6 opacity-60"></div>
          </div>

          {/* Premium Bundle Offer Box */}
          <div className="max-w-3xl mx-auto mb-24 bg-gradient-to-br from-[#06152d] to-[#020814] border border-[#D4AF37]/20 p-8 md:p-12 text-center shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative">
            <span className="bg-gradient-to-r from-[#BF953F] to-[#B38728] text-black text-[9px] tracking-[0.3em] font-extrabold px-5 py-2 uppercase inline-block">
              Limited Discovery Offer
            </span>
            <h3 className="text-xl md:text-3xl font-serif font-light mt-6 tracking-wide text-white uppercase">The Complete Discovery Trio</h3>
            
            <div className="flex items-center justify-center gap-4 mt-5 mb-8">
              <span className="text-slate-500 line-through text-xs font-light tracking-widest">₹1,500</span>
              <span className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">₹1,200</span>
              <span className="text-[9px] text-[#FCF6BA] font-bold bg-[#D4AF37]/10 px-3 py-1 border border-[#D4AF37]/20 uppercase tracking-widest">Save 20%</span>
            </div>

            <a
              href="https://wa.me/918928042335?text=Hi!%20I%20want%20to%20claim%20the%20Complete%20Collection%20Trio%20bundle%20offer%20(All%203%20bottles%20for%20₹1200)."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-12 py-4 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black font-bold text-[10px] tracking-[0.3em] uppercase transition duration-300 rounded-none cursor-pointer shadow-xl hover:brightness-110">
                Claim Offer via WhatsApp
              </button>
            </a>
            <p className="text-[9px] text-slate-400 mt-4 tracking-[0.2em] uppercase font-light">Includes 3 x 30ml Luxury Bottles</p>
          </div>

          {/* Product Cards Layout Grid */}
          <div className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scroll-pl-6 md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0 scrollbar-none">
            {PERFUMES.map((perfume) => (
              <div 
                key={perfume.id}
                onClick={() => setActiveProduct(perfume)}
                className="cursor-pointer group flex flex-col justify-between min-w-[85%] sm:min-w-[45%] md:min-w-0 snap-start bg-[#040d1c]/90 border border-white/[0.04] rounded-xl p-5 transition-all duration-300 hover:border-[#D4AF37]/20 hover:bg-[#06152d]"
              >
                <div>
                  <div className="bg-[#020612] overflow-hidden flex items-center justify-center border border-white/[0.03] rounded-lg group-hover:border-white/10 transition duration-300">
                    <img
                      src={perfume.mainImage}
                      alt={perfume.name}
                      className="w-full h-72 md:h-96 object-contain group-hover:scale-[1.02] transition duration-500 p-6"
                    />
                  </div>
                  <div className="mt-6 px-1 flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-serif font-medium text-white tracking-wide uppercase group-hover:text-[#D4AF37] transition-colors">{perfume.name}</h3>
                      <p className="text-[9px] text-slate-400 tracking-[0.2em] uppercase mt-1.5">{perfume.type} • {perfume.size}</p>
                      
                      <div className="flex items-center gap-1.5 mt-2.5">
                        <span className="text-[#D4AF37] text-[10px]">★★★★★</span>
                        <span className="text-[8px] font-medium tracking-widest text-slate-500 uppercase">8+ Hr Longevity</span>
                      </div>
                      
                      <p className="text-sm font-semibold text-[#C5A059] tracking-wider mt-3">{perfume.price}</p>
                    </div>
                    <div className="text-[9px] tracking-[0.25em] font-semibold uppercase text-slate-400 group-hover:text-[#D4AF37] transition-all pt-1 whitespace-nowrap">
                      VIEW →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-center text-slate-500 uppercase tracking-[0.2em] mt-6 md:hidden">Swipe side-to-side to browse fragrances ⇄</p>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#030914] border-t border-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[9px] font-bold text-[#C5A059] tracking-[0.4em] uppercase block mb-3">Verified Testimonials</span>
            <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-wide uppercase">What Our Buyers Say</h2>
            <div className="w-12 h-[1px] bg-gradient-to-r from-[#BF953F] to-[#B38728] mx-auto mt-5 opacity-40"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, i) => (
              <div key={i} className="bg-[#040e1f] border border-white/[0.04] p-6 rounded-xl flex flex-col justify-between">
                <p className="text-slate-300 font-light italic text-xs leading-relaxed tracking-wide">
                  "{rev.quote}"
                </p>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/[0.05]">
                  <span className="text-xs font-serif text-white tracking-wide">{rev.author}</span>
                  <span className="text-[8px] font-bold text-[#C5A059] bg-[#D4AF37]/10 px-2.5 py-1 uppercase tracking-widest">{rev.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Heritage Section */}
      <section id="about" className="py-24 md:py-32 px-6 max-w-4xl mx-auto scroll-mt-12">
        <div className="text-center">
          <span className="text-[9px] font-bold tracking-[0.4em] text-[#C5A059] uppercase block mb-3">The House of Elixirs</span>
          <h2 className="text-2xl md:text-4xl font-serif font-light uppercase mt-2 mb-6 tracking-wide text-white">Our Heritage Story</h2>
          <p className="text-slate-400 leading-relaxed font-light text-xs md:text-sm max-w-2xl mx-auto tracking-widest space-y-4">
            At HUZAYM'S ELIXIRS, we believe a fragrance is more than just a scent—it's a bold signature statement. 
            Every bottle in our boutique collection is engineered with meticulously sourced, high-concentration oils 
            designed to deliver extraordinary sillage, projection, and timeless depth. We blend classical luxury 
            perfumery with a clean modern edge, creating unforgettable olfactory trails that linger long after you exit the room.
          </p>
        </div>
      </section>

      {/* Modal View Overlays */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/90 backdrop-blur-md p-0 md:p-4">
          <div className="bg-[#040d1c] max-w-2xl w-full h-[100dvh] md:h-auto max-h-[100dvh] md:max-h-[90vh] shadow-2xl flex flex-col relative border-t border-white/10 md:border md:border-white/10 overflow-hidden">
            
            <div className="flex justify-between items-center p-5 border-b border-white/5 bg-[#040d1c] z-10">
              <div>
                <h4 className="text-base md:text-lg font-serif font-medium text-white uppercase tracking-wider">{activeProduct.name}</h4>
                <p className="text-[9px] text-[#C5A059] uppercase tracking-[0.2em] mt-0.5">{activeProduct.type}</p>
              </div>
              <button 
                onClick={() => setActiveProduct(null)}
                className="w-8 h-8 rounded-full bg-white/5 text-slate-300 hover:bg-[#D4AF37] hover:text-black font-light transition-all duration-200 flex items-center justify-center text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 pb-40 md:pb-6">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
                {activeProduct.images.map((imgUrl: string, idx: number) => (
                  <div key={idx} className="min-w-[85%] sm:min-w-[60%] h-72 md:h-80 bg-[#02050c] border border-white/5 rounded-none overflow-hidden snap-center flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={imgUrl} 
                      alt={`${activeProduct.name} View ${idx + 1}`} 
                      className="h-full w-full object-contain p-6"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[8px] text-center text-slate-500 uppercase tracking-widest mt-1 mb-6">Swipe left/right to view details ⇄</p>

              <div className="space-y-6">
                <div className="text-center md:text-left">
                  <span className="text-[9px] font-bold tracking-[0.25em] text-[#D4AF37] uppercase bg-black px-4 py-2 border border-[#D4AF37]/30">
                    {activeProduct.tagline}
                  </span>
                </div>
                
                <div className="pt-2">
                  <h5 className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] mb-1.5">Fragrance Description</h5>
                  <p className="text-slate-300 text-xs font-light leading-relaxed tracking-wide">
                    {activeProduct.description}
                  </p>
                </div>

                <div className="pt-2">
                  <h5 className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] mb-3">Fragrance Notes</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 border-y border-white/5 py-5 bg-black/40">
                    <div className="text-center md:px-4 md:border-r border-white/5">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-1">Top Notes</span>
                      <p className="text-slate-200 text-xs font-light leading-relaxed">{activeProduct.notes.top}</p>
                    </div>
                    <div className="text-center md:px-4 md:border-r border-white/5 md:border-t-0 border-t border-white/5 pt-3 md:pt-0">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-1">Heart Notes</span>
                      <p className="text-slate-200 text-xs font-light leading-relaxed">{activeProduct.notes.heart}</p>
                    </div>
                    <div className="text-center md:px-4 md:border-t-0 border-t border-white/5 pt-3 md:pt-0">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-1">Base Notes</span>
                      <p className="text-slate-200 text-xs font-light leading-relaxed">{activeProduct.notes.base}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black border border-white/10 p-4 text-center">
                  <span className="text-[8px] font-bold tracking-[0.25em] text-[#D4AF37] uppercase block mb-1.5">Easy Checkout Process</span>
                  <p className="text-[10px] font-light tracking-[0.1em] text-slate-400 uppercase">
                    1. Click to Chat → 2. Share Delivery Address → 3. Pay via UPI / GPay
                  </p>
                </div>

                <div className="flex justify-between items-center bg-black/40 p-4 border border-white/5 mt-4">
                  <div>
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider block">Volume Size</span>
                    <span className="text-xs font-medium text-white">{activeProduct.size}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider block">Retail Price</span>
                    <span className="text-lg font-bold text-[#D4AF37]">{activeProduct.price}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#040d1c] border-t border-white/5 md:relative md:border-t-0 md:p-6 md:pt-0 z-20">
              <a 
                href={activeProduct.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black py-4 font-bold tracking-[0.3em] uppercase text-[10px] shadow-2xl transition-all duration-300 rounded-none cursor-pointer hover:brightness-110">
                  Order via WhatsApp Concierge
                </button>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Luxury Minimal Footer */}
      <footer className="bg-[#02050b] pt-16 pb-12 text-slate-500 tracking-[0.2em] text-[10px]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-center md:text-left">
          
          <div className="md:col-span-6 space-y-1">
            <span className="font-serif text-sm font-semibold tracking-[0.25em] bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] bg-clip-text text-transparent uppercase">
              HUZAYM'S ELIXIRS
            </span>
            <p className="text-[9px] text-slate-600 uppercase tracking-[0.25em] font-light">
              Crafted Fragrances. Lasting Impressions.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:flex-row gap-6 md:gap-10 justify-center md:justify-end uppercase text-[9px] font-semibold">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">INSTAGRAM →</a>
            <a href="https://wa.me/918928042335" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">WHATSAPP →</a>
          </div>

          <div className="md:col-span-12 border-t border-white/[0.03] pt-8 text-center text-[9px] text-slate-700 font-light">
            <p>&copy; {new Date().getFullYear()} HUZAYM'S ELIXIRS. All rights reserved.</p>
          </div>

        </div>
      </footer>

    </main>
  );
}