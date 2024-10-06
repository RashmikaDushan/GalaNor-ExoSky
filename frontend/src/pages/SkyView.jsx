import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import axios from "axios";

function App() {
  const mountRef = useRef(null);

  // State for storing stars and planets data
  const [starsData, setStarsData] = useState(null);
  const [planetsData, setPlanetsData] = useState(null);

  useEffect(() => {
    // Fetch stars data from the first endpoint
    const fetchStars = async (index, view_distance) => {
      try {
        const params = { index: index, view_distance: view_distance };

        const response = await axios.get("http://127.0.0.1:5000/exoview", {
          params: params,
        });

        setStarsData(response.data); // Store stars data
      } catch (error) {
        console.error("Error fetching stars data:", error);
      }
    };

    // Fetch planets data from the second endpoint
    const fetchPlanets = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/load_csv");
        setPlanetsData(response.data); // Store planets data
      } catch (error) {
        console.error("Error fetching planets data:", error);
      }
    };

    // Example of calling fetchStars with specific arguments
    fetchStars("10", "75");
    console.log(starsData);
    // fetchPlanets();

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );

    // Camera settings
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Set up Unreal Bloom Pass
    const renderScene = new RenderPass(scene, camera);
    // const bloomPass = new UnrealBloomPass(
    //   new THREE.Vector2(window.innerWidth, window.innerHeight),
    //   1.5, // Strength of the bloom effect (increase for more bloom)
    //   1.0, // Bloom radius (adjust for softness)
    //   0.001 // Bloom threshold (lower for more objects to bloom)
    // );

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    // composer.addPass(bloomPass);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minZoom = 1;
    controls.enableDamping = true; // Makes rotation smoother
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = -0.25;

    // Create stars using BufferGeometry and PointsMaterial
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.2,
      sizeAttenuation: true,
    });

    const starCount = 5000;
    const positionsRand = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      positionsRand[i] = (Math.random() - 0.5) * 600; // x
      positionsRand[i + 1] = (Math.random() - 0.5) * 600; // y
      positionsRand[i + 2] = (Math.random() - 0.5) * 600; // z
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positionsRand, 3)
    );

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation function
    function animate() {
      requestAnimationFrame(animate);

      controls.update();
      composer.render(); // Render with composer to apply bloom

      // Remove direct renderer.render as composer handles rendering now
      // renderer.render(scene, camera);
    }
    animate();

    // Cleanup function
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
}

export default App;
