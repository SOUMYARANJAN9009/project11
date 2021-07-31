var ship,ship_running,sea,sea_moving;

function preload(){
  ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_moving=loadImage("sea.png");
}

function setup(){
  createCanvas(600,300);

  //creating sea
  sea=createSprite(40,100,200,800);
  sea.addAnimation("moving",sea_moving);
  sea.scale=0.3;
  sea.velocityX=-1;
  sea.x=sea.width/8;
  //X position of sea
  sea.x=40;

  //creating ship
  ship=createSprite(130,150,70,90);
  ship.addAnimation("running",ship_running);
  ship.scale=0.3;
}

function draw(){
  background("skyblue");

  //moving the sea
  sea.velocityX=-1;
  console.log(sea.x);
  
  //to create infinitely moving sea
  if(sea.x<0){
    sea.x=sea.width/8;
  }



  drawSprites();
}