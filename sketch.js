let velocity; //variable to know the vecocity of the cursor

let brush; //setting the diameter of the brush

let pX = 0, //variables to ease and smmoth the movement of the brush
  pY = 0,
  X = 0,
  Y = 0;
let easing = 0.1;

let r1, g1, b1; //variables to set random colors
let r2, g2, b2;
let r3, g3, b3;
let r4, g4, b4;
let r5, g5, b5;

let s1, s2, s3; //variables to set random translations

let rot1, rot2, rot3; //variables to set random rotation

let sc1, sc2, sc3; //variable to set random scale

let cont; //counter to create the little circles around the brush
let c = 0;

let rr = false; //variables to create and hide the texte
let r = false;

let cnv; //variable to create and save the canvas

function setup() {
  angleMode(DEGREES);

  cnv = createCanvas(windowWidth, windowHeight);

  r1 = random(255); //color of the 1st brush
  g1 = random(255);
  b1 = random(255);

  r2 = random(255); //color of the 2nd brush
  g2 = random(255);
  b2 = random(255);

  r3 = random(255); //color of the 3rd brush
  g3 = random(255);
  b3 = random(255);

  r4 = random(255); //color of the 4th brush
  g4 = random(255);
  b4 = random(255);

  r5 = random(255); //color of the background
  g5 = random(255);
  b5 = random(255);

  s1 = random(-(windowHeight / 10), windowHeight / 10); //random translation
  s2 = random(-(windowHeight / 10), windowHeight / 10);
  s3 = random(-(windowHeight / 10), windowHeight / 10);

  rot1 = random(40); //random rotations
  rot2 = random(40);
  rot3 = random(40);

  sc1 = random(5, 10); //random scaling
  sc2 = random(5, 10);
  sc3 = random(5, 10);

  background(r5 / 10, b5 / 10, g5 / 10);

  cont = int(random(30)); //random counter
}

function draw() {
  if (rr == false && r == false) {
    //this if is used to create the text that explain how to use the assignment and then to hide it
    background(r5 / 10, b5 / 10, g5 / 10);
    fill("white");
    textSize(25);
    textAlign(CENTER, CENTER);
    noStroke();
    text(
      "Drip the paint all over the canvas like Pollock, be careful not to stop or the paint will all puor in one place. Click anywhere to start, then click anywhere to save!",
      windowWidth / 4,
      0,
      windowWidth / 2,
      windowHeight
    );
  } else if (rr == true && r == false) {
    background(r5 / 10, b5 / 10, g5 / 10);
    r = true;
  }

  var tX = mouseX; //easing of the cursor
  var tY = mouseY;
  X += (tX - X) * easing;
  Y += (tY - Y) * easing;

  stroke(r1, g1, b1); //1st brush, the one related on the position of the mouse
  line(pX, pY, X, Y);
  if (c % cont == 0) {
    //defining a random amount of time to create the random circles
    fill(r1, g2, b3);
    noStroke();
    circle(X + random(-20, 20), Y + random(-20, 20), random(20)); //little random circles around the brush
    fill(r3, g2, b1);
    circle(X + random(-20, 20), Y + random(-20, 20), random(20));
    fill(r3, g1, b2);
    circle(X + random(-20, 20), Y + random(-20, 20), random(20));
    noFill();
  }

  push(); //2nd brush, transformed and mirrored
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

  push(); //3rd brush, transformed and mirrored
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

  push(); //4th brush, transformed and mirrored
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

  velocity = dist(X, Y, pX, pY); //calculation of the mouse velocity

  if (velocity < 1) {
    //changin' the dimension of the brush related to the velocity
    brush = frameCount / 2;
  } else {
    frameCount = 2;
    brush = 10 / (sqrt(velocity) / 2);
  }

  strokeWeight(brush);

  pY = Y;
  pX = X;

  c = c + 1; //counter for the little circles
}

function mouseClicked() {
  //function to hide the text and then to save the artwork
  if (rr == false) {
    rr = true;
  } else {
    save(cnv, "My_pollock.jpg");
  }
}
