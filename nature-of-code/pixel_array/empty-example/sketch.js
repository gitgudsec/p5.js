
function setup() {
  createCanvas(600, 600);
}

function draw() {
// we have to inform p5.js we want to work with "the pixel"
background(109, 231, 100);
loadPixels();

for (let i = 1000000; i < 10000000; i++)
{
  pixels[i] = 255;
}


updatePixels();

}
