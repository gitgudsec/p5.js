// based on https://www.youtube.com/watch?v=55iwMYv8tGI&t=201s
const density = 'Ñ@#W$9876543210?!abc;:+=-,._ '

let kip2;

function preload(){
    kip2 = loadImage("kip2.png")
}

function setup(){
    createCanvas(600, 600)
}

function draw() {
    background(0);
    // image(kip2, 0, 0, width, height);
    kip2.loadPixels();

    let w = width / kip2.width;
    let h = height / kip2.height;

    for (let i = 0; i < kip2.width; i++){
        for (let j = 0; j < kip2.height; j++){
            const pixelIndex = (i + j * kip2.width) * 4;
            const r = kip2.pixels[pixelIndex + 0];
            const g = kip2.pixels[pixelIndex + 1];
            const b = kip2.pixels[pixelIndex + 2];

            noStroke();
            fill(r, g, b);
            // square(i*w, j*h, w);

            const len = density.length;
            const charIndex = mapfloor((avg, 0, 255, 0, len));

            textSize(w);
            textAlign(CENTER)
            text('X', i * w + w * 0.5, j * h + h * 0.5);
        }
    }


}