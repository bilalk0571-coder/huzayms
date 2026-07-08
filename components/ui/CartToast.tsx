"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { getProductBySlug, PRODUCTS, formatPrice } from "@/data/products";

interface ToastProduct {
  name: string;
  image: string;
  price: number;
}

export default function CartToast() {
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState<ToastProduct | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleCartAdded = (
      event: Event
    ) => {
      const customEvent = event as CustomEvent<{
        productId: string;
      }>;

      const found = PRODUCTS.find(
        (p) => p.id === customEvent.detail.productId
      );

      if (!found) return;

      setProduct({
        name: found.name,
        image: found.mainImage,
        price: found.price,
      });

      setVisible(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    };

    window.addEventListener(
      "cart:added",
      handleCartAdded
    );

    return () => {
      window.removeEventListener(
        "cart:added",
        handleCartAdded
      );

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!product) return null;

  return (
    <div
      className={`
        fixed
        bottom-5
        left-1/2
        lg:left-auto
        lg:right-6
        -translate-x-1/2
        lg:translate-x-0
        z-[100]
        transition-all
        duration-300
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      <div
        className="
          w-[340px]
          rounded-2xl
          border
          border-[#D4AF37]/20
          bg-[#071225]/95
          backdrop-blur-xl
          shadow-2xl
          p-4
        "
      >
        <div className="flex items-start gap-4">
          <Image
            src={product.image}
            alt={product.name}
            width={60}
            height={60}
            className="rounded-xl object-cover"
          />

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-[#D4AF37]"
              />

              <p className="text-sm font-semibold text-white">
                Added to your collection
              </p>
            </div>

            <p className="mt-2 text-white font-medium">
              {product.name}
            </p>

            <p className="text-sm text-slate-400">
              {formatPrice(product.price)}
            </p>

            <Link
              href="/cart"
              className="
                inline-flex
                mt-3
                text-[#D4AF37]
                text-sm
                font-medium
                hover:underline
              "
            >
              View Cart →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}