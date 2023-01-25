import React from 'react'
import Chatnav from './Chatnav'
import Search from './Search'
import './sidebar.css'

function Sidebar() {
  return (
    <div className="sidebarMain">
      <Chatnav />
      <Search />
    </div>
  )
}

export default Sidebar