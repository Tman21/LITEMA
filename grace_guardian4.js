function setup() {
  createCanvas(1080, 1080);
  background("blue");
  frameRate(380);
}


function draw() {
  //main rect
  rect(0, 0, 1080, 1080);
  fill("blue");
  strokeWeight(10);
  fill("blue");
  
  //1st rect
  rect(5, 5, 1070, 1070);
  fill("orange");
  
  //1st triangle
  triangle();
}
