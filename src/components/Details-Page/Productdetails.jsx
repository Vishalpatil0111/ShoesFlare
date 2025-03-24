import React, { useContext, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import BackButton from '../BackButton';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
function Productdetails() {
   
    const { id } = useParams(); // Get product ID from URL
    const location = useLocation();
    const product = location.state?.product; // Get product data from state
    const [selectedSize, setSize] = useState(null);
   
    if (!product) {
        return <p className="text-center text-red-500">Product not found for ID: {id}</p>;
    }
    const { cart } = useContext(CartContext)
    const { addToCart, removeFromCart } = useContext(CartContext)

    const navigate = useNavigate()
    const handleBuyNow = (product) => {
        console.log("Navigating to checkout with product:", product);  // Debugging
        navigate(`/checkout`, { state: { product } });
    };
    return (
        <div className='pt-[35px]'>
            <div className='w-full flex justify-end mt-2 pr-12'>
                <BackButton />
            </div>

            <div className='w-full h-fit flex flex-col sm:flex-row p-4 mt-4'>
                {/* Left - Product Image */}
                <div className='sm:w-1/2 w-full p-2 sm:pr-10'>
                    <div className='w-full flex justify-center bg-zinc-100 h-full shadow-2xl'>
                        <img className='sm:w-[40vw] w-full object-cover sm:object-contain' src={product.productimage} alt={product.title} />
                    </div>
                </div>

                {/* Right - Product Info */}
                <div className='sm:w-1/2 w-full flex flex-col'>
                    <div className='w-full flex flex-col p-2 mt-1 sm:mt-4 sm:items-start'>
                        <h1 className='font-bold text-xl sm:text-3xl text-zinc-800'>
                            {product.title}
                        </h1>
                        <h2 className='text-lg w-fit font-semibold mt-2 text-white bg-zinc-700 px-3 italic'>
                            By {product.companyname}
                        </h2>
                        <p className='text-md text-zinc-600 mt-1'>{product.description}</p>

                        <p className='text-md mt-2 font-semibold text-red-400'>Price:</p>
                        <h3 className='md:text-3xl font-extrabold mt-1 text-xl text-zinc-800'>
                            $ {product.price}
                        </h3>
                    </div>

                    {/* Size Selection */}
                    <div className='w-1/2 flex flex-col items-start p-2 mt-2'>
                        <p className='text-md text-red-400 font-semibold'>Sizes:</p>
                        <div className='mt-2 gap-3 flex w-full h-fit'>
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSize(size)}
                                    className={`px-4 py-2 border rounded ${selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        {selectedSize && <p className="mt-2 mb-1 text-green-600">Selected Size: {selectedSize}</p>}
                    </div>

                    {/* Buttons */}
                    <div className='w-fit p-2 gap-5 flex mt-4'>
                        <button
                            onClick={() => {
                                if (cart.some((item) => item.id === product.id)) {
                                    removeFromCart(product.id);
                                }
                                else {
                                    addToCart(product);
                                }
                            }}
                            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                        >
                            {cart.some((item) => item.id === product.id) ? "Remove" : "Add to Cart"}
                        </button>
                        <button
                            onClick={() => handleBuyNow(product)}
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productdetails;
