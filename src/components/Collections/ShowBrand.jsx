import React from "react";
import { useProductContext } from "../../../utlis/ProductContextData";

import { useNavigate } from 'react-router-dom';

function ShowBrand() {
    const navigate = useNavigate();


    const { products } = useProductContext();
    const handleViewDetails = (product) => {
        navigate(`/productdetails/${product.id}`, { state: { product } })
    }
    const handleBuyNow = (product) => {
        console.log("Navigating to checkout with product:", product);  // Debugging
        navigate(`/checkout`, { state: { product } });
    };
    const displayedProducts = products.slice(0, 6);


    return (
        <div className="w-full flex flex-col mt-4 items-center text-white text-center p-5">
            {/* Title */}
            <h1 className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-semibold md:font-bold">
                Brand New Collection
            </h1>

            {/* Product Grid */}
            <div className="w-full mt-6">
                <div className="w-full min-h-[55vh] grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 p-4">
                    {displayedProducts.map((product, index) => (
                        <div
                            key={index}
                            className={`${product.bgcolor} flex flex-col sm:flex-col  shadow-lg rounded-lg overflow-hidden h-auto`}
                        >
                            {/* Left Section */}
                            <div className="flex-1 flex flex-col p-4">
                                {/* Company Logo */}
                                <img
                                    src={`https://logo.clearbit.com/${product.companyname}`}
                                    alt={product.companyname}
                                    className="h-12 sm:h-16 w-12 sm:w-16 object-contain"
                                />

                                {/* Product Details */}
                                <div className="mt-4">
                                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                                        {product.title}
                                    </h1>
                                    <p className="mt-2 text-sm sm:text-md md:text-lg text-zinc-700 text-center hidden md:block">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="mt-4 flex flex-col justify-center sm:flex-row gap-4">
                                    <button onClick={() => handleBuyNow(product)} className="px-4 py-2 text-black bg-amber-100 rounded-md transition hover:bg-amber-300">
                                        Order Now
                                    </button>
                                    <button onClick={() => handleViewDetails(product)} className="px-4 py-2 text-black bg-amber-100 rounded-md transition hover:bg-amber-300">
                                        View Details
                                    </button>
                                </div>
                            </div>


                            <div className="flex-1 ">
                                <img
                                    className="w-full h-full  sm:h-auto object-cover"
                                    src={product.productimage}
                                    alt={product.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );


}

export default ShowBrand;
