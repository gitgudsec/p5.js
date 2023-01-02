let bubble1;
let bubble2;

function setup(){
  createCanvas(600, 600);
  bubble1 = new Bubble(200, 200, 40);
  bubble2 = new Bubble(300, 300, 40);
}

function draw(){
  background(0);
  let d = dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y);
  if (d < bubble1.r + bubble2.r){
    background(200, 0, 100);
  }
  
  bubble1.show();
  bubble2.show();
  bubble1.move();
  bubble2.move();
 
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