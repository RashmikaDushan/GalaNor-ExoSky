// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Space Exploration App</h1>
      <Link to="/earth">Explore Earth</Link>  {/* Link to Earth Page */}
      <br />
      <Link to="/planet">Explore Another Planet</Link>  {/* Link to Planet Page */}
    </div>
  );
};

export default HomePage;
