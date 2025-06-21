
// import NabbarF from "./components/NabbarF";
import { Route, Routes } from "react-router-dom";
import BlogDetails from './pages/BlogDetails'
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  

  return (
   <div className="">
    <NavBar/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:postid" element={<BlogDetails/>} />

      </Routes>  
   <Footer/>
   </div>
  );
}
 