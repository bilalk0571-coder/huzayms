"use client";

import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">

     {/* Main Image */}
<div className="overflow-hidden rounded-2xl border border-white/5 bg-[#030a1c] max-w-md mx-auto">
  <img
    src={images[selectedImage]}
    alt={productName}
    className="w-full aspect-[4/5] object-cover"
  />
</div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 lg:grid-cols-5 gap-2 lg:gap-2.5 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedImage(index)}
              className={`overflow-hidden rounded-lg border transition-all ${
                selectedImage === index
                  ? "border-[#D4AF37]"
                  : "border-gray-800 hover:border-gray-600"
              }`}
            >
              <img
                src={image}
                alt={`${productName} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}