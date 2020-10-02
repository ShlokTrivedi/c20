var anotherRectangle, movingRect;

function setup() {
  createCanvas(1200,800);
anotherRectangle = createSprite(400, 100, 50, 80);
anotherRectangle.shapeColor = "green" ;
anotherRectangle.debug = true;

movingRect = createSprite(400, 800, 80, 30);
movingRect.shapeColor = "green" ;
movingRect.debug = true;

movingRect.velocityY = -5;
anotherRectangle.velocityY = 5;

}

function draw() {
  background(0,0,0); 
  
  if(movingRect.y - anotherRectangle.y < anotherRectangle.height/2 + movingRect.height/2
    && anotherRectangle.y - movingRect.y < anotherRectangle.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  anotherRectangle.velocityY = anotherRectangle.velocityY * (-1);
}

if(movingRect.x - anotherRectangle.x < anotherRectangle.width/2 + movingRect.width/2
  && anotherRectangle.x - movingRect.x < anotherRectangle.width/2 + movingRect.width/2){
movingRect.velocityX = movingRect.velocityX * (-1);
anotherRectangle.velocityX = anotherRectangle.velocityX * (-1);
}
  drawSprites();
}