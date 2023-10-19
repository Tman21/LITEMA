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
  
  //1st rect inside main rect
  rect(12, 12, 675, 290);
  fill("blue");
  
  //1st rect inside the 1st rect inside the main rect
  rect(12, 12, 120, 290);
  fill("red");
  
  //1st circle isnide 1st rect inside the 1st rect inside the the main rect
  circle(70, 65, 50);
  fill("green");
  
  //1st rect inside 1st rect inside the 1st rect inside the main rect
  rect(45, 130, 50, 50);
  fill("purple");
  
  //2nd circle inside 1st rect inside the 1st rect inside the main rect 
  circle(70, 245, 50);
  fill("red");
  
  //2nd rect inside 1st rect inside main rect
  rect(135, 12, 50, 160);
  fill("yellow");
  
  //3rd rect inside 1st rect inside main rect 
  rect(135, 170, 50, 130);
  fill("orange");
  
  //4th rect inside 1st rect inside main rect 
  rect(185, 12, 190, 60);
  fill("blue");
  
  //5th rect inside 1st rect inside main rect 
  rect(185, 75, 40, 160);
  fill("pink");
  
  //6th rect inside 1st rect inside main rect 
  rect(185, 230, 40, 70);
  fill("purple");
  
  //7th rect inside 1st rect inside main rect 
  rect(225, 75, 90, 225);
  fill("blue");
  
  //8th rect inside 1st rect inside main rect 
  rect(315, 75, 60, 70);
  fill("yellow");
  
  //9th rect inside 1st rect inside main rect 
  rect(315, 140, 60, 90);
  fill("orange");
  
  //10th rect inside 1st rect inside main rect 
  rect(315, 230, 60, 70);
  fill("red");
  
  //11th rect inside 1st rect inside main rect
  rect(375, 12, 120, 290);
  fill("green");
  
  //1st circle inside 11th rect inside 1st rect inside main rect
  circle(435, 65, 50);
  fill("blue");
  
  //1st rect inside 11th rect inside 1st rect inside main rect 
  rect(410, 130, 50, 50);
  fill("purple");
  
  //2nd circle inside 11th rect inside 1st rect inside main rect 
  circle(435, 240, 50);
  fill("purple");
  
  
  //12th rect inside 1st rect inside main rect
  rect(495, 12, 195, 50);
  fill("orange");
  
  //13th rect inside 1st rect inside main rect
  rect(495, 65, 130, 55);
  fill("red");
  
  //14th rect inside 1st rect inside main rect 
  rect(625, 65, 65, 235);
  fill("blue");
  
  //15th rect inside 1st rect inside main rect
  rect(495, 120, 130, 180);
  fill("green");
  
  //1st circle inside 15th rect inside 1st rect inside main rect
  circle(560, 210, 90);
  fill("purple");
  
  //2nd circle inside 15th rect inside 1st rect inside main rect
  circle(560, 210, 45);
  fill("green");
  
  //2nd rect inside main rect
  rect(12, 305, 300, 380);
  fill("purple");
  
  //1st rect inside 2nd rect inside main rect 
  rect(12, 305, 300, 60);
  fill("red");
  
  //1st vertical line inside 1st rect inside 2nd rect inside main rect
  line(40, 305, 40, 360);
  
  //2nd vertical line inside 1st rect inside 2nd rect inside main rect
  line(70, 305, 70, 360);
  
  //3rd vertical line inside 1st rect inside 2nd rect inside main rect 
  line(100, 305, 100, 360);
  
  //4th vertical line inside 1st rect inside 2nd rect inside main rect
  line(130, 305, 130, 360);
  
  //5th vertical line inside 1st rect inside 2nd rect inside main rect 
  line(160, 305, 160, 360);
  
  //6th vertical line inside 1st rect inside 2nd rect inside main rect
  line(190, 305, 190, 360);
  
  //7th vertical line inside 1st rect inside 2nd rect inside main rect 
  line(220, 305, 220, 360);
  
  //8th vertical line inside 1st rect inside 2nd rect inside main rect
  line(250, 305, 250, 360);
  
  //9th vertical line inside 1st rect inside 2nd rect inside main rect 
  line(280, 305, 280, 360);
  
  
  //2nd rect inside 2nd rect inside main rect
  rect(12, 625, 300, 60);
  fill("yellow");
  
  
  //1st circle inside 2nd rect inside 2nd rect inside main rect
  circle(160, 495, 200);
  fill("blue");
  
  //2nd circle inside 2nd rect inside 2nd rect inside main rect
  circle(160, 495, 100);
  
  fill("green");
  
  //3rd circle insie 2nd rect inside 2nd rect inside main rect 
  circle(160, 495, 50);
 
  //1st vertical line inside 2nd rect inside 2nd rect inside main rect 
  line(40, 630, 40, 680);
  
  //2nd vertical line inside 2nd rect inside 2nd rect inside main rect
  line(70, 630, 70, 680);
  
  //3rd vertical line inside 2nd rect inside 2nd rect inside main rect 
  line(100, 630, 100, 680);
  
  //4th vertical line inside 2nd rect inside 2nd rect inside main rect
  line(130, 630, 130, 680);
  
  //5th vertical line inside 2nd rect inside 2nd rect inside main rect
  line(160, 630, 160, 680);
  
  //6th vertical line inside 2nd rect inside 2nd rect inside main rect
  line(190, 630, 190, 680);
  
  //7th vertical line inside 2nd rect inside 2nd rect inside main rect
  line(220, 630, 220, 680);
  
  //8th vertical line inside 2nd rect inside 2nd rect inside main rect
  line(250, 630, 250, 680);
  
  //9th vertical line inside 2nd rect inside 2nd rect inside main rect 
  line(280, 630, 280, 680);
  
  
  //3rd rect inside main 
  rect(315, 305, 370, 380);
  fill("red");
  
  //1st horizontal line insdw 3rd rect inside main rect
  line(360, 640, 320, 640);
  
  //1st vertical line inside 3rd rect inside main rect
  line(360, 600, 360, 640);
  
  //2nd horizontal line inside 3rd rect inside main rect 
  line(360, 600, 400, 600);
  
  //2nd vertical line inside 3rd rect inside main rect
  line(400, 560, 400, 600);
  
  //3rd horizontal line inside 3rd rect inside main rect
  line(460, 560, 400, 560);
  
  //3rd vertical line inside 3rd rect inside main rect
  line(460, 680, 460, 560);
  fill("purple");
  
  //1st rect inside 3rd rect inside main rect 
  rect(460, 560, 40, 125);
  fill("yellow");
  
  //2nd rect inside 3rd rect inside main rect 
  rect(340, 330, 105, 70);
  fill("blue");
  
  //3rd rect inside 3rd rect inside main rect
  rect(355, 345, 75, 40);
  fill("red");
  
  //4th rect inside 3rd rect inside main rect
  rect(340, 450, 105, 70);
  fill("purple");
  
  //5th rect inside 3rd rect inside main rect
  rect(355, 465, 75, 40);
  fill("blue");
  
  //1st circle inside 3rd rect inside main rect
  circle(505, 485, 60);
  fill("purple");
  
  //2nd circle inside 3rd rect inside main rect
  circle(505, 365, 60);
  fill("orange");
  
  //6th rect inside 3rd rect inside main rect
  rect(560, 450, 105, 70);
  fill("red");
  
  //7th rect inside 3rd rect inside main rect
  rect(575, 465, 75, 40);
  fill("purple");
  
  //8th rect inside 3rd rect inside main rect
  rect(560, 330, 105, 70);
  fill("yellow");
  
  //9th rect inside 3rd rect inside main rect 
  rect(575, 345, 75, 40);
  fill("red");
  
  //10th rect inside 3rd rect inside main rect
  rect(500, 560, 185, 125);
  
  noLoop();
  save("grace.png");
}
