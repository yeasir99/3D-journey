import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const meterials = new THREE.MeshBasicMaterial({ color: 'blue' });

const mesh = new THREE.Mesh(geometry, meterials);

scene.add(mesh);

const aspect = {
  x: window.innerWidth,
  y: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.x / aspect.y);
camera.position.z = 4;

scene.add(camera);

const canvas = document.querySelector('.webgl');

const controls = new OrbitControls(camera, canvas);
// controls.autoRotate = true;
// controls.autoRotateSpeed = 100;
controls.enableDamping = true;
controls.dampingFactor = 0.01;

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

const orbitControl = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(orbitControl);
};

export default orbitControl;
