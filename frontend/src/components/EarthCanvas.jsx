import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const EarthCanvas = ({ toggleSidebar, handleZoom }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const earthMeshRef = useRef(null);
  const isZoomedInRef = useRef(false);
  const isInitializedRef = useRef(false);

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
      camera.position.z = 10;
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      // scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 100);
      pointLight.position.set(5, 3, 5);
      scene.add(pointLight);

      const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);
      const earthTexture = new THREE.TextureLoader().load('src/assets/earthmap1k.jpg');
      const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earthMesh);
      earthMeshRef.current = earthMesh;


      // Star background
      const starGeometry = new THREE.SphereGeometry(40, 16, 16);
      const starMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('src/assets/galaxy.png'),
        side: THREE.BackSide,
      });

      const starMesh = new THREE.Mesh(starGeometry, starMaterial);
      scene.add(starMesh);


      isInitializedRef.current = true;
    }

    const animate = () => {
      if (earthMeshRef.current && rendererRef.current && sceneRef.current && cameraRef.current) {
        earthMeshRef.current.rotation.y += 0.0002;
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
        const targetZ = isZoomedInRef.current ? 2 : 10;

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
    };
  }, [toggleSidebar, handleZoom]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default EarthCanvas;