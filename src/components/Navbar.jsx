import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cart } = useContext(CartContext);

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <header className="w-full bg-gray-800 shadow-sm">
                {/* Top Section - Logo Centered */}
                <div className="flex justify-center py-3">
                    <Link to="/" className="text-3xl font-bold tracking-wide whitespace-nowrap">
                        <span className="text-white">Sneaker</span><span className="text-gray-300">flare</span>
                    </Link>
                </div>

                {/* Navigation Bar */}
                <nav className="px-6 flex justify-between items-center py-3">
                    {/* Social Media Icons (Left Side) */}
                    <div className="flex space-x-4">
                        <FaFacebookF className="text-white hover:text-yellow-500 cursor-pointer" />
                        <FaTwitter className="text-white hover:text-yellow-500 cursor-pointer" />
                        <FaYoutube className="text-white hover:text-yellow-500 cursor-pointer" />
                        <FaInstagram className="text-white hover:text-yellow-500 cursor-pointer" />
                    </div>

                    {/* Desktop Navigation Links (Hidden on Mobile) */}
                    <div className="hidden md:flex gap-6 text-white font-medium">
                        <Link to="/" className="hover:text-yellow-600">Home</Link>
                        <Link to="/collection" className="hover:text-yellow-600">Collections</Link>
                        <Link to="/men" className="hover:text-yellow-600">For Him</Link>
                        <Link to="/women" className="hover:text-yellow-600">For Her</Link>
                        <Link to="/brandsproduct" className="hover:text-yellow-600">Brands</Link>
                        <Link to="/info" className="hover:text-yellow-600">More Info</Link>
                        <Link to="/cart" className="relative text-white">
                            Cart ({cart.length})
                        </Link>
                    </div>

                    {/* Login & Mobile Menu Button */}
                    <div className="flex space-x-4">
                        <button className="hidden md:block px-4 py-1 rounded-md bg-zinc-200 text-gray-800">Login</button>
                        <button className="md:hidden text-white text-3xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu - Expands on Click */}
                <div className={`md:hidden flex flex-col bg-gray-900 transition-all duration-300 ${menuOpen ? "max-h-[500px] p-4" : "max-h-0 overflow-hidden"}`}>
                    <Link to="/" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/collection" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>Collections</Link>
                    <Link to="/men" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>For Him</Link>
                    <Link to="/women" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>For Her</Link>
                    <Link to="/brandsproduct" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>Brands</Link>
                    <Link to="/info" className="text-white hover:text-yellow-500 py-2" onClick={() => setMenuOpen(false)}>More Info</Link>
                    <Link to="/cart" className="relative text-white" onClick={() => setMenuOpen(false)} >
                        Cart ({cart.length})
                    </Link>
                    <button className="w-full px-4 py-2 mt-3 rounded-md bg-zinc-200 text-gray-800" onClick={() => setMenuOpen(false)}>Login</button>
                </div>

            </header>
        </div>
    );
};

export default Navbar;
