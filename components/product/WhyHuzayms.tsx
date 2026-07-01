"use client";

import {
  Leaf,
  Sun,
  Clock3,
  Truck,
  Gift,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Premium Oils",
    subtitle: "Finest perfume oils.",
  },
  {
    icon: Sun,
    title: "Indian Weather",
    subtitle: "Built for Indian climate.",
  },
  {
    icon: Clock3,
    title: "Long Lasting",
    subtitle: "8–12 Hours Performance.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    subtitle: "Ships within 24 Hours.",
  },
  {
    icon: Gift,
    title: "Luxury Packaging",
    subtitle: "Elegant Presentation.",
  },
  {
    icon: Sparkles,
    title: "Trusted Reviews",
    subtitle: "500+ Happy Customers.",
  },
];

export default function WhyHuzayms() {
  return (
    <section className="mt-12">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[0.42em] text-[11px] text-[#D4AF37]">
            WHY HUZAYM'S
          </p>

          <h2
            className="
              mt-4
              font-serif
              text-3xl
              md:text-5xl
              leading-tight
              text-white
            "
          >
            Crafted for those who appreciate
            <br />
            lasting impressions.
          </h2>

        </div>

        {/* Features */}

        <div
          className="
            mt-14
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-y-10
            gap-x-8
          "
        >

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="
                  group
                  text-center
                  transition-all
                  duration-300
                "
              >

                <Icon
                  className="
                    w-7
                    h-7
                    mx-auto
                    text-[#D4AF37]
                    stroke-[1.6]
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:text-[#E6C15A]
                  "
                />

                <h3
                  className="
                    mt-4
                    uppercase
                    tracking-[0.24em]
                    text-[12px]
                    font-medium
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#D4AF37]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-[13px]
                    leading-6
                    text-slate-500
                    transition-colors
                    duration-300
                    group-hover:text-slate-400
                  "
                >
                  {feature.subtitle}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}