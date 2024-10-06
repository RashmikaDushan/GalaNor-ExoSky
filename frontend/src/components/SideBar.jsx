import React, { useState, useEffect, useRef } from 'react';
import '../style/SideBar.css'; // Ensure the path is correct for your project structure
import audioFile from '../assets/sidebar-audio.mp3'; // Adjust the path as needed

const Sidebar = ({ isVisible }) => {
  const [activeContent, setActiveContent] = useState('exoplanet');
  const audioRef = useRef(null);
  
  // Fade duration in milliseconds
  const fadeDuration = 1000; // 1 second for fade-in/out

  // Function to handle fade-in effect
  const fadeIn = (audioElement) => {
    let volume = 0; // Start at volume 0
    audioElement.volume = volume; // Set initial volume
    audioElement.play();

    const fadeInterval = setInterval(() => {
      if (volume < 1) {
        volume += 0.5; // Increase volume
        audioElement.volume = Math.min(volume, 1); // Cap volume at 1
      } else {
        clearInterval(fadeInterval); // Clear interval when max volume is reached
      }
    }, fadeDuration / 20); // 20 steps for the fade-in
  };

  // Function to handle fade-out effect
  const fadeOut = (audioElement) => {
    let volume = audioElement.volume; // Start at current volume

    const fadeInterval = setInterval(() => {
      if (volume > 0) {
        volume -= 0.05; // Decrease volume
        audioElement.volume = Math.max(volume, 0); // Cap volume at 0
      } else {
        clearInterval(fadeInterval); // Clear interval when min volume is reached
        audioElement.pause(); // Pause audio
        audioElement.currentTime = 0; // Reset audio to start
      }
    }, fadeDuration / 20); // 20 steps for the fade-out
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

  return (
    <div className={`card ${isVisible ? 'visible' : 'hidden'}`}>
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
