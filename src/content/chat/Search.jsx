import React, { useState } from 'react'
import './search.css'
import Users from './Users'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Search() {

const [username, setUsername] = useState("");
const [user, setUser] = useState(null);
const [err, setErr] = useState(false);

const handleSearch = async () => {
  const q = query(
    collection(db, "users"), 
    where("displayName", "==", username));

  try {
    const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
    });
  } catch(err) {
      setErr(true);
  }
};

const handlekey = (e) => {
  e.code === "Enter" && handleSearch();
  console.log(e)
};

const {currentUser} = useContext(AuthContext)

  return (
    <div className="chatSearch">
      <div className="searchForm">
        <input type="text" placeholder='Search for a user' onKeyDown={handlekey} onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>
        {err && <p>User not found</p>}
        <Users 
          img={currentUser.photoURL}
          name={currentUser.displayName}
         />
        
    </div>
  )
}

export default Search