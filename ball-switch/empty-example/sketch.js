let x = 0;
let y = true;
let speed = 10;
function setup() {
  createCanvas(800, 600)
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  circle(x, 200, 100);

  if (y == true)
  {
    x = x + speed;
  }

  if (y == false)
  {
    x = x - speed; 
  }

  if (x > width-50)
  {
    y = false;
  }

  if (x < 50)
  {
    y = true;
  }

}