import React from 'react'
import './infoCard.css'

function InfoCard({image, header, text}) {
  return (

        <div className="col-3">
            <div className="feature">"
                <img src={image} alt="feature"/>
            </div>
            <div className="col-3-text">
                <h4>{header}</h4>
                <p>{text}</p>
            </div>
        </div>

  )
}

export default InfoCard