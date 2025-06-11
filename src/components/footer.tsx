import Image from "next/image";
import { Mail, Phone, Instagram, Facebook, MapPin, Clock, HelpCircle, Home, Users, ShoppingBasket, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#141414] text-white pt-10 pb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Image 
                src="/assets/image/viaduxlogo.png" 
                alt="Viadux Logo"
                width={180}
                height={45}
                className="w-36 sm:w-44"
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus repellat numquam tenetur reiciendis quo incidunt similique odit quis aspernatur?
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href="#" className="bg-[#e84118] p-2 rounded-full hover:bg-black hover:text-[#e84118] transition-colors duration-300">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="bg-[#e84118] p-2 rounded-full hover:bg-black hover:text-[#e84118] transition-colors duration-300">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="bg-[#e84118] p-2 rounded-full hover:bg-black hover:text-[#e84118] transition-colors duration-300">
                <Globe size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#e84118] text-center sm:text-left">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-[#e84118] transition-colors duration-300 justify-center sm:justify-start">
                  <Home size={16} className="text-[#e84118] sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Home</span>
                </a>
              </li>
              <li>
                <a href="/pages/about" className="flex items-center gap-3 text-gray-300 hover:text-[#e84118] transition-colors duration-300 justify-center sm:justify-start">
                  <Users size={16} className="text-[#e84118] sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">About Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-[#e84118] transition-colors duration-300 justify-center sm:justify-start">
                  <ShoppingBasket size={16} className="text-[#e84118] sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Parfume</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#e84118] text-center sm:text-left">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 justify-center sm:justify-start">
                <Mail className="text-[#e84118] mt-0.5 sm:mt-1 flex-shrink-0" size={16} />
                <div className="text-center sm:text-left">
                  <p className="text-gray-400 text-sm sm:text-base">Email</p>
                  <a href="mailto:viadux@gmail.com" className="hover:text-[#e84118] transition-colors duration-300 text-sm sm:text-base">
                    viadux@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 justify-center sm:justify-start">
                <Phone className="text-[#e84118] mt-0.5 sm:mt-1 flex-shrink-0" size={16} />
                <div className="text-center sm:text-left">
                  <p className="text-gray-400 text-sm sm:text-base">Phone</p>
                  <a href="https://wa.me/+6281244856137" className="hover:text-[#e84118] transition-colors duration-300 text-sm sm:text-base">
                    +62 812 4485 6137
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 justify-center sm:justify-start">
                <Clock className="text-[#e84118] mt-0.5 sm:mt-1 flex-shrink-0" size={16} />
                <div className="text-center sm:text-left">
                  <p className="text-gray-400 text-sm sm:text-base">Hours</p>
                  <p className="text-sm sm:text-base">Mon-Fri: 9AM - 5PM</p>
                  <p className="text-sm sm:text-base">Sat: 10AM - 3PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#e84118] text-center sm:text-left">Our Location</h3>
            <div className="flex items-start gap-3 sm:gap-4 justify-center sm:justify-start">
              <MapPin className="text-[#e84118] mt-0.5 sm:mt-1 flex-shrink-0" size={16} />
              <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left">
                Jl. Jati Selatan III No.20, RT.02/RW.01, Babatan, Jati, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61226
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-700 h-40 sm:h-48">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.3253485429764!2d112.69345761224268!3d-7.447242111973863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e141980bdf6d%3A0xdd46c8ce4e1fe352!2sJl.%20Jati%20Selatan%20III%20No.20%2C%20RT.02%2FRW.01%2C%20Babatan%2C%20Jati%2C%20Kec.%20Sidoarjo%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061226!5e0!3m2!1sid!2sid!4v1749649664547!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                className="border-0" 
                allowFullScreen 
                loading="lazy"
                aria-label="Viadux Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-5 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Viadux. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-2 text-xs sm:text-sm">
            <a className="cursor-pointer hover:text-[#e84118] transition-colors duration-300">Privacy Policy</a>
            <a className="cursor-pointer hover:text-[#e84118] transition-colors duration-300">Terms of Service</a>
            <a className="cursor-pointer hover:text-[#e84118] transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}