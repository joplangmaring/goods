import React from 'react'

const Navbar = () => {
    return (
        <div className='flex bg-black text-white justify-between items-center px-8 py-4 shadow-lg'>
            {/* Logo Section */}
            <div className='text-2xl font-bold'>
                <h1>Arsène Lupin</h1>
            </div>

            {/* Navigation Links */}
            <div className='flex gap-6 text-lg'>
                <h1 className='hover:text-gray-400 cursor-pointer'>Home</h1>
                <h1 className='hover:text-gray-400 cursor-pointer'>About Us</h1>
                <h1 className='hover:text-gray-400 cursor-pointer'>Service</h1>
                <h1 className='hover:text-gray-400 cursor-pointer'>Contact Us</h1>
            </div>

            {/* Call-to-Action Button */}
            <div className='bg-gradient-to-r from-[#91ADBA] to-[#205166] border border-transparent hover:border-white rounded-full p-[10px] transition-all duration-300'>
                <button className='text-white text-lg font-semibold'>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Navbar
