"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ChevronRight, Star } from "lucide-react";

const showcaseItems = [
  {
    title: "Keanggunan yang tak tergantikan",
    description: "Perpaduan aroma tembakau hangat, rempah maskulin, dan sentuhan amber menghadirkan kesan kuat namun elegan.",
    image: "/assets/image/parfumswap1.png",
  },
  {
    title: "Essensi Kemewahan Modern",
    description: "Harmoni citrus segar dengan kayu berkelas menciptakan karakter yang sophisticated.",
    image: "/assets/image/parfumswap2.png",
  },
  {
    title: "Aura yang Tak Terlupakan",
    description: "Kombinasi lavender yang menenangkan dengan musk yang menggugah, menciptakan parfum signature.",
    image: "/assets/image/parfumswap3.png",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === showcaseItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/assets/image/vaiduxbanner.png"
            alt="Viadux Hero Background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative flex justify-center items-center text-center h-full z-10 px-4">
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 leading-tight text-white">
              Viadux - Redefining Your Essence
            </h1>
            <p className="text-[#CE4312] text-base sm:text-lg md:text-xl mb-8 md:mb-12 font-medium">
              Temukan aroma yang berbicara tanpa kata
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                href="/pages/parfume"
                className="w-full sm:w-auto text-center border-2 border-[#CE4312] bg-[#CE4312] text-black hover:bg-[#131313] hover:text-[#CE4312] px-6 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-sm transition-all duration-300"
              >
                Shop Now
              </Link>
              <button
                onClick={scrollToProducts}
                className="w-full sm:w-auto text-center border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-sm transition-all duration-300"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="lg:max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-4">
              Kebutuhan Esensial untuk Meningkatkan Kepercayaan Dirimu
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl">
              Aroma ini bukan sekadar parfum, ini adalah statement
            </p>
            <div className="flex items-center space-x-2 sm:space-x-4 pt-3 md:pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-300 text-sm sm:text-base">4.8/5 (2,847 reviews)</span>
            </div>
          </div>
          <Link href="/" className="flex text-white self-start lg:self-center group text-sm sm:text-base">
            Lihat semua produk
            <ChevronRight className="ml-1 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="bg-[#131313] flex justify-center rounded-lg p-4 sm:p-6 group">
              <div className="block w-full">
                <div className="aspect-square mb-4 sm:mb-6 relative w-full items-center justify-center rounded-lg overflow-hidden">
                  <Image
                    src={`/assets/image/displayparfum${num}.png`}
                    alt={`Parfum Display ${num}`}
                    quality={100}
                    fill
                    priority
                    className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <Image
                    src={`/assets/image/displayfullparfum${num}.png`}
                    alt={`Parfum Display Hover ${num}`}
                    quality={100}
                    fill
                    priority
                    className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section className="bg-[#0f0f0f] h-[60vh] sm:h-[70vh] md:h-[80vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden relative">
        <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 z-10 relative order-2 md:order-1">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ease-in-out ${
                currentIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: currentIndex === index ? "300ms" : "0ms" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-3 sm:py-4 md:py-5 text-white font-serif">
                {item.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md sm:max-w-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative h-full order-1 md:order-2">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                currentIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <Image
                src={item.image}
                alt={`Parfum ${index + 1}`}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20 order-3">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-white sm:w-6" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent z-0 hidden md:block" />
      </section>

      {/* About Section */}
      <section className="bg-[#1a1a1a] text-white">
        {/* Top notification bar */}
        <div className="bg-[#2a2a2a] py-4 px-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-center">
          <p className="text-sm sm:text-base md:text-lg">
            Bergabung dengan BrotherhoodViadux dan dapatkan potongan 10% untuk produk pertamamu.
          </p>
          <Link href="https://wa.me/+6281244856137" className="bg-[#e84118] text-black hover:bg-black hover:text-[#e84118] px-3 py-1 rounded text-sm sm:text-base font-medium whitespace-nowrap">
            WhatsApp
          </Link>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-16 max-w-5xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            "Kami lebih dari sekadar rutinitasmu. Kami hadir untuk mendukung setiap langkahmu."
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-3xl">
            Bagi kami, parfum bukan sekadar produk. Ini adalah cermin karakter, simbol percaya diri, dan awal dari sebuah
            kesan yang tak terlupakan.
          </p>

          <Link
            href="/pages/about"
            className="border border-white px-6 sm:px-8 py-2 sm:py-3 uppercase font-medium tracking-wider text-sm sm:text-base hover:bg-white hover:text-[#1a1a1a] transition-colors"
          >
            About Us
          </Link>
        </div>
      </section>
    </div>
  );
}