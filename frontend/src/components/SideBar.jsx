import React, { useState, useEffect, useRef } from 'react';
import '../style/SideBar.css'; // Ensure the path is correct for your project structure
import audioFile from '../assets/sidebar-audio.mp3'; // Adjust the path as needed

const Sidebar = ({ isVisible }) => {
  // State to track which content is active
  const [activeContent, setActiveContent] = useState('exoplanet');
  const audioRef = useRef(null);

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

  // Effect to play/pause audio based on visibility
  useEffect(() => {
    if (isVisible && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio to start
    }
  }, [isVisible]);

  return (
    <div className={`card ${isVisible ? 'visible' : ''}`}>
      <h1>Welcome to Title!</h1>
      <p>Project summary</p>

      <h2>Navigation</h2>
      <ul>
        {/* Setting the active content based on the link clicked */}
        <li><button onClick={() => setActiveContent('exoplanet')}>What is an Exoplanet?</button></li>
        <li><button onClick={() => setActiveContent('discoveries')}>Recent Discoveries</button></li>
        <li><button onClick={() => setActiveContent('missions')}>Space Missions</button></li>
        <li><button onClick={() => setActiveContent('contact')}>Contact Us</button></li>
      </ul>

      {/* Render content based on the active link */}
      <div className="content">
        {renderContent()}
      </div>

      {/* Hidden audio element with loop attribute */}
      <audio ref={audioRef} src={audioFile} loop />
    </div>
  );
};

export default Sidebar;
