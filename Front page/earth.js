import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';

let scene, camera, renderer, earthMesh, cloudMesh, starMesh;
let mouse = new THREE.Vector2();
let isSpaceView = true; // Start in space view
let starRotationSpeed = 0.001; // Speed for the star background rotation
const raycaster = new THREE.Raycaster();

function main() {
    const canvas = document.querySelector('#c');

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
        map: new THREE.TextureLoader().load('texture/earthmap1k.jpg'),
        bumpMap: new THREE.TextureLoader().load('texture/earthbump.jpg'),
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
        map: new THREE.TextureLoader().load('texture/earthCloud.png'),
        transparent: true,
    });

    cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);

    // Star background
    const starGeometry = new THREE.SphereGeometry(40, 16, 16);
    const starMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('texture/galaxy.png'),
        side: THREE.BackSide,
    });

    starMesh = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starMesh);

    // Mouse move event listener
    document.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Get reference to the overlay title
    const overlayTitle = document.querySelector('.overlay-title');

    // Zoom animation and title fade-out
    canvas.addEventListener('wheel', (event) => {
        event.preventDefault(); // Prevent default scrolling

        const zoomSpeed = 0.001; // Adjust zoom speed
        camera.position.z += event.deltaY * zoomSpeed;
        camera.position.z = Math.max(1, Math.min(camera.position.z, 100)); // Clamp zoom range

        // If the camera is close to Earth, fade out the title
        if (camera.position.z < 6) {
            overlayTitle.style.opacity = '0'; // Start fade-out
            overlayTitle.style.transition = 'opacity 1s'; // Smooth fade effect
        } else {
            overlayTitle.style.opacity = '1'; // Fade back in if zoomed out
            overlayTitle.style.transition = 'opacity 1s'; // Smooth fade-in effect
        }
    });



    // Mouse click event to toggle space view only on Earth
    canvas.addEventListener('click', () => {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects([earthMesh]);

        if (intersects.length > 0) {
            isSpaceView = !isSpaceView;

            if (isSpaceView) {
                // Animate both camera zoom and title fade-in at the same time
                gsap.to(overlayTitle, { opacity: 1, duration: 0.05, ease: "power4.inOut" })
                gsap.to(camera.position, { z: 10, duration: 1, ease: "power2.inOut" });
            } else {
                // Animate both camera zoom and title fade-out at the same time
                gsap.to(overlayTitle, { opacity: 0, duration: 0.05, ease: "power4.inOut" });
                gsap.to(camera.position, { z: 2, duration: 1, ease: "power2.inOut" })

            }
        }
    });


    // Add button click event listener for the Google button
    const button = document.getElementById('goToGoogle');
    button.addEventListener('click', () => {
        button.classList.add('crash'); // Add crash class for animation

        // Redirect after the animation completes
        setTimeout(() => {
            window.location.href = 'https://www.google.com'; // Open Google in the same tab
        }, 500); // Match timeout with animation duration
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

    // Mouse wheel zoom event listener
    canvas.addEventListener('wheel', (event) => {
        event.preventDefault(); // Prevent default scrolling
        camera.position.z += event.deltaY * 0.001; // Adjust zoom speed
        camera.position.z = Math.max(1, Math.min(camera.position.z, 100)); // Clamp zoom range
    });

    const animate = () => {
        requestAnimationFrame(animate);
        earthMesh.rotation.y += 0.0015;
        cloudMesh.rotation.y += 0.0015;

        // Rotate star background when in space view
        if (isSpaceView) {
            starMesh.rotation.y += starRotationSpeed;
        }

        // Adjust camera based on mouse position when in Earth view
        if (!isSpaceView) {
            camera.position.x = mouse.x * 1.5;
            camera.position.y = mouse.y * 1.5;
        }

        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    };

    const sidebar = document.querySelector('.card');

    // Function to toggle sidebar visibility
    function toggleSidebar(show) {
        if (show) {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('visible');
        } else {
            sidebar.classList.remove('visible');
            sidebar.classList.add('hidden');
        }
    }

    // Scroll event - Show sidebar on zoom-in
    canvas.addEventListener('wheel', (event) => {
        event.preventDefault();
        camera.position.z += event.deltaY * 0.001;
        camera.position.z = Math.max(1, Math.min(camera.position.z, 100));

        if (camera.position.z < 3) {
            toggleSidebar(true);  // Show sidebar when zoomed in
        } else {
            toggleSidebar(false); // Hide sidebar when zoomed out
        }
    });

    // Click event - Show sidebar on zoom-in
    canvas.addEventListener('click', () => {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects([earthMesh]);

        if (intersects.length > 0) {
            isSpaceView = !isSpaceView;
            gsap.to(camera.position, {
                z: isSpaceView ? 10 : 2,
                duration: 1,
                onUpdate: function () {
                    if (camera.position.z < 3) {
                        toggleSidebar(true);  // Show sidebar when zoomed in
                    } else {
                        toggleSidebar(false); // Hide sidebar when zoomed out
                    }
                },
            });
        }
    });

    animate();
}

window.onload = main;
