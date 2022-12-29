// A test to see if we can make an object dissapear
// Here there are 5 floating bubbles
// Hover over - HLs
// Click - "pops" a bubble

let bubbles = [];

function setup() {
  createCanvas(600, 600);
  frameRate(20);
  for (let i = 0; i < 5; i++){
  let x = random(width);
  let y = random(height);
  let r = random(10, 50);
  let b = new Bubble(x, y, r);
  bubbles.push(b);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].rollover(mouseX, mouseY);
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  rollover(x, y) {
    let d = dist(x, y, this.x, this.y)
    if (d < this.r) {
        this.brightness = 255;
    }
    else {
      this.brightness = 0;
    }
  }

  move() {
   this.x = this.x + random(-2,2);
   this.y = this.y + random(-2,2);    
  }

  show(){
    stroke(255, 50, 120);
    strokeWeight(5);
    fill(this.brightness, 100);
    ellipse(this.x, this.y, this.r, this.r);
  }
}