var box;
function setup() {
 createCanvas(600,600);
box=createSprite(100,100,20,20);
box.shapeColor="red"

}

function draw() {
background("gray");
if(keyDown(UP_ARROW)){
  box.y-=2;
}
if(keyDown(DOWN_ARROW)){
  box.y+=2;
}
if(keyDown(LEFT_ARROW)){
  box.x-=2;
}
if(keyDown(RIGHT_ARROW)){
  box.x+=2;
}
drawSprites();
}