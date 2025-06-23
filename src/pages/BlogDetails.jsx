import React from 'react';
import BlogHeader from "../components/BlogHeader";
import SideBar from "../components/SideBar";
import BlogContent from "../components/BlogContent";
import AuthorCard from "../components/AuthorCard";

export default function BlogDetails() {
  return (
    <div className="bg-gray-50 pt-28 min-h-screen">
      <BlogHeader />

      <div className="max-w-screen-xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-5">
  <BlogContent />
  <SideBar />
</div>

      <div className="max-w-4xl mx-auto px-4">
        <AuthorCard />
      </div>
    </div>
  );
}
