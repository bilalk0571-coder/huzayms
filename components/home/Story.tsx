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
              Every fragrance begins with a belief that scent should leave an
              impression long after you've left the room.
            </p>

            <div className="mt-8 space-y-6">

              <p className="text-slate-400 leading-8 text-[15px]">
                HUZAYM'S ELIXIRS was founded on a simple philosophy—luxury should
                be experienced, never reserved. Every fragrance begins with
                carefully selected perfume oils chosen for exceptional richness,
                projection and longevity before being blended with precision into
                timeless compositions.
              </p>

              <p className="text-slate-400 leading-8 text-[15px]">
                Inspired by refined craftsmanship, unforgettable places and
                modern elegance, every bottle reflects our pursuit of quality,
                understated sophistication and lasting performance. We believe a
                great fragrance does more than smell beautiful—it becomes part of
                your presence.
              </p>

              <p className="text-slate-400 leading-8 text-[15px]">
                From deep aquatic freshness to comforting gourmand warmth and
                bold leather accords, every HUZAYM'S creation is designed to
                become a signature—one that lingers in memory long after the
                moment has passed.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}