function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX);
  y.push(mouseY);

  for (var i = 0; i < x.length; i = i + 10) {
    

    
beginShape(TRIANGLES);
vertex(x[i], y[i]);
vertex(x[i+40], y[i+50]);
vertex(x[i+20],y[i+30]);

endShape();

  }

  x = x.slice(-100); // remove all but the last 50 x values
  y = y.slice(-100); // remove all but the last 50 y values
}
