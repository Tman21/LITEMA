function setup() {
  createCanvas(1215.25, 877);
  background(0, 112, 207);
  frameRate(320);
}


function draw() {
  //main rect
  rect(1, 1, 1214.25, 876);
  fill("blue");
  strokeWeight(7);
  
  
  //1st rect
  rect(0, 0, 405.75, 293);
  fill("orange");
  
  //1st arc
  arc(50, 295, 100, 100, PI, 0);
  fill("blue");
  
  //2nd arc
  arc(150, 295, 100, 100, PI, 0);
  fill("red");
  
  //3rd arc
  arc(250, 295, 100, 100, PI, 0);
  fill("yellow");
  
  //4th arc
  arc(350, 295, 100, 100, PI, 0);
  fill("purple");
  
  //5th arc
  arc(50, 0, 100, 100, 0, PI);
  fill("green");
  
  //6th arc
  arc(150, 0, 100, 100, 0, PI);
  fill("blue");
  
  //7th arc
  arc(250, 0, 100, 100, 0, PI);
  fill("orange");
  
  //8th arc
  arc(350, 0, 100, 100, 0, PI);
  fill("red");
  
  //1st circle
  circle(200, 145, 165);
  fill("yellow");
  
  //2nd circle
  circle(200, 145, 115);
  fill("purple");
  
  //3rd circle
  circle(200, 145, 65);
  fill("blue");
  
  //2nd rect
  rect(405.75, 0, 405.75, 293);
  fill("orange");
  
  //1st circle
  circle(605, 145, 260);
  fill("yellow");
  
  //2nd circle
  circle(605, 145, 200);
  fill("red");
  
  //3rd circle
  circle(605, 145, 140);
  fill("blue");
  
  //3rd rect
  rect(810, 0, 405.75, 293);
  fill("green");
  
  //1ST TRIANGLE
  triangle(810, 293, 1215, 0, 1215, 293);
  fill("purple");
  
  //1st circle
  circle(1000, 150, 170);
  fill("orange");
  
  //2nd circle
  circle(1000, 150, 120);
  fill("red");
  
  //3rd circle
  circle(1000, 150, 70);
  fill("blue");
  
  //4th rect
  rect(0, 293, 405.75, 293); 
  fill("yellow");
  
  
  
  //1st rect
  rect(30, 323, 340.75, 228);
  fill("orange");
  
  //2nd rect
  rect(60, 353, 275.75, 163);
  fill("red");
  
  //3rd rect
  rect(90, 383, 210.75, 98);
  fill("green");
  
  
  //5th rect
  rect(405.75, 293, 405.75, 293);
  fill("purple");
  
  //1st circle
  circle(460, 340, 80);
  fill("blue");
  
  //2nd circle
  circle(560, 340, 80);
  fill("yellow");
  
  //3rd circle
  circle(660, 340, 80);
  fill("orange");
  
  //4th circle
  circle(760, 340, 80);
  fill("red");
  
  //5th circle
  circle(460, 440, 80);
  fill("blue");
  
  //6th circle
  circle(560, 440, 80);
  fill("purple");
  
  //7th circle
  circle(660, 440, 80);
  fill("green");
  
  //8th circle
  circle(760, 440, 80);
  fill("yellow");
  
  //9th circle
  circle(460, 540, 80);
  fill("orange");
  
  //10th circle
  circle(560, 540, 80);
  fill("red");

  //11th circle
  circle(660, 540, 80);
  fill("blue");
  
  //12th circle
  circle(760, 540, 80);
  
  
  //6th rect
  rect(810, 293, 405.75, 293);
  fill("green");
  
  //1st rect
  rect(810, 545, 60, 75);
  fill("yellow");
  
  //2nd rect
  rect(870, 505, 60, 85);
  fill("orange");
  
  //3rd rect
  rect(930, 465, 60, 125);
  fill("green");
  
  //4th rect
  rect(990, 423, 60, 165);
  fill("orange");
  
  //5th rect
  rect(1050, 465, 60, 125);
  fill("yellow");
  
  //6th rect
  rect(1110, 505, 60, 85);
  fill("blue");
  
  //7th rect
  rect(1170, 545, 60, 75);
  fill("green");
  
  
  
  //1st circle
  circle(1020, 350, 70);
  fill("red");
  
  
  
  //7th rect
  rect(0, 586, 405.75, 293);
  fill("purple");
  
  //1st rect
  rect(50, 620, 70, 230);
  fill("yellow");
  
  //2nd rect
  rect(160, 620, 70, 230);
  fill("blue");
  
  //3rd rect
  rect(270, 620, 70, 230);
  fill("orange");
  
  //8th rect 
  rect(405.75, 586, 405.75, 293);
  fill("red");
  
  //1st arc
  arc(810, 586, 210, 210, radians(90), PI);
  fill("yellow");
  
  //2nd arc
  arc(405, 586, 210, 210, radians(0), radians(90));
  fill("green");
  
  //3rd arc
  arc(405, 880, 210, 210, radians(270), radians(0));
  fill("red");
  
  //4th arc
  arc(810, 880, 210, 210, radians(180), radians(-90));
  fill("orange");
  
  //1st circle
  circle(610, 730, 210);
  fill("blue");
  
  //2nd circle
  circle(610, 730, 160);
  fill("green");
  
  //3rd circle
  circle(610, 730, 110);
  
  
  //9th rect
  rect(810, 586, 405.75, 293);
  fill("red");
  
  //1st arc
  arc(1020, 650, 210, 210, 0, PI);
  fill("purple");
  
  //2ND ARC
  arc(1020, 860, 210, 210, PI, 0);
  fill("blue");
  
  //1st circle
  circle(1020, 650, 80);
  fill("red");
  
  //2nd circle
  circle(1020, 860, 80);
  
  noLoop();
  save("amexI.png");
}
