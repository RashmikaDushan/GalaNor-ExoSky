<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Button.css'; // Assuming there is a CSS file for styling the button

const Button = ({ label, to, external,  ...props }) => {
  // If `external` is true, we use an anchor (`<a>`) tag for external links
  if (external) {
    return (
      <a href={to} {...props} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  // Otherwise, we assume it's an internal link and use `Link` from `react-router-dom`
  return (
    <Link to={to} className={`button`} {...props}>
      {label}
    </Link>
=======
import React from "react";
import "../style/Button.css"; // Ensure to have Button styles here

const Button = () => {
  const goToGoogle = () => {
    window.location.href = "/exoskyview";
  };

  return (
    <button onClick={goToGoogle} className="button">
      🚀 Explore Google
    </button>
>>>>>>> origin/earthview
  );
};

export default Button;
