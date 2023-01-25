import React from 'react'
import { CiImageOn } from 'react-icons/ci'
import { IoMdSend } from  'react-icons/io'
import './input.css'

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Say someting.." />
      <div className="send">
        <input type="file" id="file" style={{display: "none"}}/>
        <label htmlFor="file"><CiImageOn /></label>
        
        <IoMdSend />
      </div>
    </div>
  )
}

export default Input