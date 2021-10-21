var bg;
var score = 0; 
var laser ;
var asteroid;
var AlienSpaceship;
var playerSpaceship;



function preload(){
  bg = loadImage("backGround.png")
  earthsSpaceship = loadImage("earths-spaceship-better.png");
  asteroidImg = loadImage ("asteroid.png")
AlienSpaceshipImg = loadImage("Alien-spaceship.png");
  
}

function setup() {
 // background("red")
  createCanvas(1000,500);
  playerSpaceship = createSprite(70, 200, 50, 50);
  playerSpaceship.addImage(earthsSpaceship)
  playerSpaceship.scale = 0.5;

}





function draw() {
  background(bg);
    

if(keyDown("DOWN_ARROW")){
  playerSpaceship.y = playerSpaceship.y+2
}

if(keyDown("UP_ARROW")){
  playerSpaceship.y = playerSpaceship.y-2
}

 spawnAstroids()

drawSprites();
}

function spawnAstroids(){
if(frameCount % 60 === 0){
  asteroid = createSprite(1000,random(10,480));
  asteroid.addImage(asteroidImg)
  asteroid.scale = 0.3

}
}