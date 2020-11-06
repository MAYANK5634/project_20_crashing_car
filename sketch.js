var car,wall
var speed,weight

function setup() {
 createCanvas(800,400);

 car = createSprite(100, 200, 50, 50);
wall = createSprite(600,200,20,150)
speed = random(40,150)
weight = random(400,1500)
car.velocityX = speed
}

function draw() {
  background(0); 
  
  if(wall.x-car.x < (car.width+wall.width)/2)
{  car.velocityX = 0;
   var deformation = 0.5 * weight* speed* speed/22509;
   if(deformation,180)
{

car.shapecolor = color(0,225,0);

}

if(deformation<180 && deormation>100)
{
   car.shapecolor = color(230,230,0)

}
if(deformation<100)
{
   car.shapecolor = color(0,255,0);


}

}


  drawSprites();
}