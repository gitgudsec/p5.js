let xoff = 0;
let yoff = 0;
let cage; 

function preload(){
  cage = loadImage("cage2.png");
}

function setup() {
  createCanvas(600, 600);
  frameRate(50);
}

function draw() {
  background(69);
  // let x = random(600);
  // let x = 600*noise(100);

  let x = map(noise(xoff), 0, 1, 0, width);
  let y = map(noise(yoff), 0, 1, 0, height);
  
  image(cage, x, y, 100, 100);

  xoff += 0.012; 
  yoff += 0.019;

  

}
