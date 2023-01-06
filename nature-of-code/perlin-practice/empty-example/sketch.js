
function setup() {
  createCanvas(600, 600);
  frameRate(50);
}

function draw() {
  background(69);
  let x = 600*noise(600);
 
  ellipse(x, 300, 40, 40)
 

}

