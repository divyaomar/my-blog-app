 import React from 'react'
import { Link } from 'react-router-dom';
 
 const BlogHeader = () => {
   return (
      <div className="bg-white py-10 px-4 text-center">
      {/* Breadcrumb */}
      <div className="text-[18px] text-gray-500 flex justify-center items-center space-x-1 mb-4 hover:text-gray-950">
        <span><Link to='/'>Home</Link></span>
       
        <span>/</span>
        <span className="text-orange-500 font-semibold">Blog Details</span>
      </div>

      {/* Title */}
      <h1 className="text-[25px] font-bold text-gray-800 mb-2">Blog Details</h1>

      {/* Description */}
      <p className="text-gray-600 text-[16px] max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>
   )
 }
 
 export default BlogHeader;


 

 
