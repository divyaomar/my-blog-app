import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-[30%] sticky top-24 h-fit space-y-6">
      {/* Search Box */}
      <div className="border border-gray-300 p-4 rounded-md">
        <h2 className="text-[20px] font-semibold border-l-4 border-orange-500 pl-2 mb-2">Search</h2>
        <div className="flex items-center border rounded-md px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none py-1 px-2 text-[14px]"
          />
          <button className="text-2xl"><FaSearch /></button>
        </div>
      </div>

      {/* Categories */}
      <div className="border p-4 rounded-md border-gray-300 ">
        <h2 className="text-[20px] font-semibold border-l-4 border-orange-500 pl-2 mb-2">Categories</h2>
        <ul className="text-[16px] text-gray-700 space-y-1">
          <li>General (25)</li>
          <li>Lifestyle (12)</li>
          <li>Travel (5)</li>
          <li>Design (22)</li>
          <li>Creative (8)</li>
          <li>Education (14)</li>
        </ul>
      </div>

      {/* Tags */}
      <div className="border border-gray-300  p-4 rounded-md">
        <h2 className="text-[20px] font-semibold border-l-4 border-orange-500 pl-2 mb-2">Tags</h2>
        <div className="flex flex-wrap gap-2 text-[18px] text-gray-600">
          {["App", "IT", "Design", "Tips", "Marketing"].map((tag) => (
            <span key={tag} className="bg-gray-100 px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}
