import './style.css';
import * as THREE from 'three';

// create scene

const scene = new THREE.Scene();

// create mesh

const geometry = new THREE.BoxGeometry(1, 1, 1);

const meteriels = new THREE.MeshBasicMaterial({
  color: 'blue',
});

const mesh = new THREE.Mesh(geometry, meteriels);

scene.add(mesh);

// setup camera

const aspect = {
  x: window.innerWidth,
  y: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.x / aspect.y);
camera.position.z = 6;

scene.add(camera);

// setup renderer

const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(aspect.x, aspect.y);

// setup a animation

const clock = new THREE.Clock();

// setup responsive
window.addEventListener('resize', () => {
  aspect.x = window.innerWidth;
  aspect.y = window.innerHeight;

  camera.aspect = aspect.x / aspect.y;

  camera.updateProjectionMatrix();

  renderer.setSize(aspect.x, aspect.y);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const animation = () => {
  const elapsedTime = clock.getElapsedTime();

  // mesh.rotation.x = Math.sin(elapsedTime) * 2;
  // mesh.rotation.y = Math.cos(elapsedTime) * 2;

  mesh.rotation.z = -Math.PI * elapsedTime;
  mesh.position.x = Math.sin(elapsedTime) * 2;
  mesh.position.y = Math.cos(elapsedTime) * 2;

  renderer.render(scene, camera);
  window.requestAnimationFrame(animation);
};

animation();
