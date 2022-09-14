import React from 'react'
import Navbar from "./navbar";
import About from "./AboutSection";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
