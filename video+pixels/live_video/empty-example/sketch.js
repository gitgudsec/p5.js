var video;
var button;

function setup() {
  createCanvas(320, 240);
  background(69);
  video = createCapture(VIDEO);
  video.size(320, 240);
  // video.hide();
  button = createButton('snap');
  button.mousePressed(takesnap);
}

function takesnap() {
  var img = video.get();
  push();
  scale(-1, 1);
  image(img, -img.width, 0);
  pop();
  save(img, 'myImage.jpg');
}

function draw() {
}
