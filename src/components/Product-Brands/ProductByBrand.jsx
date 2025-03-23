import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const ProductByBrand = ({ products }) => {

    const navigate = useNavigate();
    const [hoveredProduct, setHoveredProduct] = useState(null);
    

    const handleViewDetails = (product) => {
        navigate(`/productdetails/${product.id}`, { state: { product } })
    }
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.companyname]) acc[product.companyname] = [];
        acc[product.companyname].push(product);
        return acc;
    }, {});

    const swiperRefs = useRef({});

    return (
        <div className="w-full p-4 flex flex-col gap-8">
            <div className="text-xl flex justify-center font-semibold md:font-bold sm:text-3xl">
                <h1 className="text-zinc-900">Brands & Product</h1>
            </div>

            {Object.entries(groupedProducts).map(([companyname, products]) => {
                const safeCategory = companyname.replace(/\s+/g, "-");
                swiperRefs.current[safeCategory] = React.createRef();

                return (
                    <div key={companyname}  className="relative w-full bg-gray-50 p-5 rounded-lg shadow">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{companyname.replace(".com", "")}</h2>

                        <Swiper
                            modules={[Navigation]}
                            onSwiper={(swiper) => (swiperRefs.current[safeCategory].current = swiper)}
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
                                <SwiperSlide
                                key={product.id}
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                onClick={() => handleViewDetails(product)}
                                className="relative bg-green-100 shadow-md rounded-lg p-4 "
                            >
                                {/* Image Container */}
                                <div className="relative">
                                    <img
                                        src={product.productimage}
                                        alt={product.title}
                                        className="w-full h-70 sm:h-40 object-contain rounded-lg "
                                    />
                            
                                    {/* Overlay on Hover */}
                                    {hoveredProduct === product.id && (
                                        <div className="absolute inset-0  bg-opacity-30 flex justify-center items-center transition-opacity duration-300">
                                            <button className="px-4 py-2 text-white bg-black bg-opacity-60 rounded-md transition hover:bg-opacity-100">
                                                View Details
                                            </button>
                                        </div>
                                    )}
                                </div>
                            
                                {/* Product Info */}
                                <div className="w-full h-fit flex flex-col sm:flex-row justify-between">
                                    <h3 className="mt-2 text-gray-700 font-semibold text-start">{product.title}</h3>
                                    <h3 className="mt-2 w-fit h-fit text-wrap rounded-md text-lg px-2 text-gray-700 bg-yellow-300 font-semibold text-start">
                                        ${product.price}
                                    </h3>
                                </div>
                            
                                <div className="mt-4 flex flex-col justify-center sm:flex-row gap-4">
                                    <button className="px-4 py-2 text-black bg-amber-100 rounded-md transition hover:bg-amber-300">
                                        Buy Now
                                    </button>
                                    <button className="px-4 py-2 text-black bg-amber-100 rounded-md transition hover:bg-amber-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </SwiperSlide>
                            
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <div className="absolute bottom-2 right-2 flex gap-2 z-10">
                            <button
                                className={`prev-${safeCategory} p-2 bg-gray-700 hover:bg-gray-900 text-white rounded-full`}
                                onClick={() => swiperRefs.current[safeCategory].current?.slidePrev()}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                className={`next-${safeCategory} p-2 bg-gray-700 hover:bg-gray-900 text-white rounded-full`}
                                onClick={() => swiperRefs.current[safeCategory].current?.slideNext()}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductByBrand;
