import { useNavigate } from "react-router-dom";

const BuyNow = ({ product }) => {
    const navigate = useNavigate();

    const handleCheckout = ()=>{
        navigate('/checkout', { state: { product } });
    }
    return (
        <button onClick={handleCheckout} className="bg-blue-600 text-white px-4 py-2 rounded">
            Buy Now
        </button>
    );
};

export default BuyNow;
