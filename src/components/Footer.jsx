import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
       
        <div>
          <h2 className="text-lg font-bold text-white">About Us</h2>
          <p className="text-sm mt-3">
            Discover high-quality shoes from top brands. Elevate your style with the best footwear.
          </p>
        </div>

       
        <div>
          <h2 className="text-lg font-bold text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/collection" className="hover:text-white">Collections</Link></li>
            <li><Link to="/for-him" className="hover:text-white">For Him</Link></li>
            <li><Link to="/for-her" className="hover:text-white">For Her</Link></li>
            <li><Link to="/for-kids" className="hover:text-white">For Kids</Link></li>
            <li><Link to="/brands" className="hover:text-white">Brands</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Follow Us</h2>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      
      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ShoeStore. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
