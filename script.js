let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(255);
  ortho(-300, 300, -300, 300, 0, 800);
  ambientLight(255, 255, 255, 0, -1, 0);
  //   translate(0, 50, -50);
  rotateX(-PI / 8);
  rotateY(0.8);
  console.log("millis() / 1000", millis() / 1000);
  rectMode(CENTER);

  //   rotateX(angle);
  let offset = 0;

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -5, 5);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 50, 200);
      normalMaterial(255);
      translate(x - width / 2, 0, z - height / 2);
      box(w - 2, h - 2, w);
      // rect(x - width / 2 + w / 2, 0, w - 2, h);

      pop();
    }
    offset += 0.1;
  }

  angle += 0.04;
}
