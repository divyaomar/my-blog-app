import React from 'react'
import BlogCard from '../components/BlogCard'
import FeaturedPosts from '../components/FeaturedPosts'
import CreateContent from '../components/CreateContent'
import BlogList from '../components/BlogList'

const Home = () => {
  return (

      <div>
  <div className="pt-44"> {/* 16 = 4rem = 64px */}
      <BlogCard />
    </div>   
    <div>
      <FeaturedPosts/>
    </div>
    <div>
      <CreateContent/>
    </div>
    <div>
      <BlogList/>
    </div>
     </div>
 
  
  )
}

export default Home