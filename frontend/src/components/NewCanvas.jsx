// NewCanvas.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const NewCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 10; // Move the camera further away

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 6; // Prevent zooming out below this distance
    controls.maxDistance = 15; // Optional: Set a maximum zoom out distance

    // Sphere geometry and material (increased radius to 3)
    const geometry = new THREE.SphereGeometry(3, 32, 32); // Earth size increased to 3
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);

    // Create a group to hold the sphere
    const sphereGroup = new THREE.Group();
    sphereGroup.add(sphere);
    scene.add(sphereGroup);

    // Tilt the group by 23.5 degrees around the x-axis (this will simulate the Earth's tilt)
    sphereGroup.rotation.x = THREE.MathUtils.degToRad(23.5);

    // Generate stars in a sphere around the Earth
    const generateStars = () => {
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

      const starCount = 1000; // Number of stars
      const positions = new Float32Array(starCount * 3); // x, y, z for each star
      const starRadius = 6; // Radius of the sphere for stars

      for (let i = 0; i < starCount; i++) {
        // Random spherical coordinates
        const theta = Math.random() * Math.PI * 2; // Random angle around the vertical axis
        const phi = Math.acos(2 * Math.random() - 1); // Random angle from the vertical (0 to π)

        // Convert spherical coordinates to Cartesian coordinates
        positions[i * 3] = starRadius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = starRadius * Math.sin(phi) * Math.sin(theta);
        positions[i * 4 + 2] = starRadius * Math.cos(phi);
      }

      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Create the Points object to hold the stars
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
    };

    generateStars(); // Call the function to generate stars

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the group around the y-axis (simulating Earth's rotation)
      sphereGroup.rotation.y += 0.01;

      controls.update(); // Update controls

      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
  );
};

export default NewCanvas;
