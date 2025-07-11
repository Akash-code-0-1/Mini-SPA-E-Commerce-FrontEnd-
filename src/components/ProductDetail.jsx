"use client"
import { Link } from "react-router-dom"
import { ArrowLeft, Star, ShoppingCart } from "lucide-react"
import { useCart } from "./CartContext"

function ProductDetail({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Products</span>
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="p-6">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
              <img
                src={product.image || "https://via.placeholder.com/600x600?text=Product"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="mb-3 px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full inline-block">
              {product.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.title}</h1>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900 dark:text-white">{product.rating.rate}</span>
                <span className="text-gray-600 dark:text-gray-300">({product.rating.count} reviews)</span>
              </div>
            </div>

            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">${product.price.toFixed(2)}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Description</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">{product.description}</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full md:w-auto font-semibold bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>

            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <p>✓ Free shipping on orders over $50</p>
              <p>✓ 30-day return policy</p>
              <p>✓ Secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
