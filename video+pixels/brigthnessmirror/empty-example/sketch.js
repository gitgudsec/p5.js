
function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240)
}

function draw() {
// we have to inform p5.js we want to work with "the pixel"
background(109, 231, 100);
video.loadPixels();
loadPixels();

for (let y = 0; y < height; y++)
{
  for (let x = 0; x < width; x++)
{
 
  let index = (x + y *width) * 4;
  pixels[index+0] = x;            // R
  pixels[index+1] = random(255);          // G
  pixels[index+2] = y;          // B
  pixels[index+3] = 255;          // alpha
}
  
}


updatePixels();

}
