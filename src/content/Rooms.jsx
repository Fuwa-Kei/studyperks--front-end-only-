import React from 'react'
import Room from './components/Room'
import './rooms.css'

function Rooms() {
  return (
    <div id="join" className="features">

    <h3>Join a room</h3>

    <div className="section">
        <Room 
            capacity = "6/10"
            timer = "30 | 5"
            subject = "General"
        />
        <Room 
            capacity = "13/20"
            timer = "30 | 5"
            subject = "Chemistry"
        />
        <Room 
            capacity = "7/10"
            timer = "50 | 10"
            subject = "Biology"
        />
        <Room 
            capacity = "3/10"
            timer = "20 | 10"
            subject = "Maths"
        />
    </div>

    <div className="room-links">
        <div className="btn">create your own</div>
        <a href="/">See more availiable rooms <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
    <div className="hr"><hr /></div>
</div>


  )
}

export default Rooms