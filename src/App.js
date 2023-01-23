import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './content/Footer';
import Homepage from './content/Homepage';
import Profile from './content/Profile';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      
      <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
