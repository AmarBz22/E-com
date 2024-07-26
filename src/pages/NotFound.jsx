import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='p-8'>
      <nav className="text-gray-600 text-sm ml-7 mt-12">
        <Link to="/" className="text-gray-400 mr-2">Home </Link> <span className='text-gray-400'> / </span> <span className=" ml-2">404 Error</span>
      </nav>
      <div className='flex flex-col justify-center items-center mt-20 space-y-10'>
            <p className='text-7xl font-semibold'>
                404 <span className='mx-4'>Not</span>  Found
            </p>
            <p className=''>
                Your visited page not found you may go Home
            </p>
            <div className='flex justify-center mb-10 '>
                <Link to='/'>
                    <button className='bg-customRed text-slate-100 py-4 text-lg rounded-md px-14 font- my-4'>Back to Home Page</button>
                </Link>
                
            </div>
      </div>
    </div>
  )
}

export default NotFound