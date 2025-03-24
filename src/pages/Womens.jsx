import React from 'react'
import { useProductContext } from '../../utlis/ProductContextData';
import WomenBanner from '../components/Women-page/WomenBanner';
import CategoryW from '../components/Women-page/CategoryW';
import WGridSlider from '../components/Women-page/WGridSlider';
function Womens() {
    const { products } = useProductContext();

 
    const womenProducts = products.filter(product => product.madefor.toLowerCase() === "women");
  
   
    const product = {
      title: "AirMax Running Shoes",
      description:
        "Breathable mesh upper, lightweight midsole, and durable outsole for superior performance.",
      productimage: "/images/four.png",
    };
  
    return (
      <div className='pt-[35px]'>
        <WomenBanner product={product} />
        <CategoryW products={womenProducts} /> 
        <WGridSlider products={womenProducts} /> 
      </div>
    );
}

export default Womens
