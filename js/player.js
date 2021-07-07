class Player{
    constructor(x,y){
      this.x = x
      this.y = y 
       Ground = createSprite(245,displayHeight-280,displayWidth*2,5)
       Ground.visible =false
        
        player = createSprite(250,displayHeight-370,50,50);
        player.collide(Ground);
        player.scale  = 2
       
        
      
      /**using */  player.addAnimation("Idle",Idle)
      /**using */  player.addAnimation("Running",playerRun);
     /*using */   player.addAnimation("Move1",playerAttack);//FireClaw
        player.addAnimation("Move2",playerAttack2);//over power
        player.addAnimation("Move3",playerAttack3);//FlyClaw
     /**using */   player.addAnimation("Move4",playerAttack4);//GroundBlade
    /*will be using in ninja */    player.addAnimation("Move5",playerAttack5);//fireRoll
     /**will be using in last level  */   player.addAnimation("Move6",playerAttack6);//FocusThrow
      /*using*/  player.addAnimation("infected",playerInfected);
      
   
       

  
    }
    Run(){
      player.velocityX= 5
      player.changeAnimation("Running",playerRun);
  }
  FireSword(){
   player.velocityX= 5
    player.changeAnimation("Move6",playerAttack6);
  }
    Stop(){
      player.velocityX = 0
    }
   
    
    GroundFireSword(){
      player.changeAnimation("Move1",playerAttack);

     

      } 
    
    FireRoll(){
      player.debug = true;
      player.changeAnimation("Move5",playerAttack5);
    }
    FlyClaw(){
      player.debug = true;
      player.changeAnimation("Move3",playerAttack3)
    }
    SkyAttack(){
      player.debug = true;
      player.changeAnimation("Move2",playerAttack2);
    }
    IdlePlayer(){
      player.debug = true;
      player.changeAnimation("Idle",Idle)
    }
    GroundBlade(){
      
      player.debug = true;
      //player.setCollider("circle",200,200)
      player.changeAnimation("Move4",playerAttack4);
    }
    Play(){
      player.debug = true;
      player.velocityX = 5
    }
    Reposition(){
      player.debug = true;
      player.x = 250;
      player.y =displayHeight-370
    }

   Infect(){
    player.debug = true;
     player.changeAnimation("infected",playerInfected);
     playerState = "Infected"
     launchTime = createSprite(250,displayHeight-370,10,10);
   }

}