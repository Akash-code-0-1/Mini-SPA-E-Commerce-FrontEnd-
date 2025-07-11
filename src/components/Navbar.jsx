"use client"
import { Link } from "react-router-dom"
import { ShoppingCart, Home } from "lucide-react"
import { useCart } from "./CartContext"
import ThemeToggle from "./ThemeToggle"

function Navbar() {
  const { toggleCart, getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ES</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">E-Store</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Home</span>
            </Link>

            <ThemeToggle />

            <button
              onClick={toggleCart}
              className="relative flex items-center space-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 dark:bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
