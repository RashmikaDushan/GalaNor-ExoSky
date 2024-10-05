import React from 'react';
import '../style/SideBar.css'; // Ensure to have Sidebar styles here

const Sidebar = ({ isVisible }) => {
  return (
    <div className={`card ${isVisible ? 'visible' : ''}`}>
      <h2>Information Card</h2>
      <p>This is a card on the right side of the screen. You can put any content here.</p>
    </div>
  );
};

export default Sidebar;
