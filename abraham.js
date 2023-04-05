function setup() {
  createCanvas(700, 700);
  background("blue");
  frameRate(5);
}


function draw() {
  //main rectangle
  rect(10, 10, 680, 680);
  fill("purple");
  strokeWeight(10);
  
  //1st rect inside main rect
  rect(12, 12, 405, 350);
  fill("blue");
  
  //1st arc inside the 1st rect inside main rect
  arc(210, 360, 380, 300, -PI, 0, CHORD);
  fill("green");
  
  //2nd arc inside the 1st rect inside main rect
  arc(210, 360, 330, 240, -PI, 0, CHORD);
  fill("red");
  
  //3rd arc inside the 1st rect inside main rect
  arc(210, 360, 280, 180, PI, 0, CHORD);
  fill("yellow");
  
  //1st rect inside 1st rect inside main rect
  rect(170, 15, 80, 190);
  fill("green");
  
  //2nd rect inside 1st rect inside main rect
  rect(12, 12, 155, 80);
  fill("red");
  
  //3rd rect inside 1st rect inside main rect
  rect(250, 15, 155, 80);
  fill("blue");
  //2nd rect inside main rect
  rect(410, 12, 280, 360);
  fill("red");
  
  //1st rect inside 2nd rect inside main rect
  rect(430, 30, 60, 60);
  fill("yellow");
  
  //1st circle inside 2nd rect inside main rect
  circle(550, 60, 60);
  fill("green");
  
  //2nd rect inside 2nd rect inside main rect
  rect(610, 30, 60, 60 );
  fill("purple");
  
  //2nd circle inside 2nd rect inside main rect
  circle(460, 150, 60);
  fill("orange");
  
  //3rd rect inside 2nd rect inside main rect
  rect(520, 120, 60, 60);
  fill("yellow");
  
  //3rd circle inside 2nd rect inside main rect
  circle(640, 150, 60);
  fill("green");
  
  //4th rect inside 2nd rect inside main rect
  rect(430, 210, 60, 60);
  fill("pink");
  
  //4th circle inside 2nd rect inside main rect
  circle(550, 240, 60);
  fill("orange");
  
  //5th rect inside 2nd rect inside main rect
  rect(610, 210, 60, 60);
  fill("red");
  
  //6th rect inside 2nd rect inside main rect 
  rect(520, 290, 60, 60);
  fill("purple");
  
  //7th circle inside 2nd rect inside main rect
  circle(640, 320, 60);
  
  //1st horizontal line inside 2nd rect inside main rect
  line(430, 150, 670, 150);
  
  //1st vertical line inside 2nd rect inside main rect
  line(640, 120, 640, 350);
  
  //2nd horizontal line inside 2nd rect inside main rect
  line(520, 240, 670, 240);
  
  //2nd vertical line inside 2nd rect inside main rect
  line(550, 30, 550, 350);
  
  //4th circle inside 2nd rect inside main rect
  circle(460, 320, 60);
  fill("purple");
  
  //5th rect inside 2nd rect inside main rect
  rect();
  //3rd rect inside inside main rect
  rect(12, 365, 280, 320);
  fill("yellow");
  
  //1st rect inside 3rd rect inside main rect
  rect(30, 380, 230, 290);
  fill("blue");
  
  //2nd rect inside 3rd rect inside main rect 
  rect(50, 400, 190, 250);
  fill("green");
  
  //3rd rect inside 3rd rect inside main rect
  rect(70, 420, 150, 210);
  fill("purple");
  
  //4th rect inside 3rd rect inside main rect
  rect(90, 440, 110, 170);
  fill("green");
  
  //1st circle inside 3rd rect inside main rect
  circle(145, 520, 60);
  fill("green");
  
  //4th rect inside main rect
  rect(280, 365, 410, 320);
  fill("orange");
  
  
  //1st rect inside 4th rect inside main rect
  rect(280, 600, 40, 80);
  fill("red");
  
  //2nd rect inside 4th rect inside main rect
  rect(320, 560, 40, 120);
  fill("purple");
  
  //3rd rect inside 4th rect inside main rect
  rect(360, 520, 40, 160);
  fill("blue");
  
  //4th rect inside 4th rect inside main rect
  rect(400, 480, 40, 200);
  fill("green");
  
  //5th rect inside 4th rect inside main rect
  rect(440, 440, 40, 240);
  fill("pink");
  
  //6th rect inside 4th rect inside main rect
  rect(480, 400, 40, 280);
  fill("red");
  
  //7th rect inside 4th rect inside main rect 
  rect(520, 370, 40, 310);
  fill("orange");
  
  //1st circle inside 4th rect inside main rect
  circle(625, 440, 90);
  fill("blue");
  
  //2nd circle inside 4th rect inside main rect
  circle(625, 550, 70);
  fill("purple");
  
  //3rd circle inside 4th rect inside main rect
  circle(625, 640, 50);
  
  noLoop();
  save("abraham.png");
}
