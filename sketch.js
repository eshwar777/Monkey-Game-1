  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score
  var survivalTime=0,score


  function preload(){


    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");

  }



  function setup() {

    createCanvas(400,400);
    monkey=createSprite(80,315,20,20);
    monkey.addAnimation("moving",monkey_running);
    monkey.scale=0.1;



    banana=createSprite(200,150,25,25);
    banana.addAnimation("banana",bananaImage);
    banana.scale=0.1
    banana.velocityX=-3


    ground=createSprite(400,350,90000,10);
    ground.velocityX=-4
    ground.x=ground.width/2;
    console.log(ground.x)
    ground.velocityX+-(4+3*score/100);


   obstacle=createSprite(390,330,30,30);
   obstacle.addImage("obstacle",obstacleImage);
   obstacle.scale=0.1            
   obstacle.velocityX=-3 
     }



  function draw() {

     background("lavender");

      stroke("white");
    textSize=20;
    fill("white");
    text("Score:"+score,500,50)   

    stroke("black");
    textSize=(20)
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate())
    text("SurvivalTime:"+ survivalTime,100,50)
    if(keyDown("space")){
      monkey.velocityY=-4

      if(frameCount% 60===0){
        
        obstacle=createSprite(390,330,30,30);
        obstacle.addImage("obstacle",obstacleImage);
        scale=0.1;
        
       banana=createSprite(200,150,25,25);
       banana.addImage("banana",bananaImage);
        scale=0.1 ;     
      }
  
    }            

   score=score+Math.round (getFrameRate()/60);

    score=survivalTime
    monkey.velocityY=monkey.velocityY+0.1


    monkey.collide(ground);

    drawSprites();


    }










