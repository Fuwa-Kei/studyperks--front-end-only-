import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { auth } from '../../firebase'
import './chatnav.css'

function Chatnav() {

  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className="chatNavbar">
      <h3>{currentUser.displayName} chat</h3>
      <div className="leave" onClick={() => {signOut(auth); navigate("/")} }>Leave</div>
    </div>
  )
}

export default Chatnav