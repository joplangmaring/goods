
"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-black text-white justify-between items-center px-8 py-4 shadow-lg">
      {/* Logo Section */}
      <div className="text-2xl font-bold">
        <h1>Arsène Lupin</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden sm:flex gap-6 text-lg">
        <h1 className="hover:text-gray-400 cursor-pointer">Home</h1>
        <h1 className="hover:text-gray-400 cursor-pointer">About Us</h1>
        <h1 className="hover:text-gray-400 cursor-pointer">Service</h1>
        <h1 className="hover:text-gray-400 cursor-pointer">Contact Us</h1>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="hidden sm:flex items-center gap-4">
        <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] border border-transparent hover:border-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300">
          Signin
        </button>
        <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] border border-transparent hover:border-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300">
          Signup
        </button>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="sm:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className="text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-2xl cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 sm:hidden">
          <h1 className="hover:text-gray-400 cursor-pointer">Home</h1>
          <h1 className="hover:text-gray-400 cursor-pointer">About Us</h1>
          <h1 className="hover:text-gray-400 cursor-pointer">Service</h1>
          <h1 className="hover:text-gray-400 cursor-pointer">Contact Us</h1>
          <div className="flex flex-col items-center gap-4 mt-4">
            <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] border border-transparent hover:border-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300">
              Signin
            </button>
            <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] border border-transparent hover:border-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300">
              Signup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
