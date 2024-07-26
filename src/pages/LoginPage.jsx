import React from 'react';
import Authentification from '../assets/images/Side.png'; 
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left half for the image */}
      <div className="flex items-center justify-center w-1/2">
        <img
          src={Authentification}
          alt="Authentification"
          style={{ width: '80%', height: '80%' }}
        />
      </div>
      
      {/* Right half for the login form */}
      <div className="flex flex-col items-center justify-center w-1/2">
        <div className="w-full max-w-md p-8">
          <h2 className="text-4xl font-bold mb-2">Log in to AmarBz</h2>
          <p className="text-lg mb-10">Enter your details below</p>
          <form>
            <div className="mb-8">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-customRed text-gray-500"
              />
            </div>
            <div className="mb-8">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-customRed text-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-3 py-2 bg-customRed text-white rounded-lg"
            >
              Log In
            </button>
          </form>
         
          <button
            type="button"
            className="w-full px-3 py-2 my-6 bg-white border border-gray-300 text-gray-700 rounded-lg flex items-center justify-center"
          >
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png" // Google logo URL
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Log In with Google
          </button>
          <div className='flex justify-center font-medium'>
            <p className='text-gray-500'>Don't have an Account ? 
                <Link to="/signup"><span className='text-gray-600'> Sign up</span></Link> 
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
