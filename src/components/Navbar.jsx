import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="w-full bg-gray-800 flex-col flex shadow-sm">
            <div className=" flex justify-center">
                <Link to="/" className="text-3xl   font-bold tracking-wide">
                    <span className="text-white">Sneaker</span><span className="text-gray-300">flare</span>
                </Link>
            </div>

            <nav className="py-3 px-6 flex justify-between items-center">
                <div className="py-2 flex  items-center px-4">

                    <div className="flex space-x-4">
                        <FaFacebookF className="text-white hover:text-yellow-500 cursor-pointer" />
                        <FaTwitter className="text-white hover:text-yellow-500 cursor-pointer" />
                        <FaYoutube className="text-white hover:text-yellow-500 cursor-pointer" />
                        <FaInstagram className="text-white hover:text-yellow-500 cursor-pointer" />
                    </div>
                </div>
                <div className="gap-4 w-1/2 text-white md:justify-evenly hidden md:flex space-x-6 font-medium">
                    <Link to="/" className="hover:text-yellow-600">Home</Link>
                    <Link to="/collection" className="hover:text-yellow-600">Collections</Link>
                    <Link to="/men" className="hover:text-yellow-600">For Him</Link>
                    <Link to="/women" className="hover:text-yellow-600">For Her</Link>    
                    <Link to="/brandsproduct" className="hover:text-yellow-600">Brands</Link>     
                    <Link to="/info" className="hover:text-yellow-600">More Info</Link>
                </div>

                <div className="flex space-x-4 pr-5">
                    <button className="px-4 py-1 rounded-md bg-zinc-200">Login</button>
                    <FaBars className="text-white hover:text-black cursor-pointer md:hidden" />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
