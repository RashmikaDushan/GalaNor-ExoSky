import React, { useState, useEffect, useRef } from "react";
import "../style/SideBar.css"; // Ensure the path is correct for your project structure
import audioFile from "../assets/sidebar-audio.mp3"; // Adjust the path as needed

const Sidebar = ({ isVisible }) => {
  const [activeTopic, setActiveTopic] = useState(null); // Track the currently selected topic
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

  // Function to render content for the currently selected topic
  const renderContent = (topic) => {
    if (activeTopic !== topic) return null; // Only render if the topic is active

    switch (topic) {
      case "exoplanet":
        return (
          <div className="content">
            <h2>🌌 What is an Exoplanet?</h2>
            <p><strong>Definition:</strong> An exoplanet is a planet that orbits a star outside our solar system.</p>
            <p><strong>Description:</strong> Exoplanets come in a wide variety of sizes, from gas giants larger than Jupiter to small, rocky worlds like Earth. They are of great interest in the search for potential habitable worlds beyond our solar system.</p>
            <p><strong>Related links:</strong></p>
            <ul>
              <li><a href="https://exoplanetarchive.ipac.caltech.edu/">NASA Exoplanet Archive</a></li>
              <li><a href="https://www.cosmos.esa.int/web/cheops">ESA's Cheops Mission</a></li>
              <li><a href="https://exoplanetzoo.org/">CSA's Exoplanet Zoo</a></li>
            </ul>
          </div>
        );
      case "nasa":
        return (
          <div className="content">
            <h2>🔗 NASA Resources</h2>
            <p><strong>Description:</strong> Explore cutting-edge resources from NASA to study exoplanets and celestial bodies.</p>
            <ul>
              <li><strong>NASA Exoplanet Archive:</strong> A comprehensive catalog of confirmed exoplanets with detailed information about their properties and host stars.</li>
              <li><strong>Gaia DR3 Catalog:</strong> A precise three-dimensional database of about one billion stars in our galaxy and beyond.</li>
              <li><strong>Deep Star Maps 2020:</strong> Example of a detailed sky map constructed from star catalogs.</li>
            </ul>
          </div>
        );
      case "esa":
        return (
          <div className="content">
            <h2>🔗 ESA Resources</h2>
            <p><strong>Description:</strong> Discover European Space Agency tools and datasets for exoplanet research and space exploration.</p>
            <ul>
              <li><strong>Hack an Exoplanet:</strong> An educational activity allowing access to real-time satellite observation data from ESA's Cheops mission.</li>
              <li><strong>Human and Robotic Exploration Data Archive:</strong> A collection of results from ESA-funded experiments across various scientific areas and space platforms.</li>
            </ul>
          </div>
        );
      case "csa":
        return (
          <div className="content">
            <h2>🔗 CSA Resources</h2>
            <p><strong>Description:</strong> Access Canadian Space Agency resources for astronomy and exoplanet studies.</p>
            <ul>
              <li><strong>Exoplanet Zoo:</strong> An exploration of famous exoplanets and their potential habitability.</li>
              <li><strong>Canadian Astronomy Data Centre:</strong> A repository of the Government of Canada's astronomy open data.</li>
              <li><strong>NIRISS Exoplanet Data:</strong> Example data used to detect potentially habitable exoplanets using the NIRISS instrument on the James Webb Space Telescope.</li>
            </ul>
          </div>
        );
      case "data":
        return (
          <div className="content">
            <h2>📊 Data & Catalogs</h2>
            <p><strong>Description:</strong> Find comprehensive databases and catalogs for exoplanet and stellar research.</p>
            <ul>
              <li><strong>NASA Exoplanet Archive:</strong> Detailed catalog of confirmed exoplanets and their properties.</li>
              <li><strong>Gaia DR3 Catalog:</strong> Extensive database of stars in and beyond our galaxy.</li>
              <li><strong>Canadian Astronomy Data Centre:</strong> Repository of Canadian astronomy data.</li>
              <li><strong>BRITE Constellation Mission Data:</strong> Open light curve data from the BRITE Constellation Mission.</li>
            </ul>
          </div>
        );
      case "tutorials":
        return (
          <div className="content">
            <h2>📚 Tutorials & Educational Activities</h2>
            <p><strong>Description:</strong> Learn how to work with exoplanet data through hands-on tutorials and educational resources.</p>
            <ul>
              <li><strong>Hack an Exoplanet (ESA):</strong> Educational activity using real-time data from ESA's Cheops mission.</li>
              <li><strong>James Webb Space Telescope Tutorial:</strong> Guide on how to download and utilize JWST data.</li>
              <li><strong>BRITE Constellation Mission Tutorial:</strong> Instructions for using open light curve data, which can aid in exoplanet detection.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  // Handle click to toggle topics
  const handleTopicClick = (topic) => {
    setActiveTopic((prevTopic) => (prevTopic === topic ? null : topic)); // Toggle the active topic
  };

  // Functions to handle drag
  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const newWidth = e.clientX; // Use clientX for mouse
    setSidebarWidth(newWidth > 100 ? newWidth : 100); // Minimum width of 100px
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const newWidth = touch.clientX; // Use clientX for touch
    setSidebarWidth(newWidth > 100 ? newWidth : 100); // Minimum width of 100px
  };

  const handleTouchEnd = () => {
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  return (
    <div
      className={`card ${isVisible ? "visible" : "hidden"}`}
      style={{ width: sidebarWidth }}
    >
      <div
        className="drag-handle"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      />
      <h1>Bifröst</h1>

      <ul>
        <li>
          <button onClick={() => handleTopicClick("exoplanet")}>
            What is an Exoplanet?
          </button>
          {renderContent("exoplanet")}
        </li>
        <li>
          <button onClick={() => handleTopicClick("nasa")}>
            NASA Resources
          </button>
          {renderContent("nasa")}
        </li>
        <li>
          <button onClick={() => handleTopicClick("esa")}>
            ESA Resources
          </button>
          {renderContent("esa")}
        </li>
        <li>
          <button onClick={() => handleTopicClick("csa")}>
            CSA Resources
          </button>
          {renderContent("csa")}
        </li>
        <li>
          <button onClick={() => handleTopicClick("data")}>
            Data & Catalogs
          </button>
          {renderContent("data")}
        </li>
        <li>
          <button onClick={() => handleTopicClick("tutorials")}>
            Tutorials & Educational Activities
          </button>
          {renderContent("tutorials")}
        </li>
      </ul>

      <audio ref={audioRef} src={audioFile} loop />
    </div>
  );
};

export default Sidebar;
