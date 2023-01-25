import React from 'react'
import icon from '../../assets/icons8-cat-profile-80.png'
import './message.css'

function Message() {
  return (
    <div className="message owner">
        <div className="messageInfo">
            <img src={icon} alt="icon" />
            <p>Just now</p>
        </div>
        <div className="messageContent">
          <p>Hello</p>  
          <img src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="japan" />
        </div>  
        
    </div>
  )
}

export default Message