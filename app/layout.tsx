import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
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

  title: "Huzaym's Elixirs | Luxury Perfume Boutique",

  description:
    "Experience premium hand-crafted fragrances with extraordinary sillage, projection, and depth.",

  openGraph: {
    title: "Huzaym's Elixirs",
    description:
      "Luxury handcrafted fragrances inspired by depth, warmth and timeless elegance.",
    url: "https://huzayms.vercel.app",
    siteName: "Huzaym's Elixirs",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Huzaym's Elixirs",
    description:
      "Luxury handcrafted fragrances inspired by depth, warmth and timeless elegance.",
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
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}