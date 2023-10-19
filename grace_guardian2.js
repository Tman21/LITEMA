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
  fill("green");
  
  //1st triangle
  triangle(5, 1075, 1075, 5, 1075, 1075);
  fill(235, 176, 45);
  
  //1st rect
  rect(160, 925, 915, 150);
  fill("red");
  
  //2nd rect
  rect(315, 775, 760, 150);
  fill("purple");
  
  //3rd rect
  rect(470, 625, 605, 150);
  fill("teal");
  
  //4th rect
  rect(615, 475, 460, 150);
  fill("yellow");
  
  //5th rect
  rect(770, 325, 305, 150);
  fill("pink");
  
  //6th rect
  rect(920, 175, 155, 150);
  fill(121, 224,238);
  
  //1st circle
  circle(310, 320, 480);
  fill("purple");
  
  //2nd circle
  circle(310, 320, 380);
  fill("yellow");
  
  //3rd circle
  circle(310, 320, 280);
  
  //noLoop();
  //save("grace_guardian3.jpeg");
}
