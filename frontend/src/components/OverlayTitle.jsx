import React from 'react';
import '../style/OverlayTitle.css'; // Ensure to have OverlayTitle styles here

const OverlayTitle = ({ isVisible }) => {
  return (
    <div className="overlay-title" style={{ opacity: isVisible ? 1 : 0 }}>
      The title
    </div>
  );
};

export default OverlayTitle;
