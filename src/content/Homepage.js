import React from 'react'
import Hero from './Hero';
import About from './About';
import Rooms from './Rooms';
import Features from './Features';
import './homepage.css'
import Navbar from './Navbar';

function Homepage() {
  return (
    <div>
    <div className="header-bg">
      <div className="header">
        <Navbar />
        <Hero />
      </div>
    </div>
      <About />
      <Rooms />
      <Features />
    </div>
  )
}

export default Homepage