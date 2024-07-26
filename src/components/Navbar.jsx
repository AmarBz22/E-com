import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link to="/" className="text-gray-800 text-xl font-bold">AmarBz</Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="hidden md:flex items-center space-x-10 font-normal">
              <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
              <Link to="/about" className="text-gray-800 hover:text-gray-600">About Us</Link>
              <Link to="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
              <Link to="/signup" className="text-gray-800 hover:text-gray-600">Signup</Link>
            </div>
          </div>
          <div className="relative flex-shrink-0 flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 px-4 py-2 pr-10 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black" />
            </div>
            <FaHeart className="text-gray-800 hover:text-gray-600 cursor-pointer" />
            <FaShoppingCart className="text-gray-800 hover:text-gray-600 cursor-pointer" />
            <FaUser className="text-gray-800 hover:text-gray-600 cursor-pointer" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
