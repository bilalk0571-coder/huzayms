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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

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
                  href="mailto:huzaymselixirs@gmail.com"
                  className="hover:text-white"
                >
                  Email
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-500 text-sm">
          © 2026 HUZAYM'S • Crafted in India
        </div>
      </div>
    </footer>
  );
}