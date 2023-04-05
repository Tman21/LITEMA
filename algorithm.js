function setup() {
  createCanvas(700, 700);
  background("blue");
  frameRate(140);
}


function draw() {
  //main rectangle 
  fill(72, 61, 139);
  rect(10, 10, 680, 680);
  fill("purple");
  strokeWeight(9);
  
  //1st vertical line
  line(60, 100, 60, 190);
  fill("teal");
  
  //1st circle
  circle(60, 55, 60);
  fill("purple");
  
  //1st rect
  rect(35, 210, 50);
  fill("green");
  
  //2nd vertical line
  line(60, 280, 60, 420);
  fill("orange");
  
  //2nd circle 
  circle(60, 480, 80);
  fill("red");
  
  //3rd circle 
  circle(60, 520, 40);
  fill("green");
  
  //4th circle
  circle(60, 570, 60);
  fill("blue");
  
  //3rd vertical line
  line(60, 440, 60, 630);
  fill("brown");
  
  //2nd rect 
  rect(40, 630, 40, 40);
  fill("blue");
  
  //1st horizontal line
  line(95, 655, 190, 655);
  fill("red");
  
  //circle
  circle(240, 620, 120);
  fill("teal");
  
  //rect
  rect(240, 520, 80, 80);
  fill("green");
  
  //circle
  circle(220, 480, 160);
  fill(205, 92, 92);
  
  //circle
  circle(220, 480, 110);
  fill("purple");
  
  //circle
  circle(220, 480, 70);
  fill(47, 79, 79);
  
  //2nd horizontal line
  line(60, 350, 130, 350);
  
  //1st diagonal line
  line(60, 60, 210, 120);
  
  //2nd diagonal line
  line(130, 380, 130, 220);
  
  //2nd diagonal line
  line(130, 350, 170, 300);
  
  //diagonal line 
  line(210, 350, 170, 300);
  
  //diagonal line
  line(210, 350, 250, 300);
  
  //diagonal line
  line(290, 350, 250, 300);
  
  //diagonal line
  line(290, 350, 330, 300);
  
  //diagonal line
  line(370, 350, 330, 300);
  
  //rect
  rect(200, 80, 80, 80);
  fill("blue");
  
  //circle
  circle(150, 170, 110);
  fill("green");
  
  //circle
  circle(150, 170, 70);
  fill("red");
  
  //circle
  circle(200, 80, 40);
  fill("teal");
  
  //circle
  circle(280, 160, 40);
  fill("orange");
  
  //circle
  circle(350, 180, 90);
  fill("purple");
  
  //circle
  circle(430, 200, 120);
  fill("green");
  
  //circle
  circle(430, 200, 80);
  fill("red");
  
  //rect
  rect(375, 265, 120, 120);
  fill("yellow");
  
  //rect
  rect(390, 280, 90, 90);
  fill("white");
  
  //circle
  circle(430, 450, 120);
  fill("orange");
  
  //circle
  circle(430, 450, 80);
  
  //vertical line
  line(430, 35, 430, 130);
  
  //horizontal line
  line(30, 380, 100, 380);
  
  //horizontal line
  line(380, 90, 480, 90);
  
  //horizontal
  line(380, 70, 480, 70);
  fill(70, 130, 180); 
  
  strokeWeight(20);
  
  //horizontal line
  line(530, 70, 640, 70);
  
  line(530, 70, 640, 150);
  
  line(530, 150, 640, 150);
  
  strokeWeight(9);
  fill("teal");
  
  //circle
  circle(545, 120, 30);
  fill("green");
  
  //circle
  circle(625, 100, 30);
  fill("purple");
  
  //vertical line
  line(570, 150, 570, 280);
  
  //vertical line
  line(610, 150, 610, 280);
  
  //ellipse
  ellipse(590, 310, 160, 50);
  fill("yellow");
  
  //ellipse
  ellipse(590, 400, 160, 50);
  fill("green");
  
  //circle
  circle(560, 355, 40);
  fill("red");
  
  //circle
  circle(625, 355, 40);
  fill("blue");
  
  //vertical line
  line(590, 430, 590, 520);
  fill("brown");
  
  //circle
  circle(550, 460, 50);
  fill("orange");
  
  //circle
  circle(630, 460, 50);
  fill("green");
  
  //circle
  circle(590, 595, 140);
  fill("red");
  
  //circle
  circle(590, 595, 110);
  fill("yellow");
  
  //circle
  circle(590, 595, 80);
  fill("purple");
  
  //arc
  
  arc(430, 590, 120, 120, PI, 0, CHORD);
  fill("orange");
  
  //arc
  arc(430, 610, 120, 120, 0, PI, CHORD);
  fill("blue");
  
  //circle
  circle(430, 600, 50);
  fill(240, 128, 128);
  
  noLoop();
  save("nuu.png");
}
