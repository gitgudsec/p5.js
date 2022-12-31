// use the arrays.splice() function to create a "tracer"

let bubbles = [];

function setup() {
  createCanvas(600, 600);
  frameRate(30);
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++){
    if (bubbles[i].contains(mouseX, mouseY)){
      bubbles[i].changeColor(255);
    }
    else{
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
  // this starts popping bubbles once they increase beyond 7
  if (bubbles.length > 7)
  {
    bubbles.splice(0,1);
  }
}

function mouseDragged() {
  let r = 40;
  let b = new Bubble(mouseX, mouseY, random(10,40));
  bubbles.push(b);
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

  changeColor(bright){
      this.brightness = bright;
  }


  contains(x, y) {
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