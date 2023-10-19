function setup() {
  createCanvas(1080, 1080);
  background("blue");
  frameRate(380);
  
}


function draw() {
  //main rect
  rect(0, 0, 1080, 1080);
  fill("blue");
  strokeWeight(10);
  fill("blue");
  
  //1st rect
  rect(5, 5, 1070, 1070);
  fill(0, 51, 124);
  
  //1st rect
  rect(5, 825, 150, 250);
  fill("teal");
  
  //2nd rect
  rect(155, 725, 150, 350);
  fill("orange");
  
  //3rd rect
  rect(305, 625, 150, 450);
  fill("green");
  
  //4th rect
  rect(455, 525, 150, 550);
  fill(252, 115, 0);
  
  //5th rect
  rect(605, 625, 150, 450);
  fill(216, 100, 169);
  
  //6th rect
  rect(755, 725, 150, 350);
  fill("red");
  
  //7th rect
  rect(905, 825, 170, 250);
  fill("yellow");
  
  //1st circle
  circle(540, 210, 250);
  
 // noLoop();
 // save("grace_guadian.jpeg");

}
