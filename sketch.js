var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}



function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
  }
  spandoor();
  drawSprites();
}


function spandoor(){
  if(frameCount % 240 === 0){
    door = createSprite(200,-50);
    climber = createSprite(200,10);
    climber.velocityY = 1;
    climber.addImage(climberImg);
    door.x = Math.round(random(120,400));
    door.velocityY = 1;
    door.addImage(doorImg); 
    climber.x = door.x;
    door.lifetime = 800;
    climber.lifetime = 800;
    doorsGroup.add(door);
    climbersGroup.add(climber);
  } 
}


function ghostthing(){
  var i = 300;
  var z = 550;
  ghost = createSprite(i,z,10,25);
  ghost.addImage(ghostImg);
}