import React from 'react';
import { Link } from 'react-router-dom';
import side from '../assets/images/Side2.png';
import Emma from '../assets/images/EmmaWatson.png';
import Tom from '../assets/images/TomCruise.png';
import Will from '../assets/images/WillSmith.png';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import delivery from '../assets/icons/delivery.png';
import costumer from '../assets/icons/costumerservice.png';
import money from '../assets/icons/money.png';

const About = () => {
  return (
    <div className="p-8">
      {/* Breadcrumb */}
      <nav className="text-gray-600 text-sm ml-7 mt-12">
        <Link to="/" className="text-gray-400 mr-2">Home </Link> <span className='text-gray-400'> / </span> <span className=" ml-2">About</span>
      </nav>
      
      <div className="flex h-screen">
        {/* Left half for the text */}
        <div className="flex flex-col items-center justify-center w-1/2 p-8">
          <div className="text-left">
            <p className="text-5xl font-bold mb-6">Our Story</p>
            <p className="text-lg leading-relaxed text-justify">
              Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service solutions,
              Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
              Exclusive has more than 1 Million products to offer, growing very fast.
              Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion.
            </p>
          </div>
        </div>
        {/* Right half for the image */}
        <div className="flex items-center justify-center w-1/2">
          <img
            src={side}
            alt="Side Picture"
            className="max-h-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex justify-center space-x-16 mb-20 mt-10">
        <div className="flex flex-col items-center">
          <img src={Tom} alt="Tom Cruise" className="mb-4" />
          <p className="text-3xl font-semibold">Tom Cruise</p>
          <p className="mb-2 font-light">Founder & Chairman</p>
          <div className="flex space-x-4">
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={Emma} alt="Emma Watson" className="mb-4" />
          <p className="text-3xl font-semibold">Emma Watson</p>
          <p className="mb-2 font-light">Managing Director</p>
          <div className="flex space-x-4">
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={Will} alt="Will Smith" className="mb-4" />
          <p className="text-3xl font-semibold">Will Smith</p>
          <p className="mb-2 font-light">Product Manager</p>
          <div className="flex space-x-4">
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center space-x-20 mb-32">
        <div className="flex flex-col items-center text-center">
          <img src={delivery} alt="delivery" className="mb-4" />
          <p className="font-semibold text-2xl uppercase">Free and fast Delivery</p>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={costumer} alt="customer service" className="mb-4" />
          <p className="font-semibold text-2xl uppercase">24/7 Customer Service</p>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={money} alt="money back guarantee" className="mb-4" />
          <p className="font-semibold text-2xl uppercase">Money Back Guarantee</p>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default About;
