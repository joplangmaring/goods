import React from 'react';
import bg from '../../../public/bgplan.jpg'; // Import the background image

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white text-center p-6"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg.src})`, // Linear gradient with 80% opacity
        backgroundSize: 'cover',             // Ensure the background image covers the container
        backgroundPosition: 'center top',    // Adjust the background position
        backgroundRepeat: 'no-repeat',       // Prevent background image from repeating
        backgroundAttachment: 'fixed',       // Make the background image stay fixed while scrolling
      }}
    >
      {/* Headings */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold">
          A trusted investment platform
        </h1>
        <h2 className="text-2xl mt-2">
          Enables safe and transparent investments
        </h2>
      </div>

      {/* Description */}
      <div className="max-w-2xl text-lg mb-8">
        <p>
          A trusted investment platform is a secure and reliable online service
          that enables users to invest in various financial instruments such as
          stocks, mutual funds, cryptocurrencies, and real estate. These platforms
          prioritize transparency, user data protection, and regulatory compliance,
          offering tools for portfolio management, real-time insights, and financial
          growth opportunities. Trusted platforms often provide accessible customer
          support, low fees, and a user-friendly interface to cater to both beginners
          and experienced investors.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <div className="mb-6">
        <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
