let bubbles = [];

// This is where we will load an image:
let cage = [];
function preload() {
  for (let k = 0; k < 5; k++ ){
    cage[k] = loadImage("cage"+ k +".png");
  }
}

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 5; i++){
  let x = random(width);
  let y = random(height);
  let r = random(80, 120);
  let img = random(cage);
  let b = new Bubble(x, y, r, img);
  bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, img){
    this.x = x;
    this.y = y;
    this.r = r;
    this.cage = img; 
  }

  clicked(x, y) {
    let d = dist(x, y, this.x, this.y)
    if (d < this.r) {
      this.cage = random(cage);

  
    }
  }

  move() {
   this.x = this.x + random(-2,2);
   this.y = this.y + random(-2,2);    
  }

  show(){
    
    image(this.cage, this.x, this.y, this.r, this.r)    
    
    // stroke(255, 50, 120);
    // strokeWeight(5);
    // fill(this.brightness, 100);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}