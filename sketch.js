var player;var playerAttack,playerAttack2,playerAttack3,playerAttack4,playerAttack5,playerAttack6,playerRun;

//const canvas = document.getElementById("canvas");
var canvas;
var frame;

var Enemy;var EnemyAttack1;

var aestriod,aestroidImage,aestriod2

var earth,Rearth;

var robo,RoboImg;

var StartButton
var SERVE1 = 1
var SERVE2 = 1.5
var PLAY  = 2
var END = 3
var gameState =SERVE1;
var Games;

var Exp = 0;
var BlueFire
var startScreen
var SpaceImg,bg;
var stage1Button_Icon

var map,MapImage;
var Stage1_Img
var stage2Button_Icon,stage3Button_Icon,stage4Button_Icon,stage5Button_Icon,stages;
var stage2_Img1,stage2_Img2,stage3_Img1,stage3_Img2,stage4_Img1,stage4_Img2,stage5_Img1,stage5_Img2;

var LockedButton_Img,PassedButton_Img,UnlockedButton_Img;
var StageScreen,StageScreen_Img;
var StageButton1,StageButton2,StageButton3,StageButton4,StageButton5;

var CancelButton_Icon,CancelButton_Img;
var CancelButton;

var Enemy_img,Tank_Img,NinjaRobo_Img,YellowRobo_Img,BloodMan_Img;

var playerState,Throw;

var Stage1Screen;var Ground
var FireClawThrow_Img;

var tank,FireInAir_Img1,Bullet_Img,Bullet_Img2,TankFire,destroy_Img,tanks;

var Bullet

var StageButton2

var Stage2Screen,Stage2_Img;

// thesewill be the health for tank and player 
let tankHealth = 100,playerHealth = 200;
let zombieMHealth = 125,zombieWHealth = 130
let playerHealth2 = playerHealth+25

var ZombieM_Img,ZombieM_Attack,ZombieM_Dead,ZombieM_Walk,ZombieW_Img,ZombieW_Attack,ZombieW_Dead,ZombieW_Walk;

var WinScreen,HomeButton;

var WinGreetings,WinGreetings_Img;
var healthBar;

var attackButton1,attackButton2,

playerInfected;

var ZombieM,zombieM,launchTime,zombieW;
var frame;

