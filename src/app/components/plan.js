"use client";
import React from 'react';

const Plan = () => {
  return (
    <div className="flex justify-center items-center p-6 bg-black">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Basic Plan */}
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 w-full bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl font-bold text-center mb-4">Basic Plan</h1>
          <div className="text-center mb-4">
            <p className="text-lg mb-2">Invest Amount: <span className="font-semibold">300</span></p>
            <p className="text-lg mb-2">Earnings per day: <span className="font-semibold">150</span></p>
            <p className="text-lg mb-4">Total Amount: <span className="font-semibold">450</span></p>
          </div>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition">
              Invest Now
            </button>
          </div>
        </div>

        {/* Advanced Plan */}
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 w-full bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl font-bold text-center mb-4">Advanced Plan</h1>
          <div className="text-center mb-4">
            <p className="text-lg mb-2">Invest Amount: <span className="font-semibold">500</span></p>
            <p className="text-lg mb-2">Earnings per day: <span className="font-semibold">250</span></p>
            <p className="text-lg mb-4">Total Amount: <span className="font-semibold">750</span></p>
          </div>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition">
              Invest Now
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 w-full bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl font-bold text-center mb-4">Premium Plan</h1>
          <div className="text-center mb-4">
            <p className="text-lg mb-2">Invest Amount: <span className="font-semibold">1000</span></p>
            <p className="text-lg mb-2">Earnings per day: <span className="font-semibold">500</span></p>
            <p className="text-lg mb-4">Total Amount: <span className="font-semibold">1500</span></p>
          </div>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition">
              Invest Now
            </button>
          </div>
        </div>

        {/* VIP Plan */}
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 w-full bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl font-bold text-center mb-4">VIP Plan</h1>
          <div className="text-center mb-4">
            <p className="text-lg mb-2">Invest Amount: <span className="font-semibold">1500</span></p>
            <p className="text-lg mb-2">Earnings per day: <span className="font-semibold">750</span></p>
            <p className="text-lg mb-4">Total Amount: <span className="font-semibold">2250</span></p>
          </div>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition">
              Invest Now
            </button>
          </div>
        </div>

        {/* Elite Plan */}
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 w-full bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl font-bold text-center mb-4">Elite Plan</h1>
          <div className="text-center mb-4">
            <p className="text-lg mb-2">Invest Amount: <span className="font-semibold">2500</span></p>
            <p className="text-lg mb-2">Earnings per day: <span className="font-semibold">1250</span></p>
            <p className="text-lg mb-4">Total Amount: <span className="font-semibold">3750</span></p>
          </div>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition">
              Invest Now
            </button>
          </div>
        </div>

        {/* Ultimate Plan */}
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 w-full bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl font-bold text-center mb-4">Ultimate Plan</h1>
          <div className="text-center mb-4">
            <p className="text-lg mb-2">Invest Amount: <span className="font-semibold">5000</span></p>
            <p className="text-lg mb-2">Earnings per day: <span className="font-semibold">2500</span></p>
            <p className="text-lg mb-4">Total Amount: <span className="font-semibold">7500</span></p>
          </div>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#91ADBA] to-[#205166] text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition">
              Invest Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Plan;
