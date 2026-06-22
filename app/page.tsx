export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans antialiased selection:bg-yellow-500 selection:text-black">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900 px-4 md:px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/images/logo.jpeg" alt="Logo" className="w-8 h-8 rounded-full object-cover border border-yellow-500/50" />
            <span className="text-yellow-500 font-bold tracking-widest text-lg md:text-xl">HUZAYM'S</span>
          </div>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm tracking-widest text-gray-400">
            <a href="#" className="hover:text-yellow-500 transition">HOME</a>
            <a href="#about" className="hover:text-yellow-500 transition">STORY</a>
            <a href="#collection" className="hover:text-yellow-500 transition">COLLECTION</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
        <div className="relative group mb-6">
          <div className="absolute -inset-0.5 bg-yellow-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <img 
            src="/images/logo.jpeg" 
            alt="Huzaym's Logo" 
            className="relative w-28 h-28 md:w-36 md:h-36 object-cover rounded-full border border-yellow-500/40 shadow-2xl" 
          />
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold text-yellow-500 tracking-tighter uppercase">
          HUZAYM'S
        </h1>

        <p className="mt-4 md:mt-6 text-lg md:text-2xl text-zinc-400 max-w-md md:max-w-xl font-light tracking-wide px-4">
          Crafted Fragrances. Lasting Impressions.
        </p>

        <a href="#collection" className="mt-8 md:mt-10">
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold uppercase tracking-widest text-xs rounded-none hover:brightness-110 shadow-lg shadow-yellow-500/10 transition duration-300 transform hover:-translate-y-0.5">
            Explore Collection
          </button>
        </a>
      </section>

      {/* Our Story Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto border-t border-zinc-900 scroll-mt-20">
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">The Heritage</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 tracking-wide">Our Story</h2>
          <p className="text-zinc-400 leading-relaxed font-light text-base md:text-lg">
            At HUZAYM'S, we believe a fragrance is more than just a scent—it's a signature statement. 
            Every bottle in our collection is crafted with meticulously sourced, high-concentration oils 
            designed to deliver extraordinary projection and depth. We blend luxury with modern edge, 
            creating unforgettable olfactory experiences that linger long after you leave the room.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-zinc-950 py-16 px-6 border-t border-b border-zinc-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="text-yellow-500 text-3xl mb-3">✨</div>
            <h4 className="text-lg font-semibold tracking-wide mb-2">Premium French Oils</h4>
            <p className="text-zinc-400 text-sm font-light">Sourced globally to ensure hyper-realistic notes and elite-tier blending quality.</p>
          </div>
          <div className="p-4 border-y md:border-y-0 md:border-x border-zinc-800">
            <div className="text-yellow-500 text-3xl mb-3">⏳</div>
            <h4 className="text-lg font-semibold tracking-wide mb-2">Beast Mode Longevity</h4>
            <p className="text-zinc-400 text-sm font-light">Extrait & High-Concentration EDPs built to project cleanly for 8+ hours.</p>
          </div>
          <div className="p-4">
            <div className="text-yellow-500 text-3xl mb-3">📦</div>
            <h4 className="text-lg font-semibold tracking-wide mb-2">Secure Shipping</h4>
            <p className="text-zinc-400 text-sm font-light">Carefully packaged in premium aesthetic boxes, delivered safely to your doorstep.</p>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-24 px-4 md:px-6 max-w-6xl mx-auto scroll-mt-16">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">Curated Luxury</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 tracking-tight">Featured Collection</h2>
        </div>

        {/* Limited Time Bundle Offer Banner */}
        <div className="max-w-3xl mx-auto mb-16 bg-gradient-to-r from-zinc-900 via-yellow-950/30 to-zinc-900 border border-yellow-500/30 rounded-2xl p-6 md:p-8 text-center shadow-xl shadow-yellow-500/5">
          <span className="bg-yellow-500 text-black text-[10px] tracking-widest font-extrabold px-3 py-1 uppercase rounded-full">
            Exclusive Discovery Offer
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold mt-4 tracking-tight">The Complete Collection Trio</h3>
          <p className="text-zinc-400 text-sm mt-2 font-light max-w-md mx-auto">
            Experience the full depth of HUZAYM'S. Get Mariana Trench, Cinnabon, and Crimson Leather altogether.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 mb-6">
            <span className="text-zinc-500 line-through text-base">₹1,500</span>
            <span className="text-3xl font-black text-yellow-500">₹1,200</span>
            <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">Save ₹300</span>
          </div>
          <a
            href="https://wa.me/918928042335?text=Hi!%20I%20want%20to%20claim%20the%20Complete%20Collection%20Trio%20bundle%20offer%20(All%203%20bottles%20for%20₹1200)."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-3.5 bg-yellow-500 text-black rounded-xl font-bold text-sm tracking-wider uppercase hover:bg-yellow-400 transition duration-300 shadow-lg shadow-yellow-500/10">
              Claim Bundle Deal on WhatsApp
            </button>
          </a>
          <p className="text-[10px] text-zinc-500 mt-3 tracking-wide">Size: 3 x 30ml Individual Bottles</p>
        </div>

        {/* Individual Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-0">

          {/* Mariana */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-yellow-500/20 transition duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="overflow-hidden">
                <img
                  src="/images/mariana-trench.jpeg"
                  alt="Mariana Trench"
                  className="w-full h-80 md:h-96 object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 pb-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold tracking-tight">Mariana Trench</h3>
                  <span className="bg-yellow-500/10 text-yellow-500 text-xs px-2.5 py-1 rounded-full border border-yellow-500/20 font-medium">EDP</span>
                </div>
                <p className="text-zinc-400 mt-3 text-sm font-light tracking-wide">
                  Aquatic • Fresh • Mysterious
                </p>
                <p className="mt-2 italic text-zinc-500 text-sm">
                  "Dive into the depths of luxury."
                </p>
              </div>
            </div>
            <div className="p-6 mt-6 border-t border-zinc-900/50 bg-black/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-zinc-500">Size: 30ml / 1.0 fl.oz</span>
                <span className="text-xl font-bold text-yellow-500">₹500</span>
              </div>
              <a
                href="https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Mariana%20Trench%20(30ml)."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-white text-black py-3 rounded-xl font-bold text-sm tracking-wider uppercase hover:bg-yellow-500 transition duration-300">
                  Order on WhatsApp
                </button>
              </a>
            </div>
          </div>

          {/* Cinnabon */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-yellow-500/20 transition duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="overflow-hidden">
                <img
                  src="/images/cinnabon.jpeg"
                  alt="Cinnabon"
                  className="w-full h-80 md:h-96 object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 pb-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold tracking-tight">Cinnabon</h3>
                  <span className="bg-yellow-500/10 text-yellow-500 text-xs px-2.5 py-1 rounded-full border border-yellow-500/20 font-medium">Extrait</span>
                </div>
                <p className="text-zinc-400 mt-3 text-sm font-light tracking-wide">
                  Sweet • Vanillic • Addictive
                </p>
                <p className="mt-2 italic text-zinc-500 text-sm">
                  "Indulge in timeless comfort."
                </p>
              </div>
            </div>
            <div className="p-6 mt-6 border-t border-zinc-900/50 bg-black/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-zinc-500">Size: 30ml / 1.0 fl.oz</span>
                <span className="text-xl font-bold text-yellow-500">₹500</span>
              </div>
              <a
                href="https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Cinnabon%20(30ml)."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-white text-black py-3 rounded-xl font-bold text-sm tracking-wider uppercase hover:bg-yellow-500 transition duration-300">
                  Order on WhatsApp
                </button>
              </a>
            </div>
          </div>

          {/* Crimson Leather */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-yellow-500/20 transition duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="overflow-hidden">
                <img
                  src="/images/crimson-leather.jpeg"
                  alt="Crimson Leather"
                  className="w-full h-80 md:h-96 object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 pb-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold tracking-tight">Crimson Leather</h3>
                  <span className="bg-yellow-500/10 text-yellow-500 text-xs px-2.5 py-1 rounded-full border border-yellow-500/20 font-medium">Extrait</span>
                </div>
                <p className="text-zinc-400 mt-3 text-sm font-light tracking-wide">
                  Rosey • Leathery • Intoxicating
                </p>
                <p className="mt-2 italic text-zinc-500 text-sm">
                  "Dare to be unforgettable."
                </p>
              </div>
            </div>
            <div className="p-6 mt-6 border-t border-zinc-900/50 bg-black/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-zinc-500">Size: 30ml / 1.0 fl.oz</span>
                <span className="text-xl font-bold text-yellow-500">₹500</span>
              </div>
              <a
                href="https://wa.me/918928042335?text=Hi!%20I'm%20interested%20in%20ordering%20Crimson%20Leather%20(30ml)."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-white text-black py-3 rounded-xl font-bold text-sm tracking-wider uppercase hover:bg-yellow-500 transition duration-300">
                  Order on WhatsApp
                </button>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black py-12 text-center text-xs text-zinc-600 tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} HUZAYM'S. All rights reserved.</p>
        <p className="mt-2 text-[10px] text-zinc-700 font-light">Engineered for Elegance.</p>
      </footer>

    </main>
  );
}