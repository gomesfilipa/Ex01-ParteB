let t = 0;
function setup() {
  createCanvas(800, 784);
  noiseSeed(7);
}

function draw(){
  background(221,223,222);
  noStroke();

fill(247,43,12);
rect(0,0,366.43,318.72);
fill(248,210,0);
rect(0,511.62,80.19,272.38);
t+=0.004;
let dx = map(noise(t),0,1,-18,18);
let dy = map(noise(t+100),0,1,-10,10);
fill(32,29,110);
rect(366.43+dx,511.62+dy,247.34,238.01);
  stroke(20);
  strokeWeight(10);
  strokeCap(SQUARE);
  line(80.19,511.62,80.19,784);
  line(366.43,0,366.43,784);
  line(613.77,511.62,613.77,784);
  line(0,318.72,800,318.72);
  line(0,749.99,800,749.63);
  line(0,511.62,800,511.62)
  


}

