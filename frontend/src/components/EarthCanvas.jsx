import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const EarthCanvas = ({ 
  toggleSidebar, 
  handleZoom, 
  // earthTextureUrl = 'src/assets/earthmap1k.jpg', 
  cloudTextureUrl = 'src/assets/earthCloud.png',
  galaxyTextureUrl = 'src/assets/galaxy.png',
  earthTextureUrl = 'src/assets/2k_earth_daymap.jpg',
  lightIntensity = 100,
  initialCameraPositionZ = 10,
  rotationSpeed = 0.0002,
  zoomedCameraPositionZ = 2,
  starCount = 3000,
}) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const earthMeshRef = useRef(null);
  const cloudsMeshRef = useRef(null); // Reference for the clouds mesh
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

      camera.position.z = initialCameraPositionZ;

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.01);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, lightIntensity);
      pointLight.position.set(5, 3, 5);
      scene.add(pointLight);

      // Create Earth
      const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);
      const earthTexture = new THREE.TextureLoader().load(earthTextureUrl);
      const earthMaterial = new THREE.MeshPhongMaterial({ 
        map: earthTexture,        
        roughness: 1,
        metalness: 0,
        shininess: 50,
        specular: new THREE.Color('grey'), 
        reflectivity: 1});
      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earthMesh);
      earthMeshRef.current = earthMesh;

      // Create Clouds
      const cloudGeometry = new THREE.SphereGeometry(0.605, 32, 32); // Slightly larger sphere for clouds
      const cloudTexture = new THREE.TextureLoader().load(cloudTextureUrl);
      const cloudMaterial = new THREE.MeshPhongMaterial({ 
        map: cloudTexture, 
        transparent: true, 
        opacity: 0.8 // Adjust opacity for cloud visibility
      });
      const cloudsMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
      scene.add(cloudsMesh);
      cloudsMeshRef.current = cloudsMesh;

      // Create stars
      const starGeometry = new THREE.SphereGeometry(0.04, 16, 16);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

      for (let i = 0; i < starCount; i++) {
        const starMesh = new THREE.Mesh(starGeometry, starMaterial);
        const radius = 200; 
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
      if (earthMeshRef.current && cloudsMeshRef.current && rendererRef.current && sceneRef.current && cameraRef.current) {
        earthMeshRef.current.rotation.y += rotationSpeed;
        cloudsMeshRef.current.rotation.y += rotationSpeed * 0.8; // Rotate clouds slightly slower for effect
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
        const targetZ = isZoomedInRef.current ? zoomedCameraPositionZ : initialCameraPositionZ;

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
      if (cloudsMeshRef.current) {
        cloudsMeshRef.current.geometry.dispose();
        cloudsMeshRef.current.material.dispose();
      }

      starsRef.current.forEach(star => {
        star.geometry.dispose();
        star.material.dispose();
      });
    };
  }, [toggleSidebar, handleZoom, earthTextureUrl, cloudTextureUrl, galaxyTextureUrl, lightIntensity, initialCameraPositionZ, rotationSpeed, zoomedCameraPositionZ, starCount]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default EarthCanvas;
