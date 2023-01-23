import React from 'react'
import './stats.css' 

function Stats({image, text, stat}) {
  return (
    <div className="col-4 data">
        <div className="icon"><img src={image} alt="stat"/></div>
            <div className="stats">
                <p>{text}</p>
                <p className="stat">{stat}</p>
            </div>
        </div>
  )
}

export default Stats