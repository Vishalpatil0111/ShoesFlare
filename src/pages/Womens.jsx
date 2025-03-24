import React from 'react'
import { useProductContext } from '../../utlis/ProductContextData';
import WomenBanner from '../components/Women-page/WomenBanner';
import CategoryW from '../components/Women-page/CategoryW';
import WGridSlider from '../components/Women-page/WGridSlider';
function Womens() {
    const { products } = useProductContext();

 
    const womenProducts = products.filter(product => product.madefor.toLowerCase() === "women");
  
   

    return (
      <div className='sm:mt-[40px]'>
        <WomenBanner product={womenProducts} />
        <CategoryW products={womenProducts} /> 
        <WGridSlider products={womenProducts} /> 
      </div>
    );
}

export default Womens
