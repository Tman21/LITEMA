function setup() {
  createCanvas(1080, 1080);
  background("blue");
  frameRate(320);
}


function draw() {
  //main rect
  fill("green");
  rect(0, 0, 1080, 1080);
  strokeWeight(10);
  fill("purple");
  
  //1st rect
  rect(5, 5, 1070, 1070);
  fill("red");
  
  //2nd rect
  rect(60, 60, 960, 960);
  fill("yellow");
  
  //1st arc
  arc(530, 320, 660, 660, 0, PI);
  fill("blue");
  
  //1st circle
  circle(530, 730, 380);
  fill("orange");
  
  //2nd circle
  circle(530, 730, 240);
  fill("green");
  
  //3rd circle
  circle(530, 730, 140);
  fill("red");
  
  noLoop();
  save("grace_guardian8.jpeg");
}
