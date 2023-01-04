function setup() {
  createCanvas(600, 600);
  frameRate(20);
}

function draw() {
  background(69);
  // let x = random(600);
  // let x = 600*noise(100);

  let x = map(noise(100), 0, 1, 0, width);

  ellipse(x, 300, 24, 24);
}
