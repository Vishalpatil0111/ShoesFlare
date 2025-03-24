import React from 'react';
import MensBanner from '../components/Mens-page/MensBanner';
import CategoryM from '../components/Mens-page/CategoryM';
import ProductGridSlider from '../components/Mens-page/ProductGridSlider';
import { useProductContext } from '../../utlis/ProductContextData';

export default function Men() {
  const { products } = useProductContext();

 
  const menProducts = products.filter(product => product.madefor.toLowerCase() === "men");

 
  

  return (
    <div className='sm:mt-[40px]'>
      <MensBanner product={menProducts} />
      <CategoryM products={menProducts} /> 
      <ProductGridSlider products={menProducts} /> 
    </div>
  );
}
