import React, { useRef, useEffect, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const EarthCanvas = ({ toggleSidebar, handleZoom }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const earthMeshRef = useRef(null);
  const cloudMeshRef = useRef(null);
  const starMeshRef = useRef(null);
  const isSpaceViewRef = useRef(true);
  const mouseRef = useRef(new THREE.Vector2());
  const raycasterRef = useRef(new THREE.Raycaster());

  const createScene = useCallback(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0.0);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Earth
    const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({
      // map: new THREE.TextureLoader().load('src/assets/earthmap1k.jpg'),
      // bumpMap: new THREE.TextureLoader().load('src/assets/earthbump.jpg'),
      color:0x0000ff,
      bumpScale: 0.1,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);
    earthMeshRef.current = earthMesh;

    // Cloud
    const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      // map: new THREE.TextureLoader().load('src/assets/earthCloud.png'),
      color:0xff0000,
      transparent: true,
      opacity: 0.8,
    });
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);
    cloudMeshRef.current = cloudMesh;

    // Stars
    const starGeometry = new THREE.SphereGeometry(40, 64, 64);
    const starMaterial = new THREE.MeshBasicMaterial({
      // map: new THREE.TextureLoader().load('src/assets/galaxy.png'),
      color:0x00ff00,
      side: THREE.BackSide,
    });
    const starMesh = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starMesh);
    starMeshRef.current = starMesh;
  }, []);

  const handleResize = useCallback(() => {
    if (cameraRef.current && rendererRef.current) {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
  }, []);

  const handleMouseMove = useCallback((event) => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }, []);

  const handleClick = useCallback(() => {
    if (earthMeshRef.current && cameraRef.current) {
      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      const intersects = raycasterRef.current.intersectObject(earthMeshRef.current);

      if (intersects.length > 0) {
        isSpaceViewRef.current = !isSpaceViewRef.current;
        const targetZ = isSpaceViewRef.current ? 10 : 2;

        gsap.to(cameraRef.current.position, {
          z: targetZ,
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => handleZoom(cameraRef.current.position.z),
          onComplete: toggleSidebar
        });
      }
    }
  }, [toggleSidebar, handleZoom]);

  const animate = useCallback(() => {
    if (earthMeshRef.current && cloudMeshRef.current && starMeshRef.current && cameraRef.current && rendererRef.current && sceneRef.current) {
      earthMeshRef.current.rotation.y += 0.001;
      cloudMeshRef.current.rotation.y += 0.0015;
      starMeshRef.current.rotation.y += 0.0005;

      cameraRef.current.lookAt(sceneRef.current.position);
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    createScene();
    animate();

    window.addEventListener('resize', handleResize);
    canvasRef.current.addEventListener('mousemove', handleMouseMove);
    canvasRef.current.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvasRef.current.removeEventListener('mousemove', handleMouseMove);
      canvasRef.current.removeEventListener('click', handleClick);
      
      // Dispose of Three.js objects
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, [createScene, animate, handleResize, handleMouseMove, handleClick]);

  return <canvas ref={canvasRef} />;
};

export default React.memo(EarthCanvas);