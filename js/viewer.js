import * as THREE from 'three';

// import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';

import { GLTFLoader } from './lib/GLTFLoader.js';
import { OrbitControls } from './lib/OrbitControls.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 0, 3);
camera.position.set(-5, 0, 0);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor( 0xC5C5C3 );

const container = document.getElementById('viewer');
container.appendChild(renderer.domElement);

// Load the 3D model
const loader = new GLTFLoader();
loader.load('model/woolly-gltf/woolly-mammoth-100k-4096.gltf', function (gltf) {
    const model = gltf.scene;
    scene.add(model);
}, undefined, function ( error ) {
    console.error( error );
});

// Add lighting
const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');

// Event listeners for zoom buttons
zoomInButton.addEventListener('click', () => {
  // camera.position.z -= 0.5;
  controls.zoomIn();
});

zoomOutButton.addEventListener('click', () => {
  // camera.position.z += 0.5;
  controls.zoomOut();
});

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update(); // Update controls
};

animate();
