import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <div className="navBar">
        <div className="logo"><Link to="/">StudyPerks</Link></div>
        <nav>
            <ul>
                <li><HashLink to="/#about">About</HashLink></li>
                <li><HashLink to="/#join">Join a room</HashLink></li>
                <li><HashLink to="/#features">features</HashLink></li>
                <li><HashLink to="/#contact">contact</HashLink></li>
            </ul>
        </nav>
        <div className="btn join"><Link to="/profile">Login</Link></div>
        
    <div className="navbar-menu">
        {
          toggleMenu ? 
          <RiCloseLine size={27} onClick={()=> setToggleMenu(false)} />
          :
          <RiMenu3Line size={27} onClick={()=> setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className="navbar-menu-container">
                <div className="navbar-menu-container-links">
                <HashLink to="/#about" onClick={()=> setToggleMenu(false)}>About</HashLink>
                <HashLink to="/#join" onClick={()=> setToggleMenu(false)}>Join a room</HashLink>
                <HashLink to="/features" onClick={()=> setToggleMenu(false)}>features</HashLink>
                <HashLink to="/#contact" onClick={()=> setToggleMenu(false)}>contact</HashLink>
                <Link to="/profile" onClick={()=> setToggleMenu(false)}>Sign In</Link>
                
              </div>
            </div>
          )
        }
    </div>
    <hr />
</div>
    
  )
}

export default Navbar