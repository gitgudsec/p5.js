const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";

let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createVideo("kip.mp4");
  video.hide();
  video.size(256, 192);
  video.loop();
  asciiDiv = createDiv();
  asciiDiv.style("background-color","white");
  asciiDiv.parent('p5sketch');  // added this line to add the asciiDiv element to the document
}

function draw() {
  background(55);

  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
