import * as THREE from 'https://threejs.org/build/three.module.js';

function makeCar() {
  var car = new THREE.Group();
  var normalMat = new THREE.MeshNormalMaterial({

  });
  var body = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 6, 20), normalMat);
  var nose = new THREE.Mesh(new THREE.ConeGeometry(3, 10, 10,1), normalMat);
  nose.position.x = 25 / 2;
  nose.rotation.z = -Math.PI/2;
  nose.rotation.x = -Math.PI/4;

  var nose2 =nose.clone();
  nose2.position.x = -25 / 2;
  nose2.rotation.z = Math.PI/2;

 
  var nose3 =nose.clone();
  nose3.position.x =0;
  nose3.position.z = -25 / 2;
  nose3.rotation.z = Math.PI/2;
  nose3.rotation.x = 0;
  nose3.rotation.y = -Math.PI/2;
  
  var nose4 =nose3.clone();
  nose4.position.z = 25 / 2;
  nose4.rotation.z =Math.PI;
  nose4.rotation.y = -Math.PI/2;
  car.add(body, nose,nose2,nose3,nose4);
  car.rotation.x = Math.PI/10;
 
  return car;
}
export {makeCar};