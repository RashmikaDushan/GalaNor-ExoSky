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
  const [isLoading, setIsLoading] = useState(true);
  const starGeometry = useRef();

  useEffect(() => {
    const fetchStars = async (index, view_distance) => {
      try {
        setIsLoading(true);
        const params = { index: index, view_distance: view_distance };
        const response = await axios.get("http://127.0.0.1:5000/exoview", {
          params: params,
        });
        setStarsData(response.data);
      } catch (error) {
        console.error("Error fetching stars data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchPlanets = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://127.0.0.1:5000/load_csv", {});
        setPlanetsData(response.data);
      } catch (error) {
        console.error("Error fetching stars data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStars("10", "100");
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

    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.current.domElement);

    const renderScene = new RenderPass(scene, camera.current);
    const composer = new EffectComposer(renderer.current);
    composer.addPass(renderScene);

    const controls = new OrbitControls(camera.current, renderer.current.domElement);
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

  useEffect(() => {
    if (starsData && sceneRef.current) {
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

      //   const starCount = 500; // for debbuging
      //   const positionsRand = new Float32Array(starCount * 3);
      //   for (let i = 0; i < starCount * 3; i += 3) {
      //     positionsRand[i] = (Math.random() - 0.5) * 600; // x
      //     positionsRand[i + 1] = (Math.random() - 0.5) * 600; // y
      //     positionsRand[i + 2] = (Math.random() - 0.5) * 600; // z
      //   }
      //   console.log("Random positions:", positionsRand);

      console.log("Flattened array:", positions);
      starGeometry.current.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      const stars = new THREE.Points(starGeometry.current, starMaterial);
      sceneRef.current.add(stars);
    }
  }, [starsData]);

   // Planets Data (Host Star Creation)
   useEffect(() => {
    if (planetsData && sceneRef.current) {
      console.log("Stars data:", planetsData);

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
    const closestStar = findClosestStar(mouseWorldPos);

    // Clear the existing planet list
    document.getElementById("planetList").innerHTML = "";

    if (closestStar && closestStar.distance < 100) { // Check if a star is clicked
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

function findClosestStar(mousePos) {
  let closestStar = null;
  let closestDistance = 5;

  // Iterate over each star's position
  const positions = starGeometry.current.attributes.position.array;

  for (let i = 0; i < positions.length; i += 3) {
    const starPosition = new THREE.Vector3(
      positions[i],
      positions[i + 1],
      positions[i + 2]
    );

    // Calculate the distance between the mouse's 3D world position and each star
    const distance = mousePos.distanceTo(starPosition);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestStar = { index: i / 3, position: starPosition, distance };
    }
  }

  if (closestStar && closestStar.distance < 100) {
    // distance threshold
    selectedHoststar = data.hostname[closestStar.index]; // Get the hostname of the closest star
    hostIndex = data.Index[closestStar.index];

    document.getElementById(
      "hover-info"
    ).innerText = `Hostname: ${selectedHoststar}`;
    document.getElementById("hover-info").style.display = "block"; // Show the info
    console.log(`Closest Star Hostname: ${selectedHoststar}`);
  } else {
    document.getElementById("hover-info").style.display = "none"; // Hide info if no star is close enough
  }
  return closestStar;
}

  useEffect(() => {
    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, [planetsData]);


  return (
    <div style={{ position: "relative" }}>
      <div ref={mountRef} />
      {isLoading && (
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
