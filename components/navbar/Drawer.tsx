"use client";

import Link from "next/link";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function Drawer({
  open,
  onClose,
}: DrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-100 transition-all duration-300 ${
        open
          ? "bg-black/60 backdrop-blur-sm opacity-100 pointer-events-auto"
          : "bg-black/0 opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`
          absolute left-0 top-0
          h-full
          w-[300px]
          max-w-[82%]
          bg-[#071225]
          border-r border-[#D4AF37]/15
          transition-transform duration-300
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="px-8 py-12 flex flex-col h-full">

          {/* Logo */}

          <div className="mb-12">

            <p className="text-[10px] uppercase tracking-[0.45em] text-[#D4AF37]">
              HUZAYM'S
            </p>

          </div>

          {/* Links */}

          <nav className="space-y-4 mb-8">

            <Link
              href="/"
              onClick={onClose}
              className="block text-lg uppercase tracking-[0.22em] text-white hover:text-[#D4AF37] transition"
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={onClose}
              className="block text-lg uppercase tracking-[0.22em] text-white hover:text-[#D4AF37] transition"
            >
              Products
            </Link>

            <Link
              href="/#about"
              onClick={onClose}
              className="block text-lg uppercase tracking-[0.22em] text-white hover:text-[#D4AF37] transition"
            >
              Story
            </Link>

          </nav>

          <div className="border-t border-white/10 pt-6 space-y-3">

            <a
              href="https://instagram.com/huzayms"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[11px] uppercase tracking-[0.3em] text-slate-400 hover:text-[#D4AF37] transition"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/918928042335"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[11px] uppercase tracking-[0.3em] text-slate-400 hover:text-[#D4AF37] transition"
            >
              WhatsApp
            </a>

          </div>

        </div>
      </aside>
    </div>
  );
}