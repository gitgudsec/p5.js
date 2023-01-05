let beavis = [];
let counter = 0; // counter variable to keep track of the current index
let timer = 0; // timer variable to control the amount of time each image is displayed
let mover = true; 
let x = 51;

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
  if (timer > 5) { // if the timer has reached 30 (30 * 1/frameRate() = 0.3 seconds)
    timer = 0; // reset the timer
    counter++; // increment the counter
    if (counter > 8) { // if the counter has reached 8 (the last index in the array)
      counter = 0; // reset the counter
    }
  }

  if (mover == true)
  {
    x = x + 2;
  }

  if (mover == false)
  {
    x = x - 2; 
  }

  if (x > width-50)
  {
    mover = false;
  }

  if (x < 50)
  {
    mover = true;
  }
  
  // img.mirror(true, false);

  image(img, x, 50); // display the image at the current index


}

