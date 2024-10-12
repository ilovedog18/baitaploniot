import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import Sidebar from './components/Sidebar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Action from './pages/Action.js';
import Data from './pages/Data.js';
import Profile from './pages/Profile.js';



function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <header className="App-header">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/data" element={<Data />} />
            <Route path="/action" element={<Action />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
