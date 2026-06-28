"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import SearchOverlay from "@/components/navbar/SearchOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
const [showNavbar, setShowNavbar] = useState(true);
const lastScrollY = useRef(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Always show near the top
    if (currentScrollY < 60) {
      setShowNavbar(true);
    }
    // Hide while scrolling down
    else if (currentScrollY > lastScrollY.current) {
      setShowNavbar(false);
    }
    // Show while scrolling up
    else {
      setShowNavbar(true);
    }

    lastScrollY.current = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
      {/* Floating Navbar */}
      <nav
  className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl transition-transform duration-300 ease-out ${
    showNavbar
      ? "translate-y-0 -translate-x-1/2"
      : "-translate-y-32 -translate-x-1/2"
  }`}
>
        <div className="h-20 rounded-full border border-[#D4AF37]/20 bg-[#071225]/80 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.55)] px-5 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-4 group"
          >
            <img
              src="/images/logo1.png"
              alt="Huzaym's Elixirs"
              className="w-8 min-[390px]:w-9 h-auto transition duration-300 group-hover:scale-105"
            />

            <span
  className="
font-serif
text-[11px]
min-[390px]:text-sm
md:text-2xl
tracking-[0.16em]
md:tracking-[0.22em]
uppercase
bg-gradient-to-r
from-[#BF953F]
via-[#E6C97A]
to-[#FCF6BA]
bg-clip-text
text-transparent
whitespace-nowrap
hidden
min-[390px]:block
"
>
  HUZAYM'S ELIXIRS
</span>
          </Link>

         <div className="flex items-center gap-3">

  {/* Search */}
  <button
  onClick={() => setSearchOpen(true)}
  className="
w-11
h-11
md:w-12
md:h-12
rounded-full
border
border-white/10
hover:border-[#D4AF37]
transition-all
duration-300
flex
items-center
justify-center
hover:text-[#D4AF37]
text-white
"
>
    <Search size={18} strokeWidth={1.8} />
  </button>

  {/* Hamburger */}
  <button
    onClick={() => setOpen(!open)}
    className="
relative
w-11
h-11
md:w-12
md:h-12
rounded-full
border
border-white/10
hover:border-[#D4AF37]
transition-all
duration-300
flex
items-center
justify-center
"
  >
    <div className="space-y-1.5">
      <span
        className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
          open ? "rotate-45 translate-y-[8px]" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
          open ? "-rotate-45 -translate-y-[8px]" : ""
        }`}
      />
    </div>
  </button>

</div>
        </div>
      </nav>

      {/* Drawer */}
      <div
  className={`fixed inset-0 z-40 flex justify-end transition-all duration-500 ${
    open
      ? "bg-black/60 backdrop-blur-md opacity-100 pointer-events-auto"
      : "bg-black/0 opacity-0 pointer-events-none"
  }`}
  onClick={() => setOpen(false)}
>
          <div
  onClick={(e) => e.stopPropagation()}
  className={`w-[360px] max-w-[90%] h-full
  bg-gradient-to-b
  from-[#081326]
  via-[#050d1c]
  to-[#020612]
  border-l border-[#D4AF37]/20
  p-12 pt-28
  transition-transform duration-500 ease-out
  ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>

            <div className="space-y-8">

              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="
group
block
w-fit
text-3xl
md:text-4xl
font-serif
font-light
tracking-[0.08em]
leading-none
text-white
transition-all
duration-300
hover:text-[#D4AF37]
hover:translate-x-2
"
              >
                HOME
              </Link>

              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="
group
block
w-fit
text-3xl
md:text-4xl
font-serif
font-light
tracking-[0.08em]
leading-none
text-white
transition-all
duration-300
hover:text-[#D4AF37]
hover:translate-x-2
"
              >
                PRODUCTS
              </Link>

              <Link
                href="/#about"
                onClick={() => setOpen(false)}
                className="
group
block
w-fit
text-3xl
md:text-4xl
font-serif
font-light
tracking-[0.08em]
leading-none
text-white
transition-all
duration-300
hover:text-[#D4AF37]
hover:translate-x-2
"
              >
                STORY
              </Link>

            </div>

            <div className="mt-20 border-t border-white/10 pt-10 space-y-5">

              <a
                href="https://instagram.com"
                className="block text-sm tracking-[0.3em] uppercase text-slate-400 hover:text-[#D4AF37]"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/918928042335"
                className="block text-sm tracking-[0.3em] uppercase text-slate-400 hover:text-[#D4AF37]"
              >
                WhatsApp
              </a>

            </div>
          </div>
        </div>
      <SearchOverlay
  open={searchOpen}
  onClose={() => setSearchOpen(false)}
/>
    </>
  );
}