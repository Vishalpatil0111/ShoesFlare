import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);
    const navigate = useNavigate()

    const handleCheckout = ()=>{
        navigate('/checkout', { state: { cart } });
    }
    return (
        <div className="pt-[35px] p-4 bg-gray-100 min-h-screen">
            <h1 className=" text-2xl font-bold mb-6 ">MY SHOPPING BAG</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Side - Product List */}
                    <div className="md:col-span-2">
                        <div className="space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-start gap-4">
                                    {/* Product Image */}
                                    <div className="w-full bg-zinc-200 shadow-xl sm:w-24 md:w-40">
                                        <img className="w-full h-auto object-contain md:object-cover" src={item.productimage} alt="Product" />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex flex-col flex-1">
                                        <h2 className="text-lg font-semibold">{item.title}</h2>
                                        <p className="text-gray-600 text-sm">Item No: {item.id}</p>
                                        <p className="text-gray-600 text-sm">Color: Black</p>
                                        <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>

                                        {/* Remove & Edit Buttons */}
                                        <div className="mt-2 flex gap-3 text-sm ">
                                            <button className="px-3 py-2 text-white rounded-md bg-red-400 hover:bg-red-500" onClick={() => removeFromCart(item.id)}>Remove</button>
                                            
                                        </div>
                                    </div>

                                    {/* Price & Quantity Controls */}
                                    <div className="flex flex-col items-end">
                                        <span className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</span>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center mt-2 border border-gray-300 rounded">
                                            <button
                                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                                                onClick={() => updateQuantity(item.id, -1)}
                                            >
                                                -
                                            </button>
                                            <span className="px-3">{item.quantity}</span>
                                            <button
                                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                                                onClick={() => updateQuantity(item.id, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Summary Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold border-b pb-2">SUMMARY</h2>

                        {/* Promo Code */}
                        <div className="mt-4">
                            <label className="block text-sm text-gray-600">Do you have a promo code?</label>
                            <div className="flex mt-1">
                                <input type="text" className="w-full p-2 border rounded-l" placeholder="Enter code" />
                                <button className="bg-black text-white px-4 rounded-r">APPLY</button>
                            </div>
                        </div>

                        {/* Price Breakdown */}
                        <div className="mt-6 space-y-2">
                            <div className="flex justify-between text-lg font-medium">
                                <span>Subtotal:</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span>Shipping:</span>
                                <span>TBD</span>
                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span>Sales Tax:</span>
                                <span>TBD</span>
                            </div>
                        </div>

                        {/* Estimated Total */}
                        <div className="mt-4 border-t pt-4 flex justify-between text-xl font-semibold">
                            <span>Estimated Total:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>

                        {/* Checkout Button */}
                        <button onClick={handleCheckout} className="mt-6 w-full bg-black text-white py-3 rounded-md text-lg hover:bg-gray-900">
                            CHECKOUT
                        </button>

                        <p className="mt-4 text-sm text-gray-500 text-center">
                            Need help? Call us at <br />
                            <span className="font-semibold">1-877-707-6272</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
