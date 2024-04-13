import './style.css';

import * as THREE from 'three';

// scene

const scene = new THREE.Scene();

// setup Mesh

const geomatry = new THREE.BoxGeometry(0.5, 0.5, 0.5);

const meterials = new THREE.MeshBasicMaterial({ color: 'red' });

const redMash = new THREE.Mesh(geomatry, meterials);

scene.add(redMash);

// setup camera

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);

camera.position.z = 3;

scene.add(camera);

// setup renderar

const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(size.width, size.height);

const clock = new THREE.Clock();

// setup animation

const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  // using sin fn

  // mesh.position.x = Math.sin(elapsedTime) * 2;
  // using cos fn
  // mesh.position.y = Math.cos(elapsedTime) * 2;

  // using tan fn
  // mesh.position.x = Math.tan(elapsedTime) * 2;
  // mesh.position.y = Math.tan(elapsedTime) * 2;

  redMash.rotation.y = elapsedTime * Math.PI;
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();
