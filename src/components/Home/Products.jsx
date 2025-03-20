import React, { useEffect, useState } from 'react'
import FeatureProducts from './FeatureProducts'

function Products() {
 
 

  return (
    <div className='w-full bg-gray-900 text-white p-8'>
      <h2 className="text-center text-xl sm:text-3xl font-bold mb-8">Featured Products</h2>
      <FeatureProducts/>
    </div>
  )
}

export default Products
