

var knight,knight_running,knight_die;
var enemies,enemyImage,enemyGroup;
var sword,swordImage,swordGroup;
var ground;
var score = 500;


function preload(){
  
  enemyImage = loadImage("enemy final.png ")
  
  knight_running = loadAnimation("idle final.png","jump1 final.png","jump2 final.png");
  
  swordImage = loadImage("Sword final.png")
  
  knight_die = loadImage("die final.png")
}


function setup() {
  createCanvas(800,600);

  knight = createSprite(50,574,10,10);
  knight.addAnimation("running",knight_running);
  knight.scale=1.5;
  ground = createSprite(350,585,1600,20);
  ground.shapeColor="red"
  
  enemyGroup = new Group();    
  
  swordGroup = new Group();    

}

function draw() {
  background(0);
  stroke("magenta");
    textSize(20);
    fill("gold")
    text("Score : " + score,460,50)
  
  
  ground.velocityX = -3 

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
   
  if(keyDown("space")&& knight.y >= 100) {
    knight.velocityY = -10;
     
  }
  
    if(swordGroup.isTouching(knight)){
    score  ++;
    
  }
    
  
  knight.velocityY = knight.velocityY + 1.2;  
  
  knight.collide(ground); 
  
  knight.debug = false

  spawnEnemies();  
  spawnSword();
    if(enemyGroup.isTouching(knight)){
      score=score-5
}
  
  
   
  drawSprites();
}

function spawnEnemies() {
  opponents = Math.round(random(100,200))
  if (frameCount % opponents === 0) {
    enemies = createSprite(600,525,10,10);
    
    enemies.velocityX = -score/50;
    enemies.shapeColor="red"
    enemies.addImage("enemy",enemyImage)
    enemies.scale=0.8
    
    enemies.lifetime = 200;
    
    enemyGroup.add(enemies)
    
     enemies.depth = knight.depth;
    
  
  
  
  }
}

function spawnSword() {
  
  if (frameCount % 180 === 0) {
    sword = createSprite(800,150,10,10);
    sword.y  = Math.round(random(100,400))
    sword.velocityX = -3;
   
    sword.addImage("sword",swordImage)
   sword.scale=0.1
    
    sword.lifetime = 400;
    
    swordGroup.add(sword)
    
     sword.depth = sword.depth;
    
  
  
  
  }
}

