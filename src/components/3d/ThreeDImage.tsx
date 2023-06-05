import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDImage: React.FC = () => {
  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let model: THREE.Object3D;

    const init = () => {
      // Create a scene
      scene = new THREE.Scene();

      // Create a camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Create a renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Load the 3D model
      const loader = new GLTFLoader();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      loader.load('/path/to/your/model.glb', (gltf:any) => {
        model = gltf.scene;
        scene.add(model);

        // Optional: Set initial rotation or position
        model.rotation.y = Math.PI / 4;

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          model.rotation.y += 0.01;
          renderer.render(scene, camera);
        };

        animate();
      });
    };

    init();
  }, []);

  return null;
};

export default ThreeDImage;
