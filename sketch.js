function setup() {
  createCanvas(400, 400);
  background("rgb(212,105,212)");
}

function draw() {
  
  
  //console.log(mouseIsPressed);
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 15, 15);
  }
  
  fill("rgb(141,141,252)");
  stroke("red")
  
}