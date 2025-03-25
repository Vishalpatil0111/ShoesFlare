import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

function CategoryW({ products }) { 
  const swiperRef = useRef(null);

  const categoryData = Object.values(
    products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = {
          category: product.category,
          productimage: product.productimage,
        };
      }
      return acc;
    }, {})
  );

  return (
    <div className="w-full p-4 flex flex-col relative">
      <div className="flex justify-center">
        <h1 className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-semibold md:font-bold">
          Category of Your Choice
        </h1>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={categoryData.length > 3} 
        spaceBetween={15}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full mt-6"
      >

        {categoryData.map((item) => (
          <SwiperSlide key={item.category} className="flex flex-col items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-yellow-200 p-2 flex justify-center items-center">
              <img
                className="w-full h-full object-contain center rounded-full"
                src={item.productimage}
                alt={item.category}
              />
            </div>
            <h2 className="mt-2 text-zinc-700 text-sm sm:text-lg font-semibold">
              {item.category}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
         <div className="absolute  right-0 top-9 sm:top-5 transform -translate-x-1/2 flex gap-2 sm:gap-2 z-10">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="p-2 sm:p-3 bg-gray-700 hover:bg-gray-900 text-white rounded-full"
                >
                  <ChevronLeft size={10} />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="p-2 sm:p-3 bg-gray-700 hover:bg-gray-900 text-white rounded-full"
                >
                  <ChevronRight size={10} />
                </button>
              </div>
     
    </div>
  );
}

export default CategoryW;
