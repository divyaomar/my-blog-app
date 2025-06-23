import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { TbDotsVertical } from "react-icons/tb";
const BlogCard = () => {
  return (
    <div>

<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
  <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>

    {/* Main Large Card */}
    <div className='relative rounded-xl shadow-md sm:col-span-12 lg:col-span-8 overflow-hidden h-60 lg:h-auto'>
      <img src=" https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-3.webp" alt="" className='w-full h-full object-cover' />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-4 flex flex-col justify-end">
        <div className="text-sm text-gray-200 mb-1 flex items-center">
          <div className="flex items-center gap-1">
            <IoIosArrowDown size={14} />
            <span>Apr. 14th, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <TbDotsVertical size={14} />
            <span>Technology</span>
          </div>
        </div>
        <div className="text-3xl leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </div>
    </div>

    {/* Card 2 */}
    <div className='relative rounded-lg shadow-md lg:col-span-4 sm:col-span-6 overflow-hidden sm:h-60 lg:h-auto'>
      <img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-portrait-1.webp" alt="" className='w-full h-full object-cover' />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-4 flex flex-col justify-end">
        <div className="text-sm text-gray-200 mb-1 flex items-center">
          <div className="flex items-center gap-1">
            <IoIosArrowDown size={14} />
            <span>Apr. 14th, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <TbDotsVertical size={14} />
            <span>Security</span>
          </div>
        </div>
        <div className="text-3xl leading-tight">Sed do eiusmod tempor incididunt ut labore</div>
      </div>
    </div>

    {/* Card 3 */}
    <div className='relative rounded-lg shadow-md lg:col-span-4 sm:col-span-6 overflow-hidden sm:h-60 lg:h-auto'>
      <img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-9.webp" alt="" className='w-full h-full object-cover' />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-4 flex flex-col justify-end">
        <div className="text-sm text-gray-200 mb-1 flex items-center">
          <div className="flex items-center gap-1">
            <IoIosArrowDown size={14} />
            <span>Apr. 14th, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <TbDotsVertical size={14} />
            <span>Career</span>
          </div>
        </div>
        <div className="text-3xl leading-tight">Ut enim ad minim veniam, quis nostrud</div>
      </div>
    </div>

    {/* Card 4 */}
    <div className='relative rounded-lg shadow-md lg:col-span-4 sm:col-span-6 overflow-hidden sm:h-60 lg:h-auto'>
      <img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-7.webp" alt="" className='w-full h-full object-cover' />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-4 flex flex-col justify-end">
        <div className="text-sm text-gray-200 mb-1 flex items-center">
          <div className="flex items-center gap-1">
            <IoIosArrowDown size={14} />
            <span>Apr. 14th, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <TbDotsVertical size={14} />
            <span>Cloud</span>
          </div>
        </div>
        <div className="text-3xl leading-tight">Adipiscing elit, sed do eiusmod tempor incididunt</div>
      </div>
    </div>

    {/* Card 5 */}
    <div className='relative rounded-lg shadow-md lg:col-span-4 sm:col-span-6 overflow-hidden sm:h-60 lg:h-auto'>
      <img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-6.webp" alt="" className='w-full h-full object-cover' />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-4 flex flex-col justify-end">
        <div className="text-sm text-gray-200 mb-1 flex items-center">
          <div className="flex items-center gap-1">
            <IoIosArrowDown size={14} />
            <span>Apr. 14th, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <TbDotsVertical size={14} />
            <span>Programming</span>
          </div>
        </div>
        <div className="text-3xl leading-tight">Excepteur sint occaecat cupidatat non proident</div>
      </div>
    </div>

  </div>
</div>




    </div>
  );
};

export default BlogCard;
