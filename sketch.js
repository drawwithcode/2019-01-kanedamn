function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  frameRate(12);

  background(0);
}

function draw() {
  stroke(lerpColor(color(15,145,241),color(15,241,224),frameCount/120));
  line(windowWidth/2 + 200, windowHeight/2, windowWidth/2 + cos(frameCount * 3)* 200,  windowHeight/2 + sin(frameCount * 3)* 200);

  if(frameCount == 120){
    noLoop();
  }
}
