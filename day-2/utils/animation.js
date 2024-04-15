import * as THREE from 'three';

const scene = new THREE.Scene();

const geomatry = new THREE.BoxGeometry(1, 1, 1);

const meterials = new THREE.MeshBasicMaterial({ color: 'blue' });

const mesh = new THREE.Mesh(geomatry, meterials);

scene.add(mesh);

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

const clock = new THREE.Clock();

const animation = () => {
  const elapsedTime = clock.getElapsedTime();
  mesh.position.x = Math.sin(elapsedTime) * 2;
  mesh.position.y = Math.cos(elapsedTime) * 2;
  renderer.render(scene, camera);
  window.requestAnimationFrame(animation);
};

export default animation;
