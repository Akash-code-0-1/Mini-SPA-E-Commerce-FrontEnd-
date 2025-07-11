"use client"
import { ArrowRight, Star, ShoppingBag } from "lucide-react"

function HeroSection() {
  const scrollToProducts = () => {
    const productsSection = document.querySelector('[data-section="products"]')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative px-6 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full inline-block">
            🎉 New Collection Available Now
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Discover Amazing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {" "}
              Products
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Shop the latest trends with unbeatable prices, fast shipping, and exceptional quality. Your perfect product
            is just a click away.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-gray-800"></div>
                <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white dark:border-gray-800"></div>
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></div>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">10k+ Happy Customers</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">4.9/5 Rating</span>
            </div>

            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Free Shipping</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToProducts}
              className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all flex items-center justify-center"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            <button className="px-8 py-4 text-base font-semibold border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent rounded-lg transition-colors">
              View Categories
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Trusted by leading brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-xl font-bold text-gray-400 dark:text-gray-500">BRAND</div>
              <div className="text-xl font-bold text-gray-400 dark:text-gray-500">COMPANY</div>
              <div className="text-xl font-bold text-gray-400 dark:text-gray-500">STORE</div>
              <div className="text-xl font-bold text-gray-400 dark:text-gray-500">SHOP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  )
}

export default HeroSection
