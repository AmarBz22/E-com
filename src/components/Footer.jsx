import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import appStore from '../assets/images/appstore.png';
import QRcode from '../assets/images/Qrcode.png';
import playstore from '../assets/images/playstore.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
          <ul className="space-y-4">
            <li className="font-bold text-lg">Exclusive</li>
            <li>Subscribe</li>
            <li>Get 10% off your first Order</li>
            <li className="relative ">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2 pl-10 border rounded-lg w-full bg-black border-white"
              />
              <FaPaperPlane className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="font-bold text-lg">Support</li>
            <li>05 cité des Enseignants, Ain-yagout, Batan, Algeria.</li>
            <li>exclusive@gmail.com</li>
            <li>0696451116</li>
          </ul>
          <ul className="space-y-4">
            <li className="font-bold text-lg">Quick Links</li>
            <li><Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gray-400">Terms of Use</Link></li>
            <li><Link to="/faq" className="hover:text-gray-400">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
          <ul className="space-y-4">
            <li className="font-bold text-lg">Account</li>
            <li><Link to="/account" className="hover:text-gray-400">My Account</Link></li>
            <li><Link to="/login" className="hover:text-gray-400">Login/Register</Link></li>
            <li><Link to="/wishlist" className="hover:text-gray-400">WishList</Link></li>
            <li><Link to="/shop" className="hover:text-gray-400">Shop</Link></li>
          </ul>
          <ul className="space-y-4">
            <li className="font-bold text-lg">Download App</li>
            <li>Save $3 with App new User Only</li>
            <li className="grid grid-cols-2 gap-4">
              <div className="flex justify-center items-center">
                <img src={QRcode} alt="QR Code" className="w-[80px] h-[80px]" />
              </div>
              <div className="flex flex-col justify-center items-center space-y-2">
                <img src={appStore} alt="App Store" className="w-[110px] h-[40px]" />
                <img src={playstore} alt="Play Store" className="w-[110px] h-[40px]" />
              </div>
            </li>
            <li className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-gray-300 mr-3" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-300 mr-3" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-gray-300 mr-3" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-300 mr-3" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center text-gray-400 mt-12">
          <p className="text-sm">© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
