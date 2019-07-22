export default function( sketch ){
var width, height;
var points = []; //[][]
var num = 50;
var phi, theta;
var x, y, z;
var r = 200;
var r2 = r;
var m = 2;
var mchange = 0;
var a = 1;
var b = 1;
var achange = 0;
var bchange = 0;


var m1;
var m2;
var n1;
var n2;
var n3;
var nn1;
var nn2;
var nn3;
var canvasAngleX = 0;
var canvasAngleY = 0;
var cameraDelta = 0.1;

var mode = 3;

sketch.windowResized = function() {
    width = document.getElementById('sketch').clientWidth;
    height = document.getElementById('sketch').clientHeight;
    sketch.resizeCanvas(width, height);
}

sketch.setup = function() {
    width = document.getElementById('sketch').clientWidth;
    height = document.getElementById('sketch').clientHeight;
    sketch.createCanvas(width, height, sketch.WEBGL);
    document.getElementById('mode-selector').addEventListener('click', ()=>{
      mode++;
      if(mode > 3) mode = 0;
    })
  
    for (var x = 0; x < num+1; x++) {
        points[x] = [];  
        for (var y = 0; y < num+1; y++) {
          points[x][y] = {x: 0, y: 0, z: 0}; //init to 0
        }
      }
      randomizeVals();
    init();
}

sketch.draw = function(){
    if(sketch.keyIsPressed) {
        if(sketch.key === "ArrowUp"){
            canvasAngleY+=cameraDelta;
        } else if(sketch.key === "ArrowDown"){
            canvasAngleY-=cameraDelta;
        } else if(sketch.key === "ArrowLeft"){
            canvasAngleX-=cameraDelta;
        } else if(sketch.key === "ArrowRight"){
            canvasAngleX+=cameraDelta;
        }
    }
    sketch.rotateX(canvasAngleX);
    sketch.rotateY(canvasAngleY);
    sketch.rotateZ(sketch.frameCount * 0.01);
    
    sketch.clear();
    sketch.ambientLight(128, 128, 128);
    sketch.directionalLight(128, 128, 128, 0, 0, -1);
    sketch.ambientMaterial(10, 104, 255, 170);
    sketch.strokeWeight(2);

    display();
    if(mode == 0){
      supershapeDisplay();
    } else if (mode == 1) {
      breathe();
    } else if (mode == 2){
        ellipseThing();
    } else {
      supershapeDisplay2();
    }
}


function display() {
  for (let i = 0; i < num; i++) {
    sketch.beginShape(sketch.TRIANGLE_STRIP);
    for (let j = 0; j < num+1; j++) {
      let p = points[i][j];
      let p2 = points[i+1][j];
      sketch.stroke(120, 60);
      sketch.vertex(p.x, p.y, p.z);
      sketch.vertex(p2.x, p2.y, p2.z);
    }
    sketch.endShape();
  } 
}

function randomizeVals(){
    m1 = sketch.floor(sketch.random(6)+2);
    m2 = sketch.floor(sketch.random(6)+2);
    n1 = sketch.floor(sketch.random(20));
    n2 = sketch.floor(sketch.random(20));
    n3 = sketch.floor(sketch.random(20));
    nn1 = sketch.floor(sketch.random(20));
    nn2 = sketch.floor(sketch.random(20));
    nn3 = sketch.floor(sketch.random(20));
}

sketch.keyPressed = function(){
    console.log(sketch.key)
  if(!(sketch.key === "ArrowUp" || sketch.key === "ArrowDown" || sketch.key === "ArrowLeft" || sketch.key === "ArrowRight")) {
    randomizeVals();
  }
}


function init() {
  for (let i = 0; i < num+1; i++) {
    theta = sketch.map(i, 0, num, 0, sketch.PI);
    for (let j = 0; j < num+1; j++) {
      phi = sketch.map(j, 0, num, 0, sketch.TWO_PI);
      r2 = r;
      r2 = r + ((sketch.noise(phi*theta) - 0.5) * 100);
      x = r2 * sketch.sin(theta) * sketch.cos(phi);
      y = r2 * sketch.sin(theta) * sketch.sin(phi);
      z = r2 * sketch.cos(theta);
      points[i][j] = {x: x, y: y, z: z};
    }
  }
}

// function update() {
//   r2 = r2 + (.56*sketch.sin(sketch.frameCount/120));
//   for (let i = 0; i < num+1; i++) {
//     theta = sketch.map(i, 0, num, 0, sketch.PI);
//     for (let j = 0; j < num+1; j++) {
//       phi = sketch.map(j, 0, num, 0, sketch.TWO_PI);
//       x = r2 * sketch.sin(theta) * sketch.cos(phi);
//       y = r2 * sketch.sin(theta) * sketch.sin(phi);
//       z = r2 * sketch.cos(theta);
//       points[i][j] = {x: x, y: y, z: z};
//     }
//   }
// }

function breathe() {
//   let n = sketch.noise(sketch.frameCount/120)/120;
//   easyCam.rotateX(n);

  r2 = r2 + (.4*sketch.sin(sketch.frameCount/120));
  for (let i = 0; i < num+1; i++) {
    theta = sketch.map(i, 0, num, 0, sketch.PI);
    for (let j = 0; j < num+1; j++) {
      phi = sketch.map(j, 0, num, 0, sketch.TWO_PI);
      x = r2 * sketch.sin(theta) * sketch.cos(phi);
      y = r2 * sketch.sin(theta) * sketch.sin(phi);
      z = r2 * sketch.cos(theta);
      points[i][j] = {x: x, y: y, z: z};
    }
  }
}

function ellipseThing() {
  r2 = r2 + (.56*sketch.sin(sketch.frameCount/120));
  for (let i = 0; i < num+1; i++) {
    theta = sketch.map(i, 0, num, 0, sketch.PI);
    for (let j = 0; j < num+1; j++) {
      phi = sketch.map(j, 0, num, 0, sketch.TWO_PI);
      x = r2 * sketch.sin(theta) * sketch.cos(phi);
      y = r2 * sketch.sin(sketch.sin(theta)) * sketch.sin(phi);
      z = r2 * sketch.cos(theta);
      points[i][j] = {x: x, y: y, z: z};
    }
  }
}

function supershape(m, theta, a, b, n1, n2, n3) {
  let t1 = sketch.pow(sketch.abs(sketch.cos(m*theta/4)/a), n2);
  let t2 = sketch.pow(sketch.abs(sketch.sin(m*theta/4)/b), n3);
  let res = sketch.pow(t1+t2, -1/n1);
  return res;
}

function supershapeDisplay() {
  r2 = r/2;
  m = sketch.map(sketch.sin(mchange), -1, 1, -7, 7);
  mchange += 0.001;
  
  a = sketch.map(sketch.sin(achange), -1, 1, -2, 2);
  achange += 0.001;
  
  b = sketch.map(sketch.cos(bchange), -1, 1, -2, 2);
  bchange += 0.001;
  
  for (let i = 0; i < num+1; i++) {
    theta = sketch.map(i, 0, num, -sketch.HALF_PI, sketch.HALF_PI);
    let r1 = supershape(m, theta, a, b, .7, .3, .2);
    for (let j = 0; j < num+1; j++) {
      phi = sketch.map(j, 0, num, -sketch.PI, sketch.PI);
      r2 = supershape(m, phi, a, b, 100, 100, 100);
      x = r * r1 * sketch.cos(phi) * r2 * sketch.cos(theta);
      y = r * r1 * sketch.sin(phi) * r2 * sketch.cos(theta);
      z = r * r2 * sketch.sin(theta);
      points[i][j] = {x: x, y: y, z: z};
    }
  }
}

function supershapeDisplay2() {
  for (let i = 0; i < num+1; i++) {
    theta = sketch.map(i, 0, num, -sketch.HALF_PI, sketch.HALF_PI);
    let r1 = supershape(m1, theta, a, b, n1, n2, n3);
    for (let j = 0; j < num+1; j++) {
      phi = sketch.map(j, 0, num, -sketch.PI, sketch.PI);
      r2 = supershape(m2, phi, a, b, nn1, nn2, nn3);
      x = r * r1 * sketch.cos(phi) * r2 * sketch.cos(theta);
      y = r * r1 * sketch.sin(phi) * r2 * sketch.cos(theta);
      z = r * r2 * sketch.sin(theta);
      points[i][j] = {x: x, y: y, z: z};
    }
  }
}


}