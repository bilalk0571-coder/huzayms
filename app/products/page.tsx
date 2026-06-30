import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import DiscoveryCampaign from "@/components/product/DiscoveryCampaign";
import { PRODUCTS } from "@/data/products";
import VerifiedReviews from "@/components/product/VerifiedReviews";
import WhyHuzayms from "@/components/product/WhyHuzayms";

export default function ProductsPage() {
  return (
    <Layout>
      <section className="min-h-screen bg-[#020612] pt-32 pb-20 px-6">

        <div className="max-w-7xl mx-auto">

          {/* ================= HERO ================= */}

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.45em] text-[#C5A059] text-[11px] mb-5">
              Signature Collection
            </p>

            <h1
              className="
                font-serif
                text-5xl
                md:text-7xl
                tracking-[0.08em]
                text-white
              "
            >
              Our Fragrances
            </h1>

            <div
              className="
                w-28
                h-px
                mx-auto
                mt-7
                bg-gradient-to-r
                from-transparent
                via-[#D4AF37]
                to-transparent
              "
            />

            <p
              className="
                mt-8
                max-w-3xl
                mx-auto
                text-slate-400
                leading-8
                text-lg
              "
            >
              Discover signature fragrances crafted with premium perfume oils,
              designed to elevate everyday moments with lasting elegance,
              exceptional performance and timeless character.
            </p>

          </div>

          {/* ================= PRODUCTS ================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {PRODUCTS
              .filter((product) => !product.isBundle)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

          </div>

          {/* ================= DISCOVERY CAMPAIGN ================= */}

          <DiscoveryCampaign />
          {/* ================= VERIFIED REVIEWS ================= */}
          <VerifiedReviews />
          {/* ================= VERIFIED REVIEWS ================= */}
          <WhyHuzayms /> 

        </div>

      </section>
    </Layout>
  );
}