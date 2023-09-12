# Project Overview
This repository contains a simple web-based 3D viewer for a woolly mammoth model in the GLTF format. The viewer allows users to interact with the 3D model using the OrbitControls.js extension and provides a smooth experience for exploring the model.

# Getting Started
To run this project, you'll need to use a local web server. We recommend using the Live Server extension if you are using Visual Studio Code. Here's how to get started:

1. Install Visual Studio Code if you haven't already.
2. Install the Live Server extension from the VS Code marketplace.
3. Open your project folder in Visual Studio Code.
4. Right-click on index.html and select "Open with Live Server."

# Directory Structure
Your project should have the following directory structure:

- index.html: The main HTML file for your project.
- css/viewer.css: The CSS file for styling your viewer.
- js/viewer.js: The main JavaScript file for your project.
- js/lib/GLTFLoader.js: The GLTF loader library.
- js/lib/OrbitControls.js: The OrbitControls library for camera control.
- js/lib/utils/BufferGeometryUtils.js: Utility library for buffer geometry operations.
- model/woolly-gltf/woolly-mammoth-100k-4096.gltf: The 3D model file.
- model/woolly-gltf/woolly-mammoth-100k-4096.bin: The binary data associated with the 3D model.
- model/woolly-gltf/woolly-mammoth-100k-4096.jpg: The texture image for the 3D model.

# Credits
GLTFLoader, OrbitControls, and Utils libraries are provided by Three.js (https://threejs.org/).
