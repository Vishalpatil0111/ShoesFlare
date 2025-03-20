import React from 'react'

function WomenBanner({product}) {
  return (
    
        <div>
          <div className="w-full h-auto min-h-[70vh] sm:min-h-[85vh] grid md:grid-cols-2 bg-[#0cef89] p-4">
            {/* ✅ Product Content (Title & Description) */}
            <div className="flex flex-col justify-center gap-6 order-2 md:order-1 text-center md:text-left">
              <h1 className="text-xl sm:text-3xl md:text-[4vw] font-semibold">
                {product?.title || "Unleash Your Perfect Fit"}
              </h1>
              <p className="sm:block text-gray-600 text-sm sm:text-lg">
                {product?.description ||
                  "Experience ultimate comfort and style with a breathable mesh upper, cushioned midsole, and durable outsole—perfect for daily wear, workouts, or casual outings!"}
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <button className="px-4 py-2 rounded-md text-white bg-gray-600 hover:bg-gray-700 transition">
                  Order Now
                </button>
                <button className="px-4 py-2 rounded-md bg-red-400 hover:bg-red-500 transition">
                  View More
                </button>
              </div>
            </div>
    
            {/* ✅ Product Image */}
            <div className="order-1 md:order-2 flex justify-center items-center">
              <img
                className="w-full max-w-md sm:max-w-lg md:max-w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain rounded-lg"
                src={product?.productimage || "/images/second.png"}
                alt={product?.title || "Shoe Image"}
              />
            </div>
          </div>
        </div>
      );
  
}

export default WomenBanner
