function setup() {
  createCanvas(700, 700);
  background("blue");
  frameRate(5);
}


function draw() {
  //main rectangle
  rect(10, 10, 680, 680);
  fill("green");
  strokeWeight(10);
  
  //1st rectangle inside mai rect 
  rect(12, 12, 225, 225);
  fill("purple");
  
  //1st arc inside 1st rect inside main rect
  arc(55, 237, 65, 65, -PI, 0, CHORD);
  fill("blue");
  
  //2nd arc inside 1st rect inside main rect
  arc(125, 237, 65, 65, -PI, 0, CHORD);
  fill("red");
  
  //3rd arc inside 1st rect inside main rect
  arc(195, 237, 65, 65, -PI, 0, CHORD);
  fill("yellow");
  
  //4th arc inside 1st rect inside main rect 
  arc(55, 15, 65, 65, 0, PI);
  fill("pink");
  
  //5th arc inside 1st rect inside main rect 
  arc(130, 15, 65, 65, 0, PI);
  fill("blue");
  
  //6th arc inside 1st rect inside main rect 
  arc(200, 15, 65, 65, 0, PI);
  fill("purple");
  
  //1st circle inside 1st rect inside main rect
  circle(125, 130, 120);
  fill("yellow");
  
  //2nd circle inside 1st rect inside main rect
  circle(125, 130, 60);
  fill("red");
  
  //2nd rect inside main rect
  rect(235, 12, 225, 225);
  fill("purple");
  
  //1st rect inside 2nd rect inside main rect
  rect(235, 12, 40, 120);
  fill("pink");
  
  //2nd rect inside 2nd rect inside main rect
  rect(235, 120, 40, 115);
  fill("yellow");
  
  //3rd rect inside 2nd rect inside main rect 
  rect(275, 12, 185, 40);
  fill("green");
  
  //4th rect inside 2nd rect inside main rect
  rect(275, 195, 185, 40);
  fill("blue");
  
  //1st circle inside 2n rect inside main rect
  circle(325, 120, 60);
  fill("purple");
  
  //2nd circle inside 2nd rect inside main rect 
  circle(415, 120, 60);
  fill("green");
  
  //3rd rect inside main rect
  rect(460, 12, 225, 225);
  fill("yellow");
  
  //1st circle inside 3rd rect inside main rect
  circle(570, 125, 180);
  fill("red");
  
  //2nd circle inside 3rd rect inside main rect
  circle(570, 125, 90);
  fill("blue");
  
  //3rd circle inside 3rd rect inside main rect
  circle(570, 125, 45);
  fill("yellow");
  
  
  //4th rect inside main rect
  rect(12, 240, 225, 225);
  fill("pink");
  
  //1st rect inside 4t rect inside main rect
  rect(12, 415, 30, 50);
  fill("purple");
  
  //2nd rect inside 4th rect inside main rect
  rect(40, 400, 30, 90);
  fill("green");
  
  //3rd rect inside 4th rect inside main rect
  rect(70, 380, 30 , 120);
  fill("blue");
  
  //4th rect inside 4th rect inside main rect
  rect(100, 360, 30, 180);
  fill("purple");
  
  //5th rect inside 4th rect inside main rect
  rect(130, 380, 30, 90 );
  fill("grey");
  
  //6th rect inside 4th rect inside main rect
  rect(160, 400, 30, 90);
  fill("green");
  
  //7th rect inside 4th rect inside main rect
  rect(195, 415, 30, 50);
  fill("");
  
  //1st circle inside 4th rect inside main rect
  circle(115, 300, 60);
  fill("red");
  
  //5th rect inside main rect 
  rect(235, 240, 225, 225);
  fill("purple");
  
  //1st rect inside 5th rect inside main rect
  rect(260, 260, 180, 180);
  fill("green");
  
  //2nd rect inside 5th rect inside main rect
  rect(280, 280, 140, 140);
  fill("blue");
  
  //3rd rect inside 5th rect inside main rect
  rect(300, 300, 100, 100);
  fill("red");
  
  //4th rect inside 5th rect inside main rect
  rect(320, 320, 60, 60);
  fill("yellow");
  
  //5th rect inside 5th rect inside main rect
  rect(335, 335, 30, 30);
  fill("orange");
  
  //6th rect inside main rect 
  rect(460, 240, 225, 225);
  fill("purple");
  
  //1st arc inside 6th rect inside main rect
  arc(570, 245, 150, 130, 0, PI);
  fill("green");
  
  //2nd arc inside 6th rect inside main rect
  arc(575, 460, 150, 130, -PI, 0, CHORD);
  fill("blue");
  
  //1st rect inside 6th rect inside main rect
  rect(555, 315, 30, 75);
  fill("red");
  
  //1st circle inside 6th rect inside main rect 
  circle(510, 350, 50);
  fill("yellow");
  
  //2nd circle inside 6th rect inside main rect 
  circle(630, 350, 50);
  fill("green");
  
  
  //7th rect inside main rect
  rect(11, 465, 225, 225);
  fill("purple");
  
  //1st triangle inside 7th rect inside main rect
  triangle(20, 690, 230, 690, 130, 475);
  fill("red");
  
  //1st rect inside 7th rect inside main rect
  rect(60, 630, 135, 60);
  fill("yellow");
  
  //1st circle inside 7th rect inside main rect
  circle(125, 580, 60);
  fill("green");
  
  
  //8th rect inside main rect 
  rect(235, 465, 225, 225);
  fill("blue");
  
  //1st rect inside 8th rect inside main rect
  rect(235, 465, 225, 40);
  fill("purple");
  
  //2nd rect inside 8th rect inside main rect
  rect(235, 645, 225, 40);
  fill("orange");
  
  //3rd rect inside 8th rect inside main rect
  rect(235, 505, 40, 185 );
  fill("red");
  
  //4t rect inside 8th rect inside main rect
  rect(420, 465, 40, 180);
  fill("yellow");
  
  //1st circle inside 8th rect inside main rect
  circle(350, 570, 80);
  fill("blue");
  
  //9th rect inside main rect
  rect(460, 465, 225, 225);
  fill("brown");
  
  //1st arc inside 9th rect inside main rect 
  arc(490, 685, 60, 90, -PI, 0, CHORD);
  fill("brown");
  
  //2nd arc inside 9th rect inside main rect
  arc(544, 685, 90, 110, -PI, 0, CHORD);
  
  //3rd arc inside 9th rect inside main rect 
  arc(575, 685, 70, 90, -PI, 0, CHORD);
  
  //4th arc inside 9th rect inside main rect
  arc(600, 685, 50, 60, -PI, 0, CHORD);
  
  //5th arc inside 9th rect inside main rect
  arc(650, 685, 50, 80, -PI, 0, CHORD);
  
  //1st vertical line inside 9th rect inside main rect
  line(520, 500, 520, 480);
  
  //2nd vertical line inside 9th rect inside main rect 
  line(520, 540, 520, 520);
  
  //3rd vertical line inside 9th rect inside main rect
  line(520, 580, 520, 560);
  
  //4th vertical line inside 9th rect inside main rect
  line(520, 620, 520, 600);
  
  //5th vertical line inside 9th rect inside main rect
  line(540, 620, 540, 600);
  
  //6th vertical line inside 9th rect inside main rect
  line(540, 580, 540, 560);
  
  //7th vertical line inside 9th rect inside main rect
  line(540, 540, 540, 520);
  
  //8th vertical line inside 9th rect inside main rect 
  line(540, 500, 540, 480);
  
  //9th vertical line inside 9th rect inside main rect 
  line(560, 500, 560, 480);
  
  //8th vertical line inside 9th rect inside main rect 
  line(560, 540, 560, 520);
  
  //9th vertical line inside 9th rect inside main rect
  line(560, 580, 560, 560);
  
  //10th vertical line inside 9th rect inside main rect 
  line(560, 620, 560, 600);
  
  //11th vertical line inside 9th rect inside main rect 
  line(580, 620, 580, 600);
  
  //12th vertical line inside 9th rect inside main rect 
  line(580, 580, 580, 560);
  
  //13th vertical line inside 9th rect inside main rect 
  line(580, 540, 580, 520);
  
  //14th vertical line inside 9th rect inside main rect 
  line(580, 500, 580, 480);
  
  //15th vertical line inside 9th rect inside main rect 
  line(600, 500, 600, 480);
  
  //16th vertical line inside 9th rect inside main rect 
  line(600, 540, 600, 520);
  
  //17th vertical line inside 9th rect inside main rect
  line(600, 580, 600, 560);
  
  //18th vertical line inside 9th rect inside main rect
  line(600, 620, 600, 600);
  
  noLoop();
  save("kgosigadi.png");
}
