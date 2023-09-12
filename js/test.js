import * as THREE from 'three';

import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';

// console.log('GLTFLoader:', GLTFLoader)
// console.log('OrbitControls:', OrbitControls)

// Constants
const container = document.getElementById('viewer');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');

// const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// const loader = new GLTFLoader();
// loader.load('model/woolly-gltf/woolly-mammoth-100k-4096.gltf', (gltf) => {
//     const model = gltf.scene;
//     scene.add(model);
// });

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setAnimationLoop( animation );
// renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setSize(container.clientWidth, container.clientHeight);
// document.body.appendChild( renderer.domElement );
container.appendChild(renderer.domElement);

// animation
function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;
	renderer.render( scene, camera );

}

// Event listeners for zoom buttons
zoomInButton.addEventListener('click', () => {
    camera.position.z -= 0.25;
});

zoomOutButton.addEventListener('click', () => {
    camera.position.z += 0.25;
});