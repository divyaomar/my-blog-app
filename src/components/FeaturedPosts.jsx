import { useEffect, useState } from "react";
import { FaUser, FaRegClock, FaRegCommentDots, FaArrowRight } from "react-icons/fa";
import postData from "../data/featuredPosts.json"; // 👈 correct way

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postData); // 👈 no fetch needed
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <p className="text-sm tracking-wide text-gray-500 uppercase">Featured Posts</p>
        <h2 className="text-2xl font-bold text-gray-800">Check Our Featured Posts</h2>
      </div>

      <div className="flex space-x-6 overflow-x-auto pb-4">
        {posts.map((post) => (
          <div key={post.id} className="min-w-[300px] max-w-xs bg-white rounded-xl shadow-lg overflow-hidden relative">
            <div className="relative h-64">
              <img src={post.image} alt="Post" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white flex flex-col justify-end">
                <div className="text-sm flex items-center gap-3 flex-wrap mb-2">
                  <div className="flex items-center gap-1"><FaUser size={12} /> <span>{post.author}</span></div>
                  <div className="flex items-center gap-1"><FaRegClock size={12} /> <span>{post.date}</span></div>
                  <div className="flex items-center gap-1"><FaRegCommentDots size={12} /> <span>{post.comments} Comments</span></div>
                </div>
                <h3 className="text-lg font-semibold leading-tight">{post.title}</h3>
                <p className="text-sm text-gray-200 mt-1 line-clamp-2">{post.description}</p>
                <button className="mt-3 text-sm flex items-center gap-1 text-white hover:underline">
                  Read More <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
