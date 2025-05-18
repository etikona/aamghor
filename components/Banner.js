// components/hero-section.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import banner from "../public/assets/banner.png";
export default function HeroSection() {
  return (
    <section className="w-full   py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#f59e0b] mb-4">
            Welcome to AAMGHOR
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Your Home of Premium Mangoes
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            From orchard to doorstep — experience the sweetness of handpicked,
            farm-fresh mangoes from across Bangladesh. Discover unique varieties
            like Alphonso, Himsagar, Langra, and more.
          </p>
          <Button
            asChild
            className="text-white bg-[#f59e0b] hover:bg-[#d97706]"
          >
            <a href="/products">Shop Now</a>
          </Button>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative w-full h-[300px] md:h-[400px]">
          <Image
            src={banner} // Replace with your actual image path
            alt="Varieties of mangoes"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
