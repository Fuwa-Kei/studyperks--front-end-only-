
import React, { useState } from 'react'
import rewardsToClaim from '../assets/rewardsToClaim'
import Popup from './components/Popup';
import Reward from './components/Reward'

import './rewards.css'


function Rewards() {

    const [rewards, setRewards] = useState(rewardsToClaim)
    const [pointsAvailible, setPoints] = useState(300)


    const claimReward = (id) => {
        if (pointsAvailible > rewards[id-1].points) {
            setRewards((rewards) => rewards.filter((reward) => reward.id !== id)
            );
            setPoints(pointsAvailible - rewards[id-1].points);
        } else {
            <Popup />
           alert("Sorry not enough points")
        }
    }

  return (
    <div className="rewards">
    <div className="col-2 perks">
        <h4>total perk points</h4>
        <h1>{pointsAvailible}</h1>
        <p>Total hours studied: 17.7hrs</p>
    </div>
    <div className="col-2 claims">
        {rewards.map(reward => (
            <Reward 
                key={reward.id}
                id={reward.id}
                place={reward.place}
                drinks={reward.drinks}
                points={reward.points}
                claimReward={claimReward}
        />
        ))}
    </div>
</div>
  )
}

export default Rewards