var f,m,f1,m1
function setup() {
  createCanvas(1200,800);
  f=createSprite(400, 200, 40, 80);
  f.shapeColor= "crimson";

  m=createSprite(400, 200, 80, 40);
  m.shapeColor= "white";

  f1=createSprite(700, 60, 40, 40);
  f1.shapeColor= "white";
  f1.velocityY= 4;
  m1=createSprite(700, 600, 40, 40);
  m1.shapeColor= "white";
  m1.velocityY= -3;

}

function draw() {
  background("black");  
  m.x= World.mouseX;
  m.y= World.mouseY;
  //teach the computer some algorithm
  if(m.x-f.x  < m.width/2+f.width/2
    &&f.x-m.x < m.width/2+f.width/2
    &&m.y-f.y < m.height/2+f.height/2
    &&f.y-m.y < m.height/2+f.height/2){
m.shapeColor= "purple"
f.shapeColor= "purple"  
}
  else{
    m.shapeColor= "crimson"
    f.shapeColor= "white"
  }

//bounce Off
if(m1.y-f1.y  < m1.height/2+f1.height/2
  &&f1.y-m1.y < m1.height/2+f1.height/2){
m1.velocityY= m1.velocityY*-3; 
f1.velocityY= f1.velocityY*-1;
m1.shapeColor= "yellow"
f1.shapeColor= "yellow" 
}

  drawSprites();
}