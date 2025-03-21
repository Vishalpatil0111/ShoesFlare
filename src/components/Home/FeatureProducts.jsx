import React from 'react';
import { useProductContext } from '../../../utlis/ProductContextData';
import { useNavigate } from 'react-router-dom';

function FeatureProducts() {
    const { products } = useProductContext();
    const navigate = useNavigate();

    const handleViewDetails = (product) => {
        navigate(`/productdetails/${product.id}`, { state: { product } });
    };

    const displayedProducts = products.slice(4, 14);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
            {displayedProducts.map((item, index) => (
                <div key={index} className="bg-white p-2 shadow-md rounded-lg flex flex-col justify-between">
                    {/* Product Image */}
                    <div className="w-full h-42">
                        <img className="w-full h-full object-contain" src={item.productimage} alt={item.title} />
                    </div>

                    {/* Product Title */}
                    <h3 className="text-lg text-gray-900 font-bold mt-4">
                        {item.title.slice(0, 16)}
                    </h3>

                    {/* Price & Button Section */}
                    <div className="w-full mt-1 flex flex-row justify-between items-center">
                        <p className="text-gray-900">${item.price}</p>
                        <button 
                            onClick={() => handleViewDetails(item)} 
                            className="px-3 py-1 rounded-full bg-red-300 hover:bg-red-400 transition"
                        >
                            View
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FeatureProducts;
