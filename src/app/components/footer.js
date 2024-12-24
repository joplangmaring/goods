import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 border-t border-white">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:underline hover:text-pink-500"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://wa.me" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:underline hover:text-green-500"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Indian Money. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
