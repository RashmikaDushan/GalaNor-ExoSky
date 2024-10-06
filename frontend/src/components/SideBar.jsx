import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import '../style/SideBar.css';

const Sidebar = ({ isVisible }) => {
  return (
    <div className={`card ${isVisible ? 'visible' : ''}`}>
      <h1>Welcome to Title!</h1>
      <p>Project summary</p>

      <h2>Navigation</h2>
      <ul>
        {/* Links to different sections or pages */}
        <li><Link to="/about-exoplanet">What is an Exoplanet?</Link></li>
        <li><Link to="/discoveries">Recent Discoveries</Link></li>
        <li><Link to="/missions">Space Missions</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <h2>What is Exoplanet?</h2>
      <p>An exoplanet is a planet that is outside <b>our solar system.</b> Exoplanets are typically found orbiting a star other than our Sun. 
        In the same way that our solar system contains eight planets, other stars can have many exoplanets in orbit around them.</p>
    </div>
  );
};

export default Sidebar;
