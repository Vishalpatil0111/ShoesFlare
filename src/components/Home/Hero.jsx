import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useProductContext } from "../../../utlis/ProductContextData";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { products } = useProductContext();
  const displayedProducts = products?.slice(6, 12) || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? displayedProducts.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === displayedProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); 

    return () => clearInterval(interval);
  }, [currentIndex]); 
 
   const navigate = useNavigate();
   const handleBuyNow = (product) => {
    console.log("Navigating to checkout with product:", product);  // Debugging
    navigate(`/checkout`, { state: { product } });
};
  return (
    <div className="relative w-full h-fit sm:h-[90vh] bg-transparent overflow-hidden">
      <div className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

        {displayedProducts.map((product, index) => (
          <div key={product.id} className={`w-full flex-shrink-0 grid md:grid-cols-2 p-6 sm:p-14 ${product.bgcolor}`}>
            <div className="flex flex-col justify-center gap-6 text-center md:text-left pb-10">
              <h1 className="text-xl sm:text-3xl md:text-[4vw] font-semibold">
                {product.title}
              </h1>
              <p className="text-gray-600 text-sm sm:text-lg">
                {product.description}
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <button  onClick={() => handleBuyNow(product)} className="px-4 py-2 rounded-md text-white bg-gray-600 hover:bg-gray-700 transition">
                  Order Now
                </button>
                
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-auto">
              <img
                className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] 
               h-auto max-h-[75vh] sm:max-h-[85vh] 
               object-contain"
                src={product.productimage}
                alt={product.title}
              />
            </div>




          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={prevSlide}
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={nextSlide}
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default Hero;
