import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import axios from "axios";

function App() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const camera = useRef();
  const renderer = useRef();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const [starsData, setStarsData] = useState(null);
  const [planetsData, setPlanetsData] = useState(null);
  const [isPlanetsLoading, setIsPlanetsLoading] = useState(true);
  const [isStarssLoading, setIsStarsLoading] = useState(true);
  const [isStarsView, setIsStarsView] = useState(true);
  const starGeometry = useRef();
  const [index, setIndex] = useState(5);
  var view_distance = 60;
  const cubeCameraRef = useRef(null);
  const [isPrintVisible, setPrintVisible] = useState(false);
  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );
  

  useEffect(() => {
    const fetchStars = async (index, view_distance) => {
      try {
        setIsStarsLoading(true);
        const params = { index: index, view_distance: view_distance };
        const response = await axios.get("http://127.0.0.1:5000/exoview", {
          params: params,
        });
        camera.current.far = view_distance * 100;
        camera.current.updateProjectionMatrix();
        setStarsData(response.data);
      } catch (error) {
        console.error("Error fetching stars data:", error);
      } finally {
        setIsStarsLoading(false);
      }
    };

    const fetchPlanets = async () => {
      try {
        setIsPlanetsLoading(true);
        const response = await axios.get("http://127.0.0.1:5000/load_csv", {});
        setPlanetsData(response.data);
      } catch (error) {
        console.error("Error fetching stars data:", error);
      } finally {
        setIsPlanetsLoading(false);
      }
    };

    fetchStars(index, view_distance);
    fetchPlanets();

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    camera.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.current.position.z = 0.1;
    scene.add( cubeCameraRef );

    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.current.domElement);

    const renderScene = new RenderPass(scene, camera.current);
    const composer = new EffectComposer(renderer.current);
    composer.addPass(renderScene);

    const controls = new OrbitControls(
      camera.current,
      renderer.current.domElement
    );
    controls.minZoom = 1;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = -0.25;

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      composer.render();
    }
    animate();

    return () => {
      mountRef.current.removeChild(renderer.current.domElement);
    };
  }, []);

  const createStars = () => {
    console.log("Stars data:", starsData);

    // Remove existing stars
    const existingStars = sceneRef.current.children.find(
      (child) => child.type === "Points"
    );
    if (existingStars) {
      sceneRef.current.remove(existingStars);
    }

    // Create new stars based on fetched data
    starGeometry.current = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      sizeAttenuation: true,
    });

    const xArray = Object.values(starsData.x);
    const yArray = Object.values(starsData.y);
    const zArray = Object.values(starsData.z);

    console.log("xArray:", xArray);
    console.log("yArray:", yArray);
    console.log("zArray:", zArray);

    const length = Math.min(xArray.length, yArray.length, zArray.length);

    // Create a new Float32Array with the correct size
    const positions = new Float32Array(length * 3);

    console.log("Length:", length);

    // Populate the Float32Array with x, y, z values
    for (let i = 0; i < length; i++) {
      positions[i * 3] = xArray[i] || 0; // Use 0 if value is undefined
      positions[i * 3 + 1] = yArray[i] || 0; // Use 0 if value is undefined
      positions[i * 3 + 2] = zArray[i] || 0; // Use 0 if value is undefined
    }

    console.log("Flattened array:", positions);
    starGeometry.current.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const stars = new THREE.Points(starGeometry.current, starMaterial);
    sceneRef.current.add(stars);
  };

  useEffect(() => {
    if (starsData && sceneRef.current) {
      console.log("Stars data:", starsData);
      createStars();
    }
  }, [starsData]);

  const createPlanets = () => {
    // Remove existing planets
    const existingPlanets = sceneRef.current.children.find(
      (child) => child.type === "Points"
    );
    if (existingPlanets) {
      sceneRef.current.remove(existingPlanets);
    }

    // Create new planets based on fetched data
    starGeometry.current = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      sizeAttenuation: true,
    });

    const xArray = Object.values(planetsData.x);
    const yArray = Object.values(planetsData.y);
    const zArray = Object.values(planetsData.z);

    console.log("xArray:", xArray);
    console.log("yArray:", yArray);
    console.log("zArray:", zArray);

    const length = Math.min(xArray.length, yArray.length, zArray.length);

    // Create a new Float32Array with the correct size
    const positions = new Float32Array(length * 3);

    console.log("Length:", length);

    // Populate the Float32Array with x, y, z values
    for (let i = 0; i < length; i++) {
      positions[i * 3] = xArray[i] || 0; // Use 0 if value is undefined
      positions[i * 3 + 1] = yArray[i] || 0; // Use 0 if value is undefined
      positions[i * 3 + 2] = zArray[i] || 0; // Use 0 if value is undefined
    }

    console.log("Flattened array:", positions);
    starGeometry.current.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const stars = new THREE.Points(starGeometry.current, starMaterial);
    sceneRef.current.add(stars);
  };

  // Planets Data (Host Star Creation)
  useEffect(() => {
    if (planetsData && sceneRef.current) {
      createPlanets();
      console.log("Stars data:", planetsData);
    }
  }, [planetsData]);

  const handleMouseClick = (event) => {
    // Logic for handling mouse click and finding closest star/planet
    // Get mouse position
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Get the 3D world position of the mouse
    const mouseWorldPos = getMouseWorldPosition();
    // const closestStar = findClosestStar(mouseWorldPos);

    // Clear the existing planet list
    document.getElementById("planetList").innerHTML = "";

    if (closestStar && closestStar.distance < 100) {
      // Check if a star is clicked
      const matchingPlanets = [];
      const selectedHoststar = data.hostname[closestStar.index]; // Get hostname of the closest star

      // Find all planets associated with the clicked host star
      data.hostname.forEach((hostname, i) => {
        if (hostname === selectedHoststar) {
          matchingPlanets.push(data.pl_name[i]);
          const newPlanet = document.createElement("li");
          newPlanet.textContent = `Planet ${data.pl_name[i]}`;
          newPlanet.addEventListener("click", () => {
            onPlanetClick(data.Index[i]); // Handle planet click
            console.log(`Planet Index: ${data.Index[i]}`);
          });
          document.getElementById("planetList").appendChild(newPlanet);
        }
      });

      if (matchingPlanets.length > 0) {
        document.getElementById("listContainer").style.display = "block"; // Show planet list
        console.log(`Planets: ${matchingPlanets.join(", ")}`);
      }
    } else {
      console.log("No star clicked");
      document.getElementById("listContainer").style.display = "none"; // Hide planet list if no star clicked
      document.getElementById("planetList").innerHTML = "";
    }
  };

  function getMouseWorldPosition() {
    const mouseWorldPos = new THREE.Vector3();

    // Set the ray from the camera through the mouse
    raycaster.setFromCamera(mouse, camera.current);

    // Calculate the point where the ray intersects a sphere at radius 500
    raycaster.ray.origin.add(
      raycaster.ray.direction.clone().multiplyScalar(500)
    ); // 500 should be the same as the value in ra_dec_to_cartesian in app.py
    mouseWorldPos.copy(raycaster.ray.origin);

    return mouseWorldPos; // Return the 3D world coordinates of the mouse
  }

  // function findClosestStar(mousePos) {
  //   let closestStar = null;
  //   let closestDistance = 5;

  //   // Iterate over each star's position
  //   const positions = starGeometry.current.attributes.position.array;

  //   for (let i = 0; i < positions.length; i += 3) {
  //     const starPosition = new THREE.Vector3(
  //       positions[i],
  //       positions[i + 1],
  //       positions[i + 2]
  //     );

  //     // Calculate the distance between the mouse's 3D world position and each star
  //     const distance = mousePos.distanceTo(starPosition);

  //     if (distance < closestDistance) {
  //       closestDistance = distance;
  //       closestStar = { index: i / 3, position: starPosition, distance };
  //     }
  //   }

  //   if (closestStar && closestStar.distance < 100) {
  //     // distance threshold
  //     selectedHoststar = data.hostname[closestStar.index]; // Get the hostname of the closest star
  //     hostIndex = data.Index[closestStar.index];

  //     document.getElementById(
  //       "hover-info"
  //     ).innerText = `Hostname: ${selectedHoststar}`;
  //     document.getElementById("hover-info").style.display = "block"; // Show the info
  //     console.log(`Closest Star Hostname: ${selectedHoststar}`);
  //   } else {
  //     document.getElementById("hover-info").style.display = "none"; // Hide info if no star is close enough
  //   }
  //   return closestStar;
  // }

  useEffect(() => {
    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, [planetsData]);

  const handleResetIndex = () => {
    setIndex(0); // Set the index to 0 when the button is clicked
  };

  function onPlanetClick(index) {
    setIndex(index);
    toggleButtonVisibility();
  }

  const toggleButtonVisibility = () => {
    setPrintVisible(prev => !prev);
  };

  useEffect(() => {
    const fetchStars = async (index, view_distance) => {
      try {
        setIsStarsLoading(true);
        const params = { index: index, view_distance: view_distance };
        const response = await axios.get("http://127.0.0.1:5000/exoview", {
          params: params,
        });
        camera.current.far = view_distance * 100;
        camera.current.updateProjectionMatrix();
        setStarsData(response.data);
      } catch (error) {
        console.error("Error fetching stars data:", error);
      } finally {
        setIsStarsLoading(false);
      }
    };

    fetchStars(index, view_distance);
  }, [index, view_distance]);

  const handleViewToggle = () => {
    setIsStarsView(!isStarsView); // Set the index to 0 when the button is clicked
    if (isStarsView) {
      createStars();
    } else {
      createPlanets();
    }
  };

  const handlePrint = () => {
    if (cubeCameraRef.current) {
      const renderer = renderer.current;
      const scene = sceneRef.current;
      const camera = camera.current;

      // Capture the scene
      cubeCameraRef.current.update(renderer, scene);

      // Get the render target's texture
      const texture = cubeCameraRef.current.renderTarget.texture;

      // Create a canvas to extract the texture
      const width = 256; // Use the width of the cube camera
      const height = 256; // Use the height of the cube camera
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      const imageData = new Uint8Array(width * height * 4);

      // Read the pixels from the texture
      renderer.readRenderTargetPixels(cubeCameraRef.current.renderTarget, 0, 0, width, height, imageData);

      // Put the pixel data onto the canvas
      const imageDataObj = new ImageData(new Uint8ClampedArray(imageData), width, height);
      context.putImageData(imageDataObj, 0, 0);

      // Open the canvas as an image in a new tab
      const newTab = window.open();
      newTab.document.body.appendChild(canvas);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {index !== 0 && (
        <button
          style={{
            position: "absolute",
            zIndex: 10, // Ensure button floats on top
            top: "20px", // Adjust the position as needed
            left: "20px", // Adjust the position as needed
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleResetIndex}
        >
          Go to Earth View
        </button>
      )}
      {index == 0 && (
        <button
          style={{
            position: "absolute",
            zIndex: 10, // Ensure button floats on top
            top: "20px", // Adjust the position as needed
            right: "20px", // Adjust the position as needed
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleViewToggle}
        >
          Toggle View
        </button>
      )}
      <button
        style={{
          position: "absolute",
          zIndex: 10, // Ensure button floats on top
          bottom: "20px", // Adjust the position as needed
          left: "20px", // Adjust the position as needed
          padding: "10px 20px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handlePrint}
      >
        Print
      </button>
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          bottom: "20px", // Adjust the position as needed
          right: "20px", // Adjust the position as needed
          maxHeight: "300px", // Set a max height for scrolling
          overflowY: "auto", // Enable vertical scrolling
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
          border: "2px solid white",
          borderRadius: "8px",
          padding: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ul style={{ padding: "5px 0", cursor: "pointer", color: "white" }}>
          {planetsData && planetsData.pl_name && (
            <ul>
              {Object.keys(planetsData.pl_name).map((key) => (
                <li
                  key={key}
                  onClick={() => onPlanetClick(planetsData.Index[key])}
                >
                  {planetsData.pl_name[key]}{" "}
                  {/* Access the planet name using the key */}
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
      <div ref={mountRef} />
      {isStarssLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="spinner"
            style={{
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #3498db",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <p style={{ marginTop: "10px" }}>Fetching data...</p>
        </div>
      )}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default App;
