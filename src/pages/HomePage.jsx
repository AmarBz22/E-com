import React from 'react';
import sampleImage from '../assets/images/sampleImage.png'; 
import ProductCard from '../components/ProductCard';
import { products } from '../constants/product';
import CategoriesGrid from '../components/CategoryGrid';
import CenterImage from '../assets/images/BigImage.png';
import Play5 from '../assets/images/PS5.png';
import perfume from '../assets/images/perfume.png';
import speakrs from '../assets/images/Speakers.png';
import women from '../assets/images/womenCollection.png';
import delivery from '../assets/icons/delivery.png';
import costumer from '../assets/icons/costumerservice.png';
import money from '../assets/icons/money.png';

const HomePage = () => {
  return (
    <div className='px-4 md:px-8'>
      <div className='flex justify-end mb-8 mt-2'>
        <img src={sampleImage} alt="Sample" className='mr-4' />
      </div>
      <div className="flex mr-5 space-x-4 items-center">
        <div className='bg-customRed w-6 h-12 rounded-md'></div>
        <p className='text-lg text-customRed font-semibold'>Today's</p>
      </div>
      <br />
      <div className='flex flex-row items-center'>
        <p className='text-4xl font-bold mr-24'>Flash Sales</p>
        <div className='flex items-center space-x-4 mb-4'>
          <div className='flex flex-col items-center '>
            <p className='text-sm font-semibold'>Days</p>
            <p className='text-5xl font-semibold'>03</p>
          </div>
          <p className='text-5xl font-semibold text-customRed'>:</p>
          <div className='flex flex-col items-center'>
            <p className='text-sm font-semibold'>Hours</p>
            <p className='text-5xl font-semibold'>23</p>
          </div>
          <p className='text-5xl font-semibold text-customRed'>:</p>
          <div className='flex flex-col items-center'>
            <p className='text-sm font-semibold'>Minutes</p>
            <p className='text-5xl font-semibold'>19</p>
          </div>
          <p className='text-5xl font-semibold text-customRed'>:</p>
          <div className='flex flex-col items-center'>
            <p className='text-sm font-semibold'>Seconds</p>
            <p className='text-5xl font-semibold'>56</p>
          </div>
        </div>
      </div>
      <br />
      <div className='flex justify-center gap-[30px]'>
        {products.slice(0, 4).map((product) => (
          <div className='w-[270px]'> {/* Ensure the width is consistent */}
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
      <br />
      <div className='flex justify-center '>
        <button className='bg-customRed text-slate-100 py-4 text-lg rounded-md px-14 font-semibold my-4'>View All Products</button>
      </div>
        <br />
      <div className="flex justify-center my-8">
      <hr style={{ width: '1170px', borderTop: '1px solid #D5DBDB' }} />
      </div>
      <div className="flex mr-5 space-x-4 items-center mt-16 mb-8">
        <div className='bg-customRed w-6 h-12 rounded-md'></div>
        <p className='text-lg text-customRed font-semibold'>Categories</p>
      </div>
      <div className='flex flex-row items-center'>
        <p className='text-4xl font-bold mb-6'>Browse Categories</p>
      </div>
      <div className="px-4 md:px-8">
      <CategoriesGrid />
      </div>
      <br />
      <div className="flex justify-center my-8">
      <hr style={{ width: '1170px', borderTop: '1px solid #D5DBDB' }} />
      </div>
      <div className="flex mr-5 space-x-4 items-center mt-16 mb-8">
        <div className='bg-customRed w-6 h-12 rounded-md'></div>
        <p className='text-lg text-customRed font-semibold'>This Month</p>
      </div>
      <div className="flex flex-row items-center justify-between mb-6">
        <p className="text-4xl font-bold">
            Best Selling Products
        </p>
        <button className="bg-customRed text-slate-100 py-2 text-lg rounded-md px-14 font-semibold">
            View All
        </button>
      </div>
      
      <div className='flex justify-center gap-[30px] my-14'>
        {products.slice(4,8 ).map((product) => (
          <div className='w-[270px]'> {/* Ensure the width is consistent */}
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
      <div className='flex justify-center w-auto h-auto my-20'> 
        <img src={CenterImage} alt="" />
      </div>
      <div className="flex mr-5 space-x-4 items-center mt-16 mb-8">
        <div className='bg-customRed w-6 h-12 rounded-md'></div>
        <p className='text-lg text-customRed font-semibold'>Our Products</p>
      </div>
      <div className='flex justify-center flex-wrap gap-[30px] mt-10'>
        {products.slice(8,16 ).map((product) => (
          <div className='w-[270px]'> {/* Ensure the width is consistent */}
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
      <br />
      <div className='flex justify-center '>
        <button className='bg-customRed text-slate-100 py-4 text-lg rounded-md px-14 font-semibold my-4'>View All Products</button>
      </div>
        <br />  

      <div className="flex mr-5 space-x-4 items-center mt-16 mb-8">
        <div className='bg-customRed w-6 h-12 rounded-md'></div>
        <p className='text-lg text-customRed font-semibold'>Featured </p>
      </div>
      <div className='flex flex-row items-center'>
        <p className='text-4xl font-bold mb-6'>New Arrival</p>
      </div>
      <div className='grid grid-cols-2 gap-2 mb-36'>
        <div className='flex justify-center items-center'>
            <img src={Play5} alt="Play Station5" />
        </div>
        <div className='flex flex-col justify-center items-center space-y-2 '>
            <img src={women} alt="Women Collections" />
            <div className='flex flex-row justify-center items-center space-x-7'>
                <img src={speakrs} alt="speakers" />
                <img src={perfume} alt="perfume" />
            </div>
        </div>
      </div>
      <div className='flex justify-center items-center space-x-20 mb-20'>
        <div className='flex flex-col items-center text-center'>
            <img src={delivery} alt="delivery" className='mb-6' />
            <p className='font-semibold text-2xl uppercase'>Free and fast Delivery</p>
            <p>Free delivery for all orders over $140</p>
        </div>
        <div className='flex flex-col items-center text-center'>
            <img src={costumer} alt="costumer services " className='mb-6' />
            <p className='font-semibold text-2xl uppercase'>24/7 Customer Service</p>
            <p>Friendly 24/7 customer support</p>
        </div>
        <div className='flex flex-col items-center text-center'>
            <img src={money} alt="money" className='mb-6' />
            <p className='font-semibold text-2xl uppercase'>Money Back Guarantee</p>
            <p>We return money within 30 days</p>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
