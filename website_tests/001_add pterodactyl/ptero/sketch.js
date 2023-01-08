let ptero = [];
let counter = 0; // counter variable to keep track of the current index
let timer = 0; // timer variable to control the amount of time each image is displayed
let xoff = 0;
let yoff = 0;


function preload() {
  for (let i = 3; i >= 0; i--) {
    ptero[i] = loadImage(i + ".png");
  }
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  let img = ptero[counter];
  timer++; // increment the timer
  if (timer > 5) { // if the timer has reached 30 (30 * 1/frameRate() = 0.3 seconds)
    timer = 0; // reset the timer
    counter++; // increment the counter
    if (counter > 3) { // if the counter has reached 8 (the last index in the array)
      counter = 0; // reset the counter
    }
  }
  let x = width*noise(xoff);
  let y = height*noise(yoff);
 
  xoff += 0.0015;
  yoff += 0.0025;
  

  image(img, x, y); // display the image at the current index


}