function setup() {
  createCanvas(2160, 2160);
  background("blue");
  frameRate(380);
}


function draw() {
  //main rectangle
  rect(10, 10, 2140, 2140);
  strokeWeight(8);
  fill("green");
  
  //1st rect
  rect(10, 10, 212, 212);
  fill("orange");
  
  //2nd rect
  rect(222, 10, 345, 615);
  fill("blue");
  
  //3rd rect
  rect(568, 10,250 ,280);
  fill("yellow");
  
  //4th rect
 // rect(636, 10, 212, 212);
  //fill("purple");
}
