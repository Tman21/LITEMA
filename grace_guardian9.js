function setup() {
  createCanvas(1080, 1080);
  background("orange");
  frameRate(320);
}


function draw() {
  //main rect
  fill("green");
  rect(0, 0, 1080, 1080);
  strokeWeight(10);
  fill("yellow");
  
  //1st rect
  rect(60, 60, 960, 960);
  fill("purple");
   
   //2nd rect
   rect(120, 120, 840, 840);
   fill("red");
   
  //2nd circle
  circle(720, 360, 350);
  fill("green");
  //1st circle
  circle(360, 360, 350);
  fill("blue");
  
  //3rd circle
  circle(360, 720, 350);
  fill("orange");
  
  //4th circle
  circle(720, 720, 350);
  
  noLoop();
  save("grace_guardian9.jpeg");
}
