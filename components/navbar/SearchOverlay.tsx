"use client";

import { useMemo, useState } from "react";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({
  open,
  onClose,
}: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    return PRODUCTS.filter((product) => {
      const searchable = [
        product.name,
        product.tagline,
        product.description,
        product.type,
        product.slug,
        ...product.notes.top,
        ...product.notes.heart,
        ...product.notes.base,
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(query.toLowerCase());
    });
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-start justify-center pt-24 px-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-3xl bg-[#081326] border border-[#D4AF37]/20 p-6"
      >
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search fragrances..."
          className="w-full bg-transparent outline-none text-white text-2xl placeholder:text-slate-500 pb-4 border-b border-white/10"
        />

        <div className="mt-6 space-y-3 max-h-[450px] overflow-y-auto">

          {query === "" && (
            <p className="text-slate-500">
              Try searching:
              <span className="text-[#D4AF37]">
                {" "}
                Mariana, Vanilla, Leather, Fresh...
              </span>
            </p>
          )}

          {query !== "" && results.length === 0 && (
            <p className="text-slate-400">
              No fragrance found.
            </p>
          )}

          {results.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              onClick={onClose}
              className="flex items-center gap-4 rounded-xl p-3 hover:bg-white/5 transition"
            >
              <img
                src={product.mainImage}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div>
                <h3 className="text-white">
                  {product.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {product.tagline}
                </p>

                <p className="text-[#D4AF37] mt-1">
                  ₹{product.price}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}