function preload(){

  MapImage = loadImage("Map_img.jpg");

  FireClawThrow_Img = loadImage("Sprites/Images/CharacterFiles/FireClaw/FireClaw(Throw).png")

   playerAttack = loadAnimation("Sprites/Images/CharacterFiles/FireClaw/FireClaw(1).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(2).png"
  ,"Sprites/Images/CharacterFiles/FireClaw/FireClaw(3).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(4).png"
  ,"Sprites/Images/CharacterFiles/FireClaw/FireClaw(5).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(6).png",
  "Sprites/Images/CharacterFiles/FireClaw/FireClaw(6).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png",
 "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png",
  "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png", "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png");

  playerAttack2 = loadAnimation("Sprites/Images/CharacterFiles/Fly/Fly(1).png","Sprites/Images/CharacterFiles/Fly/Fly(2).png",
  "Sprites/Images/CharacterFiles/Fly/Fly(3).png","Sprites/Images/CharacterFiles/Fly/Fly(4).png",
  "Sprites/Images/CharacterFiles/Fly/Fly(5).png","Sprites/Images/CharacterFiles/Fly/Fly(6).png", 
  "Sprites/Images/CharacterFiles/Fly/Fly(7).png");

  playerAttack3  =loadAnimation("Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(1).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(2).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(2).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(3).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(4).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(5).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(6).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(7).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(8).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(9).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(10).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(11).png");

  playerAttack4  = loadAnimation("Sprites/Images/CharacterFiles/RollSword/RollSword(1).png","Sprites/Images/CharacterFiles/RollSword/RollSword(1).png",
  "Sprites/Images/CharacterFiles/RollSword/RollSword(1).png","Sprites/Images/CharacterFiles/RollSword/RollSword(2).png",
  "Sprites/Images/CharacterFiles/RollSword/RollSword(3).png","Sprites/Images/CharacterFiles/RollSword/RollSword(4).png",
  "Sprites/Images/CharacterFiles/RollSword/RollSword(5).png","Sprites/Images/CharacterFiles/RollSword/RollSword(6).png");

  playerAttack5  = loadAnimation("Sprites/Images/CharacterFiles/Roll/Roll(1).png","Sprites/Images/CharacterFiles/Roll/Roll(2).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(3).png","Sprites/Images/CharacterFiles/Roll/Roll(4).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(5).png","Sprites/Images/CharacterFiles/Roll/Roll(6).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(7).png","Sprites/Images/CharacterFiles/Roll/Roll(8).png");

  playerAttack6 = loadAnimation( "Sprites/Images/CharacterFiles/Walk/Walk(3).png","Sprites/Images/CharacterFiles/Walk/Walk(4).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Attack 1/Fire(1).png","Sprites/Images/CharacterFiles/Attack 1/Fire(1).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(2).png","Sprites/Images/CharacterFiles/Attack 1/Fire(2).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(3).png","Sprites/Images/CharacterFiles/Attack 1/Fire(3).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(4).png","Sprites/Images/CharacterFiles/Attack 1/Fire(4).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(5).png", "Sprites/Images/CharacterFiles/Attack 1/Fire(5).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(6).png","Sprites/Images/CharacterFiles/Attack 1/Fire(6).png");

  playerRun = loadAnimation("Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(3).png","Sprites/Images/CharacterFiles/Walk/Walk(4).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png"
  );

  playerInfected = loadAnimation("Sprites/Images/CharacterFiles/Infected/Infected(1).png","Sprites/Images/CharacterFiles/Infected/Infected(1).png",
  "Sprites/Images/CharacterFiles/Infected/Infected(1).png","Sprites/Images/CharacterFiles/Infected/Infected(2).png",
  "Sprites/Images/CharacterFiles/Infected/Infected(2).png","Sprites/Images/CharacterFiles/Infected/Infected(2).png",
  "Sprites/Images/CharacterFiles/Infected/Infected(3).png","Sprites/Images/CharacterFiles/Infected/Infected(3).png"),

  EnemyAttack1 = loadAnimation("Sprites/Images/EnemySprites/BloodAxe/BloodAxe(1).png","Sprites/Images/EnemySprites/BloodAxe/BloodAxe(2).png",
                               "Sprites/Images/EnemySprites/BloodAxe/BloodAxe(3).png","Sprites/Images/EnemySprites/BloodAxe/BloodAxe(4).png",
                               "Sprites/Images/EnemySprites/BloodAxe/BloodAxe(5).png");

  EnemyAttack2 =  loadAnimation("Sprites/Images/EnemySprites/Scratch/RunningClaw(1).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(2).png",
  "Sprites/Images/EnemySprites/Scratch/RunningClaw(3).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(4).png",
  "Sprites/Images/EnemySprites/Scratch/RunningClaw(5).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(6).png")    
  
  EnemyAttack3   = loadAnimation("Sprites/Images/EnemySprites/SuperScratch/RunningClaw(1).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(2).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(3).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(4).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(5).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(6).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(7).png")

  DeathShot = loadAnimation("Sprites/Images/EnemySprites/RageShot/RageShot(1).png","Sprites/Images/EnemySprites/RageShot/RageShot(2).png",
  "Sprites/Images/EnemySprites/RageShot/RageShot(3).png")

  Death = loadAnimation("Sprites/Images/EnemySprites/Death/Death.png")
                               
  aestroidImage = loadImage("Asteriod.png")

  RoboImg = loadImage("R2.png");

  Rearth = loadAnimation("Sprites/Images/EarthFiles/E(1).png","Sprites/Images/EarthFiles/E(1).png",
  "Sprites/Images/EarthFiles/E(2).png","Sprites/Images/EarthFiles/E(2).png",
  "Sprites/Images/EarthFiles/E(3).png","Sprites/Images/EarthFiles/E(3).png",
  "Sprites/Images/EarthFiles/E(4).png"
  ,"Sprites/Images/EarthFiles/E(5).png","Sprites/Images/EarthFiles/E(6).png",
  "Sprites/Images/EarthFiles/E(7).png","Sprites/Images/EarthFiles/E(8).png",
  "Sprites/Images/EarthFiles/E(9).png","Sprites/Images/EarthFiles/E(10).png")

  SpaceImg = loadImage("Space.jpg");

  //stage1_Button_Icon = loadImage("Stage1.png")

  stage2_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage2_Button (1).png");
 // stage2_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage2_Button (2).png");
  stage3_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage3_Button (1).png");
  stage3_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage3_Button (2).png");
  stage4_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage4_Button (1).png");
  stage4_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage4_Button (2).png");
  stage5_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage5_Button (1).png");
  stage5_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage5_Button (2).png");

  LockedButton_Img    = loadImage("Sprites/Images/Buttons/LockedButton.png");
  PassedButton_Img    = loadImage("Sprites/Images/Buttons/PassedButton.png");
  UnlockedButton_Img  = loadImage("Sprites/Images/Buttons/UnlockedButton.png");
  CancelButton_Img    = loadImage("Sprites/Images/Buttons/CancelButton.png");

  StageScreen_Img = loadImage("StageScreen.jpg");

  Tank_Img = loadAnimation("Sprites/Images/TankSprites/Idle/Idle(2).png");

  Stage1_Img = loadImage("Stage1-Battleground.jpg")

  FireInAir_Img1= loadAnimation("Sprites/Images/TankSprites/FireInAir/FireInAir(1).png","Sprites/Images/TankSprites/FireInAir/FireInAir(2).png",
                                "Sprites/Images/TankSprites/FireInAir/FireInAir(3).png","Sprites/Images/TankSprites/FireInAir/FireInAir(4).png");
  Bullet_Img = loadImage("Sprites/Images/TankSprites/Fire/Bullet_Img.png")
  Bullet_Img2 = loadImage("Sprites/Images/TankSprites/FireInAir/bullet.png");
  TankFire  = loadAnimation("Sprites/Images/TankSprites/Fire/Fire(1).png","Sprites/Images/TankSprites/Fire/Fire(2).png"
  ,"Sprites/Images/TankSprites/Fire/Fire(2).png","Sprites/Images/TankSprites/Fire/Fire(2).png"
  ,"Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(3).png",
  "Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(4).png");
  destroy_Img = loadAnimation("Sprites/Images/TankSprites/Destroyed/Damaged(1).png","Sprites/Images/TankSprites/Destroyed/Damaged(2).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(3).png","Sprites/Images/TankSprites/Destroyed/Damaged(4).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(5).png","Sprites/Images/TankSprites/Destroyed/Damaged(6).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(7).png","Sprites/Images/TankSprites/Destroyed/Damaged(8).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(9).png","Sprites/Images/TankSprites/Destroyed/Damaged(10).png",)

  Idle = loadAnimation("Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(1).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(2).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png");

  ZombieM_Img = loadAnimation("Sprites/Images/zombiefiles/png/male/Idle/Idle (1).png","Sprites/Images/zombiefiles/png/male/Idle/Idle (2).png",
  "Sprites/Images/zombiefiles/png/male/Idle/Idle (3).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (4).png",
  "Sprites/Images/zombiefiles/png/male/Idle/Idle (5).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (6).png"
  , "Sprites/Images/zombiefiles/png/male/Idle/Idle (7).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (8).png"
  , "Sprites/Images/zombiefiles/png/male/Idle/Idle (9).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (10).png");

  ZombieM_Attack = loadAnimation("Sprites/Images/zombiefiles/png/male/walk/Walk (1).png","Sprites/Images/zombiefiles/png/male/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (3).png","Sprites/Images/zombiefiles/png/male/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (5).png","Sprites/Images/zombiefiles/png/male/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (7).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (1).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (2).png",
  "Sprites/Images/zombiefiles/png/male/Attack/Attack (3).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (4).png",
  "Sprites/Images/zombiefiles/png/male/Attack/Attack (5).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (6).png",
  "Sprites/Images/zombiefiles/png/male/Attack/Attack (7).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (8).png")


  ZombieM_Dead = loadAnimation("Sprites/Images/zombiefiles/png/male/Dead/Dead (1).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (2).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (3).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (4).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (5).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (6).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (7).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (8).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (9).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (10).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (11).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (12).png",)
  WinGreetings_Img = loadImage("Sprites/Images/Screen_Imgs/WinScreen_Imgs/WinGreetings.png");

  ZombieM_Walk = loadAnimation("Sprites/Images/zombiefiles/png/male/walk/Walk (1).png","Sprites/Images/zombiefiles/png/male/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (3).png","Sprites/Images/zombiefiles/png/male/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (5).png","Sprites/Images/zombiefiles/png/male/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (7).png","Sprites/Images/zombiefiles/png/male/walk/Walk (8).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (9).png","Sprites/Images/zombiefiles/png/male/walk/Walk (10).png",)
  
  ZombieW_Img = loadAnimation("Sprites/Images/zombiefiles/png/female/Idle/Idle (1).png","Sprites/Images/zombiefiles/png/female/Idle/Idle (2).png",
    "Sprites/Images/zombiefiles/png/female/Idle/Idle (3).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (4).png",
    "Sprites/Images/zombiefiles/png/female/Idle/Idle (5).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (6).png"
  , "Sprites/Images/zombiefiles/png/female/Idle/Idle (7).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (8).png"
  , "Sprites/Images/zombiefiles/png/female/Idle/Idle (9).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (10).png");

  ZombieW_Attack = loadAnimation("Sprites/Images/zombiefiles/png/female/walk/Walk (1).png","Sprites/Images/zombiefiles/png/female/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (3).png","Sprites/Images/zombiefiles/png/female/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (5).png","Sprites/Images/zombiefiles/png/female/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (7).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (1).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (2).png",
  "Sprites/Images/zombiefiles/png/female/Attack/Attack (3).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (4).png",
  "Sprites/Images/zombiefiles/png/female/Attack/Attack (5).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (6).png",
  "Sprites/Images/zombiefiles/png/female/Attack/Attack (7).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (8).png")


  ZombieW_Dead = loadAnimation("Sprites/Images/zombiefiles/png/female/Dead/Dead (1).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (2).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (3).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (4).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (5).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (6).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (7).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (8).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (9).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (10).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (11).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (12).png",)
 

  ZombieW_Walk = loadAnimation("Sprites/Images/zombiefiles/png/female/walk/Walk (1).png","Sprites/Images/zombiefiles/png/female/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (3).png","Sprites/Images/zombiefiles/png/female/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (5).png","Sprites/Images/zombiefiles/png/female/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (7).png","Sprites/Images/zombiefiles/png/female/walk/Walk (8).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (9).png","Sprites/Images/zombiefiles/png/female/walk/Walk (10).png",)

  Stage2_Img = loadImage("Stage2-Battleground.jpg")
} 



