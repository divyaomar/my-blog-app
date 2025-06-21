import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-white shadow-md py-5 fixed w-full z-10">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-gray-800">MyLogo</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-[22px]">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/blog/:postid" className="text-gray-600 hover:text-blue-600">Blog Details</Link>
            {/* <Link href="#" className="text-gray-600 hover:text-blue-600">Contact</a> */}
          </div>
{/* search bar */}
<div className="hidden lg:flex items-center shadow-md border border-gray-200 pl-6 pr-4 py-[19px] mt-3  h-11">
<input type="text" placeholder="Search..." className="text-[18px] border-0 focus:outline-none" />
<FaSearch className="font-xl mt-2 mb-2" />
</div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="h-9 w-9 text-gray-900" />
              ) : (
                <HiMenu className="h-9 w-9 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>





      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 text-[22px]">
          <Link to="/" className="block text-gray-600 py-2">Home</Link>
          <Link to="/blog/:postid" className="block text-gray-600 py-2">Blog Details</Link>
          {/* <a href="#" className="block text-gray-600 py-2">Contact</a> */}
       <div className="flex shadow-md border border-gray-200 w-64 h-14 my-2">
         <input type="text" placeholder="Search..." className="border-0 focus:outline-none" />
<FaSearch className="font-2xl" />
       </div>
        </div>
      )}
    </nav>
 

</>


  );
};

export default NavBar;
