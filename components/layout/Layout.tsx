import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-[#020612] text-slate-100 min-h-screen font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}