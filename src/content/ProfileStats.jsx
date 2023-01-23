import React from 'react'
import './profileStats.css'
import timer from '../assets/icons8-timer-64.png'
import fire from '../assets/icons8-fire-94.png'
import rank from '../assets/icons8-ranking-64.png'
import Stats from './components/Stats'
import icon from '../assets/icons8-cat-profile-80.png'

function ProfileStats() {
  return (
    <div>
    <div className="user">
        <div className="avatar">
            <img src={icon} alt="icon" />
        </div>
        <div className="userinfo">
            <h3>Username</h3>
            <p>email@email.co.uk</p>
        </div>
    </div>

<div className="features">
    <div className="section">
        <Stats 
            image={timer}
            text="Today"
            stat="3.7hrs"
        />
        <Stats 
            image={timer}
            text="This week"
            stat="10.2hrs"
        />
        <Stats 
            image={fire}
            text="Study Streak"
            stat="3"
        />
        <Stats 
            image={rank}
            text="Rank"
            stat="#17"
        />
    </div>
    <div className="hr"><hr /></div>
</div>
</div>


  )
}

export default ProfileStats