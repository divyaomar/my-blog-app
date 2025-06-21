import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-white shadow-md fixed w-full z-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">MyLogo</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
{/* search bar */}
<div className="hidden lg:flex items-center shadow-md border border-gray-200 pl-5 pr-3 mt-3 h-9">
<input type="text" placeholder="Search..." className="border-0 focus:outline-none" />
<FaSearch className="font-xl mt-2 mb-2" />
</div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="h-6 w-6 text-gray-800" />
              ) : (
                <HiMenu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>





      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#" className="block text-gray-700 py-2">Home</a>
          <a href="#" className="block text-gray-700 py-2">About</a>
          <a href="#" className="block text-gray-700 py-2">Contact</a>
       <div className="flex shadow-md border border-gray-200 mt-2 h-10 pl-3 w-60">
         <input type="text" placeholder="Search..." className="border-0 focus:outline-none" />
<FaSearch className="font-xl mt-3 mb-2" />
       </div>
        </div>
      )}
    </nav>
 

</>


  );
};

export default NavBar;
