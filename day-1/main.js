import './style.css';

import * as THREE from 'three';

// get canvas

const canvas = document.querySelector('.webgl');

// create scean

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const meterial = new THREE.MeshBasicMaterial({
  color: 'red',
});

const mesh = new THREE.Mesh(geometry, meterial);

scene.add(mesh);

const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);

camera.position.z = 3;
camera.position.x = 1;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(aspect.width, aspect.height);

renderer.render(scene, camera);
