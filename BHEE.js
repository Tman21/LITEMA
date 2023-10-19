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
  fill("purple");
  
  //1st chord
  arc(250, 200, 210, 210, 0, PI, CHORD);
  fill("yellow");
  
  //1ST CIRCLE
  circle(250, 200, 100);
  fill("green");
  
  //2nd circle
  circle(250, 200, 60);
  fill("red");
  
  //3rd circle
  circle(250, 200, 20);
  
  //1st vertical line
  line(355, 200, 355, 450);
  
  //2nd chord
  arc(460, 450, 210, 210, 0, PI, CHORD);
  fill("pink");
  
  //1st circle
  circle(460, 450, 100);
  fill("purple");
  
  //2nd circle
  circle(460, 450, 60);
  fill("yellow");
  
  //3rd circle
  circle(460, 450, 20);
  
  noLoop();
  save("bhee.jpeg");
}
