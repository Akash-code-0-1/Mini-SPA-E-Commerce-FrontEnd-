"use client"

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { useCart } from "./CartContext";

function CheckoutModal() {
  const { state, closeCheckout, clearCart, getTotalPrice } = useCart()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  })

  if (!state.isCheckoutOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)

    // Simulate order processing
    setTimeout(() => {
      clearCart()
      setIsSubmitted(false)
      closeCheckout()
      setFormData({ name: "", email: "", address: "" })
    }, 2000)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
          {isSubmitted ? (
            <div className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Order Placed Successfully!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Thank you for your purchase. You will receive a confirmation email shortly.
              </p>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400 mx-auto"></div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Checkout</h2>
                <button
                  onClick={closeCheckout}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-900 dark:text-white font-medium block">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 dark:focus:border-blue-400 rounded-md focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-900 dark:text-white font-medium block">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 dark:focus:border-blue-400 rounded-md focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-gray-900 dark:text-white font-medium block">
                    Shipping Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete shipping address"
                    rows={3}
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 dark:focus:border-blue-400 rounded-md focus:outline-none resize-none"
                  />
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Order Summary</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Items ({state.items.length})</span>
                    <span className="text-gray-900 dark:text-white font-medium">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">Free</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-2 flex justify-between font-semibold">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-blue-600 dark:text-blue-400">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full font-semibold bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors"
                >
                  Place Order
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CheckoutModal
