import { MeshText2D, SpriteText2D, textAlign } from '@kinyoklion/three-text2d/dist/three-text2d.js';
import * as THREE from 'three';

import {scene} from './main-3.js';

var sprite ,text,sprite2;

function buildScene() {


   let wall= new THREE.Mesh (new THREE.BoxGeometry(10,180,20), new THREE.MeshNormalMaterial());
   wall.position.set(85,0,0);
   scene.add (wall);

   let wall2= new THREE.Mesh (new THREE.BoxGeometry(10,180,20), new THREE.MeshNormalMaterial());
   wall2.position.set(-85,0,0);
   scene.add (wall2);

   let wall3= new THREE.Mesh (new THREE.BoxGeometry(10,160,20), new THREE.MeshNormalMaterial());
   wall3.position.set(0,-85,0);
   wall3.rotation.z=Math.PI/2
   scene.add (wall3);

   let wall4= new THREE.Mesh (new THREE.BoxGeometry(10,50,20), new THREE.MeshNormalMaterial());
   wall4.position.set(-55,85,0);
   wall4.rotation.z=Math.PI/2
   scene.add (wall4);

   let wall5= new THREE.Mesh (new THREE.BoxGeometry(10,50,20), new THREE.MeshNormalMaterial());
   wall5.position.set(55,85,0);
   wall5.rotation.z=Math.PI/2
   scene.add (wall5);

   text = new MeshText2D("OHHHHH", { align: textAlign.center, font: '30px Arial',
                           fillStyle: '#000000', antialias: true });
   text.position.set(0,1000,0) 
   scene.add(text);

 
  sprite = new SpriteText2D("Ball", {
    align: textAlign.center,
    font: '30px Arial',
    fillStyle: '#000000',
    antialias: true
  });
  //sprite.position.set(0, 200, 200);
  sprite.scale.set(0.5, 0.5, 0.5);
  scene.add(sprite);

sprite2 = new SpriteText2D("UwU", {
    align: textAlign.center,
    font: '30px Arial',
    fillStyle: '#000000',
    antialias: true
  });
  sprite2.position.set(100, -100, 20);
  //sprite2.scale.set(0.5, 0.5, 0.5);
  //scene.add(sprite);

}

export { buildScene, sprite ,text,sprite2};

