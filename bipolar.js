function setup() {
  createCanvas(700, 700);
  background("grey");
  frameRate(5);
}

function draw() {
  //main rectangle
  rect(10, 10, 680, 680);
  fill("black");
  strokeWeight(6);
  stroke(255, 255, 255);
  
  //1st rect inside main rect
  rect(12, 12, 290, 675);
  fill("green");
 
   //1st circle inside 1st rect inside main rect
  circle(120, 50, 40);
  fill("purple");
  
  //2nd rect inside 1st rect inside main rect
  rect(170, 30, 40, 40);
  fill("blue");
  
  //1st rect inside 1st rect inside main rect
  rect(30, 30, 40, 40);
  
  //2nd circle inside 1st rect inside main rect
  circle(260, 50, 40); 
  fill("black");
  
  //1st arc inside 1st rect inside main rect
  arc(60, 125, 65, 85, 0, PI);
  //2nd arc inside 1st rect inside main rect
  arc(125, 125, 65, 85, 0, PI);
  //3rd arc inside 1st rect inside main rect
 arc(190, 125, 65, 85, 0, PI); 
  //4th arc inside 1st rect inside main rect
 arc(255, 125, 65, 85, 0, PI);
  //5th arc inside 1st rect inside main rect
 arc(60, 210, 65, 85, -PI, 0);
  //6TH arc inside 1st rect inside main rect
 arc(125, 210, 65, 85, -PI, 0);
  //7th arc inside 1st rect inside main rect
 arc(190, 210, 65, 85, -PI, 0);
 //8th arc inside 1st rect inside main rect
 arc(255, 210, 65, 85, -PI, 0);  
  noFill();
  fill("green");
  
  //1st circle inside 1st arc 
  circle(60, 135, 30);
  fill("blue");
 
 //1st circle inside 2nd arc 
 circle(125, 135, 30);
 fill("red");
 //1st circle inside 1st 3rd arc inside 1st rect main rect
 circle(190, 135, 30);
 fill("orange");
 
 //1st circle inside 4th arc inside 1st rect inside main rect
 circle(255, 135, 30);
  fill("purple");
  
  //3rd rect inside 1st rect inside main rect
  rect(25, 240, 90, 60);
  fill("green");
  
  //3rd rect inside 3rd rect inside main rect
  rect(38, 252, 65, 35);
  fill("blue");
  //1st circle inside 1st rect inside 3rd rect inside main rect
  circle(70, 270, 20);
  fill("red");
  
  //3rd circle inside 1st rect inside main rect
  circle(155, 270, 40);
  fill("blue");
  
  //4th rect inside 1st rect inside main rect
  rect(200, 240, 90, 60);
  fill("red");
  
  //1st rect inside 4th rect inside 1st rect inside main rect
  rect(213, 252, 65, 35);
  fill("orange");
  
  //1st circle inside 4th rect inside 1st rect inside main rect
  circle(245, 270, 20);
  fill("green");
  
  //1st horizontal line inside 1st rect inside main rect
  line(285, 350, 30, 350);
  
  //2nd horizontal line inside 1st rect inside main rect
  line(285, 380, 30, 380 );
  
  //3rd horizontal line inside 1st rect inside main rect
  line(285, 410, 30, 410);
  
  //5th rect inside 1st rect inside main rect
  rect(30, 450, 40, 40);
  fill("red");
  
  //4th circle inside 1st rect inside main rect
  circle(120, 470, 40);
  fill("blue");
  
  //6th rect inside 1st rect inside main rect
  rect(170, 450, 40, 40);
  fill("purple");
  
  //5th circle inside 1st rect inside main rect
  circle(260, 470, 40);
  
  //1st vertical line inside 1st rect inside main rect
  line(30, 580, 30, 520);
  
  //diagonal
  line(70, 580, 30, 520);
  
  //2nd vertical line inside 1st rect inside main rect
  line(70, 580, 70, 520);
  
  //diagonal 
  line(110, 580, 70, 520);
  
  //3rd vertical line inside 1st rect inside main rect
  line(110, 580, 110, 520);
  
  //diagonal 
  line(150, 580, 110, 520);
  
  //4th vertical line inside 1st rect inside main rect
  line(150, 580, 150, 520);
  
  //5th vertical line inside 1st rect inside main rect
  line(190, 580, 150, 520);
  
  //6th vertical line inside 1st rect inside main rect
  line(190, 580, 190, 520);
  
  //7th vertical line inside 1st rect inside main rect
  line(230, 580, 230, 520);
  
  //diagonal
  line(230, 580, 190, 520);
  
  //8th vertical line inside 1st rect inside main rect
  line(270, 580, 270, 520);
  
  //diagonal 
  line(270, 580, 230, 520);
  
  //7th rect inside 1st rect inside main rect
  rect(30, 600, 250, 60);
  fill("green");
  
  //1st circle inside 7th rect inside 1st rect inside main rect
  circle(60, 630, 30);
  fill("blue");
  
  //2nd circle inside 7th rect inside 1st rect inside main rect
  circle(120, 630, 30);
  fill("orange");
  
  //3rd circle inside 7th rect inside 1st rect inside main rect
  circle(180, 630, 30);
  fill("red");
  
  //4th circle inside 7th rect inside 1st rect inside main rect
  circle(240, 630, 30);
  fill("black");
  
  //2nd rect inside main rect
  rect(305, 12, 380, 350);
  fill("green");
  
  //1st circle inside 2nd rect inside main rect
  circle(495, 185, 300);
  fill("blue");
  
  //2nd circle inside 2nd rect inside main rect
  circle(495, 185, 220);
  fill("purple");
  
  //3rd circle inside 2nd rect inside main rect
  circle(495, 185, 160);
  fill("yellow");
  
  //4th circle inside 2nd rect inside main rect
  circle(495, 185, 100);
  fill("red");
  
  //5th circle inside 2nd rect inside main rect 
  circle(495, 185, 50);
  fill("black");
  
  //1st vertical line inside 2nd rect inside main rect
  line(445, 15, 445, 520);
  
  //2nd vertical line inside 2nd rect inside main rect
  line(545, 15, 545, 520);
  
  //1st horizontal line inside 2nd rect inside main rect
  line(305, 235, 680, 235);
  
  //2nd horizontal line inside 2nd rect inside main rect
  line(305, 135, 680, 135);
  
  //3rd rect inside main rect
  rect(305, 365, 235, 320);
  fill("blue");
  
  //1st arc inside 3rd rect inside main rect
  arc(495, 365, 95, 195, 0, PI);
  fill("green");
  
  //1st rect inside 3rd rect inside main rect
  rect(305, 365, 140, 100);
  fill("purple");
  
  //2nd arc inside 3rd rect inside main rect
  arc(495, 683, 80, 180, -PI, 0);
  fill("orange");
  
  //2nd rect inside 3rd rect inside main rect
  rect(305, 465, 235, 60);
  fill("red");
  
  //3rd arc inside 3rd rect inside main rect 
  arc(355, 528, 90, 210, 0, PI);
  fill("green");
  
  //3rd rect inside 3rd rect inside main rect
  rect(400, 528, 160, 65);
 fill("blue");
 
 //5th rect inside 3rd rect inside main rect 
 rect(305, 630, 145, 55);
  fill("black");
  
  //4th rect inside main rect
  rect(545, 365, 140, 320 );
  fill("purple");
  
  //1st rect inside 4th rect inside main rect
  rect(565, 385, 100, 280);
  fill("red");
  
  //2nd rect inside 4th rect inside main rect
  rect(580, 400, 70, 250);
  fill("green");
  
  //3rd rect inside 4th rect inside main rect
  rect(595, 415, 40, 220);
  fill("blue");
  
  //1st circle inside 4th rect inside main rect
  circle(615, 460, 20);
  fill("purple");
  
  //2nd circle inside 4th rect inside main rect
  circle(615, 510, 20);
  fill("red");
  
  //3rd circle inside 4th rect inside main rect
  circle(615, 560, 20);
  fill("orange");
  
  //4th circle inside 4th rect inside main rect
  circle(615, 610, 20);
  
  //noLoop();
  //save("bipolar");
}
