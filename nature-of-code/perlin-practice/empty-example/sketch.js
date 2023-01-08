let beavis = [];
let counter = 0; // counter variable to keep track of the current index
let timer = 0; // timer variable to control the amount of time each image is displayed
let mover = true; 
let xoff = 0;
let yoff = 10000;


function preload() {
  for (let i = 0; i < 9; i++) {
    beavis[i] = loadImage(i + ".png");
  }
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  let img = beavis[counter];
  timer++; // increment the timer
  if (timer > 3) { //ontrols walking speed
    timer = 0; // reset the timer
    counter++; // increment the counter
    if (counter > 8) { // if the counter has reached 8 (the last index in the array)
      counter = 0; // reset the counter
    }
  }
  let x = width/2 + width/2*sin(xoff);
  let y = height*noise(yoff);
 
  xoff += 0.0045;
  yoff += 0.0045;
  

  image(img, x, y); // display the image at the current index


}

