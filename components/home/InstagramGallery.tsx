"use client";

import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  "/images/gallery/gallery1.png",
  "/images/gallery/gallery2.png",
  "/images/gallery/gallery3.png",
  "/images/gallery/gallery4.png",
  "/images/gallery/gallery5.png",
  "/images/gallery/gallery6.png",
];

export default function InstagramGallery() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-[#020612] pt-20 pb-16 md:pt-24 md:pb-20">

    

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="flex justify-center mb-5">
            <ArrowUpRight
              size={24}
              className="text-[#D4AF37]"
            />
          </div>

          <p className="uppercase tracking-[0.45em] text-xs md:text-sm text-[#D4AF37]/90 mb-4">
            Inside the House of
          </p>

          <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-[0.18em] text-[#D4AF37]">
  HUZAYM'S
</h2>

          <p className="mt-7 text-white/65 leading-8 text-lg">
            Campaigns, craftsmanship and moments behind the fragrance.
          </p>

          <a
            href="https://instagram.com/huzayms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-9 text-[#D4AF37] uppercase tracking-[0.30em] text-sm hover:gap-5 transition-all duration-300"
          >
            Follow @HUZAYMS
            <ArrowUpRight size={18} />
          </a>

          <div className="w-56 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mt-5" />

        </div>

        {/* Gallery */}

        <div className="mt-12 grid grid-cols-2 gap-2 lg:gap-6 lg:grid-cols-3">

          {galleryImages.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/huzayms"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                overflow-hidden
                rounded-2xl
                border border-[#D4AF37]/20
                hover:border-[#D4AF37]/70
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]
              "
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            </a>
          ))}

        </div>

        {/* Bottom Button */}

        <div className="flex justify-center mt-14">

          <a
            href="https://instagram.com/huzayms"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              border border-[#D4AF37]/40
              px-10 py-4
              uppercase
              tracking-[0.28em]
              text-sm
              text-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-[#071225]
              transition-all
              duration-300
              hover:shadow-[0_0_35px_rgba(212,175,55,0.20)]
            "
          >
            <ArrowUpRight size={18} />
            Follow @HUZAYMS
          </a>

        </div>

      </div>
    </section>
  );
}