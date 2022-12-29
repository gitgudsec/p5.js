var ball = {
  x: 300,
  y: 20,
  xspeed: 5,
  yspeed: 5
}

function setup() {
createCanvas(600, 400)
frameRate(50);
}

function draw() {
background(0);
strokeWeight(4);
stroke(255);
noFill();
ellipse(ball.x, ball.y, 24, 24);

// this allows ball to bounce
if (ball.x > width || ball.x < 0){
  ball.xspeed = ball.xspeed * -1; 
}
if (ball.y > height || ball.y < 0){
  ball.yspeed = ball.yspeed * -1; 
}

// this allows ball to move
ball.x += ball.xspeed;
ball.y += ball.yspeed;

}