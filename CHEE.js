function setup() {
  createCanvas(700, 700);
  background("blue");
  frameRate(350);
  
}


function draw() {
  fill(219, 44, 29);
  strokeWeight(10);
  
  //1st rect
  rect(5, 5, 690, 690);
  fill("orange");
  
  //2nd rect
  rect(50, 50, 600, 600);
  fill("blue");
  
  //3rd rect
  rect(100, 100, 500, 500);
  fill("teal");
  
  //1st arc
  arc(350, 160, 250, 250, 0, PI);
  fill("orange");
  
  //1ST CIRCLE
  circle(350, 160, 90);
  
  //2nd arc
  arc(350, 310, 250, 250, 0, PI);
  fill("green");
  
  //1ST CIRCLE
  circle(350, 310, 90);
  fill("purple");
  
  //3rd arc
  arc(350, 460, 250, 250, 0, PI);
  fill("yellow");
  
  //1st circle
  circle(350, 460, 90);
  
  //noLoop();
  //save("chee.jpeg");
}
