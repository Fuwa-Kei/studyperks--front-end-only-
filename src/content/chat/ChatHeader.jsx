import React from 'react'
import { IoIosTimer } from 'react-icons/io'
import { SlGameController } from 'react-icons/sl'
import { BsChatSquareDots } from 'react-icons/bs'

import './chatheader.css'

function ChatHeader() {
  return (
    <div className="chatheader">
        <div className="chatIcons">
            <BsChatSquareDots />
            <IoIosTimer />
            <SlGameController/>
        </div>
    </div>
  )
}

export default ChatHeader