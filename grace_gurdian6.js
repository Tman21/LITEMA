function setup() {
  createCanvas(1080, 1080);
  background("blue");
  frameRate(350);
  
}


function draw() {
  //main rect
  fill("orange");
  rect(0, 0, 1080, 1080);
  strokeWeight(10);
  fill("purple");
  
  //1st rect
  rect(5, 5, 1070, 1070);
  fill(40, 120, 210);
  
  //1st triangle
  triangle(10, 1070, 175, 550, 350, 1070);
  fill("green");
  
  //2nd triangle
  triangle(350, 1070, 525, 550, 700, 1070);
  fill("red");
  
  //3rd triangle
  triangle(700, 1070, 875, 550, 1065, 1070);
  fill("blue");
  
  //1st circle
  circle(175, 250, 300);
  fill("orange");
  
  //1st circle
  circle(175, 250, 200);
  fill("red");
  
  //2nd circle
  circle(175, 250, 100);
  
  //2nd circle
  circle(525, 250, 300);
  fill("green");
  
  //1st circle
  circle(525, 250, 200);
  fill("yellow");
  
  //2nd circle
  circle(525, 250, 100);
  fill("orange");
  
  //3rd circle
  circle(875, 250, 300);
  fill("red");
  
  //1st circle
  circle(875, 250, 200);
  fill("green");
  
  //2nd circle
  circle(875, 250, 100);
  fill("yellow");
  
  //1st arc
  arc(178, 1067, 310, 310, PI, 0);
  fill("blue");
  
  //2nd arc
  arc(525, 1067, 310, 310, PI, 0);
  fill("orange");
  
  //3rd arc
  arc(880, 1067, 310, 310, PI, 0);
  
  noLoop();
  save("grace_guardian6.jpeg");
}
