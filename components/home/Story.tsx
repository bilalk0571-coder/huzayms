"use client";

export default function Story() {
  return (
    <section
      id="about"
      className="relative bg-[#020612] pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* IMAGE */}

          <div className="relative overflow-hidden rounded-[30px] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

            <img
              src="/images/story/story.jpeg"
              alt="HUZAYM'S ELIXIRS Story"
              className="
                luxury-float
                w-full
                h-[380px]
                md:h-[520px]
                lg:h-[620px]
                object-cover
              "
            />

            {/* Premium dark vignette */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

            {/* Mobile fade */}

            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#020612]/70 to-transparent lg:hidden pointer-events-none" />

          </div>

          {/* CONTENT */}

          <div className="max-w-xl">

            <p className="uppercase tracking-[0.42em] text-[11px] text-[#D4AF37] mb-4">
              THE HOUSE OF HUZAYM'S
            </p>

            <h2
              className="
                font-serif
                uppercase
                tracking-[0.10em]
                text-4xl
                md:text-6xl
                bg-gradient-to-r
                from-[#BF953F]
                via-[#E6C97A]
                to-[#FCF6BA]
                bg-clip-text
                text-transparent
              "
            >
              OUR STORY
            </h2>

            <div className="mt-6 w-40 h-px bg-[#D4AF37]/40" />

            <p className="mt-10 text-xl md:text-3xl leading-relaxed font-light text-white">
              Huzaym’s wasn’t built in a corporate boardroom. It started with two best friends discussing colognes at 2 AM, driven by a simple question: why should you ever choose between elegance and endurance?
            </p>

            <div className="mt-8 space-y-6">

              <p className="text-slate-400 leading-8 text-[15px]">
We noticed a frustrating pattern in the industry. Most perfumes either smell masterfully composed but vanish within minutes, or they last all day but smell cheap and synthetic. We believed you deserved both.              </p>

              <p className="text-slate-400 leading-8 text-[15px]">
This realization sparked months of obsession—sourcing premium materials and rejecting over 20 formulations until we perfected four high-concentration signature fragrances engineered to hit hard, project beautifully, and command compliments. Your fragrance shouldn’t just be a luxury—it should work just as hard as you do.              
</p>
              

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}