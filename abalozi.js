function setup() {
  createCanvas(700, 700);
  background("blue");
  frameRate(5);
}


function draw() {
  //main rectangle
  rect(10, 10, 680, 680);
  fill("purple");
  strokeWeight(6);
  
  //1st rect inside main rect
  rect(12, 12, 675, 60);
  fill("green");
  
  //1st vertical line inside 1st rect inside main rect
  line(40, 12, 40, 520);
  
  //2nd vertical line inside 1st rect inside main rect
  line(70, 12, 70, 520);
  
  //3rd vertical line inside 1st rect inside main rect
  line(100, 12, 100, 520);
  
  //4th vertical line inside 1st rect inside main rect
  line(130, 12, 130, 520);
  
  //5th vertical line inside 1st rect inside main rect
  line(160, 12, 160, 520);
  
  //6th vertical line inside 1st rect inside main rect
  line(190, 12, 190, 520);
  
  //7th vertical line inside 1st rect inside main rect
  line(220, 12, 220, 520);
  
  //8th vertical line inside 1st rect inside main rect
  line(250, 12, 250, 520);
  
  //9th vertical line inside 1st rect inside main rect
  line(280, 12, 280, 520);
  
  //10th vertical line inside 1st rect inside main rect
  line(310, 12, 310, 520);
  
  //11th vertical line inside 1st rect inside main rect
  line(340, 12, 340, 520);
  
  //12th vertical line inside 1st rect inside main rect
  line(370, 12, 370, 520);
  
  //13th vertical line inside 1st rect inside main rect
  line(400, 12, 400, 520);
  
  //14th vertical line inside 1st rect inside main rect
  line(430, 12, 430, 520);
  
  //15th vertical line inside 1st rect inside main rect
  line(460, 12, 460, 520);
  
  //16th vertical line inside 1st rect inside main rect 
  line(490, 12, 490, 520);
  
  //17th vertical line inside 1st rect inside main rect
  line(520, 12, 520, 520);
  
  //18th vertical line inside 1st rect inside main rect
  line(550, 12, 550, 520);
  
  //19th vertical line inside 1st rect inside main rect
  line(580, 12, 580, 520);
  
  //20th vertical line inside 1st rect inside main rect
  line(610, 12, 610, 520);
  
  //2nd rect inside main rect
  rect(12, 75, 60, 610);
  fill("red");
  
  //1st arc inside 2nd rect inside main rect
  arc(40, 75, 60, 90, 0, PI);
  fill("purple");
  
  //2ND arc inside 2nd rect inside main rect
  arc(40, 190, 60, 90, PI, 0, CHORD);
  fill("blue");
  
  //3RD ARC INSIDE 2ND RECT INSIDE MAIN RECT
  arc(40, 193, 60, 90, 0, PI);
  fill("orange");
  
  //4th arc inside 2nd rect inside main rect
  arc(40, 310, 60, 90, PI, 0);
  fill("pink");
  
  //5th arc inside 2nd rect inside main rect
  arc(40, 312, 60, 90, 0, PI, CHORD);
  fill("brown");
  
  //6th arc insie 2nd rect inside main rect
  arc(40, 430, 60, 90, PI, 0, CHORD);
  fill("red");
  
  //7th arc inside 2nd rect inside main rect
  arc(40, 432, 60, 90, 0, PI, CHORD);
  fill("purple");
  
  //8th arc inside 2nd rect inside main rect
  arc(40, 550, 60, 90, PI, 0, CHORD);
  fill("orange");
  
  //9th arc inside 2nd rect inside main rect
  arc(40, 552, 60, 90, 0, PI, CHORD);
  fill("blue");
  
  //10th arc inside 2nd rect inside main rect
  arc(40, 685, 60, 120, -PI, 0, CHORD);
  fill("red");
 
  
  //3rd rect inside main rect 
  rect(75, 625, 610, 60);
  fill("yellow");
 
  //1st vertical line inside 3rd rect inside main rect
  line(160, 690, 130, 520);
  
  //2nd vertical line inside 3rd rect inside main rect
  line(230, 690, 200, 540);
  
  //3rd vertical line inside 3rd rect inside main rect
  line(300, 690, 270, 540);
  
  //4th vertical line inside 3rd rect inside main rect
  line(370, 690, 340, 540);
  
  //5th vertical line inside 3rd rect inside main rect
  line(440, 690, 410, 540);
  
  //6th vertical line inside 3rd rect inside main rect
  line(510, 690, 480, 540);
  
  //7th vertical line inside 3rd rect inside main rect
  line(580, 690, 550, 540);
  
  //8th vertical line inside 3rd rect inside main rect
  line(650, 690, 620, 540);
  
  //1st circle inside 3rd rect inside main rect
  circle(115, 655, 35);
  fill("blue");
  
  //2nd circle inside 3rd rect inside main rect
  circle(190, 655, 35);
  fill("purple");
  
  //3rd circle inside 3rd rect inside main rect
  circle(260, 655, 35);
  fill("orange");
  
  //4th circle inside 3rd rect inside main rect
  circle(330, 655, 35);
  fill("brown");
  
  //5th circle inside 3rd rect inside main rect
  circle(400, 655, 35);
  fill("green");
  
  //6th circle inside 3rd rect inside main rect 
  circle(470, 655, 35);
  fill("pink");
  
  //7th circle inside 3rd rect inside main rect
  circle(540, 655, 35);
  fill("blue");
  
  //8th circle inside 3rd rect inside main rect
  circle(610, 655, 35);
  fill("yellow");
  
  //4th rect inside main rect 
  rect(625, 12, 60, 610);
  fill("orange");
  
  //1st circle inside 4th rect inside main rect
  circle(655, 60, 35);
  fill("red");
  
  //1st rect inside 4th rect inside main rect
  rect(637, 100, 35, 35);
  fill("blue");
  
  //2nd circle inside 4th rect inside main rect
  circle(655, 170, 35);
  fill("purple");
  
  //2nd rect inside 4th rect inside main rect
  rect(637, 210, 35, 35);
  fill("green");
  
  //3rd circle inside 4th rect inside main rect
  circle(655, 290, 35);
  fill("pink");
  
  //3rd rect inside 4th rect inside main rect 
  rect(637, 335, 35, 35);
  fill("red");
  
  //4th circle inside 4th rect inside main rect
  circle(655, 410, 35);
  fill("brown");
  
  //4th rect inside 4th rect inside main rect
  rect(637, 450, 35, 35);
  fill("green");
  
  //5th circle inside 4th rect inside main rect 
  circle(655, 530, 35);
  fill("blue");
  
  //5th rect inside 4th rect inside main rect
  rect(637, 570, 35, 35);
  fill("red");
  
  //1st vertical line inside 4th rect inside main rect
  line(655, 10, 655, 620);
  
  //1st horizontal line inside 4th rect inside main rect
  line(625, 60, 680, 60);
  
  //2nd horizontal line inside 4th rect inside main rect 
  line(625, 118, 680, 118);
  
  //3rd horizontal line inside 4th rect inside main rect 
  line(625, 170, 680, 170);
  
  //4th horizontal line inside 4th rect inside main rect
  line(625, 230, 680, 230);
  
  //5th horizontal line inside 4th rect inside main rect
  line(625, 290, 680, 290);
  
  //6th horizontal line inside 4th rect inside main rect
  line(625, 350, 680, 350);
  
  //7th horizontal line inside 4th rect inside main rect
  line(625, 410, 680, 410);
  
  //8th horizontal line inside 4th rect inside main rect
  line(625, 470, 680, 470);
  
  //9th horizontal line inside 4th rect inside main rect
  line(625, 530, 680, 530);
  
  //10th horizontal line inside 4th rect inside main rect
  line(625, 590, 680, 590);
  
  //5th rect inside main rect 
  rect(75, 75, 150, 280);
  fill("pink");
  
  //1st arc inside 5th rect inside main rect
  arc(150, 295, 140, 140, PI, 0, CHORD);
  fill("green");
  
  //2nd arc inside 5th rect inside main rect
  arc(150, 295, 90, 90, PI, 0, CHORD);
  //1st rect inside 5th rect inside main rect
  rect(75, 75, 80, 40);
  fill("blue");
  
  //2nd rect inside 5th rect inside main rect
  rect(155, 75, 70, 145);
  fill("purple");
  
  //3rd rect inside 5th rect inside main rect
  rect(75, 115, 80, 80);
  fill("red");
  
  //1st circle inside 5th rect inside main rect 
  circle(115, 95, 25);  
  fill("green");
  
  //2nd circle inside 5th rect inside main rect 
  circle(190, 95, 25);
  fill("purple");
  
  //3rd circle inside 5th rect inside main rect
  circle(190, 160, 25);
  fill("blue");
  
  //4th circle inside 5th rect inside main rect
  circle(115, 160, 25);
  fill("red");
  
  //1st horizontal line 5th rect inside main rect
  line(115, 95, 190, 95);
  
  //2ND horizontal line inside 5th rect inside main rect
  line(115, 160, 190, 160);
  
  //1st vertical line inside 5th rect inside main rect
  line(115, 95, 115, 160);
  
  //2nd vertical line inside 5th rect inside main rect
  line(190, 95, 190, 160);
  
  
  //6th rect inside main rect
  rect(75, 300, 150, 200);
  fill("yellow");
  
  //1st arc inside 6th rect inside main rect
  arc(150, 295, 140, 140, 0, PI, CHORD);
  fill("blue");
  
  //2nd arc inside 6th rect inside main rect 
  arc(150, 295, 90, 90, 0, PI, CHORD);
  fill("green");
  
  //1st rect inside 6th rect inside main rect
  rect(130, 365, 40, 70);
  fill("purple");
  
  //3rd arc inside 6th rect inside main rect
  arc(150, 495, 140, 140, PI, 0, CHORD);
  fill("blue");
  
  //2nd rect inside 6th rect inside main rect
  rect(100, 455, 100, 40);
  fill("purple");
  
  //1st circle inside 6th rect inside main rect
  circle();
  
  //7th rect inside main rect 
  rect(75, 500, 300, 120);
  fill("green");
  
  //1st arc inside 7th rect inside main rect 
  arc(120, 500, 60, 60, 0, PI, CHORD);
  fill("red");
  
  //2nd arc inside 7th rect inside main rect 
  arc(180, 500, 60, 60, 0, PI, CHORD);
  fill("blue");
  
  //3rd arc inside 7th rect inside main rect
  arc(240, 500, 60, 60, 0, PI, CHORD);
  fill("brown");
  
  //4th arc inside 7th rect inside main rect 
  arc(300, 500, 60, 60, 0, PI, CHORD);
  fill("orange");
  
  //1st rect inside 7th rect inside main rect
  rect(330, 500, 45, 120);
  fill("red");
  
  //5th arc inside 7th rect inside main rect
  arc(120, 620, 60, 60, PI, 0, CHORD);
  fill("pink");
  
  //6th arc inside 7th rect inside main rect
  arc(180, 620, 60, 60, PI, 0, CHORD);
  fill("orange");
  
  //7th arc inside 7th rect inside main rect
  arc(240, 620, 60, 60, PI, 0, CHORD);
  fill("green");
  
  //8th arc inside 7th rect inside main rect
  arc(300, 620, 60, 60, PI, 0, CHORD);
  fill("green");
  
  //2nd rect inside 7th rect inside main rect
  rect(75, 535, 255, 50);
  fill("green");
  
  //8th rect inside main rect 
  rect(375, 500, 245, 120);
  fill("blue");
  
  //1st rect inside 8th rect inside main rect
  rect(375, 500, 60, 30);
  fill("red");
  
  //2nd rect inside 8th rect inside main rect
  rect(375, 530, 60, 90);
  fill("yellow");
  
  //1st circle inside 8th rect inside main rect
  circle(520, 560, 90);
  fill("purple");
  
  //2nd circle inside 8th rect inside main rect 
  circle(520, 560, 60);
  fill("blue");
  
  //3rd circle inside 8th rect inside main rect
  circle(520, 560, 30);
  
  
  //9th rect inside main rect
  rect(230, 75, 390, 420);
  fill("brown");
  
  //1st arc inside 9th rect inside main rect
  arc(425, 180, 260, 500, 0, PI, CHORD);
  fill("blue");
  
  //2nd arc inside 9th rect inside main rect
  arc(370, 260, 60, 60, PI, 0, CHORD);
  fill("red");
  //1st arc inside 2nd arc
  arc(370, 260, 30, 30, PI, 0, CHORD);
  
  //3rd arc inside 9th rect inside main rect
  arc(480, 260, 60, 60, PI, 0, CHORD);
  fill("green");
  
  //1st arc inside 3rd arc
  arc(480, 260, 30, 30, PI, 0, CHORD);
  fill("purple");
  
  //1st rect inside 9th rect inside main rect 
  rect(335, 205, 60, 10);
  fill("green");
  
  //2nd rect inside 9th rect inside main rect
  rect(450, 205, 60, 10);
  fill("yellow");
  
  //3rd rect inside 9th rect inside main rect
  rect(415, 265, 20, 60);
  fill("blue");
  
  //1st circle inside 9th rect inside main rect
  circle(415, 330, 10);
  fill("red");
  
  //2nd circle inside 9th rect inside main rect
  circle(435, 330, 10);
  fill("green");
  
  //6th arc inside 9th rect inside main rect 
  arc(405, 365, 40, 30, PI, 0, CHORD);
  fill("red");
  
  //7th arc inside 9th rect inside main rect
  arc(440, 365, 40, 30, PI, 0, CHORD);
  fill("purple");
  
  //8th arc inside 9th rect inside main rect
  arc(423, 365, 75, 30, 0, PI, CHORD);
  fill("brown");
  
  //4TH rect inside 9th rect inside main rect
  rect(310, 120, 10, 60);
  
  //5th rect inside 9th rect inside main rect
  rect(330, 120, 10, 60);
  
  //6th rect inside 9th rect inside main rect 
  rect(350, 120, 10, 60);
  
  //7th rect inside 9th rect inside main rect
  rect(370, 120, 10, 60);
  
  //8th rect inside 9th rect inside main rect
  rect(390, 120, 10, 60);
  
  //9th rect inside 9th rect inside main rect
  rect(410, 120, 10, 60);
  
  //10th rect inside 9th rect inside main rect
  rect(430, 120, 10, 60);
  
  //11th rect inside 9th rect inside main rect
  rect(450, 120, 10, 60);
  
  //12th rect inside 9th rect inside main rect
  rect(470, 120, 10, 60);
  
  //13th rect inside 9th rect inside main rect
  rect(490, 120, 10, 60);
  
  //14th rect inside 9th rect inside main rect
  rect(510, 120, 10, 60);
  
  //15th rect inside 9th rect inside main rect
  rect(530, 120, 10, 60);
  fill("red");
  
  noLoop();
  save("abalozi.png");
  
}
