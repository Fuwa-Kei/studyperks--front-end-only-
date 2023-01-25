import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './login.css'

function Login() {
  return (
    <div>
        <Navbar />
            <div className="formWrapper">
                <h3>Log In</h3>
                <form>
                    
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <button className="btn" >Log In</button>
                </form>
                <p>Don't have an account yet? <Link to="/register">Register</Link></p>
            </div>
    </div>
  )
}

export default Login