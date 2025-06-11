import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ShoppingBag } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">PESAN SEKARANG!</h1>
              <p className="text-gray-300 text-lg lg:text-xl max-w-md">
                Viadux juga tersedia di marketplace favorit anda
              </p>

              {/* Marketplace Buttons */}
              <div className="flex space-x-4">
                <Link href="https://shopee.co.id/viadux" target="_blank">
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-lg shadow-md">
                    <Image src="/assets/image/shopee.png" alt="Shopee" width={40} height={40} />
                    <span className="text-sm font-medium text-white">Shopee</span>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
                <Link href="https://tokopedia.com/viadux" target="_blank">
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-lg shadow-md ">
                    <Image src="/assets/image/tokopedia.png" alt="Tokopedia" width={45} height={45} />
                    <span className="text-sm font-medium text-white">Tokopedia</span>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Perfume Collection */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src="/assets/image/viaduxparfumebanner.png"
                alt="Koleksi parfum Viadux dan brand premium lainnya"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg">Kualitas Premium</h3>
              <p className="text-gray-400 text-sm">Parfum berkualitas tinggi dengan aroma tahan lama</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg">Pengiriman Cepat</h3>
              <p className="text-gray-400 text-sm">Dikirim langsung dari marketplace terpercaya</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg">Harga Terjangkau</h3>
              <p className="text-gray-400 text-sm">Dapatkan parfum premium dengan harga terbaik</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
