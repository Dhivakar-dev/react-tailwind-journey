import React from 'react'
import ProductCard from './components/ProductCard'
import products from './assets/products'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  )
}

export default App