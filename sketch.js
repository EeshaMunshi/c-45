var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var b1, b2, b3, bGroup, b;
var t1,t2,tGroup,t;

function preload(){


balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
b1 = loadImage("assets/obsBottom1.png");
b2 = loadImage("assets/obsBottom2.png");
b3  = loadImage("assets/obsBottom3.png");
t1 = loadImage("assets/obsTop1.png");
t2 = loadImage("assets/obsTop2.png");
}

function setup(){
createCanvas(windowWidth-100, windowHeight-100);


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

bGroup = new Group();
tGroup = new Group();
}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
          spawnBottomObstacles();
          spawnTopObstacles();
        drawSprites();
        
        
}
function spawnBottomObstacles(){
  if(frameCount%150 === 0){
    b = createSprite(width, height-125)
    var x = Math.round(random(1,3))
    switch(x){
      case 1:b.addImage(b1)
      break
      case 2:b.addImage(b2)
      break
      case 3:b.addImage(b3)
      break
    }
    b.velocityX = -4
    b.scale = 0.15
    b.lifetime = 800
    bGroup.add(b)
  }
}
function spawnTopObstacles(){
  if(frameCount%100 === 0){
    t = createSprite(width, 125)
    var x = Math.round(random(1,2))
    switch(x){
      case 1:t.addImage(t1)
      t.scale = 0.2;
      break
      case 2:t.addImage(t2)
      t.scale = 0.15;
      break

    }
    t.velocityX = -4
   t.y = Math.round(random(125, 200))
    t.lifetime = 800
    tGroup.add(t)
  }
}