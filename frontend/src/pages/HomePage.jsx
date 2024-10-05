import React, { useState } from 'react';
import EarthCanvas from '../components/EarthCanvas';
import Sidebar from '../components/SideBar';
import Button from '../components/Button';
import OverlayTitle from '../components/OverlayTitle';
// import NewCanvas from '../components/NewCanvas';
import '../style/HomePage.css';

const HomePage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleZoom = (zoomLevel) => {
    if (zoomLevel < 6) {
      setIsOverlayVisible(false);
    } else {
      setIsOverlayVisible(true);
    }
  };

  return (
    <div className="homePage"> 
      <EarthCanvas toggleSidebar={toggleSidebar} handleZoom={handleZoom} />
      <OverlayTitle isVisible={isOverlayVisible} />
      <Sidebar isVisible={isSidebarVisible} />
      <Button />

      {/* <NewCanvas /> */}
    </div>
  );
};

export default HomePage;