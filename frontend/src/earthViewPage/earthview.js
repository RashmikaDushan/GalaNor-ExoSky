// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls

//-----------------------------------------------------------------------

// Get DOM elements
const loadingScreen = document.getElementById("loading-screen");
const startBtn = document.getElementById("start-btn");
const threejsContainer = document.getElementById("threejs-container");

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

  // temporary cube
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.set(10, 0, 0);

  // Iterate over the arrays and create stars
  data.ra.forEach((raValue, index) => {
    const decValue = data.dec[index]; // Match corresponding dec value
    // const magnitude = data.magnitude ? data.magnitude[index] : 1; // Optional magnitude

    const star = new THREE.Mesh(
      new THREE.SphereGeometry(1, 5, 3),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    star.position.set(raValue, decValue, 90); // Adjust this based on your 3D coordinates
    scene.add(star);
  });

  // Event Listener for Mouse Clicks
  window.addEventListener("click", onMouseClick, false);

  // Handle window resize
  window.addEventListener("resize", onWindowResize, false);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onMouseClick(event) {
    // Convert screen coordinates to normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // If you want to detect intersection with objects in the scene
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      const intersect = intersects[0];
      console.log("3D World Position:", intersect.point); // 3D world coordinates
    } else {
      // If no object is intersected, you can use the ray to find where it hits the scene
      const point = raycaster.ray.origin
        .clone()
        .add(raycaster.ray.direction.clone().multiplyScalar(50));
      console.log("Empty space, 3D World Position:", point);
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    controls.update();
  }

  animate();
}

// // Update the progress bar based on server response
// function updateProgressBar(chunk) {
//   const progressBar = document.getElementById("progress-bar");
//   if (chunk.includes("Loading CSV file")) {
//     progressBar.style.width = "50%"; // Halfway through when loading starts
//   } else if (chunk.includes("CSV file loaded successfully")) {
//     progressBar.style.width = "100%"; // Done loading
//   }
// }