import * as THREE from 'three';

const scene = new THREE.Scene();

const geometery = new THREE.BoxGeometry(1, 1, 1);
const meteriels = new THREE.MeshBasicMaterial({ color: 'pink' });

const mesh = new THREE.Mesh(geometery, meteriels);

scene.add(mesh);

const aspect = {
  x: window.innerWidth,
  y: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.x / aspect.y);
camera.position.z = 5;

scene.add(camera);

const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(aspect.x, aspect.y);

const initial = () => {
  renderer.render(scene, camera);
};

export default initial;
