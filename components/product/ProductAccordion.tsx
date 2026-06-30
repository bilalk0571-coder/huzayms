"use client";

import { useState } from "react";

interface ProductAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function ProductAccordion({
  title,
  children,
  defaultOpen = false,
}: ProductAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="
        border-b
        border-white/10
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          py-6
          text-left
          group
        "
      >
        <span
          className="
            uppercase
            tracking-[0.28em]
            text-[11px]
            text-[#D4AF37]
          "
        >
          {title}
        </span>

        <span
          className={`
            text-white
            text-xl
            transition-transform
            duration-300
            ${open ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ${
            open
              ? "max-h-[1000px] opacity-100 pb-6"
              : "max-h-0 opacity-0"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}