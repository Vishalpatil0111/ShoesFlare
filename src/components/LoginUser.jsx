import { motion } from "framer-motion";

const LoginUser = ({ onClose, onSwitch }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative"
        >
            <button 
                onClick={onClose} 
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-lg"
            >
                ✕
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <form className="space-y-4">
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
                <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg" />
                <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700">
                    Login
                </button>
            </form>
            <p className="text-sm text-gray-600 text-center mt-3">
                Don't have an account? 
                <span className="text-blue-600 cursor-pointer" onClick={onSwitch}> Register</span>
            </p>
        </motion.div>
    );
};

export default LoginUser;
