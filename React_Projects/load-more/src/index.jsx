import React, { useState, useEffect } from 'react'
import './style.css'

const LoadMore = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  const FALLBACK_IMAGE = 'https://via.placeholder.com/150?text=No+Image'
  const LIMIT = 50 // Capped at 50 products

  async function fetchProducts() {
    try {
      setLoading(true)
      const offset = count * 20
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=20`
      )
      const result = await response.json()

      // Platzi returns an array directly
      if (result && result.length) {
        setProducts(prevProducts => {
          // 1. Prevent duplicate keys/IDs
          const existingIds = new Set(prevProducts.map(p => p.id))
          const uniqueNewProducts = result.filter(
            item => !existingIds.has(item.id)
          )

          // 2. Combine and cap strictly at 50 products
          const combined = [...prevProducts, ...uniqueNewProducts]
          return combined.slice(0, LIMIT)
        })
      }
    } catch (e) {
      console.error('Fetch error:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [count])

  // Helper to clean up Platzi's messy stringified image arrays
  const getCleanImageUrl = images => {
    if (!images || !images.length) return FALLBACK_IMAGE
    let rawUrl = images[0]

    if (typeof rawUrl === 'string') {
      // Remove escaped brackets, quotes, or trailing slashes that break images
      rawUrl = rawUrl.replace(/^\["|"\]$/g, '').replace(/\\"/g, '')
    }

    return rawUrl || FALLBACK_IMAGE
  }

  // Disable button as soon as 50 products are loaded
  const disableButton = products.length >= LIMIT

  if (loading && products.length === 0) {
    return <div className="loading-state">Loading products...</div>
  }

  return (
    <div className="container">
      <div className="product-grid">
        {products.map(item => (
          <div key={item.id} className="product-card">
            <img
              src={getCleanImageUrl(item.images)}
              alt={item.title}
              onError={e => {
                // Swap out any broken images automatically
                e.target.onerror = null
                e.target.src = FALLBACK_IMAGE
              }}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button
          disabled={disableButton || loading}
          onClick={() => setCount(prev => prev + 1)}
        >
          {loading
            ? 'Loading...'
            : disableButton
            ? 'Reached limit of 50 products'
            : 'Load More Products'}
        </button>
      </div>
    </div>
  )
}

export default LoadMore