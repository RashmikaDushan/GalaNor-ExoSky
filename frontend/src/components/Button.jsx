import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Button.css'; // Assuming there is a CSS file for styling the button

const Button = ({ label, to, external, ...props }) => {
  const goToGoogle = () => {
    window.location.href = "/exoskyview";
  };

  if (external) {
    return (
      <a href={to} {...props} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link to={to} className={`button`} {...props}>
      {label}
    </Link>
  );
};

export default Button;
