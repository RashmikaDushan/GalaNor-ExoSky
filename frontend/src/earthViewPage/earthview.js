// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls

let hoveredStar = null; // To track the hovered star
let starsData = []; // To store star objects with host_star references

//-----------------------------------------------------------------------

// Get DOM elements
// const loadingScreen = document.getElementById("loading-screen");
// const startBtn = document.getElementById("start-btn");
const threejsContainer = document.getElementById("threejs-container");

loadSkyMap();

async function loadSkyMap() {
  try {
    const response = await fetch("http://127.0.0.1:5000/load_csv");

    if (!response.ok) {
      throw new Error("Failed to load CSV");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let completeData = ""; // To collect all data chunks

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      console.log(chunk); // Log each chunk for debugging
      completeData += chunk; // Append each chunk to completeData
    }

    // Parse the received JSON data directly
    const parsedData = JSON.parse(completeData);
    console.log("Parsed Data:", parsedData); // Log the parsed data (columns as arrays)

    // Example: Accessing column data
    const raArray = parsedData.ra; // 'ra' column
    const decArray = parsedData.dec; // 'dec' column

    console.log("RA Array:", raArray);
    console.log("DEC Array:", decArray);

    // Now that you have arrays for each column, you can use them to create stars
    threejsContainer.style.display = "block"; // Show the Three.js container

    createStars(parsedData); // Pass the parsed data to the function that renders stars
  } catch (error) {
    console.error("Error in loading CSV:", error);
  }
}

//-----------------------------------------------------------------------

// Function to create stars using the CSV data
function createStars(data) {
  let raycaster, mouse;
  // Store stars for raycasting
  const stars = [];
  // Variable to store the last highlighted star
  let lastHighlightedStar = null;
  let highlightRing = null; // Variable to store the highlight ring

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  threejsContainer.appendChild(renderer.domElement);

  // light
  const light = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light);

  // camera
  camera.position.z = 0.1;

  // Star Sphere (Background)
  const starGeometry = new THREE.SphereGeometry(150, 64, 64);
  const starMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(
      "https://images.unsplash.com/photo-1435224668334-0f82ec57b605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    side: THREE.BackSide, // Render inside of the sphere
  });
  const starSphere = new THREE.Mesh(starGeometry, starMaterial);
  scene.add(starSphere);

  // Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Makes rotation smoother
  controls.dampingFactor = 0.05;

  // Raycaster and Mouse for detecting intersections
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // Convert RA/DEC to Cartesian coordinates
  function raDecToCartesian(ra, dec) {
    const radius = 100; // Adjust the radius to fit the stars properly
    const x = radius * Math.cos(dec) * Math.cos(ra);
    const y = radius * Math.sin(dec);
    const z = radius * Math.cos(dec) * Math.sin(ra);
    return new THREE.Vector3(x, y, z);
  }

  // Iterate over the RA and DEC arrays and create stars based on calculated x, y, z values
  data.ra.forEach((raValue, index) => {
    const decValue = data.dec[index]; // Match corresponding DEC value
    const hostStar = data.hostname[index]; // Get the host star name
    const planets = data.pl_name[index]; // Get the planet names associated with this star

    // Convert RA/DEC to Cartesian coordinates
    const { x, y, z } = raDecToCartesian(raValue, decValue);

    // Create the star using the calculated x, y, z coordinates
    const star = new THREE.Mesh(
      new THREE.SphereGeometry(1, 5, 3), // Higher resolution star geometry
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );

    // Set the star's position in the scene using the calculated coordinates
    star.position.set(x, y, z);

    // Add the star to the scene
    scene.add(star);

    // Store the star along with its associated host star and planet info
    starsData.push({ star, hostStar, planets });

    stars.push(star);
  });

  // Find the closest star to the mouse hover position
  function findClosestStar(mousePos) {
    let closestStar = null;
    let closestDistance = 1;

    data.ra.forEach((raValue, index) => {
      const decValue = data.dec[index];

      // Convert RA/DEC to 3D coordinates
      const starPosition = raDecToCartesian(raValue, decValue);

      // Calculate the distance between the star and the mouse position
      const distance = mousePos.distanceTo(starPosition);

      // If it's the closest star, save it
      if (distance < closestDistance) {
        closestDistance = distance;
        closestStar = { index, distance };
      }
    });

    return closestStar;
  }

  // temporary cube--------------------------------------------------
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.set(10, 0, 0);

  // Function to search and highlight a star by name---------------------
  function searchAndHighlightStarByName(starName) {
    let found = false;

    data.hostname.forEach((hostname, i) => {
      if (hostname.toLowerCase() === starName.toLowerCase()) {
        found = true;

        const star = stars[i];

        // Reset previous star and ring if applicable
        if (lastHighlightedStar) {
          lastHighlightedStar.material.color.set(0xffffff); // Reset color
          if (highlightRing) {
            scene.remove(highlightRing); // Remove previous ring
          }
        }

        // Change the star color to red
        star.material.color.set(0xff0000); // Highlight in red

        // Create and position the highlight ring around the star
        createHighlightRing(star);
        console.log(`Star ${starName} found.`);

        lastHighlightedStar = star; // Store current star as last highlighted
      }
    });

    if (!found) {
      console.log(`Star ${starName} not found.`);
    }
  }

  // Function to search and highlight a star by planet name
  function searchAndHighlightStarByPlanetName(planetName) {
    let found = false;

    data.pl_name.forEach((plName, i) => {
      if (plName.toLowerCase() === planetName.toLowerCase()) {
        found = true;

        const hostStarName = data.hostname[i];
        const starIndex = data.hostname.indexOf(hostStarName);
        const star = stars[starIndex];

        // Reset previous star and ring if applicable
        if (lastHighlightedStar) {
          lastHighlightedStar.material.color.set(0xffffff); // Reset color
          if (highlightRing) {
            scene.remove(highlightRing); // Remove previous ring
          }
        }

        // Change the star color to red
        star.material.color.set(0xff0000); // Highlight in red

        // Create and position the highlight ring around the star
        createHighlightRing(star);
        console.log(`Star ${planetName} found.`);

        lastHighlightedStar = star; // Store current star as last highlighted
      }
    });

    if (!found) {
      console.log(`Planet ${planetName} not found.`);
    }
  }

  // Function to create a highlight ring around the star
  function createHighlightRing(star) {
    const ringGeometry = new THREE.RingGeometry(2, 3, 32); // Adjust ring size
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd700, // Golden color
      side: THREE.DoubleSide,
    });

    highlightRing = new THREE.Mesh(ringGeometry, ringMaterial);

    // Position the ring at the same coordinates as the star
    highlightRing.position.copy(star.position);

    // Make the ring face the camera
    highlightRing.lookAt(camera.position);

    // Add the ring to the scene
    scene.add(highlightRing);
  }

  //-------------------------------------------------------------------
  // Event Listener for Mouse Clicks
  window.addEventListener("click", onMouseClick, false);

  // Handle window resize
  window.addEventListener("resize", onWindowResize, false);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // Function to get the current mouse hover position in the 3D world
  function getMouseWorldPosition() {
    // Set the ray from the camera through the mouse
    raycaster.setFromCamera(mouse, camera);

    // Calculate the point where the ray intersects a sphere at radius 100
    const point = raycaster.ray.origin
      .clone()
      .add(raycaster.ray.direction.clone().multiplyScalar(100));

    return point; // Return the 3D world coordinates of the mouse
  }
}