"use client"
import { Link } from "react-router-dom"
import { Star, ShoppingCart } from "lucide-react"
import { useCart } from "./CartContext"

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <Link to={`/product/${product.id}`}>
      <div className="w-full max-w-[280px] mx-auto h-full hover:shadow-lg transition-shadow cursor-pointer group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="p-6">
          <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
            <img
              src={product.image || "https://via.placeholder.com/300x300?text=Product"}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-base line-clamp-2 text-gray-900 dark:text-white">{product.title}</h3>

            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {product.rating.rate} ({product.rating.count})
              </span>
            </div>

            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">${product.price.toFixed(2)}</p>
          </div>
        </div>

        <div className="p-6 pt-0">
          <button
            onClick={handleAddToCart}
            className="w-full text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
