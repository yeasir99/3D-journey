import * as THREE from 'three';

const scene = new THREE.Scene();

const redGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const redMeterials = new THREE.MeshBasicMaterial({ color: 'red' });

const redMesh = new THREE.Mesh(redGeometry, redMeterials);

redMesh.position.set(-1, 1, 0);

const blueGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const blueMeterials = new THREE.MeshBasicMaterial({ color: 'blue' });

const blueMesh = new THREE.Mesh(blueGeometry, blueMeterials);

blueMesh.position.x = 1;

blueMesh.lookAt(redMesh.position);

scene.add(redMesh, blueMesh);

const aspect = {
  x: window.innerWidth,
  y: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.x / aspect.y);
camera.position.z = 4;

scene.add(camera);

const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.x, aspect.y);

window.addEventListener('resize', () => {
  aspect.x = window.innerWidth;
  aspect.y = window.innerHeight;

  camera.aspect = aspect.x / aspect.y;
  camera.updateProjectionMatrix();

  renderer.setSize(aspect.x, aspect.y);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const lookAt = () => {
  renderer.render(scene, camera);
};

export default lookAt;
