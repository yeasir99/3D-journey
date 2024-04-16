import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const geomatry = new THREE.PlaneGeometry(0.5, 0.5);

const materials = new THREE.MeshBasicMaterial({ color: 'red' });

const mesh = new THREE.Mesh(geomatry, materials);

scene.add(mesh);

const aspect = {
  x: window.innerWidth,
  y: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.x / aspect.y);
camera.position.z = 2;

scene.add(camera);
const canvas = document.querySelector('.webgl');

const controls = new OrbitControls(camera, canvas);

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

const snowfall = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(snowfall);
};

export default snowfall;
