import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route , Routes } from 'react-router-dom'
import Collections from './pages/Collections'


function App() {
  return (
    <div className='pt-[2px]  w-full h-screen '>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collections />} />
      </Routes>
      <Footer/>
     
    </div>
  )
}

export default App
