import React, { useState, useEffect } from 'react';
import { useProductContext } from '../../../utlis/ProductContextData';
function FeatureProducts() {
    const { products } = useProductContext();
    const displayedProducts = products.slice(4, 14);

    return (

        <div div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4" >
            {
                displayedProducts.map((item, index) => (
                    <div key={index} className="bg-white p-2 shadow-md rounded-lg">
                        <div className="w-full h-42 ">
                            <img className="w-full  h-full object-contain" src={item.productimage} alt={item.title} />
                        </div>
                        <h3 className="text-lg text-gray-900 font-bold mt-4">{item.title.slice(0, 16)}</h3>
                        <p className="text-gray-900">${item.price}</p>
                    </div>
                ))
            }
        </div >

    );
}

export default FeatureProducts;
