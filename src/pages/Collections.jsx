import React from 'react';
import CollectionBanner from '../components/Collections/CollectionBanner';

import ShowBrand from '../components/Collections/ShowBrand';

function Collections() {
  const product = {
    title: "AirMax Running Shoes",
    description:
      "Breathable mesh upper, lightweight midsole, and durable outsole for superior performance.",
    productimage: "/images/second.png",
  };
  return (

    <div id="showbrand" className="bg-[#f8f0ef]">
      <CollectionBanner  product={product}/>
      <ShowBrand />
    </div>
  );
}

export default Collections;
