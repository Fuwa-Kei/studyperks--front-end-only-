import React from 'react'

import './search.css'
import Users from './Users'

function Search() {
  return (
    <div className="chatSearch">
      <div className="searchForm">
        <input type="text" placeholder='Search for a user'/>
      </div>
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        
    </div>
  )
}

export default Search