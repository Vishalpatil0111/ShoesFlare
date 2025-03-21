import { createContext, useContext, useState } from "react";


const ProductContextData = createContext();

export const ProductProvider = ({ children }) => {
    const [products] = useState([
        {
            id: 1,
            companyname: "Nike.com",
            productimage: "/images/nikeair.png",
            title: "Nike Air Max Plus",
            description: "Tuned Air technology for extra comfort and support.",
            category: "Sneakers",
            madefor: "men",
            price: 150,
            bgcolor: "bg-white"
        },
        {
            id: 2,
            companyname: "Adidas.com",
            productimage: "/images/adiultra.png",
            title: "Adidas Ultraboost Light",
            description: "Ultra-responsive running shoes with a light feel.",
            category: "Running Shoes",
            madefor: "men",
            price: 180,
            sizes: [5,6,7,8],
             bgcolor: "bg-zinc-200"
        },
        {
            id: 3,
            companyname: "Puma.com",
            productimage: "/images/rsx.png",
            title: "Puma RS-X3",
            description: "Bold design with high-tech comfort.",
            category: "Sneakers",
            madefor: "women",
            price: 120,
            bgcolor: "bg-sky-400"
        },
        {
            id: 4,
            companyname: "Reebok.com",
            productimage: "/images/zig.png",
            title: "Reebok Zig Dynamica",
            description: "Innovative zigzag sole for energy return.",
            category: "Running Shoes",
            madefor: "women",
            price: 135,
            bgcolor: "bg-red-300"
        },
        {
            id: 5,
            companyname: "Nike.com",
            productimage: "/images/blazer.png",
            title: "Nike Blazer Mid '77",
            description: "Classic basketball sneakers with retro vibes.",
            category: "Casual Shoes",
            madefor: "men",
            price: 110,
            bgcolor: "bg-zinc-500"
        },
        {
            id: 6,
            companyname: "Adidas.com",
            productimage: "/images/forums.png",
            title: "Adidas Forum 84 Low",
            description: "Throwback basketball style with modern comfort.",
            category: "Casual Shoes",
            madefor: "men",
            price: 95,
            bgcolor: "bg-amber-300 "
        },
        {
            id: 7,
            companyname: "Puma.com",
            productimage: "/images/cali.png",
            title: "Puma Cali Dream",
            description: "Trendy sneakers with a fresh and modern look.",
            category: "Sneakers",
            madefor: "women",
            price: 105,
              bgcolor: "bg-yellow-50"
        },
        {
            id: 8,
            companyname: "Reebok.com",
            productimage: "/images/classicleather.png",
            title: "Reebok Classic Leather",
            description: "Timeless design that never goes out of style.",
            category: "Casual Shoes",
            madefor: "women",
            price: 85,
              bgcolor: "bg-zinc-400"
        },
        {
            id: 9,
            companyname: "Nike.com",
            productimage: "/images/vaporfly.png",
            title: "Nike Vaporfly 3",
            description: "Elite marathon racing shoes with max speed.",
            category: "Running Shoes",
            madefor: "men",
            price: 210,
              bgcolor: "bg-green-300"
        },
        {
            id: 10,
            companyname: "Adidas.com",
            productimage: "/images/yeeze.png",
            title: "Adidas Yeezy Boost 350",
            description: "Fashion-forward sneakers with a unique style.",
            category: "Sneakers",
            madefor: "men",
            price: 280,
            bgcolor: "bg-zinc-50"
        },
        {
            id: 11,
            companyname: "Puma.com",
            productimage: "/images/suede.png",
            title: "Puma Suede Classic",
            description: "Iconic low-top sneakers for everyday wear.",
            category: "Casual Shoes",
            madefor: "women",
            price: 90,
            bgcolor: "bg-white"
        },
        {
            id: 12,
            companyname: "Reebok.com",
            productimage: "/images/nano.png",
            title: "Reebok Nano X3",
            description: "Cross-training shoes for workouts and lifting.",
            category: "Training Shoes",
            madefor: "men",
            price: 145,
              bgcolor: "bg-zinc-300"
        },
        {
            id: 13,
            companyname: "Nike.com",
            productimage: "/images/dunklow.png",
            title: "Nike Dunk Low",
            description: "Basketball-inspired sneakers with street appeal.",
            category: "Sneakers",
            madefor: "men",
            price: 120,
              bgcolor: "bg-red-300"
        },
        {
            id: 14,
            companyname: "Adidas.com",
            productimage: "/images/superstart.png",
            title: "Adidas Superstar",
            description: "Legendary shell-toe sneakers.",
            category: "Casual Shoes",
            madefor: "women",
            price: 110,
              bgcolor: "bg-orange-300"
        },
        {
            id: 15,
            companyname: "Puma.com",
            productimage: "/images/rider.png",
            title: "Puma Future Rider",
            description: "Comfortable and stylish for everyday wear.",
            category: "Sneakers",
            madefor: "men",
            price: 100,
              bgcolor: "bg-red-300"
        },
        {
            id: 16,
            companyname: "Reebok.com",
            productimage: "/images/floatride.png",
            title: "Reebok Floatride Energy 3",
            description: "Lightweight running shoes for long-distance.",
            category: "Running Shoes",
            madefor: "women",
            price: 160,
              bgcolor: "bg-zinc-300"
        },
        {
            id: 17,
            companyname: "Nike.com",
            productimage: "/images/pegasus.png",
            title: "Nike Pegasus 40",
            description: "Go-to running shoes for every athlete.",
            category: "Running Shoes",
            madefor: "men",
            price: 135,
              bgcolor: "bg-blue-300"
        },
        {
            id: 18,
            companyname: "Adidas.com",
            productimage: "/images/nmdr.png",
            title: "Adidas NMD R1",
            description: "Futuristic design for urban adventures.",
            category: "Sneakers",
            madefor: "women",
            price: 150,
              bgcolor: "bg-white"
        },
        {
            id: 19,
            companyname: "Puma.com",
            productimage: "/images/ignite.png",
            title: "Puma Ignite",
            description: "Performance running shoes for speed and comfort.",
            category: "Running Shoes",
            madefor: "men",
            price: 130,
              bgcolor: "bg-zinc-50"
        },
        {
            id: 20,
            companyname: "Reebok.com",
            productimage: "/images/club.png",
            title: "Reebok Club C 85",
            description: "Classic tennis shoes for a retro look.",
            category: "Casual Shoes",
            madefor: "women",
            price: 80,
              bgcolor: "bg-zinc-700"
        }
    ]);
    

    return (
        <ProductContextData.Provider value={{ products }}>
            {children}
        </ProductContextData.Provider>
    );
};

export const useProductContext = () => useContext(ProductContextData);
