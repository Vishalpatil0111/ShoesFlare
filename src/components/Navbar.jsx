import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import { CartContext } from "./CartContext";
import Auth from "../pages/Auth";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cart } = useContext(CartContext);
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50 ">
            <header className="w-full bg-gray-800 shadow-sm">
                {/* Top Section - Logo Centered */}
                <div className="flex justify-between items-center py-3 px-4 md:px-6">
                   <div className="sm:w-full flex sm:justify-center">
                   <Link to="/" className="text-3xl  font-bold tracking-wide whitespace-nowrap">
                        <span className="text-white">Sneaker</span><span className="text-gray-300">flare</span>
                    </Link>
                   </div>

                    {/* Login & Cart */}
                    <div className="flex space-x-4 items-center">
                        <button className="text-white flex items-center space-x-2" onClick={() => setIsAuthOpen(true)}>
                            <FaUser className="text-xl" />
                        </button>
                        <Link to="/cart" className="relative text-white flex items-center space-x-2">
                            <FaShoppingCart className="text-xl" />
                            <span>({cart.length})</span>
                        </Link>
                        <Auth isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-white text-3xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex justify-center gap-6 text-white font-medium py-3">
                    <Link to="/" className="hover:text-yellow-600">Home</Link>
                    <Link to="/collection" className="hover:text-yellow-600">Collections</Link>
                    <Link to="/men" className="hover:text-yellow-600">For Him</Link>
                    <Link to="/women" className="hover:text-yellow-600">For Her</Link>
                    <Link to="/brandsproduct" className="hover:text-yellow-600">Brands</Link>
                    <Link to="/info" className="hover:text-yellow-600">More Info</Link>
                </nav>

                {/* Mobile Menu */}
                <div className={`md:hidden flex flex-col bg-gray-900 transition-all duration-300 ${menuOpen ? "max-h-[500px] p-4" : "max-h-0 overflow-hidden"}`}>
                    <Link to="/" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/collection" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>Collections</Link>
                    <Link to="/men" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>For Him</Link>
                    <Link to="/women" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>For Her</Link>
                    <Link to="/brandsproduct" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>Brands</Link>
                    <Link to="/info" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>More Info</Link>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
