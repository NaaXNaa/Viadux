"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/image/visimisiviadux.png"
            alt="Viadux Hero Background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Logo - Responsive Positioning */}
        <div className="absolute bottom-8 right md:bottom-8 z-10 w-[300px] h-[150px] md:w-[500px] md:h-[250px] mx-auto md:mx-0 left-0 right-0 md:left-auto md:right-8 text-center md:text-right">
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
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative ">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          {/* First Content Block */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
            {/* Image - Left on desktop, top on mobile */}
            <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-[500px] order-1 md:order-1">
              <Image
                src="/assets/image/viaduxabout2.png"
                alt="Viadux Vision"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>

            {/* Text - Right on desktop, bottom on mobile */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 order-2 md:order-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
                Apa itu parfum <span className="text-[#e84118]">VIADUX?</span>
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug sm:leading-relaxed">
                Menyalakan Kepercayaan Diri, Meninggikan Kesan yang Abadi.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                <span className="text-[#e84118]">Viadux</span> dibuat dari bahan terbaik dunia—oud asli, vetiver Haiti, dan sentuhan amber yang mewah. Setiap tetesnya dirancang untuk mereka yang tak butuh pengakuan, karena kehadirannya sudah cukup bicara.
                Viadux bukan untuk semua orang. Hanya untuk mereka yang tahu kelas — dan tidak perlu menjelaskannya.
              </p>
            </div>
          </div>

          {/* Second Content Block - Reversed on desktop */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
            {/* Image - Right on desktop, top on mobile */}
            <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-[500px] order-1 md:order-2">
              <Image
                src="/assets/image/viaduxabout.png"
                alt="Viadux Vision"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>

            {/* Text - Left on desktop, bottom on mobile */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 order-2 md:order-1">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
                Parfum keunggulan <span className="text-[#e84118]">VIADUX</span>
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug sm:leading-relaxed">
                True Brotherhood
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                True Brotherhood adalah eau de toilette dengan aroma maskulin yang kuat dan berkelas, cocok untuk pria yang ingin tampil percaya diri dan meninggalkan kesan mendalam. Parfum ini menampilkan kehangatan aroma rempah Cinnamon dan Tonka Beans, serta paduan kompleks Lavender, Citrus, dan Incense. 
              </p>
            </div>
          </div>

          {/* Third Content Block */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16">
            {/* Image - Left on desktop, top on mobile */}
            <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-[500px] order-1 md:order-1">
              <Image
                src="/assets/image/viaduxcertificate.jpg"
                alt="Viadux Vision"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>

            {/* Text - Right on desktop, bottom on mobile */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 order-2 md:order-2">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug sm:leading-relaxed">
                Memiliki sertifikasi dari Prancis
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                Keaslian dan kualitas adalah prinsip utama kami. Viadux telah mengantongi sertifikasi prestisius dari lembaga parfum terkemuka di Prancis—negaranya wewangian legendaris. Sertifikat ini bukan sekadar pengakuan, tapi bukti bahwa setiap botol Viadux memenuhi standar aroma dunia.
                Karena wangi yang luar biasa, lahir dari proses yang tidak biasa.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#2a2a2a] py-3 px-4 sm:py-4 sm:px-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-center mt-12 md:mt-16">
          <p className="text-sm sm:text-base md:text-lg">
            Bergabung dengan BrotherhoodViadux dan dapatkan potongan 10% untuk produk pertamamu.
          </p>
          <Link 
            href="#" 
            className="bg-[#e84118] text-black hover:bg-black hover:text-[#e84118] px-4 py-2 sm:px-6 sm:py-2 rounded text-sm sm:text-base font-medium whitespace-nowrap transition-colors duration-300"
          >
            WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
}