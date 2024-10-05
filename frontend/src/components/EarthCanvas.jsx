import * as THREE from 'three';
import { useRef, useEffect } from 'react';

const EarthCanvas = () => {
  const canvasRef = useRef(null);
  let isSpaceView = true; // Start in space view

  useEffect(() => {
    let scene, camera, renderer, earthMesh, cloudMesh, starMesh;
    let mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    function main() {
      const canvas = canvasRef.current;

      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 10; // Start out view

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 0.0);

      // Create Earth geometry
      const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);
      const earthMaterial = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('src/assets/earthmap1k.jpg'),
        bumpMap: new THREE.TextureLoader().load('src/assets/earthbump.jpg'),
        bumpScale: 0.5,
      });

      earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earthMesh);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xffffff, 0.9);
      pointLight.position.set(5, 3, 5);
      scene.add(pointLight);

      // Cloud
      const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);
      const cloudMaterial = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('src/assets/earthCloud.png'),
        transparent: true,
      });

      cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
      scene.add(cloudMesh);

      // Star background
      const starGeometry = new THREE.SphereGeometry(40, 16, 16);
      const starMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('src/assets/galaxy.jpg'),
        side: THREE.BackSide,
      });

      starMesh = new THREE.Mesh(starGeometry, starMaterial);
      scene.add(starMesh);

      // Mouse move event listener
      document.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      });

      // Click event on canvas
      canvas.addEventListener('click', () => {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects([earthMesh]);

        if (intersects.length > 0) {
          isSpaceView = !isSpaceView;

          if (isSpaceView) {
            // Zoom out to space view
            gsap.to(camera.position, { z: 10, duration: 1, ease: "power2.inOut" });
          } else {
            // Zoom in to Earth view
            gsap.to(camera.position, { z: 2, duration: 1, ease: "power2.inOut" });
          }
        }
      });

      // Handle window resize
      window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      });

      const animate = () => {
        requestAnimationFrame(animate);
        earthMesh.rotation.y += 0.0015;
        cloudMesh.rotation.y += 0.0015;
        starMesh.rotation.y += 0.0015; // Rotate star background
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
      };

      animate();
    }

    main();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default EarthCanvas;
