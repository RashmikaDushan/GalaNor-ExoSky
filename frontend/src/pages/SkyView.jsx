import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls

function App() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    // camera----------------------------------------------------------------
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Set up Unreal Bloom Pass----------------------------------------------
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      2.0, // Strength of the bloom effect
      1.0, // Bloom radius
      0.2 // Bloom threshold
    );

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Orbit Controls----------------------------------------------------
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

    const starCount = 500;
    const positionsRand = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      positionsRand[i] = (Math.random() - 0.5) * 600; // x
      positionsRand[i + 1] = (Math.random() - 0.5) * 600; // y
      positionsRand[i + 2] = (Math.random() - 0.5) * 600; // z
    }
    console.log("Random array:", positionsRand);

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
      composer.render();

      // Render the scene
      renderer.render(scene, camera);
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
