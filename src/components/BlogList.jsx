import blogData from "../data/blogs.json";

export default function BlogList() {
  return (
    <div className="bg-white py-14 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-10">
        <p className="uppercase text-gray-500 text-[16px]">Latest Posts</p>
        <h2 className="text-[26px] font-bold text-gray-800">
          Check Our Latest Posts
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center max-w-screen-xl mx-auto">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-[420px] h-[470px]"
          >
            <img
              src={blog.cover}
              alt="Blog cover"
              className="w-full h-[230px] object-cover"
            />
            <div className="p-4">
              <p className="text-[13px] text-gray-500 mb-1">{blog.category}</p>
              <h3 className="text-[16px] font-semibold text-gray-800 mb-3">
                {blog.title}
              </h3>
              <div className="flex items-center gap-3">
                <img
                  src={blog.authorImg}
                  alt={blog.author}
                  className="w-8 h-8 rounded-full"
                />
                <div className="pt-2">
                  <p className="text-[13px] font-medium text-gray-800">
                    {blog.author}
                  </p>
                  <p className="text-[10px] text-gray-500">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
