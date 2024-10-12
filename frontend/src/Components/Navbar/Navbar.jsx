import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Strides</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#solution">Solution</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#referrals">Referrals</a></li>
      </ul>
      <div className="user-profile">
        <span className="user-name">Chloe Milagros</span>
        <div className="user-icon"></div>
      </div>
    </nav>
  );
}

export default Navbar;
