import React from 'react';
import { useProductContext } from '../../../utlis/ProductContextData';

function Brands() {
    const { products } = useProductContext(); 

    const uniqueBrands = [...new Set(products.map(product => product.companyname))];

    return (
        <div className="w-full mt-6 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 sm:flex sm:justify-center md:grid-cols-5 lg:grid-cols-6 gap-4 p-4">
            {uniqueBrands.map((brand, index) => (
                <div key={index} className="w-full max-w-[140px] border border-gray-300 p-4 shadow-md rounded-lg bg-white mx-auto">
                    <div className="w-full h-20 flex justify-center items-center">
                        <img
                            src={`https://logo.clearbit.com/${brand}`} // FIXED
                            alt={brand}
                            className="h-16 w-16 object-contain"
                        />
                    </div>
                    <div className="w-full text-center mt-2">
                        <h5 className="text-xs sm:text-sm font-bold text-gray-900 break-words leading-tight">
                            {brand.replace(".com", "")} {/* Remove .com from brand name */}
                        </h5>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Brands;
