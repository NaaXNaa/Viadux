"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
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
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const rotateVariants = {
  hidden: { rotate: -5, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "backOut",
    },
  },
};

export default function Component() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                variants={slideInFromLeft}
              >
                PESAN SEKARANG!
              </motion.h1>
              
              <motion.p 
                className="text-gray-300 text-lg lg:text-xl max-w-md"
                variants={itemVariants}
              >
                Viadux juga tersedia di marketplace favorit anda
              </motion.p>

              {/* Marketplace Buttons */}
              <motion.div 
                className="flex space-x-4"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <Link href="https://shopee.co.id/viadux" target="_blank">
                    <motion.div
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg shadow-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variants={rotateVariants}
                    >
                      <Image src="/assets/image/shopee.png" alt="Shopee" width={40} height={40} />
                      <span className="text-sm font-medium text-white">Shopee</span>
                      <ChevronRight className="w-4 h-4 text-white" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Link href="https://tokopedia.com/viadux" target="_blank">
                    <motion.div
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg shadow-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variants={rotateVariants}
                    >
                      <Image src="/assets/image/tokopedia.png" alt="Tokopedia" width={45} height={45} />
                      <span className="text-sm font-medium text-white">Tokopedia</span>
                      <ChevronRight className="w-4 h-4 text-white" />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Perfume Collection */}
          <motion.div 
            className="relative"
            variants={scaleUpVariants}
          >
            <motion.div
              className="relative w-full h-[400px] lg:h-[600px]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/assets/image/viaduxparfumebanner.png"
                alt="Koleksi parfum Viadux dan brand premium lainnya"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.9, 0.6]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
          >
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <h3 className="text-white font-semibold text-lg">Kualitas Premium</h3>
              <p className="text-gray-400 text-sm">Parfum berkualitas tinggi dengan aroma tahan lama</p>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <h3 className="text-white font-semibold text-lg">Pengiriman Cepat</h3>
              <p className="text-gray-400 text-sm">Dikirim langsung dari marketplace terpercaya</p>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <h3 className="text-white font-semibold text-lg">Harga Terjangkau</h3>
              <p className="text-gray-400 text-sm">Dapatkan parfum premium dengan harga terbaik</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}