import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add product to cart
    const addToCart = (product) => {
        setCart((prevCart) => {

            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) return prevCart;
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const clearCart = () => {
        setCart([]);
    };
    // Remove product from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Update quantity
    const updateQuantity = (id, change) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

   

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity ,clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
