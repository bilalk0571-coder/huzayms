"use client";

interface AnnouncementBarProps {
  show: boolean;
}

export default function AnnouncementBar({
  show,
}: AnnouncementBarProps) {
  return (
    <div
  className={`fixed top-0 left-0 right-0 z-[50]
  h-8 md:h-9
  bg-black
  border-b border-[#D4AF37]/10
  transition-transform duration-300 ease-out
  ${
    show
      ? "translate-y-0"
      : "-translate-y-full"
  }`}
>
      <div className="h-full flex items-center justify-center px-4">
        <p className="text-[9px] md:text-[11px] uppercase tracking-[0.28em] md:tracking-[0.32em] text-[#D4AF37] font-medium text-center">
          PREMIUM OILS • NO CHEAP SYNTHETICS
        </p>
      </div>
    </div>
  );
}