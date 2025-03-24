import React from 'react'
import { useProductContext } from '../../utlis/ProductContextData';

import ProductByBrand from '../components/Product-Brands/ProductByBrand';
function BrandsP() {
    const { products } = useProductContext();

 
    const BrandProducts = products;
  
   
    
  
    return (
      <div className='pt-[35px]'>
        <ProductByBrand products={BrandProducts} /> 
      </div>
    );
}

export default BrandsP
