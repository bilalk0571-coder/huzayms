"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronUp, Plus } from "lucide-react";

export default function Footer() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen(open === id ? null : id);
  };

  const Accordion = ({
    id,
    title,
    children,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="border-t border-[#D4AF37]/15">

      <button
        onClick={() => toggle(id)}
        className="
          w-full
          flex
          items-center
          justify-between
          py-7
          group
        "
      >
        <span
          className="
            uppercase
            tracking-[0.32em]
            text-[12px]
            font-light
            text-white/90
            transition-colors
            duration-300
            group-hover:text-[#D4AF37]
          "
        >
          {title}
        </span>

        <Plus
          className={`
            w-5
            h-5
            transition-all
            duration-500
            ease-out
            ${
              open === id
                ? "rotate-45 text-[#D4AF37]"
                : "text-white/80 group-hover:text-[#D4AF37]"
            }
          `}
        />
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ${
            open === id
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className={`
            space-y-4
            pb-8
            text-[15px]
            text-slate-400
            transition-all
            duration-500
            ${
              open === id
                ? "translate-y-0"
                : "-translate-y-2"
            }
          `}
        >
          {children}
        </div>
      </div>

    </div>
  );

  return (
    <footer className="mt-12 bg-[#020612] border-t border-white/5">

      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Brand */}

        <div className="text-center">

          <p className="uppercase tracking-[0.45em] text-[11px] text-[#D4AF37]">
            HUZAYM'S ELIXIRS
          </p>

          <div className="w-12 h-px bg-[#D4AF37]/40 mx-auto mt-5" />

          <h2
            className="
              mt-10
              font-serif
              font-light
              text-5xl
              md:text-7xl
              tracking-[0.06em]
              uppercase
              leading-tight
              text-white
            "
          >
            The House
            <br />
            of HUZAYM'S
          </h2>

        </div>

        {/* Accordion */}

        <div className="mt-24">

          <Accordion id="contact" title="Contact">

            <a
              href="https://wa.me/918928042335"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#D4AF37] transition-colors"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/huzayms"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#D4AF37] transition-colors"
            >
              Instagram
            </a>

            <a
              href="mailto:huzaymselixirs@gmail.com"
              className="block hover:text-[#D4AF37] transition-colors"
            >
              Email
            </a>

          </Accordion>

          <Accordion id="links" title="Quick Links">

            <Link
              href="/products"
              className="block hover:text-[#D4AF37] transition-colors"
            >
              Shop
            </Link>

            <Link
              href="/#collection"
              className="block hover:text-[#D4AF37] transition-colors"
            >
              Collection
            </Link>

            <Link
              href="/#about"
              className="block hover:text-[#D4AF37] transition-colors"
            >
              About
            </Link>

            <Link
              href="/products"
              className="block hover:text-[#D4AF37] transition-colors"
            >
              Best Sellers
            </Link>

          </Accordion>

          <Accordion id="policies" title="Policies">

            <Link href="#" className="block hover:text-[#D4AF37] transition-colors">
              Shipping Policy
            </Link>

            <Link href="#" className="block hover:text-[#D4AF37] transition-colors">
              Returns
            </Link>

            <Link href="#" className="block hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </Link>

            <Link href="#" className="block hover:text-[#D4AF37] transition-colors">
              Terms & Conditions
            </Link>

          </Accordion>

        </div>

        {/* Back To Top */}

        <div className="flex justify-center mt-20">

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              w-24
              h-24
              rounded-full
              border
              border-[#D4AF37]/50
              flex
              items-center
              justify-center
              text-[#D4AF37]
              transition-all
              duration-500
              hover:bg-[#D4AF37]
              hover:text-black
              hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]
            "
          >
            <ChevronUp className="w-8 h-8" />
          </button>

        </div>

        {/* Copyright */}

        <div className="mt-20 pt-8 border-t border-white/5 text-center">

          <p className="text-slate-500 text-sm">
            © 2026 HUZAYM'S ELIXIRS
          </p>

          <p className="mt-2 uppercase tracking-[0.25em] text-[11px] text-slate-600">
            Crafted in India
          </p>

        </div>

      </div>

    </footer>
  );
}