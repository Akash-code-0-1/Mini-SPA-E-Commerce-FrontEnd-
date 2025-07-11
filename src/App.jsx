import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "./components/CartContext"
import { ThemeProvider } from "./components/ThemeProvider"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CartSidebar from "./components/CartSidebar"
import CheckoutModal from "./components/CheckoutModal"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
              </Routes>
            </main>
            <CartSidebar />
            <CheckoutModal />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App;
