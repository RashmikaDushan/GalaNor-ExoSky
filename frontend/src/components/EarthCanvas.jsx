import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const EarthCanvas = ({ 
  toggleSidebar, 
  handleZoom, 
  earthTextureUrl = 'src/assets/earthmap1k.jpg', // Default texture
  galaxyTextureUrl = 'src/assets/galaxy.png', // Default galaxy texture
  lightIntensity = 100, // Default light intensity
  initialCameraPositionZ = 10, // Default camera Z position
  rotationSpeed = 0.0002, // Default rotation speed
  zoomedCameraPositionZ = 2, // Default zoomed-in camera Z position
  starCount = 5000, // Number of stars to generate
}) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const earthMeshRef = useRef(null);
  const isZoomedInRef = useRef(false);
  const isInitializedRef = useRef(false);
  const starsRef = useRef([]);

  useEffect(() => {
    if (!isInitializedRef.current) {
      const canvas = canvasRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

      sceneRef.current = scene;
      cameraRef.current = camera;
      rendererRef.current = renderer;

      // Set camera position only once during initialization
      camera.position.z = initialCameraPositionZ; // Use prop for initial position
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.01);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, lightIntensity); // Use prop for light intensity
      pointLight.position.set(5, 3, 5);
      scene.add(pointLight);

      const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);
      const earthTexture = new THREE.TextureLoader().load(earthTextureUrl); // Use prop for texture
      const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture, shininess: 0, specular: 0x000000 });
      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earthMesh);
      earthMeshRef.current = earthMesh;

      // Create stars
      const starGeometry = new THREE.SphereGeometry(0.05, 16, 16); // Small sphere for stars
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White color for stars

      for (let i = 0; i < starCount; i++) {
        const starMesh = new THREE.Mesh(starGeometry, starMaterial);
        // Position stars randomly in a sphere around the camera
        const radius = 40; // Adjust radius as needed
        starMesh.position.set(
          (Math.random() - 0.5) * radius * 2,
          (Math.random() - 0.5) * radius * 2,
          (Math.random() - 0.5) * radius * 2
        );
        starsRef.current.push(starMesh);
        scene.add(starMesh);
      }

      isInitializedRef.current = true;
    }

    const animate = () => {
      if (earthMeshRef.current && rendererRef.current && sceneRef.current && cameraRef.current) {
        earthMeshRef.current.rotation.y += rotationSpeed; // Use prop for rotation speed
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    const handleClick = () => {
      if (cameraRef.current) {
        isZoomedInRef.current = !isZoomedInRef.current;
        const targetZ = isZoomedInRef.current ? zoomedCameraPositionZ : initialCameraPositionZ; // Use prop for zoomed position

        gsap.to(cameraRef.current.position, {
          z: targetZ,
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => handleZoom(cameraRef.current.position.z),
          onComplete: toggleSidebar
        });
      }
    };

    window.addEventListener('resize', handleResize);
    canvasRef.current.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvasRef.current.removeEventListener('click', handleClick);
      
      if (rendererRef.current) rendererRef.current.dispose();
      if (earthMeshRef.current) {
        earthMeshRef.current.geometry.dispose();
        earthMeshRef.current.material.dispose();
      }
      
      // Dispose stars
      starsRef.current.forEach(star => {
        star.geometry.dispose();
        star.material.dispose();
      });
    };
  }, [toggleSidebar, handleZoom, earthTextureUrl, galaxyTextureUrl, lightIntensity, initialCameraPositionZ, rotationSpeed, zoomedCameraPositionZ, starCount]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default EarthCanvas;
