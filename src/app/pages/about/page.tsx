"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const scaleUpVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative h-screen w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background */}
        <motion.div className="absolute inset-0" variants={fadeInVariants}>
          <Image
            src="/assets/image/visimisiviadux.png"
            alt="Viadux Hero Background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        {/* Logo - Responsive Positioning */}
        <motion.div
          className="absolute bottom-8 right md:bottom-8 z-10 w-[300px] h-[150px] md:w-[500px] md:h-[250px] mx-auto md:mx-0 left-0 right-0 md:left-auto md:right-8 text-center md:text-right"
          variants={scaleUpVariants}
        >
          <div className="relative w-full h-full inline-block">
            <Image
              src="/assets/image/viaduxlogoputih.png"
              alt="Viadux Logo"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="relative bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          {/* First Content Block */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20"
            variants={containerVariants}
          >
            {/* Image - Left on desktop, top on mobile */}
            <motion.div
              className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-[500px] order-1 md:order-1"
              variants={slideInFromLeft}
            >
              <Image
                src="/assets/image/viaduxabout2.png"
                alt="Viadux Vision"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </motion.div>

            {/* Text - Right on desktop, bottom on mobile */}
            <motion.div
              className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 order-2 md:order-2"
              variants={slideInFromRight}
            >
              <motion.h2
                className="text-lg sm:text-xl md:text-2xl font-medium text-white"
                variants={itemVariants}
              >
                Apa itu parfum <span className="text-[#e84118]">VIADUX?</span>
              </motion.h2>
              <motion.p
                className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug sm:leading-relaxed"
                variants={itemVariants}
              >
                Menyalakan Kepercayaan Diri, Meninggikan Kesan yang Abadi.
              </motion.p>
              <motion.p
                className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300"
                variants={itemVariants}
              >
                <span className="text-[#e84118]">Viadux</span> dibuat dari bahan
                terbaik dunia—oud asli, vetiver Haiti, dan sentuhan amber yang
                mewah. Setiap tetesnya dirancang untuk mereka yang tak butuh
                pengakuan, karena kehadirannya sudah cukup bicara. Viadux bukan
                untuk semua orang. Hanya untuk mereka yang tahu kelas — dan tidak
                perlu menjelaskannya.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Second Content Block - Reversed on desktop */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20"
            variants={containerVariants}
          >
            {/* Image - Right on desktop, top on mobile */}
            <motion.div
              className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-[500px] order-1 md:order-2"
              variants={slideInFromRight}
            >
              <Image
                src="/assets/image/viaduxabout.png"
                alt="Viadux Vision"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </motion.div>

            {/* Text - Left on desktop, bottom on mobile */}
            <motion.div
              className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 order-2 md:order-1"
              variants={slideInFromLeft}
            >
              <motion.h2
                className="text-lg text-white sm:text-xl md:text-2xl font-medium"
                variants={itemVariants}
              >
                Parfum keunggulan{" "}
                <span className="text-[#e84118]">VIADUX</span>
              </motion.h2>
              <motion.p
                className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug sm:leading-relaxed"
                variants={itemVariants}
              >
                True Brotherhood
              </motion.p>
              <motion.p
                className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300"
                variants={itemVariants}
              >
                True Brotherhood adalah eau de toilette dengan aroma maskulin
                yang kuat dan berkelas, cocok untuk pria yang ingin tampil
                percaya diri dan meninggalkan kesan mendalam. Parfum ini
                menampilkan kehangatan aroma rempah Cinnamon dan Tonka Beans,
                serta paduan kompleks Lavender, Citrus, dan Incense.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Third Content Block */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16"
            variants={containerVariants}
          >
            {/* Image - Left on desktop, top on mobile */}
            <motion.div
              className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-[500px] order-1 md:order-1"
              variants={slideInFromLeft}
            >
              <Image
                src="/assets/image/viaduxcertificate.jpg"
                alt="Viadux Vision"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </motion.div>

            {/* Text - Right on desktop, bottom on mobile */}
            <motion.div
              className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 order-2 md:order-2"
              variants={slideInFromRight}
            >
              <motion.p
                className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug sm:leading-relaxed"
                variants={itemVariants}
              >
                Memiliki sertifikasi dari Prancis
              </motion.p>
              <motion.p
                className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300"
                variants={itemVariants}
              >
                Keaslian dan kualitas adalah prinsip utama kami. Viadux telah
                mengantongi sertifikasi prestisius dari lembaga parfum terkemuka
                di Prancis—negaranya wewangian legendaris. Sertifikat ini bukan
                sekadar pengakuan, tapi bukti bahwa setiap botol Viadux memenuhi
                standar aroma dunia. Karena wangi yang luar biasa, lahir dari
                proses yang tidak biasa.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>


        {/* CTA Banner */}
        <motion.div
          className="bg-[#2a2a2a] py-3 px-4 sm:py-4 sm:px-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-center mt-12 md:mt-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm text-white sm:text-base md:text-lg"
            variants={itemVariants}
          >
            Bergabung dengan BrotherhoodViadux dan dapatkan potongan 10% untuk
            produk pertamamu.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="#"
              className="bg-[#e84118] text-black hover:bg-black hover:text-[#e84118] px-4 py-2 sm:px-6 sm:py-2 rounded text-sm sm:text-base font-medium whitespace-nowrap transition-colors duration-300"
            >
              WhatsApp
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}