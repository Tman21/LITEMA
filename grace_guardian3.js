function setup() {
  createCanvas(1080, 1080);
  background("blue");
  frameRate(380);
}


function draw() {
  //main rect
  fill(152, 238, 204);
  rect(0, 0, 1080, 1080);
  strokeWeight(10);
  fill(255, 164, 27);
  
  //1st rect
  rect(5, 5, 1070, 1070);
  fill(82, 95, 225);
  
  //1st arc
  arc(190, 1070, 350, 350, PI, 0);
  fill("green");
  
  //2nd arc
  arc(540, 1070, 350, 350, PI, 0);
  fill("purple");
  
  //3rd arc
  arc(890, 1070, 350, 350, PI, 0);
  
  //1ST vertical line
  line(890, 50, 890, 250);
  
  //2nd vertical line
  line(890, 350, 890, 550);
  
  //3rd vertical line
  line(890, 650, 890, 850);
  
  //4th vertical line
  line(540, 50, 540, 250);
  
  //5th vertical line
  line(540, 350, 540, 550);
  
  //6th vertical line
  line(540, 650, 540, 850);
  
  //7th vertical line
  line(190, 50, 190, 250);
  
  //8th vertical line
  line(190, 350, 190, 550);
  
  //9th vertical line
  line(190, 650, 190, 850);
  
  //noLoop();
  //save("grace_guardian3.jpeg");
  
}
