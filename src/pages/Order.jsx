import { useNavigate } from "react-router-dom";

const Order = () => {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-6 pt-[35px] text-center">
            <h2 className="text-3xl font-bold text-green-600">🎉 Order Placed Successfully!</h2>
            <p className="mt-2 text-gray-600">Thank you for your order. We will contact you soon.</p>
            <button
                onClick={() => navigate("/")}
                className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
                Go to Home
            </button>
        </div>
    );
};

export default Order;
