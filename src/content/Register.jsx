import React from 'react'
import Navbar from './Navbar'
import {MdOutlineImageSearch} from 'react-icons/md'
import './register.css'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, storage } from "../firebase"
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Register() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [err, setErr] = useState(false)

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const consfirmPassword = e.target[3].value;
    const avatar = e.target[4].files[0];
    
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      

const storage = getStorage();
const storageRef = ref(storage, 'images/rivers.jpg');

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);

    } catch(err) {
      setErr(true)
    }
    
       
}

  return (
    <div>
        <Navbar />
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