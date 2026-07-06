import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://huzayms.vercel.app"),

  title: {
    default: "HUZAYM'S Elixirs | Luxury Perfumes in India",
    template: "%s | HUZAYM'S Elixirs",
  },

  description:
    "Discover premium luxury perfumes crafted with rich perfume oils, exceptional longevity and timeless elegance. Shop exclusive fragrances from HUZAYM'S Elixirs.",

  keywords: [
    "Luxury perfumes India",
    "Premium perfume oils",
    "Long lasting perfumes",
    "Extrait de Parfum",
    "Eau de Parfum",
    "HUZAYM'S",
    "Luxury fragrance",
    "Boutique perfumes",
    "Mariana Trench perfume",
    "Crimson Leather perfume",
    "Cinnabon perfume",
    "Celestial Tide perfume",
  ],

  authors: [
    {
      name: "HUZAYM'S Elixirs",
    },
  ],

  creator: "HUZAYM'S Elixirs",

  publisher: "HUZAYM'S Elixirs",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "HUZAYM'S Elixirs | Luxury Perfumes",

    description:
      "Luxury handcrafted fragrances inspired by depth, warmth and timeless elegance.",

    url: "https://huzayms.vercel.app",

    siteName: "HUZAYM'S Elixirs",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HUZAYM'S Luxury Perfumes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "HUZAYM'S Elixirs",

    description:
      "Luxury handcrafted fragrances inspired by depth, warmth and timeless elegance.",

    images: ["/images/og-image.jpg"],
  },

  alternates: {
    canonical: "https://huzayms.vercel.app",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: "HUZAYM'S Elixirs",

    url: "https://huzayms.vercel.app",

    logo: "https://huzayms.vercel.app/images/logo1.png",

    description:
      "Luxury boutique perfume house crafting premium Extrait de Parfum and Eau de Parfum fragrances in India.",

    sameAs: [
      "https://www.instagram.com/huzayms",
      "https://wa.me/918928042335",
    ],

    contactPoint: {
      "@type": "ContactPoint",

      telephone: "+91-8928042335",

      contactType: "customer service",

      areaServed: "IN",

      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
        <Analytics />

      </body>
    </html>
  );
}