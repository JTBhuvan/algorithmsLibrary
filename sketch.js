var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 100,50);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;
 movingRect=createSprite(200,200,50,100);
 movingRect.shapeColor="green";
 movingRect.debug=true;
 gameObject1=createSprite(100,200,50,50);
 gameObject1.shapeColor="blue";
}

function draw() {
  background(0); 
  movingRect .x=World.mouseX;
  movingRect.y=World.mouseY;
  if (isTouching(gameObject1,movingRect)){
    movingRect.shapeColor="yellow";
    gameObject1.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor="green";
    gameObject1.shapeColor="blue";
  }
  drawSprites();
}
