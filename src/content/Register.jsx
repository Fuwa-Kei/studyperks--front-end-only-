import React from 'react'
import Navbar from './Navbar'
import {MdOutlineImageSearch} from 'react-icons/md'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage, db } from "../firebase"
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


function Register() {

  const [err, setErr] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const consfirmPassword = e.target[3].value;
    const file = e.target[4].files[0];
    
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (err) => {
          setErr(true)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
                
            }); 
            
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL:downloadURL,
            }); 

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/chatroom");

          }); 
        }
      );
    } catch(err) {
      setErr(true);
    }  
  }

  return (
    <div>
    <div className='pageBg'>
        <Navbar />
      </div>
            <div className="formWrapper">
                <h3>Register</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Display Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"  />
                    <input style={{display:"none"}}type="file" id="imageFile" />
                    <label htmlFor="imageFile"><MdOutlineImageSearch size={30} className="avatar"/> Add an avatar</label>
                    <button className="btn" >Register</button>
                    {err && <p>Opps, looks like something went wrong, please try again</p>}
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
    </div>
  )
}

export default Register