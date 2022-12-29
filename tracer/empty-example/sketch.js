// use the arrays.splice() function to create a "tracer"

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
    if (bubbles[i].rollover(mouseX, mouseY)){
      bubbles[i].changeColor();
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].clicked(mouseX, mouseY, i);
  }
}

class Bubble {
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  clicked(x, y, i){
    // as per usual test if it was on the actual bubble
    let d = dist(x, y, this.x, this.y)
    if (d < this.r){
      bubbles.splice(i, 1);
    }

  }

  changeColor(){
    
      this.brightness = 255;
    
   
    
  }


  rollover(x, y) {
    let d = dist(x, y, this.x, this.y)
    if (d < this.r) {
      return true;
    }
    else {
      return false;
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