import React from 'react';
import MensBanner from '../components/Mens-page/MensBanner';
import CategoryM from '../components/Mens-page/CategoryM';
import ProductGridSlider from '../components/Mens-page/ProductGridSlider';
import { useProductContext } from '../../utlis/ProductContextData';

export default function Men() {
  const { products } = useProductContext();

 
  const menProducts = products.filter(product => product.madefor.toLowerCase() === "men");

 
  const product = {
    title: "AirMax Running Shoes",
    description:
      "Breathable mesh upper, lightweight midsole, and durable outsole for superior performance.",
    productimage: "/images/third.png",
  };

  return (
    <div>
      <MensBanner product={product} />
      <CategoryM products={menProducts} /> {/* ✅ Pass filtered products */}
      <ProductGridSlider products={menProducts} /> {/* ✅ Pass filtered products */}
    </div>
  );
}
