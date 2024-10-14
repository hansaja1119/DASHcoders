import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.scss';
import profilepic from '../../Icons//profilepic.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>ReMeD Predict</h2>
      </div>
      <ul className="nav-links">
         <li><Link to="/">Overview</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/documents">Documents</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
      <div className="user-profile">
        <span className="user-name">Hansaja</span>
        <img src={profilepic} alt="User Profile" className="user-icon" />
        
      </div>
    </nav>
  );
}

export default Navbar;
