import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden'>
        <img className='h-40  w-full object-contain p-4 '
        src={product.image} alt={product.title} />
        <div className="p-4">
            <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
            <p className="text-indigo-600 font-bold mb-4">{product.price}</p>
            <button className='w-full bg-indigo-500 text-white py-2 rounded 
            hover:bg-indigo-600 transition-colors duration-300'>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard