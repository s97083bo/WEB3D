import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { buildScene,sprite ,text,sprite2} from './buildScene';

var camera, scene, renderer;
var circle, pos, vel,counter=0,start=0;
/*var group=new THREE.Group()
group.add(text)*/
init();
animate();

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set (0,0,300);
  
  const controls = new OrbitControls( camera, renderer.domElement );

  ////////////////////////////////////////////////////////////////
  var gridXZ = new THREE.GridHelper(200, 20, 'red', 'white');
  //scene.add(gridXZ);



  circle = new THREE.Mesh(new THREE.SphereGeometry( 10, 32, 16 ), new THREE.MeshNormalMaterial({
    //color: 'yellow'
  }));
  scene.add(circle);

  pos = new THREE.Vector3();
  //vel = new THREE.Vector3(11*Math.random()+9,15*Math.random()+12);
  vel = new THREE.Vector3(10,13);
  buildScene();

}

function animate() {

  requestAnimationFrame(animate);
  renderer.render(scene, camera);

 var dt = 0.05; 
  
  pos.add(vel.clone().multiplyScalar(dt));
  if (pos.x > 70 || pos.x < -70)
    vel.x *= -1;
  if (pos.y < -70)
    vel.y *= -1;
  if(pos.y > 70 ){
    if(pos.x > -30 && pos.x < 30){
    }
    else{vel.y *= -1;}
}
  if(pos.y > 100 ){
  vel.x *= 0;
  vel.y *= 0;
  start=true;
  counter+=1;
}

  circle.position.copy(pos);
  sprite.position.set(pos.x,pos.y+16,pos.z);

if(start===true){
if(counter===1){
text.position.set(120*Math.random()-60,120*Math.random()-40,20 )
}
if(counter===10){
text.position.x+=5
text.position.y+=5
}
if(counter===20){
text.position.x-=10
text.position.y-=8
}
if(counter===30){
text.position.x+=2
text.position.y-=6
}
if(counter===40){
text.position.x-=7
text.position.y-=8
}
if(counter===50){
text.position.x+=15
text.position.y+=4
}

if(counter===60){
text.position.set(100*Math.random()-50,100*Math.random()-40,20 )
}
if(counter===70){
text.position.x+=5
text.position.y+=5
}
if(counter===80){
text.position.x-=10
text.position.y-=8
}
if(counter===90){
text.position.x+=2
text.position.y-=6
}
if(counter===100){
text.position.x-=7
text.position.y-=8
}
if(counter===110){
text.position.x+=15
text.position.y+=4
}

if(counter>120&&counter<=240){
text.position.set(0,0,20)
text.rotation.z+=Math.PI/20
}

if(counter===250){
text.position.set(-50,-50,11)
var text2=text.clone();
scene.add(text2)
}
if(counter===260){
text.position.set(-30,-30,12)
var text2=text.clone();
scene.add(text2)
}
if(counter===270){
text.position.set(-10,-10,13)
var text2=text.clone();
scene.add(text2)
}
if(counter===280){
text.position.set(10,10,14)
var text2=text.clone();
scene.add(text2)
}
if(counter===290){
text.position.set(30,30,16)
var text2=text.clone();
scene.add(text2)
}
if(counter===300){
text.position.set(50,50,17)
var text2=text.clone();
scene.add(text2)
}
if(counter===310){
text.position.set(70,70,18)

}


if(counter===500){
scene.add(sprite2);
}

}
}

export {scene};
