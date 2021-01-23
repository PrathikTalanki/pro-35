var balloon, balloonImg;
var backgroundImg;
function preload(){
  backgroundImg = loadImage("Hot Air Ballon-01.png")
  balloonImg = loadImage("Hot Air Ballon-02.png")
   

}
function setup() {
  createCanvas(1000,500);
  balloon = createSprite(400, 200, 10, 10);
  balloon.addImage( balloonImg)
  balloon.scale = 0.4
  var balloonPositionRef= database.ref('balloon/position');
balloonPositionRef.on("value",readPosition);
}

function draw(){
  background(backgroundImg);  
  drawSprites();
  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
}
}
function writePosition(x,y){
  database.ref('balloon/position').set({
    'x':position.x+x,
    'y':position.y+y
  })

}
function readPosition(data){
position= data.val();
balloon.x=position.x;
balloon.y=position.y;
}