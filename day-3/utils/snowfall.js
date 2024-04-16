import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const geomatry = new THREE.BufferGeometry();

const verticesAmound = 20000;

const positionArray = new Float32Array(verticesAmound * 3);

for (let i = 0; i < verticesAmound * 3; i++) {
  positionArray[i] = (Math.random() - 0.5) * 4;
}

const textureLoader = new THREE.TextureLoader();

const textureImage = textureLoader.load('/alphaSnow.jpg');

console.log(textureImage);

geomatry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

const materials = new THREE.PointsMaterial();
materials.size = 0.02;
materials.transparent = true;
materials.alphaMap = textureImage;
materials.depthTest = false;

const points = new THREE.Points(geomatry, materials);

scene.add(points);

const aspect = {
  x: window.innerWidth,
  y: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.x / aspect.y, 0.01, 100);
camera.position.z = 2;

scene.add(camera);
const canvas = document.querySelector('.webgl');

const controls = new OrbitControls(camera, canvas);

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(aspect.x, aspect.y);

window.addEventListener('resize', () => {
  aspect.x = window.innerWidth;
  aspect.y = window.innerHeight;

  camera.aspect = aspect.x / aspect.y;
  camera.updateProjectionMatrix();

  renderer.setSize(aspect.x, aspect.y);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const clock = new THREE.Clock();

const snowfall = () => {
  const eleapsedTime = clock.getElapsedTime();
  points.rotation.y = -eleapsedTime * 0.06;
  points.rotation.x = eleapsedTime * 0.06;
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(snowfall);
};

export default snowfall;
