import React from 'react'
import icon from '../../assets/icons8-cat-profile-80.png'
import './users.css'

function Users({img, name}) {
  return (
    <div className="userChat">
        <img src={img} alt="icon" />
        <div className="chatUser">
          <h4>{name}</h4>
          <p>latest chat goes here</p>
        </div>
        
      </div>
  )
}

export default Users