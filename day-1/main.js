import './style.css';

import * as THREE from 'three';

// scene

const scene = new THREE.Scene();

// setup Mesh

const geomatry = new THREE.BoxGeometry(1, 1, 1);

const meterials = new THREE.MeshBasicMaterial({ color: 'red' });

const mesh = new THREE.Mesh(geomatry, meterials);

scene.add(mesh);

// setup camera

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);

camera.position.z = 2;

scene.add(camera);

// setup renderar

const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(size.width, size.height);

const clock = new THREE.Clock();

const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  mesh.rotation.y = elapsedTime * Math.PI;
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();
