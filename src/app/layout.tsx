import type { Metadata } from "next";
import Header from "@/components/header";
import "../styles/globals.css";
import Link from "next/link";
import React from "react";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "VIADUX | Premium Perfume",
  description: "Discover our exquisite collection of premium perfumes crafted with the finest ingredients",
  keywords: ["perfume", "luxury fragrance", "premium scent", "VIADUX"],
  icons:["/assets/image/viaduxlogo.png"],
  openGraph: {
    title: "VIADUX | Premium Perfume",
    description: "Discover our exquisite collection of premium perfumes",
    url: "https://viadux.com",
    siteName: "VIADUX",
    images: [
      {
        url: "/image/viadux-og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIADUX | Premium Perfume",
    description: "Discover our exquisite collection of premium perfumes",
    images: ["/image/viadux-og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-white font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}