"use client"
import { useParams, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductDetail from "../components/ProductDetail"

function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === Number(id))
        setProduct(found)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error loading product:", err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <p className="text-center text-lg text-gray-500">
        Loading product...
      </p>
    )
  }

  if (!product) {
    return <Navigate to="/" replace />
  }

  return <ProductDetail product={product} />
}

export default ProductDetailPage
