import React from 'react'
import onlineChat from '../assets/online-chat.png'
import timer from '../assets/timer.png'
import coffee from '../assets/coffee.png'
import './about.css'
import InfoCard from './components/InfoCard'

function About() {
  return (
    
    <div id="about" className="features">

    <h3>Improve your study </h3>

    <div className="section"> 
        <InfoCard 
            image={onlineChat}
            header="Alone or in a group"
            text="Study in a group with other people to help boost your productivity and improve your study flow  
            Or alone for full concentration mode"
        />
        <InfoCard 
            image={timer}
            header="Pomodoro Style"
            text="One of the best methods for studying. 
            You are in control, set your desired time blocks and start"
        />
        <InfoCard 
            image={coffee}
            header="Get rewarded"
            text="Your total time studied will be converted to perk points allowing you to exchange in at out partnered cafes for a coffee or even a bubble tea"
        />
    </div>
    <div className="hr"><hr /></div>
</div>
  )
}

export default About