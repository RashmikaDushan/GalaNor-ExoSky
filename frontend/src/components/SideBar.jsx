import React from 'react';
import '../style/SideBar.css'; // Ensure to have Sidebar styles here

const Sidebar = ({ isVisible }) => {
  return (
    <div className={`card ${isVisible ? 'visible' : ''}`}>
      <h1>Welcome to Title!</h1>
      <p>project summery</p>

      <h2>What is Exo Planet</h2>
      <p>An exoplanet is a planet that is outside <b>our solar system.</b> Exoplanets are typically found orbiting a star other than our Sun. 
        In the same way that our solar system contains eight planets, other stars can have many exoplanets in orbit around them.</p>
    </div>
  );
};

export default Sidebar;
