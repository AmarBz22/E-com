import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  // Assuming product.rating is a number between 0 and 5
  const rating = product.rating || 0; 

  return (
    <div className='border w-[270px] h-[350px] rounded-lg overflow-hidden'>
      <div className='relative group'>
        <img 
          src={product.image} 
          alt={product.name} 
          className='w-full h-[200px] object-cover bg-[#F5F5F5]' 
        />
        <button 
          className='absolute bottom-0 left-0 w-full px-4 py-2 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          Add to Cart
        </button>
      </div>
      <p className='text-l font-bold mb-2'>{product.name}</p>
      <p className='text-lg font-semibold mb-4 text-customRed'>
        ${product.price ? product.price.toFixed(2) : 'N/A'}
      </p>
      <div className='flex items-center mb-4'>
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar 
            key={index}
            className={`text-yellow-500 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          />
        ))} 
        <p className='text-gray-400 ml-2'>(99)</p>
      </div>
    </div>
  );
};

export default ProductCard;
