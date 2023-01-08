
function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
}

function draw() {
// we have to inform p5.js we want to work with "the pixel"
background(109, 231, 100);
loadPixels();

for (let y = 0; y < height; y++)
{
  for (let x = 0; x < width; x++)
{
  let index = (x + y *width) * 4;
  pixels[index+0] = x;            // R
  pixels[index+1] = 100000-random(y)*x+y;          // G
  pixels[index+2] = y;          // B
  pixels[index+3] = 255;          // alpha
}
  
}


updatePixels();

}
