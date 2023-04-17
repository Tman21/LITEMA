function setup() {
  createCanvas(700, 700);
  background("blue");
  frameRate(220);
}


function draw() {
  //main rectangle
  rect(130, 130, 420, 420);
  fill("white");
  strokeWeight(9);
  
  fill(188, 143, 143);
  //1st rectangle
  rect(150, 160, 120, 120);
  fill("red");
  
  //circle
  circle(340, 220, 130);
  fill("green");
  
  //rect
  rect(410, 160, 120, 120);
  fill("pink");
  
  //rect
  rect(430, 180, 80, 80);
  fill("purple");
  
  //circle
  circle(470, 220, 60);
  fill(255, 0, 255);
  
  //rect
  rect(170, 180, 80, 80);
  fill(106, 90, 205);
  
  //circle
  circle(210, 220, 60);
  fill("blue");
  
  //circle
  circle(340, 220, 90);
  fill("yellow");
  
  //circle
  circle(340, 220, 50);
  fill("green");
  
  //vertical line
  line(340, 290, 340, 360);
  fill("brown");
  
  //circle
  circle(340, 360, 40);
  fill("purple");
  
  //ellipse
  ellipse(340, 405, 140, 40);
  fill("yellow");
  
  //circle
  circle(340, 450, 40);
  fill("red");
  
  //vertical line
  line(210, 285, 210, 460);
  fill("green");
  
  //circle
  circle(210, 470, 100);
  fill(255, 0, 255);
  
  //arc
  arc(340, 480, 90, 90, 0, PI);
  fill("red");
  
  //vertical line
  line(470, 285, 470, 320);
  fill("blue");
  
  //circle
  circle(470, 320, 40);
  fill("red");
  
  //circle
  circle(470, 360, 40);
  fill("blue");
  
  //circle
  circle(470, 400, 40);
  fill("red");
  
  //circle
  circle(470, 440, 40);
  fill("blue");
  
  //circle
  circle(470, 480, 40);
  
  //line
  line(470, 500, 470, 530);
  
  noLoop();
  save("banyana.png");
}