function setup(){
  createCanvas(displayWidth,displayHeight);
   canvas=document.createElement("canvas");
   canvas.width = width;
   canvas.height = height;
   const context = canvas.getContext("2d");
   canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";
   let health = 100;

  const healthBarWidth = 200;
  const healthBarHeight = 30;
  const x = displayWidth / 2 - healthBarWidth / 2;
  const y = displayHeight / 2 - healthBarHeight / 2;
   const healthBar = new HealthBar(100, 140, healthBarWidth, healthBarHeight, health, "green");
   frame = function() {
   // context.clearRect(0, 0, width, height);
    //healthBar.show(context);
    drawingContext.clearRect(100,100,width,height)
    healthBar.show(drawingContext)
    requestAnimationFrame(frame);
  }
  

 
 Games = new Game();

  

 
 if(gameState ==="Interface"){
   //Interfaced.display();
   //player.display();
   Games.serve();
 }
 if(gameState === "ShowMap"){
   Games.showMapandStory();
   
 }
 if(gameState === PLAY){
   
  

 
 }
 if(gameState === "Stage1"){
  
   Games.winS1();
  
  

 }
 
  
 

 if(gameState === SERVE1){
  Games.serve()
// Games.stage2(); 
 gameState = "1"

}
//frame() 
}

