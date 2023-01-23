import React from 'react'
import './room.css'

function room({capacity, timer, subject}) {
  return (
    <div className="col-4">
        <p>Users: {capacity}</p>
        <p>Timer: {timer}</p>
        <p>Subject: {subject}</p>
    </div>
  )
}

export default room