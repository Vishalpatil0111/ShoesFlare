import { useLocation, useNavigate } from "react-router-dom";
import { useState , useContext } from "react";

import { CartContext } from "../components/CartContext";
const Checkout = () => {
    const location = useLocation();
    const { product, cart } = location.state || {}; // Getting product or cart data
    const navigate = useNavigate();
    const { clearCart } = useContext(CartContext); 

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        paymentScreenshot: null,
    });

    // Handle form input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Screenshot Upload
    const handleFileChange = (e) => {
        setFormData({ ...formData, paymentScreenshot: e.target.files[0] });
    };
  

    // Handle Order Submission
    const handleOrderSubmit = () => {
        if (!formData.name || !formData.email || !formData.address || !formData.postalcode || !formData.paymentScreenshot) {
            alert("Please fill in all required fields and upload a payment screenshot.");
            return;
        }
        clearCart();
        navigate("/order-success");
    };

    // If no product or cart is found
    if (!product && !cart) return <p>No items for checkout.</p>;

    return (
        <div className="container mx-auto p-6 sm:mt-[50px]">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Side: Billing Details */}
                <div className="bg-white p-6 shadow rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Billing Details</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        <textarea
                            name="address"
                            placeholder="Shipping Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        <input
                            type="number"
                            name="Postal Code"
                            placeholder="Postal"
                            value={formData.postalcode}
                            onChange={handleChange}
                            className="w-1/2 p-2 border rounded"
                            required
                        />
                    </form>
                </div>

                {/* Right Side: Order Summary & Payment */}
                <div className="bg-gray-100 p-6 shadow rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                    {/* Display Multiple Products */}
                    {cart
                        ? cart.map((item) => (
                              <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                  <img src={item.productimage} alt={item.title} className="w-20 h-20" />
                                  <div>
                                      <h4 className="text-md font-semibold">{item.title}</h4>
                                      <p className="text-gray-600">
                                          ${item.price.toFixed(2)} x {item.quantity}
                                      </p>
                                  </div>
                              </div>
                          ))
                        : product && (
                              <div className="flex items-center space-x-4 border-b pb-4">
                                  <img src={product.productimage} alt={product.title} className="w-20 h-20" />
                                  <div>
                                      <h4 className="text-md font-semibold">{product.title}</h4>
                                      <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                  </div>
                              </div>
                          )}

                    {/* UPI QR Code Payment */}
                    <div className="text-center mt-4">
                        <p className="text-gray-600">Scan & Pay via UPI</p>
                        <img src="/Payment/QR.jpg" alt="UPI QR Code" className="mx-auto w-70 h-60 object-cover" />
                    </div>

                    {/* Upload Screenshot */}
                    <div className="mt-4">
                        <p className="text-gray-600">Upload Payment Screenshot</p>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Submit Order */}
                    <button
                        onClick={handleOrderSubmit}
                        className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-4"
                    >
                        Submit Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
