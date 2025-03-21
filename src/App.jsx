import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Collections from './pages/Collections'
import Men from './pages/Men'
import Womens from './pages/Womens'
import BrandsP from './pages/BrandsP'



function App() {
  return (
    <div className='pt-[2px]  w-full h-screen '>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collections />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Womens/>}></Route>
        <Route path='/brandsproduct' element={<BrandsP/>}></Route>
        
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
