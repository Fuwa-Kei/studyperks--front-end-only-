import React from 'react'
import game from '../assets/console.png'
import chat from '../assets/bubble-chat.png'
import time from '../assets/24-hours-support.png'
import './features.css'
import InfoCard from './components/InfoCard'

function Features() {
  return (
    <div id="features" className="features">

    <h3>More than just a study room </h3>

    <div className="section"> 
        <InfoCard 
            image={game}
            header="Play"
            text="Don't let your brain stop, engage in a brain stimulating game during your break"
        />
        <InfoCard 
            image={chat}
            header="Get Talking"
            text="Chat features allow you to chat with other or ask for help. Don't struggle alone"
        />
        <InfoCard 
            image={time}
            header="24/7"
            text="Availible world wide, 24/7. You will always find a group to study with no matter what time it is"
        />
    </div>
</div>
  )
}

export default Features