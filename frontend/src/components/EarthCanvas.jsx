// src/components/EarthCanvas.jsx
import React, { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const EarthCanvas = ({ toggleSidebar, handleZoom }) => {
  useEffect(() => {
    let scene, camera, renderer, earthMesh, cloudMesh, starMesh;
    let isSpaceView = true;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const init = () => {
      const canvas = document.querySelector('#earthCanvas');

      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 10;

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 0.0);

      // Texture loading
      const textureLoader = new THREE.TextureLoader();

      textureLoader.load(
        '/textures/earthmap1k.jpg',
        (texture) => {
          console.log('Earth texture loaded successfully!');
          const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);
          const earthMaterial = new THREE.MeshPhongMaterial({
            map: texture,
            bumpMap: bumpTexture, // bumpTexture will need to be defined or loaded
            bumpScale: 0.5,
          });
          earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
          scene.add(earthMesh);
        },
        undefined,
        (error) => {
          console.error('Error loading earth texture:', error);
        }
      );

      textureLoader.load(
        '/textures/earthbump.jpg',
        (texture) => {
          console.log('Bump texture loaded successfully!');
          bumpTexture = texture; // Make sure bumpTexture is defined
        },
        undefined,
        (error) => {
          console.error('Error loading bump texture:', error);
        }
      );

      textureLoader.load(
        '/textures/earthCloud.png',
        (texture) => {
          console.log('Cloud texture loaded successfully!');
          const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);
          const cloudMaterial = new THREE.MeshPhongMaterial({
            map: texture,
            transparent: true,
          });
          cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
          scene.add(cloudMesh);
        },
        undefined,
        (error) => {
          console.error('Error loading cloud texture:', error);
        }
      );

      textureLoader.load(
        '/textures/galaxy.png',
        (texture) => {
          console.log('Star texture loaded successfully!');
          const starGeometry = new THREE.SphereGeometry(40, 16, 16);
          const starMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.BackSide,
          });
          starMesh = new THREE.Mesh(starGeometry, starMaterial);
          scene.add(starMesh);
        },
        undefined,
        (error) => {
          console.error('Error loading star texture:', error);
        }
      );

      animate();
    };

    // ... (rest of your code remains unchanged)

    // Initialize Three.js scene
    init();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('click', onCanvasClick);
      canvas.removeEventListener('wheel', onWheelZoom);
    };
  }, [toggleSidebar, handleZoom]);

  return <canvas id="earthCanvas"></canvas>;
};

export default EarthCanvas;
