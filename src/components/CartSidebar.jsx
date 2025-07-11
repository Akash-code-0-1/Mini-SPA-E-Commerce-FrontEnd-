"use client"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "./CartContext"

function CartSidebar() {
  const { state, toggleCart, removeFromCart, updateQuantity, openCheckout, getTotalPrice } = useCart()

  if (!state.isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50" onClick={toggleCart} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out border-l border-gray-200 dark:border-gray-700">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold flex items-center text-gray-900 dark:text-white">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shopping Cart ({state.items.length})
            </h2>
            <button
              onClick={toggleCart}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-16 h-16 relative overflow-hidden rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                      <img
                        src={item.image || "https://via.placeholder.com/64x64?text=Product"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm line-clamp-2 text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-medium text-gray-900 dark:text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-md transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4 bg-white dark:bg-gray-900">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-gray-900 dark:text-white">Total:</span>
                <span className="text-blue-600 dark:text-blue-400">${getTotalPrice().toFixed(2)}</span>
              </div>

              <button
                onClick={openCheckout}
                className="w-full font-semibold bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartSidebar
