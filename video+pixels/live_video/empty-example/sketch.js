var video;
var button;
var snapshots = [];
let counter = 0;
let total = 43;


function setup() {
  createCanvas(800, 240);
  background(69);
  frameRate(10)
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
    if (counter == total){
      counter = 0;
    }
    
    snapshots[counter] = video.get();
    counter++;

  }
  
  var w = 80;
  var h = 60;
  var x = 0;
  var y = 0;
  for (var i = 0; i < snapshots.length; i++){
   
    var index = (i + frameCount) % snapshots.length;
    image(snapshots[index], x, y, w, h);
    x = x + w;
    if (x>width)
    {
      x = 0;
      y = y+h;
    }
  }
}
