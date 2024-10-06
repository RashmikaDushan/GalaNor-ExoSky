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
  const cameraRef = useRef(null);
  const [starsData, setStarsData] = useState(null);
  const [planetsData, setPlanetsData] = useState(null);
  const [isStarsLoading, setStarsIsLoading] = useState(true);
  const [isPlanetsLoading, setPlanetsIsLoading] = useState(true);
  var index = 10;
  var view_distance = 70;

  useEffect(() => {
    const fetchStars = async (index, view_distance) => {
      try {
        setStarsIsLoading(true);
        const params = { index: index, view_distance: view_distance };
        const response = await axios.get("http://127.0.0.1:5000/exoview", {
          params: params,
        });
        setStarsData(response.data);
      } catch (error) {
        console.error("Error fetching stars data:", error);
      } finally {
        setStarsIsLoading(false);
      }
    };

    const fetchPlanets = async () => {
      try {
        setPlanetsIsLoading(true);
        const response = await axios.get("http://127.0.0.1:5000/load_csv", {});
        setPlanetsData(response.data);
      } catch (error) {
        console.error("Error fetching stars data:", error);
      } finally {
        setPlanetsIsLoading(false);
      }
    };

    fetchStars(index.toString(), view_distance.toString());
    fetchPlanets();

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.z = 100;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const renderScene = new RenderPass(scene, camera);
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);

    const controls = new OrbitControls(camera, renderer.domElement);
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
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (starsData && sceneRef.current) {
      console.log("Stars data:", starsData);

      const camera = cameraRef.current;

      camera.position.x = planetsData.x[index];
      camera.position.y = planetsData.y[index];
      camera.position.z = planetsData.z[index];
      console.log(
        `${camera.position.x}, ${camera.position.y}, ${camera.position.z}`
      );

      // Remove existing stars
      const existingStars = sceneRef.current.children.find(
        (child) => child.type === "Points"
      );
      if (existingStars) {
        sceneRef.current.remove(existingStars);
      }

      // Create new stars based on fetched data
      const starGeometry = new THREE.BufferGeometry();
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
      starGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      const stars = new THREE.Points(starGeometry, starMaterial);
      sceneRef.current.add(stars);
    }
  }, [starsData]);

  useEffect(() => {
    if (planetsData && sceneRef.current) {
      console.log("Planets data:", planetsData);
    }
  }, [planetsData]);

  return (
    <div style={{ position: "relative" }}>
      <div ref={mountRef} />
      {isStarsLoading && (
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
