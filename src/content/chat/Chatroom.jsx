import React from 'react'
import ChatArea from './ChatArea'
import Sidebar from './Sidebar'
import './chatroom.css'
import Navbar from '../Navbar'

function Chatroom() {
  return (
  <div>
    <Navbar />
    <div className="chatRoomMain">
      
        <div className="chatRoom">
            <Sidebar />
            <ChatArea />
        </div>
    </div>
  </div>
  )
}

export default Chatroom