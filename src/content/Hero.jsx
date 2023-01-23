import React from 'react'
import hero from '../assets/hero-img.png'
import './hero.css'

function Hero() {

  return (
    <div className="section hero">
        <div className="col-2 hero-text">
            <h1>Study & Earn</h1>
            <p>Join a group or create your own <br />
                Convert your study time to perks like that coffee you're <br />
                needing right now</p>
            <div className="btn ">sign up</div>
            
      </div>
        <div className="col-2 hero-img">
            <img src={hero} alt="hero" />
        </div>
    </div>
  )
}

export default Hero