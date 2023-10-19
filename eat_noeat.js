function setup() {
  createCanvas(700, 700);
  background("blue");
  frameRate(200);
}


function draw() {
  fill("white");
  //main rectengle
  rect(130, 130, 420, 420);
  fill("green");
  
  strokeWeight(9);
  
  //1st rect
  rect(150, 160, 50, 220);
  fill("red");
  
  //rect
  rect(150, 400, 50, 120);
  fill("brown");
  
  //2nd rect
  rect(220, 160, 180, 50);
  fill("yellow");
  
  //rect
  rect(420, 160, 110, 50);
  fill("orange");
  
  //3rd rect
  rect(480, 230, 50, 290);
  fill("purple");
  
  //4th rect 
  rect(220, 470, 150, 50);
  fill(255, 182, 193);
  
  //rect
  rect(390, 470, 70, 50);
  fill("red");
  
  //arc
  arc(340, 280, 180, 160, 0, PI, CHORD);
  fill("blue");
  
  //circle
  circle(340, 280, 60);
  fill("yellow");
  
  //arc
  arc(340, 390, 120, 90, PI, 0, CHORD);
  
  noLoop();
  save("eat.png");
}
