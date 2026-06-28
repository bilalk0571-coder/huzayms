import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#020612]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-serif text-white mb-4">
            HUZAYM'S
          </h2>

          <p className="text-slate-400 max-w-md leading-relaxed">
            Crafting boutique fragrances inspired by depth,
            warmth and timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          <div>
            <h3 className="text-[#D4AF37] text-sm uppercase tracking-wider mb-4">
              Explore
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/#collection" className="hover:text-white">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/#collection" className="hover:text-white">
                  Collection
                </Link>
              </li>

              <li>
                <Link href="/#about" className="hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#D4AF37] text-sm uppercase tracking-wider mb-4">
              Customer Care
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#D4AF37] text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a
                  href="https://wa.me/918928042335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/huzayms?igsh=MWh0dHhkbW93ZHliaw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              </li>

              <li>
  <a
    href="mailto:huzaymselixirs@gmail.com?subject=Inquiry%20from%20HUZAYM'S%20Website"
    className="hover:text-[#D4AF37] transition-colors duration-300 break-all"
  >
    Email
  </a>
</li>

            </ul>
          </div>
<div className="md:col-span-2">
  <div
  className="
rounded-3xl
border
border-[#D4AF37]/20
bg-[#071225]
p-8
transition-all
duration-500
hover:border-[#D4AF37]/40
hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)]
"
>

    <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-3">
      Exclusive Access
    </p>

    <h3 className="font-serif text-3xl text-white mb-4">
      Join the House of HUZAYM'S
    </h3>

    <p className="text-slate-400 leading-relaxed mb-8">
      Be the first to experience new creations, exclusive launches,
      and private offers from the House of HUZAYM'S.
    </p>

    <div className="space-y-4">

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded-xl border border-white/10 bg-[#020612] px-5 py-4 text-white placeholder:text-slate-500 focus:border-[#D4AF37]
focus:ring-2
focus:ring-[#D4AF37]/20 focus:outline-none transition"
      />

      <button
        className="
        w-full
        rounded-xl
        bg-gradient-to-r
        from-[#BF953F]
        via-[#E6C97A]
        to-[#FCF6BA]
        py-4
        text-black
        font-semibold
        uppercase
        tracking-[0.18em]
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
        "
      >
        Become a Member →
      </button>

    </div>

  </div>
</div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-500 text-sm">
          © 2026 HUZAYM'S • Crafted in India
        </div>
      </div>
    </footer>
  );
}