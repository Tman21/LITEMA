function setup() {
  createCanvas(700, 700);
  background("blue");
  frameRate(200);
}


function draw() {
  fill("white");
  //main rectangle
  rect(130, 130, 420, 420);
  fill(128, 128, 0);
  strokeWeight(9);
  
  //1st rect
  rect(160, 160, 100, 100);
  fill("red");
  
  //2nd rect
  rect(220, 160, 100, 100);
  fill("yellow");
  
  //circle
  circle(310, 210, 100);
  fill("purple");
  
  //circle
  circle(335, 210, 100);
  fill("blue");
  
  //rect
  rect(360, 160, 100);
  fill("green");
  
  //rect
  rect(420, 160, 100, 100);
  fill("orange");
  
  //circle
  circle(440, 210, 100);
  fill(123, 90, 34);
  
  //ellipse
  ellipse(190, 330, 40, 140);
  fill("green");
  
  //ellipse
  ellipse(230, 300, 40, 40);
  fill("orange");
  
  //ellipse
  ellipse(230, 360, 40, 40);
  fill("blue");
  
  //ellipse
  ellipse(270, 330, 40, 140);
  
  fill(255, 0, 255);
  
  //ellipse
  ellipse(360, 330, 130, 130);
  fill("blue");
  
  //ellipse
  ellipse(360, 330, 90, 90);
  fill("yellow");
  
  //ellipse
  ellipse(360, 330, 50, 50);
  fill("red");
  
  //ellipse
  ellipse(450, 330, 40, 140);
  fill("green");
  
  //ellipse
  ellipse(490, 330, 40, 140);
  fill("yellow");
  
  //1st arc
  arc(230, 405, 120, 90, 0, PI, CHORD);
  fill("red");
  
  //2nd arc
  arc(350, 405, 120, 90, PI, 0, CHORD);
  fill("orange");
  
  //3rd arc
  arc(450, 405, 120, 90, 0, PI, CHORD);
  fill("green");
  
  //ellipse
  ellipse(340, 475, 130, 130);
  fill(255, 0, 255);
  
  //ellipse
  ellipse(340, 475, 90, 90);
  fill("red");
  
  //ellipse
  ellipse(340, 475, 50, 50);
  fill("brown");
  
  //ellipse
  ellipse(450, 500, 85, 85);
  fill("red");
  
  //ellipse
  ellipse(230, 500, 85, 85);
  
  noLoop();
  save("awakening.png");
}
