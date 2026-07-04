"use client";

import { useState, useEffect, useRef } from "react";
import { HERO_SLIDES } from "@/data/products";
import InstagramGallery from "@/components/home/InstagramGallery";
import Layout from "@/components/layout/Layout";
import HeroCampaign from "@/components/home/HeroCampaign";
import Collection from "@/components/home/Collection";
import SignatureFinder from "@/components/home/SignatureFinder";
import Reviews from "@/components/home/Reviews";
import Story from "@/components/home/Story";

import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroScrollRef = useRef<HTMLDivElement>(null);
  const isUserInteracting = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isUserInteracting.current && heroScrollRef.current) {
        const nextIndex = (currentSlide + 1) % HERO_SLIDES.length;

        heroScrollRef.current.scrollTo({
          left: heroScrollRef.current.clientWidth * nextIndex,
          behavior: "smooth",
        });

        setCurrentSlide(nextIndex);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleHeroScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const slideWidth = e.currentTarget.clientWidth;

    if (slideWidth > 0) {
      const nextCalculatedIndex = Math.round(
        e.currentTarget.scrollLeft / slideWidth
      );

      if (
        nextCalculatedIndex !== currentSlide &&
        nextCalculatedIndex < HERO_SLIDES.length
      ) {
        setCurrentSlide(nextCalculatedIndex);
      }
    }
  };

  const handleIndicatorClick = (index: number) => {
    if (heroScrollRef.current) {
      isUserInteracting.current = true;

      heroScrollRef.current.scrollTo({
        left: heroScrollRef.current.clientWidth * index,
        behavior: "smooth",
      });

      setCurrentSlide(index);

      setTimeout(() => {
        isUserInteracting.current = false;
      }, 1000);
    }
  };

  return (
    <Layout>
      <HeroCampaign />

     <FadeIn>
  <Collection />
</FadeIn>

<FadeIn>
  <SignatureFinder />
</FadeIn>

<FadeIn>
  <Reviews />
</FadeIn>

<FadeIn>
<InstagramGallery />
</FadeIn>

<FadeIn>
  <Story />
</FadeIn>
    </Layout>
  );
}