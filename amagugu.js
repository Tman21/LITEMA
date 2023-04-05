function setup() {
  createCanvas(700, 700);
  background("white");
  frameRate(120);
}


function draw() {
  //main rect
  rect(10, 10, 680, 680);
  fill("white");
  stroke("white");
  strokeWeight(4);
  
  //1st rect inside main rect
  rect(10, 10, 340, 340);
  fill("white");
  stroke("white");
  
  //1st rect inside 1st rect inside main rect
  rect(10, 10, 170, 170);
  fill("green");
  stroke("green");
  
  
  //1st ellipse
  ellipse(95, 50, 120, 45);
  fill("red");
  stroke("red");
  
  //2nd ellipse
  ellipse(60, 90, 35, 35);
  fill("blue");
  stroke("blue");
  
  //3rd ellipse
  ellipse(130, 90, 35, 35);
  fill("red");
  stroke("red");
  
  //4th ellipse
  ellipse(95, 130, 120, 45);
  fill("white");
  stroke("white");
  
  //2nd rect inside 1st rect
  rect(180, 10, 170, 170);
  fill("red");
  stroke("red");
  
  //1st arc
  arc(265, 20, 150, 300, 0, PI, CHORD);
  fill("blue");
  stroke("blue");
  
  //2nd arc
  arc(235, 70, 40, 40, PI, 0, CHORD);
  
  //3RD ARC
  arc(300, 70, 40, 40, PI, 0, CHORD);
  
  //4TH ARC
  arc(265, 120, 60, 60, 0, PI, CHORD);
  stroke("blue");
  strokeWeight(10);
  
  //1st horizontal line
  line(255, 40, 215, 40);
  
  //2nd horizontal line
  line(320, 40, 280, 40);
  
  //1st vertical line
  line(268, 70, 268, 105);
  fill("white");
  stroke("white");
  strokeWeight(4);
  
  //3rd rect inside 1st rect 
  rect(10, 180, 170, 170);
  fill("blue");
  stroke("blue");
  
  //1st circle
  circle(95, 265, 160);
  fill("green");
  stroke("green");
  
  
  //2nd circle
  circle(95, 265, 120);
  fill("red");
  stroke("red");
  
  
  //3rd circle
  circle(95, 265, 80);
  fill("white");
  stroke("white");
  
  //4th rect inside 1st rect 
  rect(180, 180, 170, 170);
  fill("green");
  stroke("white");
  
  
  //1st arc
  arc(265, 200, 130, 130, 0, PI);
  fill("red");
  stroke("white");
  
  //2nd arc
  arc(265, 333, 130, 130, PI, 0);
  fill("red");
  stroke("red");
  
  //1st circle
  circle(265, 210, 50);
  fill("blue");
  stroke("blue");
  
  //2nd circle
  circle(265, 320, 50);
  fill("white");
  stroke("white");
  
  //2nd rect inside main rect
  rect(10, 350, 340, 340);
  
  //1st rect inside 2nd rect
  rect(10, 350, 170, 170);
  fill("green");
  stroke("green");
  
  //1st arc
  arc(95, 360, 110, 110, 0, PI, CHORD);
  fill("red");
  stroke("red");
  
  //2nd arc
  arc(95, 510, 110, 110, PI, 0, CHORD);
  fill("blue");
  stroke("blue");
  strokeWeight(6);
  
  //vertical line
  line(95, 420, 95, 450);
  stroke("blue");
  strokeWeight(4);
  
  //circle
  circle(60, 435, 35);
  fill("red");
  stroke("red");
  
  
  //circle
  circle(130, 435, 35);
  fill("white");
  stroke("white");
  
  //2nd rect inside 2nd rect
  rect(180, 350, 170, 170);
  fill("red");
  stroke("red");
  
  
  //1st circle
  circle(210, 380, 45);
  fill("blue");
  stroke("blue");
  
  //2nd circle
  circle(210, 435, 45);
  fill("green");
  stroke("green");
  
  //3rd circle
  circle(210, 490, 45);
  fill("red");
  stroke("red");
  
  
  //4th circle
  circle(265, 380, 45);
  fill("green");
  stroke("green");
  
  //5th circle
  circle(320, 380, 45);
  fill("blue");
  stroke("blue");
  
  //6th circle
  circle(265, 435, 45);
  fill("blue");
  stroke("blue");
  
  //7th circle
  circle(265, 490, 45);
  fill("green");
  stroke("green");
  
  //8th circle
  circle(320, 490, 45);
  fill("red");
  stroke("red");
  
  //9th circle
  circle(320, 435, 45);
  fill("white");
  stroke("white");
  
  //3rd rect inside 2nd rect
  rect(10, 520, 170, 170);
  fill("blue");
  stroke("white");
  
  //1st arc
  arc(180, 520, 130, 130, radians(90), PI);
  fill("green");
  stroke("white");
  
  //2nd arc
  arc(10, 520, 130, 130, radians(0), radians(90));
  fill("red");
  stroke("white");
  
  //3rd arc
  arc(10, 690, 130, 130, radians(270), radians(0));
  fill("green");
  stroke("white");
  
  //4th arc
  arc(180, 690, 130, 130, radians(180), radians(-90));
  fill("green");
  stroke("white");
  
  //1st circle
  circle(95, 605, 100);
  fill("red");
  stroke("red");
  
  
  //2nd circle
  circle(95, 605, 70);
  fill("blue");
  stroke("blue");
  
  //3rd circle
  circle(95, 605, 40);
  fill("white");
  stroke("white");
  
  //4th rect inside 2nd rect
  rect(180, 520, 170, 170);
  fill("red");
  stroke("red");
  
  //1st circle
  circle(265, 605, 160);
  fill("green");
  stroke("green");
  
  //1st triangle
  triangle(210, 660, 265, 530, 320, 660);
  fill("blue");
  stroke("blue");
  
  //2nd triangle
  triangle(205, 560, 265, 680, 325, 560);
  fill("white");
  stroke("white");
  
  //3rd rect inside main rect
  rect(350, 10, 340, 340);
  
  //1st rect inside 3rd rect
  rect(350, 10, 170, 170);
  fill("blue");
  stroke("blue");
  strokeWeight(6);
  
  //1st vertical line
  line(370, 40, 370, 100);
  
  //2nd vertical lien
  line(500, 40, 500, 100);
  
  //3rd vertical line
  line(435, 40, 435, 140);
  
  //1st horizontal line
  line(370, 100, 500, 100);
  fill("green");
  stroke("green");
  strokeWeight(4);
  
  //1st arc
  arc(435, 170, 70, 60, PI, 0, CHORD);
  fill("blue");
  stroke("blue");
  
  //1st circle
  circle(370, 40, 35);
  fill("red");
  stroke("red");
  
  
  //2nd circle
  circle(500, 40, 35);
  fill("green");
  stroke("green");
  
  
  //3rd circle
  circle(435, 40, 35);
  fill("white");
  stroke("white");
  
  
  //2nd rect inside 3rd rcet 
  rect(520, 10, 170, 170);
  fill("green");
  stroke("green");
  
  //1st circle
  circle(605, 95, 160);
  fill("red");
  stroke("red");
  
  //2nd circle
  circle(605, 95, 120);
  fill("blue");
  stroke("blue");
  
  //3rd circle
  circle(605, 95, 80);
  fill("white");
  stroke("white");
  
  //3rd rect inside 3rd rcet 
  rect(350, 180, 170, 170);
  fill("green");
  stroke("white");
  
  //1st arc
  arc(520, 180, 130, 130, radians(90), PI);
  fill("red");
  stroke("white");
  
  //2nd arc
  arc(350, 180, 130, 130, radians(0), radians(90));
  fill("green");
  stroke("white");
  
  //3rd arc
  arc(350, 350, 130, 130, radians(270), radians(0));
  fill("blue");
  stroke("white");
  
  //4th arc
  arc(520, 350, 130, 130, radians(180), radians(-90));
  fill("blue");
  stroke("white");
  
  //1st circle
  circle(435, 265, 100);
  fill("red");
  stroke("red");
  
  //2nd circle
  circle(435, 265, 70);
  fill("green");
  stroke("green");
  
  //3rd circle
  circle(435, 265, 40);
  fill("white");
  stroke("white");
  
  
  //4th rect inside 3rd rect 
  rect(520, 180, 170, 170);
  fill("green");
  stroke("green");
  
  //1st arc
  arc(605, 190, 150, 300, 0, PI, CHORD);
  fill("red");
  stroke("red");
  
  //2nd arc
  arc(575, 220, 40, 40, 0, PI, CHORD);
  
  //3rd arc
  arc(635, 220, 40, 40, 0, PI, CHORD);
  
  //4TH ARC 
  arc(605, 285, 60, 60, 0, PI, CHORD);
  stroke("red");
  strokeWeight(9);
  
  //1st horizontal line
  line(555, 205, 595, 205);
  
  //2nd horizontal line
  line(615, 205, 655, 205);
  
  
  //1st vertical line
  line(605, 240, 605, 270);
  fill("white");
  stroke("white");
  strokeWeight(4);
  
  //4th rcet inside main rect
  rect(350, 350, 340, 340);
  fill("white");
  stroke("white");
 
  //1st rect inside 4th rect 
  rect(350, 350, 170, 170);
  fill("red");
  stroke("red");
  
   //1st ellipse
  ellipse(435, 390, 120, 48);
  fill("blue");
  stroke("blue");
  
  //1st circle
  circle(405, 435, 40);
  fill("green");
  stroke("green");
  
  //2nd circle
  circle(470, 435, 40);
  fill("blue");
  stroke("blue");
  
  //2nd ellipse
  ellipse(435, 480, 120, 50);
  fill("white");
  stroke("white");
  
  //2nd rect inside 4th rect 
  rect(520, 350, 170, 170);
  fill("red");
  stroke("white");
  
  //1st arc
  arc(605, 370, 125, 125, 0, PI);
  fill("blue");
  stroke("white");
  
  //2nd arc
  arc(605, 499, 125, 125, PI, 0);
  fill("green");
  stroke("green");
  
  //1st circle
  circle(605, 490, 50);
  fill("blue");
  stroke("blue");
  
  //2nd circle
  circle(605, 380, 50);
  fill("white");
  stroke("white");
  
  //3rd rect inside 4th rect 
  rect(350, 520, 170, 170);
  fill("red");
  stroke("red");
  
  //1st arc
  arc(435, 530, 110, 110, 0, PI, CHORD);
  fill("green");
  stroke("green");
  //2nd arc
  arc(435, 680, 110, 110, PI, 0, CHORD);
  fill("blue");
  stroke("blue");
  strokeWeight(6);
  
  //1st vertical line
  line(435, 590, 435, 620);
  fill("red");
  stroke("red");
  strokeWeight(4);
  
  
  //1st circle
  circle(400, 605, 35);
  fill("blue");
  stroke("blue");
  
  
  //2nd circle
  circle(470, 605, 35);
  fill("white");
  stroke("white");
  
  
  //4th rect inside 4th rect
  rect(520, 520, 170, 170);
  fill("blue");
  stroke("blue");
  
  //1st circle
  circle(550, 550, 45);
  fill("red");
  stroke("red");
  
  
  //2nd circle
  circle(605, 550, 45);
  fill("blue");
  stroke("blue");
  
  //3rd circle
  circle(660, 550, 45);
  fill("green");
  stroke("green");
  
  //4th circle
  circle(550, 605, 45);
  fill("red");
  stroke("red");
  
  //5th circle
  circle(605, 605, 45);
  fill("green");
  stroke("green");
  
  //6th circle
  circle(660, 605, 45);
  fill("blue");
  stroke("blue");
  
  //7th circle
  circle(550, 660, 45);
  fill("green");
  stroke("green");
  
  //8th circle
  circle(605, 660, 45);
  fill("red");
  stroke("red");
  
  //9th circle
  circle(660, 660, 45);
  
  
  //noLoop();
  //save("amagugu.png");
}
