"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const slideInVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleUpVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

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
      <motion.section 
        id="home" 
        className="relative h-screen"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="absolute inset-0"
          variants={fadeInVariants}
        >
          <Image
            src="/assets/image/vaiduxbanner.png"
            alt="Viadux Hero Background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
        <motion.div 
          className="relative flex justify-center items-center text-center h-full z-10 px-4"
          variants={containerVariants}
        >
          <div className="w-full max-w-4xl">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 leading-tight text-white"
              variants={itemVariants}
            >
              Viadux - Redefining Your Essence
            </motion.h1>
            <motion.p 
              className="text-[#CE4312] text-base sm:text-lg md:text-xl mb-8 md:mb-12 font-medium"
              variants={itemVariants}
            >
              Temukan aroma yang berbicara tanpa kata
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <Link
                href="/pages/parfume"
                className="w-full sm:w-auto text-center border-2 border-[#CE4312] bg-[#CE4312] text-black hover:bg-[#131313] hover:text-[#CE4312] px-6 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-sm transition-all duration-300"
              >
                Shop Now
              </Link>
              <motion.button
                onClick={scrollToProducts}
                className="w-full sm:w-auto text-center border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-sm transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Product Section */}
      <motion.section 
        id="products" 
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8 mb-8 md:mb-12"
          variants={containerVariants}
        >
          <motion.div className="lg:max-w-2xl" variants={slideInVariants}>
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
          </motion.div>
          <motion.div 
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/pages/parfume" className="flex text-white self-start lg:self-center group text-sm sm:text-base">
              Lihat semua produk
              <ChevronRight className="ml-1 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
        >
          {[1, 2, 3, 4].map((num, index) => (
            <motion.div 
              key={num} 
              className="bg-[#131313] flex justify-center rounded-lg p-4 sm:p-6 group"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              custom={index}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Showcase Section */}
      <section className="bg-[#0f0f0f] h-[60vh] sm:h-[70vh] md:h-[80vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden relative">
        <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 z-10 relative order-2 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-3 sm:py-4 md:py-5 text-white font-serif">
                {showcaseItems[currentIndex].title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md sm:max-w-lg leading-relaxed">
                {showcaseItems[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative h-full order-1 md:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={showcaseItems[currentIndex].image}
                alt={`Parfum ${currentIndex + 1}`}
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20 order-3">
          {showcaseItems.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              animate={{
                width: currentIndex === index ? 24 : 12,
                backgroundColor: currentIndex === index ? "#ffffff" : "#6b7280"
              }}
              transition={{ duration: 0.3, type: "spring" }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent z-0 hidden md:block" />
      </section>

      {/* About Section */}
      <motion.section 
        className="bg-[#1a1a1a] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Top notification bar */}
        <motion.div 
          className="bg-[#2a2a2a] py-4 px-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-center"
          variants={slideInVariants}
        >
          <p className="text-sm sm:text-base md:text-lg">
            Bergabung dengan BrotherhoodViadux dan dapatkan potongan 10% untuk produk pertamamu.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              href="https://wa.me/+6281244856137" 
              className="bg-[#e84118] text-black hover:bg-black hover:text-[#e84118] px-3 py-1 rounded text-sm sm:text-base font-medium whitespace-nowrap"
            >
              WhatsApp
            </Link>
          </motion.div>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-16 max-w-5xl mx-auto">
          <motion.h1 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
            variants={itemVariants}
          >
            "Kami lebih dari sekadar rutinitasmu. Kami hadir untuk mendukung setiap langkahmu."
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-3xl"
            variants={itemVariants}
          >
            Bagi kami, parfum bukan sekadar produk. Ini adalah cermin karakter, simbol percaya diri, dan awal dari sebuah
            kesan yang tak terlupakan.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/pages/about"
              className="border border-white px-6 sm:px-8 py-2 sm:py-3 uppercase font-medium tracking-wider text-sm sm:text-base hover:bg-white hover:text-[#1a1a1a] transition-colors"
            >
              About Us
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}