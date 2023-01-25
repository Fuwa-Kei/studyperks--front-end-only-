import Input from './Input'
import React from 'react'
import './chatarea.css'
import ChatHeader from './ChatHeader'
import Messages from './Messages'

function ChatArea() {
  return (
    <div className="chatArea">
      <div className="chatheader">
        <ChatHeader />
      </div>
      <div className="messageArea">
        <Messages />
      </div>
      <div className="inputArea">
        <Input />
      </div>
    </div>

  )
}

export default ChatArea