function draw(){

 
 
  if(gameState === SERVE2){
    Games.showMapandStory();
    gameState = "2"
    return false;  }

    if(gameState === PLAY){
      Games.stage1();
     // frame();
      gameState = "3"
     }

     if(gameState === "3"||gameState === "stage2"){
      attackButton1.show();
      attackButton2.show();
    }

   if(tankHealth<=0){
     gameState = END
     Games.winS1();
     tankHealth = 10
   }

  // for attack 1
  if(playerState === "Played@S1"){
    BlueFire.x +=0.1;
    attackButton1.hide();
    attackButton2.hide();
 
  
    if(Throw.x>=tanks.x){  
      playerState = "Idle@S1"
      //update health function should come here
      // also check lineno 52 for get idea of tank and player health
      tankHealth -=20
     // healthBar.updateHealth(tankHealth);

     tankHealth -=20
    }
   
  if(Bullet.x<=BlueFire.x){
    playerHealth -=10
  }}
  //console.log(tankHealth,playerHealth)}
// for attack 1
  if(playerState === "Idle@S1"){
    BlueFire.IdlePlayer();
    Throw.x = 330
    Throw.velocityX = 0;
    Throw.visible = false;
    Bullet.visible = false;
    Bullet.x= tanks.x;
    Bullet.velocityX = 0;
    tanks.IdleTank();
    BlueFire.x=250;
  
    
  }
  

 // for attack 2
  if(playerState === "Played2@S1"){
    attackButton1.hide();
    attackButton2.hide();
    BlueFire.x += 6
    BlueFire.Play();


 
    if(BlueFire.x >= tanks.x){
      playerState = "Idle2@S1"
      tankHealth -=20
          
    }

   }
   // for attack 2 
    if(playerState === "Idle2@S1"){
     
      BlueFire.x = 255
      BlueFire.IdlePlayer();
      BlueFire.Stop();
      BlueFire.Reposition();
      Bullet.visible = false;
      Bullet.x= tanks.x;
      Bullet.velocityX = 0;
      tanks.IdleTank();
}
  if(playerState === "Played@S2"){
    BlueFire.x +=0.1;
    attackButton1.hide();
    attackButton2.hide();
    ZombieM.attack();
    ZombieM.run();
   
 
    if(Throw.x>=zombieM.x&&zombieM.x>=displayWidth/2+300){
     playerState = "Idle@S2"
     zombieMHealth -= 10
    }
    if(Throw.x>=zombieM.x){
      Throw.visible = false
      zombieMHealth -=15
      Throw.x = 130
      Throw.velocityX = 0
    }
    if(zombieM.x<=BlueFire.x){
        BlueFire.Infect()
       playerHealth-=2
       console.log(playerHealth,zombieMHealth)
     
    }
 if(/*Throw.x===ZombieM.x||*/Throw.x===zombieM.x){
      zombieMHealth -=30
  }
  }
  if(playerState === "Idle@S2"){
    ZombieM.resetPosition();
   // BlueFire.IdlePlayer();
    BlueFire.IdlePlayer();
   BlueFire.x = 225
    Throw.x = 230
    Throw.velocityX = 0;
    Throw.visible = false;

  }
  if(playerState==="Infected"){
    attackButton1.hide();
    attackButton2.hide();
    ZombieM.resetPosition();
    ZombieM.idle();
   playerHealth2-=0.2
    launchTime.velocityX = 5
    launchTime.visible = false
    if(launchTime.x>=displayWidth/2+300){
      launchTime.velocityX = 0
      playerState = "Idle@S2"
    }
  }
  if(playerState === "Played2@S2"){
  
    BlueFire.Play();
    attackButton1.hide();
    attackButton2.hide();
    BlueFire.x+=6

    //console.log(zombieM.x,BlueFire.x)

 if(BlueFire.x>=zombieM.x){
  
   playerState = "Idle2@S2"
   playerHealth2 -= 10
   zombieMHealth -= 18
  
 }
 
  }
  if(playerState === "Idle2@S2"){
    ZombieM.resetPosition();
    ZombieM.idle();
    BlueFire.IdlePlayer();
    BlueFire.Reposition();
    BlueFire.Stop();
    BlueFire.x= 225
    console.log(BlueFire.x,zombieM.x,zombieW.x)
  }
 // console.log(playerHealth2,zombieMHealth)
if(zombieMHealth<=0){
  Games.winS2();
  zombieMHealth = 1

}
 
  drawSprites();
}
