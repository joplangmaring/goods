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
        <h1 className="text-4xl font-bold">A trusted investment platform</h1>
        <h2 className="text-2xl mt-2">Enables safe and transparent investments</h2>
      </div>

      {/* Description */}
      <div className="max-w-2xl text-lg mb-8">
        <p>
          Indian Money is a trusted investment
           company designed for students, offering a 
           secure and digital way to earn money. It focuses 
           on providing safe and accessible investment opportunities, 
           empowering students to grow financially while managing their studies.
        </p>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="mb-6 flex gap-4">
        <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition">
          Get Started
        </button>
        <a
          href="/Service of indian Money.pdf" // Path to your PDF file in the public folder
          target="_blank" // Open the PDF in a new tab
          rel="noopener noreferrer" // Security measure to prevent potential tab hijacking
          className="bg-gradient-to-r from-[#91ADBA] to-[#205166] text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition inline-block text-center"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;
