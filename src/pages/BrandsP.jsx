import React from 'react'
import { useProductContext } from '../../utlis/ProductContextData';

import ProductByBrand from '../components/Product-Brands/ProductByBrand';
function BrandsP() {
    const { products } = useProductContext();

 
    const BrandProducts = products;
  
   
    
  
    return (
      <div className='sm:mt-[40px]'>
        <ProductByBrand products={BrandProducts} /> 
      </div>
    );
}

export default BrandsP
