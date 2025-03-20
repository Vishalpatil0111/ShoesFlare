import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const ProductGridSlider = ({ products }) => {
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
    }, {});

    const swiperRefs = useRef({});

    return (
        <div className="w-full p-4 flex flex-col gap-8">
            {Object.entries(groupedProducts).map(([category, products]) => {
                const safeCategory = category.replace(/\s+/g, "-"); 
                swiperRefs.current[safeCategory] = swiperRefs.current[safeCategory] || useRef(null);

                return (
                    <div key={category} className="relative w-full bg-zinc-50 p-5 rounded-lg shadow">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{category}</h2>

                        <Swiper
                            modules={[Navigation]}
                            onSwiper={(swiper) => (swiperRefs.current[safeCategory].current = swiper)}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={2}
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
                                <SwiperSlide key={product.id} className=" bg-sky-100 shadow-md rounded-lg p-4 $">
                                    <img 
                                        src={product.productimage} 
                                        alt={product.title} 
                                        className="w-full h-40 object-contain rounded-lg" 
                                    />
                                    <h3 className="mt-2 text-gray-700 font-semibold text-center">{product.title}</h3>
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

export default ProductGridSlider;
