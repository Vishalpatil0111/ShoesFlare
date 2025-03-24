import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Men from './pages/Men';
import Womens from './pages/Womens';
import BrandsP from './pages/BrandsP';
import ProductDetails from './components/Details-Page/Productdetails'; // Directly using ProductDetails

import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout.jsx';
import Order from './pages/Order.jsx';
import MoreInfo from './pages/MoreInfo.jsx';
import TopScroll from './components/TopScroll.jsx';
function App() {
  return (
    <div className='pt-[60px] w-full h-screen'>
      <Navbar />
      <TopScroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Womens />} />
        <Route path="/brandsproduct" element={<BrandsP />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} /> 
        <Route path="/cart" element={<CartPage />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order-success' element={<Order/>}/>
        <Route path='/info' element={<MoreInfo/>}/>        

      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
