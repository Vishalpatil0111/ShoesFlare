import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";


const ProductGridSlider = ({ products }) => {
    const navigate = useNavigate();
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const { cart } = useContext(CartContext);
    const handleViewDetails = (product) => {
        navigate(`/productdetails/${product.id}`, { state: { product } });
    };


    const handleBuyNow = (product) => {
        console.log("Navigating to checkout with product:", product);  // Debugging
        navigate(`/checkout`, { state: { product } });
    };

    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
    }, {});



    const { addToCart, removeFromCart } = useContext(CartContext);
    return (
        <div className="w-full p-4 flex flex-col gap-8">
            {Object.entries(groupedProducts).map(([category, products]) => {
                const safeCategory = category.replace(/\s+/g, "-"); // Ensure unique class names

                return (
                    <div key={category} className="relative w-full bg-zinc-50 p-5 rounded-lg shadow">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{category}</h2>

                        <Swiper
                            modules={[Navigation]}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                            navigation={{
                                prevEl: `.prev-${safeCategory}`,
                                nextEl: `.next-${safeCategory}`,
                            }}
                            className="w-full"
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product.id} className="bg-sky-100 shadow-md rounded-lg p-4 relative">
                                    <div
                                        className="relative w-full flex justify-center"
                                        onMouseEnter={() => setHoveredProduct(product.id)}
                                        onMouseLeave={() => setHoveredProduct(null)}
                                    >
                                        {/* Product Image */}
                                        <img
                                            src={product.productimage}
                                            alt={product.title}
                                            className="w-40 h-40 object-contain rounded-lg"
                                        />

                                        {/* Overlay on Hover */}
                                        <div
                                            className={`absolute bottom-0 left-0 w-full h-full  bg-opacity-20 flex justify-center items-center transition-opacity duration-300 ${hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                                                }`}
                                        >
                                            <button
                                                onClick={() => handleViewDetails(product)}
                                                className="px-4 py-2 text-sm text-black border-black bg-zinc-100 rounded-md shadow-lg transition hover:bg-sky-500 hover:text-white"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="w-full flex flex-col sm:flex-row justify-between">
                                        <h3 className="mt-2 text-gray-700 font-semibold text-start">{product.title}</h3>
                                        <h3 className="mt-2 w-fit h-fit text-lg px-2 text-gray-700 bg-yellow-300 font-semibold rounded-md">
                                            ${product.price}
                                        </h3>
                                    </div>

                                    <div className="mt-4 flex flex-col justify-center sm:flex-row gap-4">
                                        <button
                                            onClick={() => handleBuyNow(product)}
                                            className="bg-green-500 text-white px-4 py-2 rounded"
                                        >
                                            Buy Now
                                        </button>
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
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons - Unique for Each Category */}
                        <div className="absolute bottom-2 right-2 flex gap-2 z-10">
                            <button className={`prev-${safeCategory} p-2 bg-gray-700 hover:bg-gray-900 text-white rounded-full`}>
                                <ChevronLeft size={20} />
                            </button>
                            <button className={`next-${safeCategory} p-2 bg-gray-700 hover:bg-gray-900 text-white rounded-full`}>
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


export default ProductGridSlider;
