const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

function main(coord, context, cursor, buffer) {
  // Shortcuts for frame, cols and coord (x, y)
  const {cols, frame } = context;
  const {x, y} = coord;

  // -1 for even lines, 1 for odd lines
  const sign = y % 2 * 2 - 1;
  const index = (cols + y + x * sign + frame) % density.length;

  return density[index];
}

function setup() {
  createCanvas(800, 600);
  background(255);
  textSize(32);
}

function draw() {
  for (let x = 0; x < width; x += random(100)) {
    for (let y = 0; y < height; y += random(25)) {
      let coord = {x, y};
      let context = {cols: 50, frame: frameCount};
      let char = main(coord, context);
      text(char, x, y);
    }
  }
}
