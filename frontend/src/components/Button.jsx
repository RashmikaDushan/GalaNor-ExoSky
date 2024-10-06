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
  );
};

export default Button;
