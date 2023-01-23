import React from 'react'
import Navbar from './Navbar'
import './profile.css'
import ProfileStats from './ProfileStats'
import Rewards from './Rewards'
import Rooms from './Rooms'

function Profile() {
  return (
    <div>
    <div className="header-bg">
      <div className="header">
        <Navbar />
        <Rooms />
      </div>
    </div>
        <ProfileStats />
        <Rewards />
    </div>
  )
}

export default Profile