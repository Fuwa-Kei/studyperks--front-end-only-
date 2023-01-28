import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './App.css';
import Chatroom from './content/chat/Chatroom';
import Footer from './content/Footer';
import Homepage from './content/Homepage';
import Login from './content/Login';
import Profile from './content/Profile';
import Register from './content/Register';
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login" />
      console.log(currentUser)
    } else {
      return <Navigate to="/chatroom" />
    }
  }

  return (
    <div className="App">
    <Router>
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chatroom" element={
        <ProtectedRoute>
          <Chatroom /></ProtectedRoute>
        } />
      <Route path="profile/chatroom" element={<Chatroom />} />
      </Routes>
      <Footer />
    </Router>             
    </div>
  );
}

export default App;
