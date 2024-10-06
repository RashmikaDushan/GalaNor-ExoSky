import React, { useState, useEffect, useRef } from 'react';
import '../style/SideBar.css'; // Ensure the path is correct for your project structure
import audioFile from '../assets/sidebar-audio.mp3'; // Adjust the path as needed

const Sidebar = ({ isVisible }) => {
  const [activeContent, setActiveContent] = useState('exoplanet');
  const [sidebarWidth, setSidebarWidth] = useState(300); // Default width in pixels
  const audioRef = useRef(null);
  
  const fadeDuration = 1000; // 1 second for fade-in/out

  // Functions to handle fade-in and fade-out
  const fadeIn = (audioElement) => {
    let volume = 0;
    audioElement.volume = volume;
    audioElement.play();

    const fadeInterval = setInterval(() => {
      if (volume < 1) {
        volume += 0.05;
        audioElement.volume = Math.min(volume, 1);
      } else {
        clearInterval(fadeInterval);
      }
    }, fadeDuration / 20);
  };

  const fadeOut = (audioElement) => {
    let volume = audioElement.volume;

    const fadeInterval = setInterval(() => {
      if (volume > 0) {
        volume -= 0.05;
        audioElement.volume = Math.max(volume, 0);
      } else {
        clearInterval(fadeInterval);
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    }, fadeDuration / 20);
  };

  // Effect to play/pause audio with fade in/out
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isVisible) {
        fadeIn(audioElement);
      } else {
        fadeOut(audioElement);
      }
    }
  }, [isVisible]);

  // Function to render content based on the active section
  const renderContent = () => {
    switch (activeContent) {
      case 'exoplanet':
        return (
          <div>
            <h2>What is an Exoplanet?</h2>
            <p>
              An exoplanet is a planet that is outside <b>our solar system.</b> 
              Exoplanets are typically found orbiting a star other than our Sun. 
              In the same way that our solar system contains eight planets, other stars 
              can have many exoplanets in orbit around them.
            </p>
          </div>
        );
      case 'discoveries':
        return (
          <div>
            <h2>Recent Discoveries</h2>
            <p>
              Several new exoplanets have been discovered recently, 
              many of which reside in the habitable zone of their star, 
              where conditions may be just right to support life. 
              Astronomers use advanced techniques to detect these planets.
            </p>
          </div>
        );
      case 'missions':
        return (
          <div>
            <h2>Space Missions</h2>
            <p>
              Various space missions like NASA's Kepler and TESS have focused on 
              discovering new exoplanets. These missions collect data that help scientists 
              understand distant worlds better.
            </p>
          </div>
        );
      case 'contact':
        return (
          <div>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or need more information, feel free to contact our 
              team. We're excited to share more about the wonders of space!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  // Functions to handle drag
  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const newWidth = e.clientX; // Use clientX for mouse
    setSidebarWidth(newWidth > 100 ? newWidth : 100); // Minimum width of 100px
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const newWidth = touch.clientX; // Use clientX for touch
    setSidebarWidth(newWidth > 100 ? newWidth : 100); // Minimum width of 100px
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className={`card ${isVisible ? 'visible' : 'hidden'}`} style={{ width: sidebarWidth }}>
      <div className="drag-handle" onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} />
      <h1>Welcome to Title!</h1>
      <p>Project summary</p>

      <h2>Navigation</h2>
      <ul>
        <li><button onClick={() => setActiveContent('exoplanet')}>What is an Exoplanet?</button></li>
        <li><button onClick={() => setActiveContent('discoveries')}>Recent Discoveries</button></li>
        <li><button onClick={() => setActiveContent('missions')}>Space Missions</button></li>
        <li><button onClick={() => setActiveContent('contact')}>Contact Us</button></li>
      </ul>

      <div className="content">
        {renderContent()}
      </div>

      <audio ref={audioRef} src={audioFile} loop />
    </div>
  );
};

export default Sidebar;
