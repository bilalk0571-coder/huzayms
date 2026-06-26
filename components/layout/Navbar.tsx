import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020612]/90 backdrop-blur-xl border-b border-white/[0.02] px-4 sm:px-6 py-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 min-w-0 group"
        >
          <img
            src="/images/logo1.png"
            alt="Huzaym's Elixirs Crest"
            className="w-5 h-auto sm:w-6 object-contain brightness-110 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
          />

          <span className="font-serif tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs uppercase font-semibold bg-gradient-to-r from-[#C5A059] to-[#FDF6C7] bg-clip-text text-transparent truncate">
            HUZAYM'S ELIXIRS
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex gap-4 sm:gap-8 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] font-medium text-slate-400 flex-shrink-0">

          <Link
            href="/"
            className="hover:text-[#D4AF37] transition-colors uppercase"
          >
            HOME
          </Link>

          <Link
            href="/#collection"
            className="hover:text-[#D4AF37] transition-colors uppercase"
          >
            COLLECTION
          </Link>

          <Link
            href="/#about"
            className="hover:text-[#D4AF37] transition-colors uppercase"
          >
            STORY
          </Link>

        </div>
      </div>
    </nav>
  );
}