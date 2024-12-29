"use client"; // Ensure this is at the top of your file

import React, { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react"; // Import signOut for logout functionality

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session} = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    signOut(); // Logs the user out
  };


  return (
    <div className="flex bg-black text-white justify-between items-center px-8 py-4 shadow-lg">
      <div className="text-2xl font-bold">
        <h1>Arsène Lupin</h1>
      </div>

      <div className="hidden sm:flex gap-6 text-lg">
        <h1 className="hover:text-gray-400 cursor-pointer">Home</h1>
        <h1 className="hover:text-gray-400 cursor-pointer">About Us</h1>
        <h1 className="hover:text-gray-400 cursor-pointer">Service</h1>
        <h1 className="hover:text-gray-400 cursor-pointer">Contact Us</h1>
      </div>

      <div className="hidden sm:flex items-center gap-4">
        {!session ? (
          <>
            <button
              onClick={() => router.push("/auth/login")}
              className="bg-gradient-to-r from-[#91ADBA] to-[#205166] border border-transparent hover:border-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300"
            >
              Signin
            </button>
            <button
              onClick={() => router.push("/auth/signup")}
              className="bg-gradient-to-r from-[#91ADBA] to-[#205166] border border-transparent hover:border-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300"
            >
              Signup
            </button>
          </>
        ) : (
          <div className="flex items-center gap-4">
            {/* Profile icon */}
            <FaUserCircle className="text-2xl cursor-pointer" onClick={() => router.push("/userinfo")} />
            
            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-[#91ADBA] to-[#205166] border border-transparent hover:border-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <div className="sm:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className="text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-2xl cursor-pointer" />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 sm:hidden">
          <h1 className="hover:text-gray-400 cursor-pointer">Home</h1>
          <h1 className="hover:text-gray-400 cursor-pointer">About Us</h1>
          <h1 className="hover:text-gray-400 cursor-pointer">Service</h1>
          <h1 className="hover:text-gray-400 cursor-pointer">Contact Us</h1>
          <div className="flex flex-col items-center gap-4 mt-4">
            {!session ? (
              <>
                <button
                  onClick={() => router.push("/auth/login")}
                  className="bg-gradient-to-r from-[#91ADBA] to-[#205166] border border-transparent hover:border-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300"
                >
                  Signin
                </button>
                <button
                  onClick={() => router.push("/auth/signup")}
                  className="bg-gradient-to-r from-[#91ADBA] to-[#205166] border border-transparent hover:border-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300"
                >
                  Signup
                </button>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <FaUserCircle className="text-2xl cursor-pointer" onClick={() => router.push("/userinfo")} />
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-[#91ADBA] to-[#205166] border border-transparent hover:border-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
