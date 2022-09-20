let velocity;
let brush;
let pX = 0,
  pY = 0,
  X = 0,
  Y = 0;
let easing = 0.1;
let r1, g1, b1;
let r2, g2, b2;
let r3, g3, b3;
let r4, g4, b4;
let r5, g5, b5;

let s1, s2, s3;

let rot1, rot2, rot3;

let sc1, sc2, sc3;

let cont;
let c = 0;

let rr;

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  r1 = random(255);
  g1 = random(255);
  b1 = random(255);

  r2 = random(255);
  g2 = random(255);
  b2 = random(255);

  r3 = random(255);
  g3 = random(255);
  b3 = random(255);

  r4 = random(255);
  g4 = random(255);
  b4 = random(255);

  r5 = random(255);
  g5 = random(255);
  b5 = random(255);

  s1 = random(windowHeight / 10);
  s2 = random(windowHeight / 10);
  s3 = random(windowHeight / 10);

  rot1 = random(40);
  rot2 = random(40);
  rot3 = random(40);

  sc1 = random(5, 10);
  sc2 = random(5, 10);
  sc3 = random(5, 10);

  background(r5 / 10, b5 / 10, g5 / 10);

  cont = int(random(30));
}

function draw() {
  if (frameCount == 1) {
  }
  var tX = mouseX;
  var tY = mouseY;

  X += (tX - X) * easing;
  Y += (tY - Y) * easing;

  stroke(r1, g1, b1);
  line(pX, pY, X, Y);
  if (c % cont == 0) {
    fill(r1, g2, b3);
    noStroke();
    circle(X + random(-20, 20), Y + random(-20, 20), random(20));
    fill(r3, g2, b1);
    circle(X + random(-20, 20), Y + random(-20, 20), random(20));
    fill(r3, g1, b2);
    circle(X + random(-20, 20), Y + random(-20, 20), random(20));
    noFill();
  }

  push();
  translate(s1, s1);
  rotate(rot1);
  scale(sc1 / 10);
  stroke(r2, g2, b2);
  line(windowWidth - pX, pY, windowWidth - X, Y);
  if (c % cont == 0) {
    fill(r2, g3, b4);
    noStroke();
    circle(windowWidth - X + random(-20, 20), Y + random(-20, 20), random(20));
    fill(r4, g3, b2);
    circle(windowWidth - X + random(-20, 20), Y + random(-20, 20), random(20));
    fill(r4, g2, b3);
    circle(windowWidth - X + random(-20, 20), Y + random(-20, 20), random(20));
    noFill();
  }
  pop();

  push();
  translate(s2, s2);
  rotate(rot2);
  scale(sc2 / 10);
  stroke(r3, g3, b3);
  line(pX, windowHeight - pY, X, windowHeight - Y);
  if (c % cont == 0) {
    fill(r3, g4, b5);
    noStroke();
    circle(X + random(-20, 20), windowHeight - Y + random(-20, 20), random(20));
    fill(r5, g4, b3);
    circle(X + random(-20, 20), windowHeight - Y + random(-20, 20), random(20));
    fill(r5, g3, b4);
    circle(X + random(-20, 20), windowHeight - Y + random(-20, 20), random(20));
    noFill();
  }
  pop();

  push();
  translate(s3, s3);
  rotate(rot3);
  scale(sc3 / 10);
  stroke(r4, g4, b4);
  line(windowWidth - pX, windowHeight - pY, windowWidth - X, windowHeight - Y);
  if (c % cont == 0) {
    fill(r4, g5, b1);
    noStroke();
    circle(
      windowWidth - X + random(-20, 20),
      windowHeight - Y + random(-20, 20),
      random(20)
    );
    fill(r1, g5, b4);
    circle(
      windowWidth - X + random(-20, 20),
      windowHeight - Y + random(-20, 20),
      random(20)
    );
    fill(r1, g4, b5);
    circle(
      windowWidth - X + random(-20, 20),
      windowHeight - Y + random(-20, 20),
      random(20)
    );
    noFill();
  }
  pop();

  strokeWeight(brush);

  velocity = dist(X, Y, pX, pY);

  if (velocity < 1) {
    brush = frameCount / 2;
  } else {
    frameCount = 2;
    brush = 10 / (sqrt(velocity) / 2);
  }

  pY = Y;
  pX = X;

  c = c + 1;
}
