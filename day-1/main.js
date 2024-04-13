import './style.css';

import * as THREE from 'three';

// scene

const scene = new THREE.Scene();

// setup Mesh

// red mesh

const geomatry = new THREE.BoxGeometry(0.5, 0.5, 0.5);

const meterials = new THREE.MeshBasicMaterial({ color: 'red' });

const redMash = new THREE.Mesh(geomatry, meterials);

redMash.position.set(-1, 1, 0);

// blue mesh

const geomatryBlue = new THREE.BoxGeometry(0.5, 0.5, 0.5);

const meterialsBlue = new THREE.MeshBasicMaterial({ color: 'blue' });

const blueMash = new THREE.Mesh(geomatryBlue, meterialsBlue);

blueMash.position.y = 1;

// green mesh

const geomatryGreen = new THREE.BoxGeometry(0.5, 0.5, 0.5);

const meterialsGreen = new THREE.MeshBasicMaterial({ color: 'green' });

const greenMash = new THREE.Mesh(geomatryGreen, meterialsGreen);

greenMash.position.set(1, 1, 0);

// white mesh

const geomatryWhite = new THREE.BoxGeometry(0.5, 0.5, 0.5);

const meterialsWhite = new THREE.MeshBasicMaterial({ color: 'white' });

const whiteMash = new THREE.Mesh(geomatryWhite, meterialsWhite);

whiteMash.position.set(-1, 0, 0);

// purple mesh
const geomatryPurple = new THREE.BoxGeometry(0.5, 0.5, 0.5);

const meterialsPurple = new THREE.MeshBasicMaterial({ color: 'purple' });

const purpleMash = new THREE.Mesh(geomatryPurple, meterialsPurple);

scene.add(purpleMash);

// pink mesh
const geomatryPink = new THREE.BoxGeometry(0.5, 0.5, 0.5);

const meterialsPink = new THREE.MeshBasicMaterial({ color: 'pink' });

const pinkMash = new THREE.Mesh(geomatryPink, meterialsPink);

pinkMash.position.x = 1;

scene.add(redMash, blueMash, greenMash, whiteMash, purpleMash, pinkMash);

// using lookAt method

whiteMash.lookAt(greenMash.position);
blueMash.lookAt(pinkMash.position);

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

  // redMash.rotation.y = elapsedTime * Math.PI;
  // blueMash.rotation.y = -elapsedTime * Math.PI;
  // greenMash.rotation.z = elapsedTime * Math.PI;
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();
