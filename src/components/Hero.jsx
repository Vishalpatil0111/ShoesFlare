import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axiosInstance from "../../utlis/apiInstance";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedProducts = localStorage.getItem("products");

    if (cachedProducts) {
      setProducts(JSON.parse(cachedProducts));
      setLoading(false);
    } else {
      axiosInstance
        .get("/products")
        .then((response) => {
          setProducts(response.data.slice(0, 5)); 
          localStorage.setItem("products", JSON.stringify(response.data.slice(0, 5)));
        })
        .catch((error) => console.error("Error fetching data:", error))
        .finally(() => setLoading(false)); 
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [products]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="w-full  h-[70vh] flex sm:p-14 sm:h-[85vh]">
      <div className="w-full flex relative overflow-hidden">
        {loading ? (
          <p className="text-center w-full text-xl">Loading products...</p>
        ) : (
          products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 flex sm:flex-row flex-col transition-all duration-700 ease-in-out ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
              {/* Left Side (Text) */}
              <div className="sm:w-1/2 bg-yellow-200 sm:bg-transparent sm:h-full sm:justify-end flex flex-col md:p-8 md:pb-[10%] w-full h-20 ">
                <h1 className="sm:mb-7 sm:text-3xl text-md text-center mt-8 sm:text-start sm:mt-0 font-bold">{product.title}</h1>
                <h5 className="md:text-xl sm:opacity-100 opacity-0 text-wrap">{product.description}</h5>
              </div>



              {/* Right Side (Image) */}
              <div className="sm:w-1/2 w-full mt-1 h-[50vh] sm:h-full sm:justify-end flex items-center justify-center">
                <img
                  className="w-[80%] h-[100%] sm:w-[70%] sm:h-[70%] object-contain"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </div>
          ))
        )}
      </div>

      <button
        className="absolute left-4 top-1/2 opacity-0 sm:opacity-100 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={prevSlide}
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        className="absolute right-4 top-1/2 opacity-0 sm:opacity-100 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={nextSlide}
      >
        <FaChevronRight size={20} />
      </button>
    </div>

  );
};

export default Hero;
