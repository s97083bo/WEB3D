import {makeCar} from './car.js';
import {car,ts,keys,T} from './init.js';

function keyframe(t) {
  var s = ((t - ts) % T) / T;
  console.log()
  for (var i = 1; i < keys.length; i++) {
    if (keys[i][0] > s) break;
  }
  // take i-1
  var ii = i - 1;
  var a =(s - keys[ii][0]) / (keys[ii + 1][0] - keys[ii][0]);
   // console.log(a)
  car.position.lerpVectors(keys[ii][1], keys[ii+1][1], a);
  car.quaternion.slerpQuaternions(keys[ii][2], keys[ii+1][2], a)
}

export{keyframe}