import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import MyProfile from './pages/MyProfile';
import NotFound from './pages/NotFound';

function App() {
  return (
      <div>
        <Navbar />
        <div className=''>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path='/error' element={<NotFound/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
