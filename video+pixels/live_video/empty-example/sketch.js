var video;
var button; 

function setup() {
  // createCanvas(320, 240);
  // background(69)
  video = createCapture(VIDEO);
  video.size(320, 240)
  button = createButton('snap')
  // video.hide()
}

function draw() {
//   video.loadPixels();
//   tint(255, 0, 150);
//  image(video, 0, 0, mouseX, 240);
}
