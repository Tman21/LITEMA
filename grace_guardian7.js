function setup() {
  createCanvas(1080, 1080);
  background("blue");
  frameRate(320);
}


function draw() {
  //main rect
  fill("red");
  rect(0, 0, 1080, 1080);
  strokeWeight(10);
  fill("red");
  
  //1st rect
  rect(5, 5, 1070, 1070);
  fill("green");
  
  //2nd rect
  rect(60, 60, 960, 960);
  fill("orange");
  
  //3rd rect
  rect(120, 120, 840, 840);
  fill("purple");
  
  //1st circle
  circle(540, 540, 780);
  fill("yellow");
  
  //2nd circle
  circle(540, 540, 600);
  fill("blue");
  
  //3rd circle
  circle(540, 540, 450);
  
  //noLoop();
  //save("grace_guardian7.jpeg");
}
