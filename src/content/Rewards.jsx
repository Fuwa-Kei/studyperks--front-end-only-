import React, { useState } from 'react'
import rewardsToClaim from '../assets/rewardsToClaim'
import Reward from './components/Reward'

import './rewards.css'

function Rewards() {

    const [rewards, setRewards] = useState(rewardsToClaim)

    const claimReward = (id) => {
        setRewards((rewards) => rewards.filter((reward) => reward.id !== id)
        )
    }

  return (
    <div className="rewards">
    <div className="col-2 perks">
        <h4>total perk points</h4>
        <h1>300</h1>
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