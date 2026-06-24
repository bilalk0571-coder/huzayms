"use client";

import { useState, useEffect, useRef } from "react";

const PERFUMES = [
  {
    id: "mariana",
    name: "Mariana Trench",
    type: "Eau De Parfum",
    price: "₹500",
    size: "30ml / 1.0 fl.oz",
    tagline: "Aquatic • Fresh • Mysterious",
    description: "It is an indomitable depth, the unknown, a call towards all and nothing - here, there, everywhere.The wholeness of the sea doesn’t need an explanation",
    mainImage: "/images/mariana.jpeg", 
    images: ["/images/mariana.jpeg", "/images/mariana1.jpeg", "/images/mariana2.jpeg", "/images/mariana3.jpeg"], 
    waLink: "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Mariana%20Trench%20(30ml).",
    notes: {
      top: "Bergamot & Lemon",
      heart: "Seaweed, Calone & Hedione",
      base: "Musk, Ambroxan & Cedar"
    }
  },
  {
    id: "cinnabon",
    name: "Cinnabon",
    type: "Extrait De Parfum",
    price: "₹500",
    size: "30ml / 1.0 fl.oz",
    tagline: "Sweet • Vanillic • Addictive",
    description: "This is not loud. This is class. For the man who walks in calm, speaks less, and leaves a trail people remember. Office, weddings, winter nights - cinnabon fits every royal moment.",
    mainImage: "/images/cinnabon.jpeg", 
    images: ["/images/cinnabon.jpeg", "/images/cinnabon1.jpeg", "/images/cinnabon2.jpeg", "/images/cinnabon3.jpeg"], 
    waLink: "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Cinnabon%20(30ml).",
    notes: {
      top: "Cinnamon, Orange Blossom, Cardamom & Bergamot",
      heart: "Bourbon Vanilla & elemi",
      base: "Praline, Musk, Ambroxan, Guaiac Wood, Tonka & Candied Almond"
    }
  },
  {
    id: "crimson",
    name: "Crimson Leather",
    type: "Extrait De Parfum",
    price: "₹500",
    size: "30ml / 1.0 fl.oz",
    tagline: "Rosey • Leathery • Intoxicating",
    description: "Crimson Leather. Where rose gets raw and leather gets luxe. Dark, intense, unforgettable. Extrait concentration - beast mode performance all day. Crafted for those who dare to stand out.",
    mainImage: "/images/crimson.jpeg", 
    images: ["/images/crimson.jpeg", "/images/crimson1.jpeg", "/images/crimson2.jpeg", "/images/crimson3.jpeg"], 
    waLink: "https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Crimson%20Leather%20(30ml).",
    notes: {
      top: "Plum Cotton Candy Honeybush OR Cyclopia Tobacco Blossom Mock Orange",
      heart: "Chrysanthemum Labdanum Agarwood Cinnamon Rose Brazilian Rosewood",
      base: "Patchouli Ambergris Leather Sandalwood Castoreum Cedar"} 
  },
  {
    id: "trio-bundle",
    name: "The Complete Discovery Trio",
    type: "Limited Discovery Offer Set",
    price: "₹1,200",
    size: "3 x 30ml Luxury Bottles",
    tagline: "The Ultimate Premium Fragrance Wardrobe",
    description: "Why choose one signature when you can possess the entire trilogy? The Complete Discovery Trio houses Mariana Trench, Cinnabon, and Crimson Leather in one majestic gift set collection. Experience true olfactory mastery with a luxury 20% discount value.",
    mainImage: "/images/trio-pack.jpeg", 
    images: ["/images/trio-pack.jpeg"], 
    waLink: "https://wa.me/918928042335?text=Hi!%20I%20want%20to%20claim%20the%20Complete%20Collection%20Trio%20bundle%20offer%20(All%203%20bottles%20for%20₹1200).",
    notes: {
      top: "Aquatic Marine Waves (Mariana)",
      heart: "Gourmand Cinnamons (Cinnabon)",
      base: "Velvet Crimson Leather (Crimson)"
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  
  const heroScrollRef = useRef<HTMLDivElement>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const isUserInteracting = useRef(false);

  const heroSlides = [
    { id: "trio-bundle", image: "/images/hero-trio.jpeg", alt: "Complete Trio Pack Banner Ad" },
    { id: "mariana", image: "/images/hero-mariana.jpeg", alt: "Mariana Trench Premium Ad" },
    { id: "cinnabon", image: "/images/hero-cinnabon.jpeg", alt: "Cinnabon Luxury Ad" },
    { id: "crimson", image: "/images/hero-crimson.jpeg", alt: "Crimson Leather Bold Ad" }
  ];

  // Fluid continuous engine cycles banner automatically when user isn't physically interacting
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isUserInteracting.current && heroScrollRef.current) {
        const nextIndex = (currentSlide + 1) % heroSlides.length;
        const targetScrollLeft = heroScrollRef.current.clientWidth * nextIndex;
        
        heroScrollRef.current.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth"
        });
        setCurrentSlide(nextIndex);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide, heroSlides.length]);

  // Tracks manual touch-swipes/scroll movements to keep indicators down below perfectly accurate
  const handleHeroScroll = (e: any) => {
    const slideWidth = e.target.clientWidth;
    if (slideWidth > 0) {
      const nextCalculatedIndex = Math.round(e.target.scrollLeft / slideWidth);
      if (nextCalculatedIndex !== currentSlide && nextCalculatedIndex < heroSlides.length) {
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

  const handleOpenModal = (product: any) => {
    setModalImageIndex(0);
    setActiveProduct(product);
  };

  const handleModalScroll = (e: any) => {
    const slideWidth = e.target.clientWidth;
    if (slideWidth > 0) {
      const newIndex = Math.round(e.target.scrollLeft / slideWidth);
      if (newIndex !== modalImageIndex && newIndex < activeProduct.images.length) {
        setModalImageIndex(newIndex);
      }
    }
  };

  const handleModalWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (modalScrollRef.current) {
      if (e.deltaY !== 0) {
        e.preventDefault();
        modalScrollRef.current.scrollLeft += e.deltaY;
      }
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

          {/* Direct Swipeable / Scrollable Slider Box */}
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
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      const targeted = PERFUMES.find(p => p.id === slide.id);
                      if (targeted) handleOpenModal(targeted);
                    }}
                    className="w-full h-full flex-shrink-0 snap-center relative cursor-pointer"
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.alt} 
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5 flex justify-between items-end">
                      <span className="text-[8px] tracking-[0.25em] uppercase bg-[#D4AF37] text-black font-bold px-3 py-1.5">
                        {slide.id === "trio-bundle" ? "Discovery Offer" : "Boutique Fragrance"}
                      </span>
                      <span className="text-[8px] text-slate-300 tracking-widest uppercase font-medium group-hover:text-white transition-colors">Details →</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Micro Indicators synchronizing seamlessly */}
            <div className="flex gap-2.5 mt-5">
              {heroSlides.map((_, index) => (
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

      {/* Grid Collection Section */}
      <section id="collection" className="py-24 scroll-mt-12 bg-[#020612] border-t border-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-[9px] font-bold text-[#C5A059] tracking-[0.4em] uppercase block mb-2">Our Signature Lines</span>
            <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-wide uppercase">The Elixir Collection</h2>
            <div className="w-8 h-[1px] bg-[#C5A059] mx-auto mt-4 opacity-40"></div>
          </div>

          <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-x-visible sm:pb-0">
            {PERFUMES.map((perfume) => (
              <div 
                key={perfume.id}
                onClick={() => handleOpenModal(perfume)}
                className="cursor-pointer group flex flex-col justify-between bg-[#030a1c] rounded-none border border-white/[0.04] transition-all duration-300 hover:border-white/10 min-w-[80vw] sm:min-w-0 snap-center"
              >
                <div>
                  <div className="w-full aspect-[4/5] overflow-hidden bg-[#010307] relative border-b border-white/[0.02]">
                    <img
                      src={perfume.mainImage}
                      alt={perfume.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    
                    {/* Dynamic Tagging Labels */}
                    {perfume.id === "mariana" && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#D4AF37] text-black font-bold text-[8px] tracking-widest uppercase px-2.5 py-1">
                          Best Seller
                        </span>
                      </div>
                    )}
                    {perfume.id === "trio-bundle" && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#D4AF37] text-black font-bold text-[8px] tracking-widest uppercase px-2.5 py-1">
                          Limited Offer 
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 px-4">
                    <h3 className="text-xs font-serif font-medium text-white tracking-wide uppercase group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                      {perfume.name}
                    </h3>
                    <p className="text-[9px] text-slate-400 tracking-[0.2em] uppercase mt-1 line-clamp-1">
                      {perfume.type}
                    </p>
                    <p className="text-[8px] text-slate-500 tracking-wider mt-0.5">{perfume.size}</p>
                    
                    <div className="flex items-center gap-1 mt-2.5">
                      <span className="text-[#D4AF37] text-[8px]">★★★★★</span>
                      <span className="text-[8px] font-medium tracking-widest text-slate-500 uppercase">Premium Concentration</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 pb-4 px-4 border-t border-white/[0.03] flex justify-between items-center">
                  <span className="text-xs font-medium text-[#C5A059] tracking-wider">{perfume.price}</span>
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

      {/* Review Section */}
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

      {/* MODAL Presentation Grid */}
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
              
              <div 
                onWheel={handleModalWheel}
                className="relative w-full aspect-[4/5] mx-auto bg-[#010307] border border-white/5 overflow-hidden group/modal"
              >
                <div 
                  ref={modalScrollRef}
                  onScroll={handleModalScroll}
                  className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {activeProduct.images.map((imgUrl: string, idx: number) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 snap-center">
                      <img 
                        src={imgUrl} 
                        alt={`${activeProduct.name} View ${idx + 1}`} 
                        className="h-full w-full object-cover select-none pointer-events-none"
                      />
                    </div>
                  ))}
                </div>

                {/* Left/Right Desktop Navigation Arrows */}
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
                
                {/* Horizontal Navigation Dots Overlayed */}
                {activeProduct.images.length > 1 && (
                  <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-10 pointer-events-none">
                    {activeProduct.images.map((_: any, idx: number) => (
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
                    <p className="text-slate-200 text-xs font-light">{activeProduct.notes.top}</p>
                  </div>
                  <div className="text-center md:px-2 md:border-r border-white/5 border-t border-white/5 md:border-t-0 pt-2 md:pt-0">
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.15em] block mb-0.5">Heart Profile</span>
                    <p className="text-slate-200 text-xs font-light">{activeProduct.notes.heart}</p>
                  </div>
                  <div className="text-center md:px-2 border-t border-white/5 md:border-t-0 pt-2 md:pt-0">
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.15em] block mb-0.5">Base Finish</span>
                    <p className="text-slate-200 text-xs font-light">{activeProduct.notes.base}</p>
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
                  <span className="text-sm font-bold text-[#D4AF37]">{activeProduct.price}</span>
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