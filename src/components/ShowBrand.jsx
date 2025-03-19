import React from "react";
import axiosInstancenew from "../../utlis/apiInstance2";

function ShowBrand() {

    

    const products = [
        { 
            title: "Nike Air Phantom", 
            company: "nike.com", 
            description: "A stylish and comfortable sneaker featuring a breathable mesh upper, lightweight cushioning, and durable rubber outsole for all-day wear.", 
            price: 1399, 
            image: "/images/new.png",
            bgColor: "bg-zinc-50"
        },
        { 
            title: "Puma Ignite X", 
            company: "puma.com", 
            description: "Designed for performance and style, these sneakers offer superior grip, a cushioned midsole, and a sleek design perfect for casual and sports use.", 
            price: 1599, 
            image: "/images/second.png",
            bgColor: "bg-blue-100"
        },
        { 
            title: "Adidas Velocity Prime", 
            company: "adidas.com", 
            description: "A classic yet modern sneaker with a breathable knit upper, responsive cushioning, and a flexible outsole for maximum comfort and support.", 
            price: 1499, 
            image: "/images/third.png",
            bgColor: "bg-red-400"
        },
        { 
            title: "Reebok Stealth Runner", 
            company: "reebok.com", 
            description: "Crafted with high-quality synthetic leather and mesh, these sneakers provide excellent durability, arch support, and a stylish sporty look.", 
            price: 1699, 
            image: "/images/four.png",
            bgColor: "bg-violet-300"
        },
        { 
            title: "New Balance Nova", 
            company: "newbalance.com", 
            description: "A premium sneaker featuring a soft foam midsole, reinforced heel support, and a timeless white design that pairs well with any outfit.", 
            price: 1399, 
            image: "/images/fifth.png",
            bgColor: "bg-sky-300"
        },
        { 
            title: "Asics Thunderstrike", 
            company: "asics.com", 
            description: "These sneakers offer a perfect blend of stability and flexibility with their gel cushioning system, breathable upper, and bold yellow finish.", 
            price: 1599, 
            image: "/images/six.png",
            bgColor: "bg-red-200"
        }
    ];
    
    return (
        <div className="w-full flex flex-col mt-4 items-center text-white text-center p-5">
            {/* Title */}
            <h1 className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-semibold md:font-bold">
                Brand New Collection
            </h1>
    
            {/* Product Grid */}
            <div className="w-full mt-6">
                <div className="w-full min-h-[55vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                    {products.map((product, index) => (
                        <div 
                            key={index} 
                            className={`${product.bgColor} flex flex-col sm:flex-col  shadow-lg rounded-lg overflow-hidden h-auto`}
                        >
                            {/* Left Section */}
                            <div className="flex-1 flex flex-col p-4">
                                {/* Company Logo */}
                                <img
                                    src={`https://logo.clearbit.com/${product.company}`}
                                    alt={product.company}
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
                                    <button className="px-4 py-2 text-black bg-amber-100 rounded-md transition hover:bg-amber-300">
                                        Order Now
                                    </button>
                                    <button className="px-4 py-2 text-black bg-amber-100 rounded-md transition hover:bg-amber-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
    
                            {/* Right Section (Image) */}
                            <div className="flex-1">
                                <img 
                                    className="w-full h-full sm:h-auto object-cover"
                                    src={product.image} 
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
