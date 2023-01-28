import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './login.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth, storage, db } from "../firebase"

function Login() {

  const [err, setErr] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/profile")
    } catch(err) {
      setErr(true);
      console.log(err)
    }
    
       
}

  return (
    <div>
    <div className='pageBg'>
        <Navbar />
      </div>
            <div className="formWrapper">
                <h3>Log In</h3>
                <form onSubmit={handleSubmit}>
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