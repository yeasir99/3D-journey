import * as THREE from 'three';

const scene = new THREE.Scene();

const geomatry = new THREE.PlaneGeometry(1, 1);

const materials = new THREE.MeshBasicMaterial({ color: 'red' });

const mesh = new THREE.Mesh(geomatry, materials);

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

const snowfall = () => {
  renderer.render(scene, camera);
};

export default snowfall;
