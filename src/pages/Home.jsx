import React from 'react'
import Hero from '../components/Home/Hero'
import Products from '../components/Home/Products'
import Brand from '../components/Home/Brand'

function Home() {
  return (
    <div className='sm:mt-[40px]'>
      <Hero />
      <Products />
      <Brand />

    </div>
  )
}

export default Home
