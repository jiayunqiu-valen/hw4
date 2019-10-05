var lineSpeed=0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 100; x < width+30; x = x + 10) {
    line(x+ lineSpeed, height/2, x+100+lineSpeed, height/2-75);
  }
  
  lineSpeed = lineSpeed +1;
}
