import React from 'react'
import BlogCard from '../components/BlogCard'
import FeaturedPosts from '../components/FeaturedPosts'

const Home = () => {
  return (

      <div>
  <div className="pt-24"> {/* 16 = 4rem = 64px */}
      <BlogCard />
    </div>   
    <div>
      <FeaturedPosts/>
    </div>
     </div>
 
  
  )
}

export default Home