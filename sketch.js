var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor=("green");
  movingrect=ceateSprite(400, 200, 80, 50);
  movingrect.shapeColor=("green");
 movingrect.velocityY=-5;
 fixedrect.velocityY=+5;
 
}

function draw() {
  background(255,255,255);  
//movingrect.x=World.mouseX;
//movingrect.y=World.mouseY;
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
   fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 )
  {
movingrect.velocityX= movingrect.velocityX*(-1);
fixedrect.velocityX= fixedrect.velocityX*(-1);
}
else 
if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
  fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 )
{
  movingrect.velocityY= movingrect.velocityY*(-1);
fixedrect.velocityY= fixedrect.velocityY*(-1);
}

 drawSprites();
}