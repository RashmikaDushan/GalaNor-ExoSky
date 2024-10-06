import React, { useState, useEffect } from 'react';
import EarthCanvas from '../components/EarthCanvas';
import Sidebar from '../components/SideBar';
import Button from '../components/Button';
import OverlayTitle from '../components/OverlayTitle';
import '../style/HomePage.css';

const HomePage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const handleZoom = (zoomLevel) => {
    setIsOverlayVisible(zoomLevel > 6);
  };

  useEffect(() => {
    // Show the button only if the sidebar is visible
    if (isSidebarVisible) {
      const timer = setTimeout(() => {
        setIsButtonVisible(true); // Show button after 0.5 seconds
      }, 100);

      // Clean up the timeout if the sidebar is not visible anymore
      return () => {
        clearTimeout(timer);
        setIsButtonVisible(false); // Hide the button if sidebar is closed
      };
    } else {
      setIsButtonVisible(false); // Hide button immediately if sidebar is closed
    }
  }, [isSidebarVisible]); // Run effect when sidebar visibility changes

  return (
    <div className="homePage"> 
      <EarthCanvas toggleSidebar={toggleSidebar} handleZoom={handleZoom} />
      <OverlayTitle isVisible={isOverlayVisible} />
      <Sidebar isVisible={isSidebarVisible} />
      {isButtonVisible && ( // Conditionally render the button
        <Button to="/exoskyview" label={'Sky View 🚀'}/>
      )}
    </div>
  );
};

export default HomePage;
