"use client";

import { useState } from "react";

// 1. Defining a clean structure so the editor stops throwing red lines
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
  const [activeProduct, setActiveProduct] = useState<(typeof PERFUMES)[number] | null>(null);

  return (
    <main className="bg-white text-slate-900 min-h-screen font-sans antialiased selection:bg-slate-900 selection:text-white">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A192F]/95 backdrop-blur-md border-b border-slate-800 px-4 md:px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.jpeg" 
              alt="Logo" 
              className="w-8 h-8 rounded-full object-cover border border-white/20" 
            />
            <span className="text-white font-bold tracking-widest text-lg md:text-xl">HUZAYM'S</span>
          </div>
          <div className="flex gap-6 text-xs md:text-sm tracking-widest text-slate-300">
            <a href="#" className="hover:text-white transition">HOME</a>
            <a href="#collection" className="hover:text-white transition">COLLECTION</a>
            <a href="#about" className="hover:text-white transition">STORY</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-24 bg-[#0A192F] text-white">
        <img 
          src="/images/logo.jpeg" 
          alt="Huzaym's Logo" 
          className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-2 border-white/10 mb-6 shadow-xl" 
        />
        <h1 className="text-5xl md:text-8xl font-black tracking-tight uppercase">
          HUZAYM'S
        </h1>
        <p className="mt-4 text-base md:text-xl text-slate-300 max-w-md font-light tracking-wide">
          Crafted Fragrances. Lasting Impressions.
        </p>
        <a href="#collection" className="mt-8">
          <button className="px-8 py-3 bg-white text-[#0A192F] font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition duration-300 shadow-md">
            Explore Collection
          </button>
        </a>
      </section>

      {/* Product Section */}
      <section id="collection" className="py-20 px-4 md:px-6 max-w-6xl mx-auto scroll-mt-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Our Product</h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto font-light leading-relaxed">
            Meticulously blended luxury Extraits and Eau De Parfums designed to command presence. Click on any fragrance to explore notes and view exclusive bottles.
          </p>
        </div>

        {/* Limited Bundle Deal */}
        <div className="max-w-3xl mx-auto mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
          <span className="bg-[#0A192F] text-white text-[10px] tracking-widest font-bold px-3 py-1 uppercase rounded-full">
            Limited Bundle Deal
          </span>
          <h3 className="text-2xl font-bold mt-4 tracking-tight text-slate-900">The Complete Discovery Trio</h3>
          <div className="flex items-center justify-center gap-4 mt-3 mb-4">
            <span className="text-slate-400 line-through text-sm">₹1,500</span>
            <span className="text-2xl font-black text-[#0A192F]">₹1,200</span>
            <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Save ₹300</span>
          </div>
          <a
            href="https://wa.me/918928042335?text=Hi!%20I%20want%20to%20claim%20the%20Complete%20Collection%20Trio%20bundle%20offer%20(All%203%20bottles%20for%20₹1200)."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2.5 bg-[#0A192F] text-white rounded-xl font-semibold text-xs tracking-wider uppercase hover:bg-slate-800 transition duration-300">
              Claim Trio via WhatsApp
            </button>
          </a>
          <p className="text-[10px] text-slate-400 mt-2">Size: 3 x 30ml Bottles</p>
        </div>

        {/* E-Commerce Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PERFUMES.map((perfume) => (
            <div 
              key={perfume.id}
              onClick={() => setActiveProduct(perfume)}
              className="cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="bg-slate-50 rounded-2xl p-4 overflow-hidden flex items-center justify-center border border-slate-100 group-hover:border-slate-200 transition">
                  <img
                    src={perfume.mainImage}
                    alt={perfume.name}
                    className="w-full h-72 md:h-80 object-contain group-hover:scale-102 transition duration-500"
                  />
                </div>
                <div className="mt-4 px-1 flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-medium text-slate-900 group-hover:text-[#0A192F] transition">{perfume.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{perfume.type} • {perfume.size}</p>
                    <p className="text-sm font-semibold text-slate-900 mt-1">{perfume.price}</p>
                  </div>
                  <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 text-sm font-medium group-hover:bg-[#0A192F] group-hover:text-white transition">
                    +
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-100 scroll-mt-20">
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-[#0A192F] uppercase">The Heritage</span>
          <h2 className="text-3xl font-bold mt-2 mb-6 tracking-wide text-slate-900">Our Story</h2>
          <p className="text-slate-500 leading-relaxed font-light text-base">
            At HUZAYM'S, we believe a fragrance is more than just a scent—it's a signature statement. 
            Every bottle in our collection is crafted with meticulously sourced, high-concentration oils 
            designed to deliver extraordinary projection and depth. We blend luxury with modern edge, 
            creating unforgettable olfactory experiences that linger long after you leave the room.
          </p>
        </div>
      </section>

      {/* Modal Slider Overlay */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
            
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <div>
                <h4 className="text-xl font-bold text-slate-900">{(activeProduct as any).name}</h4>
                <p className="text-xs text-slate-400">{(activeProduct as any).type}</p>
              </div>
              <button 
                onClick={() => setActiveProduct(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-[#0A192F] hover:text-white font-bold transition flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {/* Horizontal Slider */}
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
                {(activeProduct as any).images.map((imgUrl: string, idx: number) => (
                  <div key={idx} className="min-w-[85%] sm:min-w-[60%] h-72 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden snap-center flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={imgUrl} 
                      alt={`${(activeProduct as any).name} View ${idx + 1}`} 
                      className="h-full w-full object-contain p-4"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest mt-1 mb-6">Swipe left/right to view images ⇄</p>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-[#0A192F] uppercase tracking-wide bg-slate-100 px-2.5 py-1 rounded">
                    {(activeProduct as any).tagline}
                  </span>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-slate-900 mb-1">Description</h5>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    {(activeProduct as any).description}
                  </p>
                </div>

                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100 mt-6">
                  <div>
                    <span className="text-xs text-slate-400 block">Bottle Size</span>
                    <span className="text-sm font-medium text-slate-800">{(activeProduct as any).size}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Pricing</span>
                    <span className="text-2xl font-black text-[#0A192F]">{(activeProduct as any).price}</span>
                  </div>
                </div>

                <a 
                  href={(activeProduct as any).waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6"
                >
                  <button className="w-full bg-[#0A192F] hover:bg-slate-800 text-white py-4 rounded-xl font-bold tracking-wider uppercase text-sm shadow-xl transition">
                    Order on WhatsApp
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-50 py-12 text-center text-xs text-slate-400 tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} HUZAYM'S. All rights reserved.</p>
        <p className="mt-1 text-[10px] text-slate-300 font-light">Engineered for Elegance.</p>
      </footer>

    </main>
  );
}