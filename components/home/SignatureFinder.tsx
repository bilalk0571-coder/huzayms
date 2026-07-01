"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function SignatureFinder() {
  const categories = [
    {
      name: "Fresh",
      slugs: ["mariana-trench", "celestial-tide"],
    },
    {
      name: "Sweet",
      slugs: ["cinnabon"],
    },
    {
      name: "Dark",
      slugs: ["crimson-leather"],
    },
    {
      name: "Bundles",
      slugs: ["build-your-own-discovery-set", "complete-collection"],
    },
  ];

  const [active, setActive] = useState(0);

  const activeCategory = categories[active];
  
  const filteredProducts = activeCategory.slugs
    .map((slug) => PRODUCTS.find((p) => p.slug === slug))
    .filter((product): product is NonNullable<typeof product> => !!product);

  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 px-6 bg-[#020612] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.4em] text-[#D4AF37] text-xs mb-4">
            Find Your Signature
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Discover Your Signature
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 leading-relaxed">
            Choose a fragrance that feels unmistakably yours.
          </p>
        </div>

        {/* Category buttons */}
        <div className="flex justify-start md:justify-center gap-4 md:gap-8 mb-8 md:mb-10 overflow-x-auto scrollbar-hide whitespace-nowrap px-2 pb-4 w-full">
          {categories.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActive(index)}
              className={`relative flex-shrink-0 px-2 pb-2 text-sm uppercase tracking-[0.3em] transition-all duration-300 cursor-pointer ${
                active === index
                  ? "text-[#D4AF37]"
                  : "text-slate-500 hover:text-white"
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                  active === index ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Dynamic Product Grid / Carousel Layout */}
        {filteredProducts.length === 1 ? (
          <div className="flex justify-center max-w-4xl mx-auto w-full px-6 sm:px-0 -mx-6 sm:mx-auto">
            <div className="w-[82%] sm:w-full sm:max-w-[436px] flex-shrink-0">
              <ProductCard product={filteredProducts[0]} compact />
            </div>
          </div>
        ) : (
          <div className="flex sm:grid sm:grid-cols-2 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none scrollbar-hide gap-6 max-w-4xl mx-auto w-full px-6 sm:px-0 pb-2 sm:pb-0 -mx-6 sm:mx-auto">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="w-[82%] sm:w-full flex-shrink-0 snap-center"
              >
                <ProductCard product={product} compact />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}