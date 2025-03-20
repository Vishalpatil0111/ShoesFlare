import { createContext, useContext, useState } from "react";
import first from "../src/assets/images/first.png"

const ProductContextData = createContext();

export const ProductProvider = ({ children }) => {
    const [products] = useState([
        {
            id: 1,
            companyname: "Nike.com",
            productimage: first,
            title: "Nike Air Max",
            description: "Comfortable running shoes with great cushioning.",
            category: "Sneakers",
            madefor: "men",
            price: 120
        },
        {
            id: 2,
            companyname: "Adidas.com",
            productimage: "/images/first.png",
            title: "Adidas Ultraboost",
            description: "High-performance running shoes for all-day comfort.",
            category: "Running Shoes",
            madefor: "men",
            price: 150
        },
        {
            id: 3,
            companyname: "Puma.com",
            productimage: "/images/first.png",
            title: "Puma RS-X",
            description: "Futuristic design with maximum comfort.",
            category: "Sneakers",
            madefor: "women",
            price: 110
        },
        {
            id: 4,
            companyname: "Reebok.com",
            productimage: "/images/first.png",
            title: "Reebok Zig Kinetica",
            description: "Energy-returning sole for a comfortable walk.",
            category: "Running Shoes",
            madefor: "women",
            price: 130
        },
        {
            id: 5,
            companyname: "Nike.com",
            productimage: "/images/new.png",
            title: "Nike Blazer Mid",
            description: "Classic mid-top sneakers with vintage appeal.",
            category: "Sneakers",
            madefor: "men",
            price: 100
        },
        {
            id: 6,
            companyname: "Adidas.com",
            productimage: "images/new.png",
            title: "Adidas Forum Low",
            description: "Retro basketball shoes for everyday style.",
            category: "Casual Shoes",
            madefor: "men",
            price: 90
        },
        {
            id: 7,
            companyname: "Puma.com",
            productimage: "images/new.png",
            title: "Puma Cali",
            description: "Stylish sneakers with a modern touch.",
            category: "Sneakers",
            madefor: "women",
            price: 95
        },
        {
            id: 8,
            companyname: "Reebok.com",
            productimage: "images/new.png",
            title: "Reebok Classic",
            description: "Timeless design for all-day wear.",
            category: "Casual Shoes",
            madefor: "women",
            price: 85
        },
        {
            id: 9,
            companyname: "Nike.com",
            productimage: "images/new.png",
            title: "Nike Vaporfly",
            description: "Ultra-lightweight shoes for marathon runners.",
            category: "Running Shoes",
            madefor: "men",
            price: 200
        },
        {
            id: 10,
            companyname: "Adidas.com",
            productimage: "images/new.png",
            title: "Adidas Yeezy",
            description: "High-end fashion sneakers.",
            category: "Sneakers",
            madefor: "men",
            price: 250
        },
        {
            id: 11,
            companyname: "Puma.com",
            productimage: "images/second.png",
            title: "Puma Suede",
            description: "Classic suede sneakers.",
            category: "Casual Shoes",
            madefor: "women",
            price: 80
        },
        {
            id: 12,
            companyname: "Reebok.com",
            productimage: "images/second.png",
            title: "Reebok Nano X",
            description: "Perfect for training and workouts.",
            category: "Training Shoes",
            madefor: "men",
            price: 140
        },
        {
            id: 13,
            companyname: "Nike.com",
            productimage: "images/third.png",
            title: "Nike SB Dunk",
            description: "Skateboarding shoes with a stylish look.",
            category: "Sneakers",
            madefor: "men",
            price: 110
        },
        {
            id: 14,
            companyname: "Adidas.com",
            productimage: "images/third.png",
            title: "Adidas Superstar",
            description: "Iconic street-style sneakers.",
            category: "Casual Shoes",
            madefor: "women",
            price: 100
        },
        {
            id: 15,
            companyname: "Puma.com",
            productimage: "images/third.png",
            title: "Puma Future Rider",
            description: "Comfortable and stylish for everyday wear.",
            category: "Sneakers",
            madefor: "men",
            price: 90
        },
        {
            id: 16,
            companyname: "Reebok.com",
            productimage: "images/six.png",
            title: "Reebok Floatride",
            description: "Great for long-distance running.",
            category: "Running Shoes",
            madefor: "women",
            price: 160
        },
        {
            id: 17,
            companyname: "Nike.com",
            productimage: "images/six.png",
            title: "Nike Pegasus",
            description: "Best-selling running shoes.",
            category: "Running Shoes",
            madefor: "men",
            price: 130
        },
        {
            id: 18,
            companyname: "Adidas.com",
            productimage: "images/four.png",
            title: "Adidas NMD",
            description: "Street-style sneakers with great comfort.",
            category: "Sneakers",
            madefor: "women",
            price: 140
        },
        {
            id: 19,
            companyname: "Puma.com",
            productimage: "images/four.png",
            title: "Puma Ignite",
            description: "Performance-focused running shoes.",
            category: "Running Shoes",
            madefor: "men",
            price: 125
        },
        {
            id: 20,
            companyname: "Reebok.com",
            productimage: "images/four.png",
            title: "Reebok Club C",
            description: "Classic tennis-style shoes.",
            category: "Casual Shoes",
            madefor: "women",
            price: 75
        },
        {
            id: 21,
            companyname: "Puma.com",
            productimage: "images/second.png",
            title: "Puma Suede",
            description: "Classic suede sneakers.",
            category: "Casual Shoes",
            madefor: "women",
            price: 80
        },
        {
            id: 22,
            companyname: "Reebok.com",
            productimage: "images/second.png",
            title: "Reebok Nano X",
            description: "Perfect for training and workouts.",
            category: "Training Shoes",
            madefor: "men",
            price: 140
        },
        {
            id: 23,
            companyname: "Nike.com",
            productimage: "images/third.png",
            title: "Nike SB Dunk",
            description: "Skateboarding shoes with a stylish look.",
            category: "Sneakers",
            madefor: "men",
            price: 110
        },
        {
            id: 24,
            companyname: "Adidas.com",
            productimage: "images/third.png",
            title: "Adidas Superstar",
            description: "Iconic street-style sneakers.",
            category: "Casual Shoes",
            madefor: "women",
            price: 100
        },
        {
            id: 25,
            companyname: "Puma.com",
            productimage: "images/third.png",
            title: "Puma Future Rider",
            description: "Comfortable and stylish for everyday wear.",
            category: "Crocs",
            madefor: "men",
            price: 90
        },
        {
            id: 26,
            companyname: "Reebok.com",
            productimage: "images/six.png",
            title: "Reebok Floatride",
            description: "Great for long-distance running.",
            category: "Running Shoes",
            madefor: "women",
            price: 160
        },
        {
            id: 27,
            companyname: "Nike.com",
            productimage: "images/six.png",
            title: "Nike Pegasus",
            description: "Best-selling running shoes.",
            category: "Running Shoes",
            madefor: "men",
            price: 130
        },
        {
            id: 28,
            companyname: "Adidas.com",
            productimage: "images/four.png",
            title: "Adidas NMD",
            description: "Street-style sneakers with great comfort.",
            category: "Sneakers",
            madefor: "women",
            price: 140
        },
        {
            id: 29,
            companyname: "Puma.com",
            productimage: "images/four.png",
            title: "Puma Ignite",
            description: "Performance-focused running shoes.",
            category: "Running Shoes",
            madefor: "men",
            price: 125
        },
        {
            id: 30,
            companyname: "Reebok.com",
            productimage: "images/four.png",
            title: "Reebok Club C",
            description: "Classic tennis-style shoes.",
            category: "Casual Shoes",
            madefor: "women",
            price: 75
        }
    ]);

    return (
        <ProductContextData.Provider value={{ products }}>
            {children}
        </ProductContextData.Provider>
    );
};

export const useProductContext = () => useContext(ProductContextData);
