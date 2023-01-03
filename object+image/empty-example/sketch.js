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
  let b = new Bubble(x, y, r);
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
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  clicked(x, y) {
    let d = dist(x, y, this.x, this.y)
    if (d < this.r) {
      

      // if (this.brightness == 0)
      // {
      
      // }
      // else {
      // this.brightness = 0;
      // }

    }
  }

  move() {
   this.x = this.x + random(-2,2);
   this.y = this.y + random(-2,2);    
  }

  show(){
    
    image(cage[3], this.x, this.y, this.r, this.r)    
    
    // stroke(255, 50, 120);
    // strokeWeight(5);
    // fill(this.brightness, 100);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}