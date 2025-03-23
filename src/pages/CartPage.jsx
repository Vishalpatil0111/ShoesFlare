import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid gap-4">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src={item.productimage} alt={item.title} className="w-16 h-16 object-contain" />
                                <div>
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded"
                                    onClick={() => updateQuantity(item.id, -1)}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded"
                                    onClick={() => updateQuantity(item.id, 1)}
                                >
                                    +
                                </button>
                                <button
                                    className="ml-4 text-red-500"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-4 text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</div>
        </div>
    );
};

export default CartPage;
