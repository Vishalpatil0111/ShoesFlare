import React, { useState, useEffect } from 'react';

function FeatureProducts() {
    const [product, setProduct] = useState([]); 

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.slice(0, 10))) 
            .catch(error => console.error("Error fetching data:", error)); 
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
            
            <div div className = "grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4" >
            {
                product.map((item, index) => (
                    <div key={index} className="bg-white p-2 shadow-md rounded-lg">
                        <div className="w-full h-42 ">
                            <img className="w-full  h-full object-contain" src={item.image} alt={item.title} />
                        </div>
                        <h3 className="text-lg text-gray-900 font-bold mt-4">{item.title.slice(0,16)}</h3>
                        <p className="text-gray-900">${item.price}</p>
                    </div>
                ))
            }
            </div >

    );
}

export default FeatureProducts;
