var lunar= 0
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(120,134,107); //an RGB color for the canvas' background
  //circle
  stroke(59, 59, 57); // an RGB color for the circle's border
  strokeWeight(3)
  fill(209,191,161); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,50,50,); // center of canvas, 20px dia
  ellipse(mouseX,mouseY,20,20,)
textSize(lunar);

textFont("Courier");
textStyle(BOLD);
textAlign(CENTER);
text("Oh hi welcome",200,200);
triangle(250,350,350,200,450,350);
}

function mousePressed(){
  if (lunar>=50)
   {lunar=0;} else {lunar=lunar+1;}
 
}