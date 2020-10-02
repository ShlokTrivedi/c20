var fx, mv;

function setup() {
  createCanvas(1200,800);
fx = createSprite(600, 400, 50, 80);
fx.shapeColor = "green" ;
fx.debug = true;

mv = createSprite(400, 200, 80, 30);
mv.shapeColor = "green" ;
mv.debug = true;
}

function draw() {
  background(0,0,0); 
  
  mv.x = World.mouseX;
  mv.y = World.mouseY;

  if(mv.x - fx.x < fx.width/2 + mv.width/2
    && fx.x - mv.x < fx.width/2 + mv.width/2
    && mv.y - fx.y < fx.height/2 + mv.height/2
    && fx.y - mv.y < fx.height/2 + mv.height/2){
  mv.shapeColor = "red";
  fx.shapeColor = "red";
}
  else {
    mv.shapeColor = "green";
    fx.shapeColor = "green";
  }
  drawSprites();
}