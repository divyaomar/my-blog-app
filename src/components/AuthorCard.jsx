import React from 'react';
export default function AuthorCard() {
  return (
    <div className="border rounded-lg p-6 flex items-center gap-4 mt-10 bg-white shadow-sm">
      <img
        src="https://randomuser.me/api/portraits/women/45.jpg"
        alt="author"
        className="w-25 h-25 rounded-full border-2 border-orange-400"
      />
      <div>
        <h4 className="text-[20px] font-semibold">Sarah Anderson</h4>
        <p className="text-[15px] text-gray-500">Senior Tech Writer & Developer Advocate</p>
        <p className="text-gray-700 text-[13px] mt-2">
          Passionate about creating content that bridges the gap between devs and users.
        </p>
      </div>
    </div>
  );
}
