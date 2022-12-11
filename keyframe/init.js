import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'https://threejs.org/build/three.module.js';
import {makeCar} from './car.js';
import {keyframe} from './keyframe.js';

var camera, scene, renderer;

var keys;
var T = 2;
var clock = new THREE.Clock();
var ts = clock.getElapsedTime();
var car;



function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(-280, 200, -280); // camera at (0,0,500)

  let controls = new OrbitControls(camera, renderer.domElement);
  
  ////////////////////////////////////////////////////////
  var gridXZ = new THREE.GridHelper(300, 30, 'red', 'white');
  var wall = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 10,1), new THREE.MeshNormalMaterial());
  scene.add(gridXZ,wall);
  wall.position.set(83,50,83)

  wall.rotation.y = Math.PI/4;
  
  
  car = makeCar();
  scene.add (car);
  var angle=-Math.PI/2,n=100,
  car1 = car.clone();
  car1.position.set (n*Math.cos(angle-Math.PI/6), 30*Math.cos(angle-Math.PI/6)+30, n*Math.sin(angle-Math.PI/6));
  angle+=Math.PI/10;
  car1.rotation.y = 0;
  
  var car2 = car.clone();
  car2.position.set (n*Math.cos(angle-Math.PI/6), 30*Math.cos(angle-Math.PI/6)+30, n*Math.sin(angle-Math.PI/6));
  angle+=Math.PI/10;
  car2.rotation.y = -2*Math.PI/3;
  
  var car3 = car.clone();
  car3.position.set (n*Math.cos(angle-Math.PI/6), 30*Math.cos(angle-Math.PI/6)+30, n*Math.sin(angle-Math.PI/6));
  angle+=Math.PI/10;
  car3.rotation.y =- 4*Math.PI/3;
  
 var  car4 = car.clone();
  car4.position.set (n*Math.cos(angle-Math.PI/6), 30*Math.cos(angle-Math.PI/6)+30, n*Math.sin(angle-Math.PI/6));
  angle+=Math.PI/10;
  car4.rotation.y = 0;
  
  var car5 = car.clone();
  car5.position.set (n*Math.cos(angle-Math.PI/6), 30*Math.cos(angle-Math.PI/6)+30, n*Math.sin(angle-Math.PI/6));
  angle+=Math.PI/10;
  car5.rotation.y = -2*Math.PI/3;

  var car6 = car.clone();
  car6.position.set (n*Math.cos(angle-Math.PI/6), 30*Math.cos(angle-Math.PI/6)+30, n*Math.sin(angle-Math.PI/6));
  angle+=Math.PI/10;
  car6.rotation.y =- 4*Math.PI/3;
  
  var car7 = car.clone();
  car7.position.set (n*Math.cos(angle-Math.PI/6), 30*Math.cos(angle-Math.PI/6)+30, n*Math.sin(angle-Math.PI/6));
  angle+=Math.PI/10;
  car7.rotation.y = 0;

  var car8 = car.clone();
  car8.position.set (n*Math.cos(angle-Math.PI/6), 30*Math.cos(angle-Math.PI/6)+30, n*Math.sin(angle-Math.PI/6));
  angle+=Math.PI/10;
  car8.rotation.y = -2*Math.PI/3;
  
  var car9 = car.clone();
  car9.position.set (n*Math.cos(angle-Math.PI/6), 30*Math.cos(angle-Math.PI/6)+30, n*Math.sin(angle-Math.PI/6));
  angle+=Math.PI/10;
  car9.rotation.y =-4*Math.PI/3;
  
  var car10 = car.clone();
  car10.position.set (n*Math.cos(angle-Math.PI/6), 30*Math.cos(angle-Math.PI/6)+30, n*Math.sin(angle-Math.PI/6));
  //angle+=Math.PI/10;
  car10.rotation.y = -1;
  
  car10.rotation.z = 0.1;

  
  var carend = car.clone();
  carend.position.set (n*Math.cos(angle-Math.PI/6), 30*Math.cos(angle-Math.PI/6)+30, n*Math.sin(angle-Math.PI/6));
  carend.rotation.y = -1;
  carend.rotation.z = 0.1;
 // carend.rotation.x = Math.PI/4;
  ///////////////////

  keys = [
    [0, car1.position,car1.quaternion],  
    [0.05, car2.position,car2.quaternion],
    [0.1, car3.position,car3.quaternion],
    [0.15, car4.position,car4.quaternion],
    [0.2, car5.position,car5.quaternion],
    [0.25, car6.position,car6.quaternion],
    [0.3, car7.position,car7.quaternion],
    [0.34, car8.position,car8.quaternion],
    [0.38, car9.position,car9.quaternion],
    [0.41, car10.position,car10.quaternion],
    
    [1,carend.position,carend.quaternion]
    //[1, car1.position,car1.quaternion]
  ];

}


function animate() {

  keyframe (clock.getElapsedTime());
  
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
export{init,animate};
export{renderer,scene,camera};
export{car,ts,keys,T};