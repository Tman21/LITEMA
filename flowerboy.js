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
  
  //1st ellipse
  ellipse(250, 240, 185, 215);
  fill("green");
  
  //2nd ellipse
  ellipse(440, 240, 185, 215);
  fill("red");
  
  //3rd ellipse
  ellipse(250, 460, 185, 215);
  fill("teal");
  
  //4th ellipse
  ellipse(440, 460, 185, 215);
  fill("pink");
  
  //5th ellipse
  ellipse(350, 350, 150, 165);
  
  //noLoop();
  //save("flowerboy.jpeg");
}
