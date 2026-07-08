"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";

import AnnouncementBar from "./AnnouncementBar";
import Drawer from "./Drawer";
import SearchOverlay from "./SearchOverlay";

import { useCart } from "@/hooks/useCart";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { totalItems } = useCart();

  const [showNavbar, setShowNavbar] = useState(true);
  const [forceShow, setForceShow] = useState(false);
  const [animateBadge, setAnimateBadge] = useState(false);

  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const badgeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // -----------------------------
  // Hide / Show Navbar on Scroll
  // -----------------------------
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 60) {
        setShowNavbar(true);
      } else if (current > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // -----------------------------
  // Listen for Add To Cart Event
  // -----------------------------
  useEffect(() => {
    const handleCartAdded = () => {
      setForceShow(true);

      setAnimateBadge(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (badgeTimeoutRef.current) {
        clearTimeout(badgeTimeoutRef.current);
      }

      badgeTimeoutRef.current = setTimeout(() => {
        setAnimateBadge(false);
      }, 300);

      timeoutRef.current = setTimeout(() => {
        setForceShow(false);
      }, 2000);
    };

    window.addEventListener("cart:added", handleCartAdded);

    return () => {
      window.removeEventListener(
        "cart:added",
        handleCartAdded
      );

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (badgeTimeoutRef.current) {
        clearTimeout(badgeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <AnnouncementBar show={showNavbar || forceShow} />

      <nav
        className={`fixed left-1/2 top-10 md:top-11 -translate-x-1/2 z-60
        w-[90%] max-w-[1080px]
        transition-transform duration-300
        ${
          showNavbar || forceShow
            ? "translate-y-0 -translate-x-1/2"
            : "-translate-y-32 -translate-x-1/2"
        }`}
      >
        <div
          className="
          h-[54px] md:h-[58px]
          rounded-[14px]
          border border-[#D4AF37]/15
          bg-[#071225]/85
          backdrop-blur-2xl
          shadow-[0_8px_30px_rgba(0,0,0,0.28)]
          px-4 md:px-6
          flex items-center justify-between
        "
        >
          {/* LEFT */}
          <button
            onClick={() => setOpen(true)}
            className="
            w-8 h-8
            md:w-9 md:h-9
            rounded-xl
            border border-white/10
            hover:border-[#D4AF37]
            transition
            flex items-center justify-center
            text-white
            hover:text-[#D4AF37]
          "
          >
            <Menu size={16} strokeWidth={2} />
          </button>

          {/* CENTER */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
          >
            <img
              src="/images/logo1.png"
              alt="HUZAYM'S"
              className="w-7 md:w-8 h-auto"
            />

            <span
              className="
              font-serif
              uppercase
              text-[15px]
              md:text-[20px]
              font-light
              tracking-[0.22em]
              bg-gradient-to-r
              from-[#BF953F]
              via-[#E6C97A]
              to-[#FCF6BA]
              bg-clip-text
              text-transparent
              whitespace-nowrap
            "
            >
              HUZAYM'S
            </span>
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="
                w-8 h-8
                md:w-9 md:h-9
                rounded-xl
                border border-[#D4AF37]/10
                hover:border-[#D4AF37]/40
                hover:bg-white/[0.03]
                transition
                flex items-center justify-center
                text-white
                hover:text-[#D4AF37]
              "
            >
              <Search size={16} strokeWidth={2} />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="
                relative
                w-8 h-8
                md:w-9 md:h-9
                rounded-xl
                border border-[#D4AF37]/10
                hover:border-[#D4AF37]/40
                hover:bg-white/[0.03]
                transition
                flex items-center justify-center
                text-white
                hover:text-[#D4AF37]
              "
            >
              <ShoppingBag size={16} strokeWidth={2} />

              {totalItems > 0 && (
                <span
                  className={`
                    absolute
                    -top-1
                    -right-1
                    min-w-[18px]
                    h-[18px]
                    px-1
                    rounded-full
                    bg-[#D4AF37]
                    text-black
                    text-[10px]
                    font-bold
                    flex
                    items-center
                    justify-center
                    leading-none
                    transition-transform
                    duration-300
                    ${
                      animateBadge
                        ? "scale-125"
                        : "scale-100"
                    }
                  `}
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      />

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}