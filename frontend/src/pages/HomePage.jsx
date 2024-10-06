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
    setIsOverlayVisible(zoomLevel > 6);
  };

  return (
    <div className="homePage"> 
      <EarthCanvas toggleSidebar={toggleSidebar} handleZoom={handleZoom} />
      <OverlayTitle isVisible={isOverlayVisible} />
      <Sidebar isVisible={isSidebarVisible} />
      <Button to="https://www.spaceappschallenge.org/" label={'Go to Sky View 🚀'}/>
    </div>
  );
};

export default HomePage;