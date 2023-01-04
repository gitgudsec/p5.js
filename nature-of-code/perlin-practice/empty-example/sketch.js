let xoff = 0;
let yoff = 0;
let cage = []; 

function preload(){
  for (let k = 0; k < 1000; k++)
  {
    cage[k] = loadImage("cage2.png");
  }
  
}

function setup() {
  createCanvas(600, 600);
  frameRate(50);
}

function draw() {
  background(69);

  a = random(2000);
  b = random(2000);
  cager(a, b);
  a = random(100);
  b = random(100);
  cager(a, b);

  xoff -= 0.552; 
  yoff -= 0.159;

}

function cager(a, b){
  let x = map(noise(xoff), 0, 1, 0, width);
  let y = map(noise(yoff), 0, 1, 0, height);
for (let k = 0; k < 1000; k++)
{
  
  image(cage[k], x+a, y+b, 200, 200);
}
}
