var trex, trex_running, edges;
var groundImage;
var land;
function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  land=createSprite(200,180,400,10)
  land.velocityX=-4;
  land.addImage(groundImage);
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  console.log(land.x  )
  if(land.x<-750){
    land.x=400;
  }
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(land)
  drawSprites();
}