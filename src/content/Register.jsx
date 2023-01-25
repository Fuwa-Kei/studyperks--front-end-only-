import React from 'react'
import Navbar from './Navbar'
import {MdOutlineImageSearch} from 'react-icons/md'
import './register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
        <Navbar />
            <div className="formWrapper">
                <h3>Register</h3>
                <form>
                    <input type="text" placeholder="Display Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"  />
                    <input style={{display:"none"}}type="file" id="imageFile" />
                    <label htmlFor="imageFile"><MdOutlineImageSearch size={30} className="avatar"/> Add an avatar</label>
                    <button className="btn" >Register</button>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
    </div>
  )
}

export default Register