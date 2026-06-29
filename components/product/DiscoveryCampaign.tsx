import Link from "next/link";

export default function DiscoveryCampaign() {
  return (
    <section className="mt-24">

      <div className="text-center mb-8">

        <p className="uppercase tracking-[0.45em] text-[#C5A059] text-[11px]">
          Discovery Collection
        </p>

        <h2 className="mt-4 font-serif text-3xl md:text-5xl text-white">
          One Collection.
          <br />
          Endless Combinations.
        </h2>

        <Link
          href="/products/build-your-own-discovery-set"
          className="
            inline-flex
            items-center
            mt-6
            text-[#D4AF37]
            uppercase
            tracking-[0.30em]
            text-[11px]
            transition-all
            duration-300
            hover:tracking-[0.38em]
          "
        >
          Explore Collection →
        </Link>

      </div>

      <Link
        href="/products/build-your-own-discovery-set"
        className="
          group
          block
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          hover:border-[#D4AF37]/50
          transition-all
          duration-500
        "
      >

        <img
          src="/images/discovery-banner.jpeg"
          alt="Build Your Own Discovery Set"
          className="
            w-full
            h-auto
            transition-transform
            duration-700
            group-hover:scale-[1.02]
          "
        />

      </Link>

    </section>
  );
}