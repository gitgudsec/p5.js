var video;
var button;
var snapshots = [];

function setup() {
  createCanvas(800, 240);
  background(69);
  frameRate(2)
  scale(-1, 1);
  video = createCapture(VIDEO, ready);
  video.size(320, 240);

  // button = createButton('snap');
  // button.mousePressed(takesnap);
}

var go = false;

function ready() {
  go = true;
}

function takesnap() {
 
}

function draw() {
  if(go){
    snapshots.push(video.get());
  }
  
  var w = 80;
  var h = 60;
  var x = 0;
  var y = 0;
  for (var i = 0; i < snapshots.length; i++){
    tint(255, 50);
    image(snapshots[i], x, y, w, h);
    x = x + w;
    if (x>width)
    {
      x = 0;
      y = y+h;
    }
  }
}
