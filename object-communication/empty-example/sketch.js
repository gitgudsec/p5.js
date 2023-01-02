let bubble = [];

function setup(){
  createCanvas(600, 600);
  
  let n = 10;
  for (let i=0; i < n; i++)
  {
    bubble[i] = new Bubble (random(0,600), random(0, 600), random (10, 25))
  }
}

function draw(){
  background(0);
  for (let i = 0; i < bubble.length; i++) {
    for (let j = i + 1; j < bubble.length; j++) {
      if (bubble[i].intersects(bubble[j])) {
        background(200, 0, 100);
      }
    }
  }

  for (let i = 0; i < bubble.length; i++)
  {
    bubble[i].move();
    bubble[i].show();
  }

  }

class Bubble{
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  intersects(other){
    let d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r){
      return true;
    }
    else {
      return false;
    }
  }
 
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r*2);
  }

}