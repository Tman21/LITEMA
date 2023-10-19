function setup() {
  createCanvas(1080, 1080);
  background("blue");
  frameRate(350);
}


function draw() {
  fill("red");
  rect(0, 0, 1080, 1080);
  strokeWeight(10);
  fill("green");
  
  //1st rect
  rect(5, 5, 1070, 1070);
  fill(120, 160, 20);
  
  //1st arc
  arc(280, 320, 480, 480, 0, PI);
  fill("red");
  
  //2nd arc
  arc(800, 320, 480, 480, 0, PI);
  fill("blue");
  
  //3rd arc
  arc(280, 800, 480, 480, PI, 0);
  fill("purple");
  
  //4th arc
  arc(800, 800, 480, 480, PI, 0);
  fill("orange");
  
  //1st circle
  circle(280, 320, 250);
  fill("yellow");
  
  //2nd circle
  circle(280, 800, 250);
  fill("red");
  
  //3rd circle
  circle(800, 800, 250);
  fill("blue");
  
  //4th circle
  circle(800, 320, 250);
  
  noLoop();
  save("grace_guardian5.jpeg");
}
