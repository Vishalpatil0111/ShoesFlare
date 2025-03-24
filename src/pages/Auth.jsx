import { useState } from "react";


import LoginUser from "../components/LoginUser";
import RegisterUser from "../components/RegisterUser";

const Auth = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 w-full bg-opacity-50 backdrop-blur-lg flex justify-center items-center z-50">
            {isLogin ? (
                 <LoginUser onClose={onClose} onSwitch={() => setIsLogin(false)}/>
            ) : (
                <RegisterUser onClose={onClose} onSwitch={() => setIsLogin(true)} />
            )}
        </div>
    );
};

export default Auth;
