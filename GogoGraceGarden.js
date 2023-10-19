function setup() {
  createCanvas(1080, 1080);
  background("blue");
  frameRate(220);
}


function draw() {
  //main Rectangle
  rect(10, 10, 1060, 1060);
  strokeWeight(8);
  fill("blue");
  
  //1st rect
  rect(10, 10, 132.5, 132.5);
  fill("green");
  
  //1st circle
  circle(75, 75, 100);
  fill("orange");
  
  //2nd circle
  circle(75, 75, 70);
  fill("yellow");
  
  //3rd circle
  circle(75, 75, 40);
  fill(0, 139, 139);
  
  //2nd rect
  rect(142.5, 10, 132.5, 132.5);
  fill("yellow");
  
  //1st rect
  rect(157.5, 25, 100, 100);
  fill("red");
  
  //2nd rect
  rect(172.5, 40, 70, 70);
  fill("green");
  
  //3rd rect
  rect(187.5, 57, 40, 40);
  
  //3rd rect
  rect(275, 10, 132.5, 132.5);
  fill("purple");
  
  //1st arc
  arc(340, 45, 60, 60, 0, PI);
  fill("blue");
  
  //2nd arc
  arc(340, 105, 60, 60, PI, 0);
  fill(0, 255, 255);
  
  //1st circle
  circle(340, 45, 20);
  fill("yellow");
  
  //2nd circle
  circle(340, 105, 20);
  
  //4th rect
  rect(407.5, 10, 132.5, 132.5);
  fill("teal");
  
  //1st rect
  rect(425, 30, 100, 20);
  fill("red");
  
  //2nd rect
  rect(425, 70, 100, 20);
  fill("green");
  
  //3rd rect
  rect(425, 110, 100, 20);
  fill(0, 255, 255);
  
  //5th rect
  rect(540, 10, 132.5, 132.5);
  fill(0, 191, 255);
  
  //1st circle
  circle(605, 90, 60);
  
  //6th rect
  rect(672.5, 10, 132.5, 132.5);
  fill("yellow");
  
  //1st circle
  circle(735, 90, 60);
  fill(0, 128, 128);
  
  //7th rect
  rect(805, 10, 132.5, 132.5);
  fill("red");
  
  //1st circle
  circle(870, 90, 60);
  
  //8th rect
  rect(937.5, 10, 132.5, 132.5);
  fill(128, 128, 0);
  
  //1st circle
  circle(1005, 75, 100);
  fill("purple");
  
  //2nd circle
  circle(1005, 75, 70);
  fill("orange");
  
  //3rd circle
  circle(1005, 75, 40);
  
  //9th rect
  rect(10, 142.5, 132.5, 132.5);
  fill(0, 100, 0);
  
  //1st arc
  arc(32, 271, 42, 42, PI, 0);
  fill("yellow");
  
  //2nd arc
  arc(74, 271, 42, 42, PI, 0);
  fill("red");
  
  //3rd arc
  arc(115, 271, 42, 42, PI, 0);
  fill(221, 160, 221);
  
  //1st line
  line();
  
  //10th rect
  rect(142.5, 142.5, 132.5, 132.5);
  fill("purple");
  
  //1st arc
  arc(208.5, 275, 125, 125, PI, 0);
  fill("green");
   
  //1st circle
  circle(208.5, 275, 80);
  fill("blue");
  
  //2nd circle
  circle(208.5, 275, 40);
  fill("yellow");
  
  //3rd circle
  circle(208.5, 183.5, 50);
  //11th rect
  rect(275, 142.5, 132.5, 132.5);
  fill(220, 20, 60);
 
  //1st arc
  arc(340, 275, 125, 125, PI, 0);
  fill("purple");
  
  //1st circle
  circle(340, 275, 80);
  fill("yellow");
  
  //2nd circle
  circle(340, 275, 40);
  fill("green");
  
  //3rd circle
  circle(340, 183, 50);
  
  //12th rect
  rect(407.5, 142.5, 132.5, 132.5);
  fill("blue");
  
  //1st arc
  arc(475, 275, 125, 125, PI, 0);
  fill("yellow");
  
  //1st circle
  circle(475, 275, 80);
  fill("green");
  
  //2nd circle
  circle(475, 275, 40);
  fill("red");
  
  //3rd circle
  circle(475, 183, 50);
  
  
  //13th rect
  rect(540, 142.5, 132.5, 132.5);
  fill("green");
  
  //1st triangle
  triangle(545, 275, 606.3, 167.5, 672.5, 275);
  fill("purple");
  
  
  
  //14th rect
  rect(672.5, 142.5, 132.5, 132.5);
  fill("orange");
  
  //2nd triangle
  triangle(675.5, 275, 736.8, 167.5, 808, 275);
  fill("blue");
  
  //15th rect
  rect(805, 142.5, 132.5, 132.5);
  fill(178, 34, 34);

  //1st triangle
  triangle(810, 275, 870.3, 167.5, 937.5 ,275);
  fill("yellow");
  
  //16th rect
  rect(937.5, 142.5, 132.5, 132.5);
  fill("purple");
  
  //1st rect
  rect(954, 160, 97, 20);
  fill("green");
  
  //2nd rect
  rect(954, 200, 97, 20);
  fill("red");
  
  //3rd rect
  rect(954, 240, 97, 20);
  fill("green");
  
  //17th rect
  rect(10, 275, 132.5, 132.5);
  fill(0, 128, 128);
  
  //1st arc
  arc(32, 278, 40, 40, 0, PI);
  fill("purple");
  
  //2nd arc
  arc(72, 278, 40, 40, 0, PI);
  fill("blue");
  
  //3rd arc
  arc(114, 278, 42, 40, 0, PI);
  fill("red");
  
  //4th arc
  arc(115, 403, 40, 40, PI, 0);
  fill("yellow");
  
  //5th arc
  arc(35, 403, 42, 40, PI, 0);
  fill("teal");
  
  //6th arc
  arc(74, 403, 40, 40, PI, 0);
  fill("yellow");
  
  //1st circle
  circle(74, 340, 67);
  fill("blue");
  
  //2nd circle
  circle(74, 340, 37);
  fill(74, 340, 27);
  
  //3rd circle
  circle(74, 340, 17);
  
  //18th rect
  rect(142.5, 275, 132.5, 132.5);
  fill("yellow");
  
  //1st arc
  arc(208.5, 278, 125, 125, 0, PI);
  fill("red");
  
  //1st circle
  circle(208.5, 278, 80);
  fill("blue");
  
  //2nd circle
  circle(208.5, 278, 40);
  fill("teal");
  
  //3rd circle
  circle(208.5, 368, 50);
  fill("green");
  
  //19th rect
  rect(275, 275, 132.5, 132.5);
  fill("teal");
  
  //1st arc 
  arc(340, 278, 125, 125, 0, PI);
  fill("red");
  
  //1st circle
  circle(340, 278, 80);
  fill("green");
  
  //2nd circle
  circle(340, 278, 40);
  fill("yellow");
  
  //3rd circle
  circle(340, 368, 50);
  
  //20th rect
  rect(407.5, 275, 132.5, 132.5);
  fill("green");
  
  //1st arc
  arc(472.5, 278, 125, 125, 0,PI);
  fill("blue");
  
  //1st circle
  circle(472.5, 278, 80);
  fill("purple");
  
  //2nd circle
  circle(472.5, 278, 40);
  fill("red");
  
  //3rd circle
  circle(472.5, 368, 50);
  fill("purple");
  
  
  //21st rect
  rect(540, 275, 132.5, 132.5);
  fill("blue");
  
  //1st triangle
  triangle(545, 275, 606.3, 375, 672.5, 275);
  fill("orange");
  
  //22nd rect
  rect(672.5, 275, 132.5, 132.5);
  fill("red");
  
  //1st triangle
  triangle(678, 275, 738.8, 375, 805, 275);
  fill("orange");
  
  //23rd rect
  rect(805, 275, 132.5, 132.5);
  fill(0, 255, 255);
  
  //1st triangle
  triangle(810, 275, 871.3, 375, 937.5, 275);
  
  
  //24th rect
  rect(937.5, 275, 132.5, 132.5);
  fill(0, 139, 139);
  
  //1st arc
  arc(1000, 305, 70, 70, 0, PI);
  fill("red");
  
  //2nd arc
  arc(1000, 375, 70, 70, PI, 0);
  fill("blue");
  
  //1st circle
  circle(1000, 305, 25);
  fill("green");
  
  //2nd circle
  circle(1000, 375, 25);
  fill("teal");
  
  //25th rect
  rect(10, 407.5, 132.5, 132.5);
  fill("green");
  
  //1st rect
  rect(25, 430, 105, 20);
  fill("red");
  
  //2nd rect
  rect(25, 470, 105, 20);
  fill("yellow");
  
  //3rd rect
  rect(25, 510, 105, 20);
  fill("purple");
 
  
  //26th rect
  rect(142.5, 407.5, 132.5, 132.5);
  fill("red");
 
  //1st circle
  circle(208, 472, 110);
  fill("blue");
  
  //2nd circle
  circle(208, 472, 70);
  fill("yellow");
  
  //3rd circle
  circle(208, 472, 30);
  fill("purple");
 
  
  //27th rect
  rect(275, 407.5, 132.5, 132.5);
  fill(255, 69, 0);
 
  //1st triangle
  triangle(280, 540, 407.5, );
  
  //28th rect
  rect(407.5, 407.5, 132.5, 132.5);
  fill("teal");
  
  //29th rect
  rect(540, 407.5, 132.5, 132.5);
  fill(0, 255, 255);
  
  //30th rect
  rect(672.5, 407.5, 132.5, 132.5);
  fill(220, 20, 60);
  
  //31st rect
  rect(805, 407.5, 132.5, 132.5);
  fill("yellow");
  
  //32nd rect
  rect(937.5, 407.5, 132.5, 132.5);
  fill("red");
  
  //33rd rect
  rect(10, 540, 132.5, 132.5);
  fill("yellow");
  
  //34th rect
  rect(142.5, 540, 132.5, 132.5);
  fill("blue");
  
  //35th rect
  rect(275, 540, 132.5, 132.5);
  fill("orange");
  
  //36th rect
  rect(407.5, 540, 132.5, 132.5);
  fill(0, 255, 255);
  
  //37th rect
  rect(540, 540, 132.5, 132.5);
  fill(0, 139, 139);
  
  //38th rect
  rect(672.5, 540, 132.5, 132.5);
  fill("green");
  
  //39th rect
  rect(805, 540, 132.5, 132.5);
  fill(69, 255, 0);
  
  //40th rect
  rect(937.5, 540, 132.5, 132.5);
  fill("teal");
  
  //41st rect
  rect(10, 672.5, 132.5, 132.5);
  fill("orange");
  
  //42nd rect
  rect(142.5, 672.5, 132.5, 132.5);
  fill("red");
  
  //43rd rect
  rect(275, 672.5, 132.5, 132.5);
  fill("yellow");
  
  //44th rect
  rect(407.5, 672.5, 132.5, 132.5);
  fill(255, 127, 80);
  
  //45th rect
  rect(540, 672.5, 132.5, 132.5);
  fill(220, 20, 60);
  
  //46th rect
  rect(672.5, 672.5, 132.5, 132.5);
  fill(0, 139, 139);
  
  //47th rect
  rect(805, 672.5, 132.5, 132.5);
  fill("red");
  
  //48th rect
  rect(937.5, 672.5, 132.5, 132.5);
  fill(205, 92, 92);
  
  //49th rect
  rect(10, 805, 132.5, 132.5);
  fill("green");
  
  //50th rect
  rect(142.5, 805, 132.5, 132.5);
  fill(250, 128, 114);
  
  //51st rect
  rect(275, 805, 132.5, 132.5);
  fill("blue");
  
  //52nd rect
  rect(407.5, 805, 132.5, 132.5);
  fill("yellow");
  
  //53rd rect
  rect(672.5, 805, 132.5, 132.5);
  fill(178, 34, 34);
  
  //54th rect
  rect(805, 805, 132.5, 132.5);
  fill("purple");
  
  //55th rect
  rect(937.5, 805, 132.5, 132.5);
  fill("green");
  
  //56th rect
  rect(10, 937.5, 132.5, 132.5);
  fill("teal");
  
  //57th rect
  rect(142.5, 937.5, 132.5, 132.5);
  fill("orange");
  
  //58th rect
  rect(275, 937.5, 132.5, 132.5);
  fill("red");
  
  //59th rect
  rect(407.5, 937.5, 132.5, 132.5);
  fill(20, 20, 60);
  
  //60th rect
  rect(672.5, 937.5, 132.5, 132.5);
  fill(220, 20, 60);
  
  //61st rect
  rect(805, 937.5, 132.5, 132.5);
  fill("yellow");
  
  //62nd rect
  rect(937.5, 937.5, 132.5, 132.5);
  
}
