import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import './reward.css'

function Reward({id, place, drinks, points, claimReward}) {

  return (
    <div className="reward">
            <div className="claimText">
                <span>{place}</span>
                <p>{drinks}</p>
            </div>
          <Popup
            trigger={<div className="btn claim">{points}</div>}
      modal
      nested
    >
      {close => (
        <div className="modal">
          <div className="header">{place}</div>
          <div className="content">
            {' '}
            Are you sure you would like to claim your {place} voucher? 
            <br />
            (If you click claim, voucher will be sent directly to your email)
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                claimReward(id);
                close();
              }}
            >
              Claim
            </button>
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              maybe next time
            </button>
          </div>
        </div>
      )}
    </Popup>
        
        </div>
  )
}

export default Reward