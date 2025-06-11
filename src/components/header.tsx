"use client";

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#121212] ">
      <div className=" px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="w-40 md:w-60">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image 
              src="/assets/image/viaduxlogo.png" 
              alt="Viadux Logo"
              width={240}
              height={60}
              className="w-full h-auto"
              priority
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-white text-sm lg:text-lg font-normal">
          <Link className="hover:underline transition duration-200" href="/pages/about">
            ABOUT US
          </Link>
          <Link className="hover:underline transition duration-200" href="/pages/parfume">
            PERFUME
          </Link>
          <Link className="hover:underline transition duration-200" href="#contact">
            CONTACT
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#121212] px-4 py-2 ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <Link 
          className="block py-3 text-white hover:underline border-b border-gray-700" 
          href="/pages/about"
          onClick={() => setIsMenuOpen(false)}
        >
          ABOUT US
        </Link>
        <Link 
          className="block py-3 text-white hover:underline border-b border-gray-700" 
          href="/pages/parfume"
          onClick={() => setIsMenuOpen(false)}
        >
          PERFUME
        </Link>
        <Link 
          className="block py-3 text-white hover:underline" 
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT
        </Link>
      </div>
    </header>
  );
}