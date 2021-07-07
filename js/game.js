class Game{
    constructor(){

    }
    serve(){
        startScreen  = new Interface(displayWidth/2,displayHeight/2,500,500);
        startScreen.display();
       

    }
    showMapandStory(){
        background(200);
        
        
            map  = createSprite(displayWidth/2,displayHeight/2,500,500);
            map.addImage(MapImage)

        

         
            StageScreen = createSprite(displayWidth/2,displayHeight/2,displayWidth*1.5,displayHeight*1.2);
            StageScreen.visible = false;  
          
            CancelButton = createButton("");
            CancelButton.style("background-image","url(Sprites/Images/Buttons/CancelButton.png)");
            CancelButton.style("background-size","120%");
            CancelButton.style("background-repeat","no-repeat");
            CancelButton.style("background-position","center");
            CancelButton.style("border-radius","50px")
            CancelButton.style("border-color","red");
            CancelButton.size(30,30)
           // CancelButton.style('background','#D73743');
            CancelButton.hide();
            CancelButton.position(940,90);
            Enemy_img = createSprite(displayWidth/2+300,displayHeight/2,20,20);

            Enemy_img.visible = false
            Enemy_img.addAnimation("IMAGE",Tank_Img);
            Enemy_img.scale = 2.3


            stages = [stage1Button_Icon,stage2Button_Icon,stage3Button_Icon,stage4Button_Icon,stage5Button_Icon]
           
        /*  stage1Button_Icon  = createSprite(550,550,20,20);
          stage1Button_Icon.addImage(UnlockedButton_Img)
          stage1Button_Icon.scale = 0.3*/
          StageButton1 = createButton('');
          StageButton1.size(40,40);
         // StageButton1.style("background","pink")
          StageButton1.style("background-image","url(Sprites/Images/Buttons/UnlockedButton.png)");
          StageButton1.style("background-size","120%");
          StageButton1.style("background-repeat","no-repeat");
          StageButton1.style("background-position","center");
          StageButton1.style("border-radius","50px")
          StageButton1.style("border-color","red");
          StageButton1.position(538,537);
         // StageButton1.size(50,60)
         
        //  <html><button type="button" class="btn btn-danger">Danger</button></html>

          StageButton1.mouseClicked(()=>
          {// StageButton1.html('Stage 1') 
             StageButton1.style("background","pink")
            StageButton1.size(80,50)
            StageButton1.style("background-image","url(Sprites/Images/Buttons/Stage1.png)");
            StageButton1.style("background-size","200%");
            StageButton1.style("border-radius","50px")
            StageButton1.style("border-color","yellow");
            StageButton1.style("background-repeat","no-repeat");
            StageButton1.style("background-position","center");
            StageButton2.hide();
            StageButton3.hide();
            StageButton4.hide();
            StageButton5.hide();
              StageScreen.visible = true
              StageScreen.visibility = 100
           
              StageButton1.position(displayWidth/2,displayHeight-200);
           
            
              StageScreen.addImage(StageScreen_Img);
              robo = createSprite(displayWidth/2-300,displayHeight/2)
              robo.addImage(RoboImg);
              robo.scale = 0.9
              Enemy_img.visible = true;
            //  Stage1Screen.visible = false
              CancelButton.show();

              
              
              CancelButton.mousePressed(()=>{
                StageButton1.style("background-image","url(Sprites/Images/Buttons/UnlockedButton.png)");
                StageButton1.style("background-size","120%");
                StageButton1.style("background-repeat","no-repeat");
                StageButton1.style("background-position","center");
                StageButton1.style("border-radius","50px")
                StageButton1.style("border-color","white");
                StageButton1.size(40,40);
                StageButton1.position(538,537);
                  StageScreen.visible = false
                  StageButton1.position(538,537);
                  StageButton2.show();
                  StageButton3.show();
                  StageButton4.show();
                  StageButton5.show();     
                  robo.visible              = false
                  Enemy_img.visible         = false;
                  CancelButton.hide();
                  //this.showMapandStory();
              })
              StageButton1.mousePressed(()=>{

                map.visible = false;
                StageButton1.hide();
                StageButton2.hide();
                StageButton3.hide();
                StageButton4.hide();
                StageButton5.hide();
                StageScreen.visible = false;
                robo.visible              = false
                Enemy_img.visible         = false;
                gameState = PLAY
                this.stage1();
                CancelButton.hide();
              })
          })
         
         
           
         StageButton2 = createButton('')
         StageButton2.style("background-image","url(Sprites/Images/Buttons/LockedButton.png)");
         StageButton2.style("background-size","120%");
         StageButton2.style("border-radius","80px")
         StageButton2.style("border-color","white");
         StageButton2.style("background-repeat","no-repeat");
         StageButton2.style("background-position","center");
         StageButton2.position(238,387);
         StageButton2.size(40,40)

        
          StageButton3 = createButton('')
          StageButton3.style("background-image","url(Sprites/Images/Buttons/LockedButton.png)");
          StageButton3.style("background-size","120%");
          StageButton3.style("border-radius","80px")
          StageButton3.style("border-color","white");
          StageButton3.style("background-repeat","no-repeat");
          StageButton3.style("background-position","center");
          StageButton3.position(418,287);
          StageButton3.size(40,40)

     
          
          StageButton4 = createButton('')
          StageButton4.style("background-image","url(Sprites/Images/Buttons/LockedButton.png)");
          StageButton4.style("background-size","120%");
          StageButton4.style("border-radius","80px")
          StageButton4.style("border-color","white");
          StageButton4.style("background-repeat","no-repeat");
          StageButton4.style("background-position","center");
          StageButton4.position(608,237);
          StageButton4.size(40,40)


     
       
          StageButton5  =createButton('')
          StageButton5.style("background-image","url(Sprites/Images/Buttons/LockedButton.png)");
          StageButton5.style("background-size","120%");
          StageButton5.style("border-radius","80px")
          StageButton5.style("border-color","white");
          StageButton5.style("background-repeat","no-repeat");
          StageButton5.style("background-position","center");
          StageButton5.position(788,337);
          StageButton5.size(40,40)


           

           
        drawSprites();
    }
    stage1(){
     
     Stage1Screen = createSprite(width/2,height/2,2000,2000);
     Stage1Screen.addImage(Stage1_Img)
     Stage1Screen.scale = 0.7
    
      attackButton1 = createButton("");
      attackButton1.position(width/2,height/2);
     // attackButton1.style("background-image","url(https://www.fixpicture.org/medias/1625104432_tmp_RollSword_4_.png)");
      attackButton1.style("background-size","120%");
      attackButton1.style("border-radius","80px")
      attackButton1.style("border-color","red");
      attackButton1.style("background-repeat","no-repeat");
      attackButton1.style("background-position","right");
      attackButton1.hide();
      attackButton1.size(50,50)
    
         BlueFire = new Player(250,displayHeight-370);
         tanks    = new Tank(displayWidth/2+300,displayHeight-370);
         

        attackButton2 = createButton("");
        attackButton2.position(width/2-200,height/2);
       // attackButton2.style("background-image","url(https://www.fixpicture.org/medias/1625104432_tmp_RollSword_4_.png)");
        attackButton2.style("background-size","120%");
        attackButton2.style("border-radius","80px")
        attackButton2.style("border-color","red");
        attackButton2.style("background-repeat","no-repeat");
        attackButton2.style("background-position","right");
        attackButton2.size(50,50)
        attackButton2.hide();
     
      
   
      
        attackButton1.mouseClicked(()=>{
        BlueFire.GroundFireSword();
        Throw = createSprite(BlueFire.x+80,BlueFire.y-20,20,20);
        Throw.addImage(FireClawThrow_Img);
        Throw.velocityX = 12

        var rand = Math.round(random(1,2));
        switch(rand) {
          case 1 :tanks.Fire();
          Bullet = createSprite(tanks.x-50,tanks.y-20,10,10);
          Bullet.addImage(Bullet_Img);
          Bullet.velocityX = -12
          Bullet.scale = 0.3
                    break;
          case 2 :tanks.Fire();
          Bullet = createSprite(tank.x-50,tank.y-20,10,10);
          Bullet.addImage(Bullet_Img);
          Bullet.velocityX = -12
          Bullet.scale = 0.3
                  break;
        }

          attackButton2.show();
       
       playerState = "Played@S1";
     
      
    })
    attackButton2.mouseClicked(()=>{
        var rand = Math.round(random(1,2));
        switch(rand) {
          case 1 :tanks.Fire();
          Bullet = createSprite(tanks.x-50,tanks.y-20,10,10);
          Bullet.addImage(Bullet_Img);
          Bullet.velocityX = -12
          Bullet.scale = 0.3
                    break;
          case 2 :tanks.Fire();
          Bullet = createSprite(tank.x-50,tank.y-20,10,10);
          Bullet.addImage(Bullet_Img);
          Bullet.velocityX = -12
          Bullet.scale = 0.3
                  break;
        }
        attackButton1.hide();
        BlueFire.GroundBlade();
        playerState = "Played2@S1"
    })
  }
  winS1(){
      
      WinScreen = createSprite(displayWidth/2,displayHeight/2,displayWidth*1.5,displayHeight*1.2);
      WinScreen.shapeColor = color(0,0,0)
      WinGreetings = createSprite(displayWidth/2,150,20,20);
      WinGreetings.addImage(WinGreetings_Img)
      WinGreetings.scale = 2
      var WinButton = createButton("");
      WinButton.position(width/2,height/2);
      attackButton2.hide();
      attackButton1.hide();
      WinButton.mousePressed(()=>{
      WinButton.hide();
        
      this.showMapandStory();
      StageButton1.style("background-image","url(Sprites/Images/Buttons/PassedButton.png)");
      StageButton1.style("background-size","120%");
      StageButton1.style("border-radius","80px")
      StageButton1.style("border-color","green");
      StageButton2.style("background-image","url(Sprites/Images/Buttons/UnlockedButton.png)");
      StageButton2.style("background-size","120%");
      StageButton2.style("border-radius","80px")
      StageButton2.style("border-color","white");
       
  
        StageButton2.mouseClicked(()=>{
          StageButton1.hide();
          StageButton2.style("background","pink")
          StageButton2.size(80,50)
          StageButton2.style("background-image","url(Sprites/Images/Buttons/Stage2Button.png)");
          StageButton2.style("background-size","200%");
          StageButton2.style("border-radius","50px");
          StageButton2.style("border-color","yellow");
          StageButton2.style("background-repeat","no-repeat");
          StageButton2.style("background-position","center");
          StageButton3.hide();
          StageButton4.hide();
          StageButton5.hide();
          StageScreen.visible = true
          StageScreen.visibility = 100
          StageButton2.position(displayWidth/2,displayHeight-200);
          StageScreen.addImage(StageScreen_Img);
          
          robo = createSprite(displayWidth/2-300,displayHeight/2)
          robo.addImage(RoboImg);
          robo.scale = 0.9

          Enemy_img.visible = true;
          Enemy_img.addAnimation("Idle",ZombieM_Img)
          Enemy_img.changeAnimation("Idle",ZombieM_Img);
          Enemy_img.scale = 0.4
        //  Stage1Screen.visible = false
          CancelButton.show();
          CancelButton.mousePressed(()=>{
              StageScreen.visible = false
              StageButton2.position(238,387);
              robo.visible              = false
              Enemy_img.visible         = false;
              CancelButton.hide();
              StageButton1.show();
              StageButton2.show();
              StageButton3.show();
              StageButton4.show();
              StageButton5.show();
          })
          StageButton2.mouseClicked(()=>{
  
            map.visible = false
           
            StageButton2.hide();
            StageScreen.visible = false
        
            robo.visible              = false
            Enemy_img.visible         = false;
            gameState = PLAY
            this.stage2();
            CancelButton.hide();
          })
      
  
        })
      })

      gameState = "winS1"
     /*
*/
  }
  stage2(){

   gameState = "stage2"
   Stage2Screen = createSprite(width/2,height/2,2000,2000)
   Stage2Screen.addImage(Stage2_Img)
   Stage2Screen.scale = 1.35
  
       attackButton1 = createButton("1");
       attackButton1.position(width/2,height/2);
     //  attackButton1.style("background-image","url(https://www.fixpicture.org/medias/1625104432_tmp_RollSword_4_.png)");
       attackButton1.style("background-size","120%");
       attackButton1.style("border-radius","80px")
       attackButton1.style("border-color","red");
       attackButton1.style("background-repeat","no-repeat");
       attackButton1.style("background-position","right");
       attackButton1.size(50,50)
       attackButton1.hide();
      
       BlueFire = new Player(250,displayHeight-370);
     
       ZombieM = new Zombie(displayWidth/2+300,displayHeight-370);
      
      attackButton2 = createButton("2");
      attackButton2.position(width/2-200,height/2);
      //attackButton2.style("background-image","url(https://www.fixpicture.org/medias/1625104432_tmp_RollSword_4_.png)");
      attackButton2.style("background-size","120%");
      attackButton2.style("border-radius","80px")
      attackButton2.style("border-color","red");
      attackButton2.style("background-repeat","no-repeat");
      attackButton2.style("background-position","right");
      attackButton2.size(50,50)
      attackButton2.hide();
   
    
 
    
      attackButton1.mouseClicked(()=>{
      BlueFire.GroundFireSword();
      Throw = createSprite(BlueFire.x+80,BlueFire.y-20,20,20);
      Throw.addImage(FireClawThrow_Img);
      Throw.velocityX = 12
     playerState = "Played@S2";
   
    
  })
  attackButton2.mousePressed(()=>{
    ZombieM.idle();
     BlueFire.Reposition()
    //attackButton1.hide();
      BlueFire.GroundBlade();
      playerState = "Played2@S2"
      ZombieM.attackW();
  })
}
winS2(){
  
    WinScreen = createSprite(displayWidth/2,displayHeight/2,displayWidth*1.5,displayHeight*1.2);
    WinScreen.shapeColor = color(0,0,0)
    WinGreetings = createSprite(displayWidth/2,150,20,20);
    WinGreetings.addImage(WinGreetings_Img)
    WinGreetings.scale = 2
    attackButton1.hide();
    attackButton2.hide();
    var WinButton = createButton("");
    WinButton.mouseClicked(()=>{
      WinButton.hide();
      this.showMapandStory()
      StageButton1.style("background-image","url(Sprites/Images/Buttons/PassedButton.png)");
      StageButton1.style("background-size","120%");
      StageButton1.style("border-radius","80px")
      StageButton1.style("border-color","green");
      StageButton2.style("background-image","url(Sprites/Images/Buttons/PassedButton.png)");
      StageButton2.style("background-size","120%");
      StageButton2.style("border-radius","80px");
      StageButton2.style("border-color","white");
      StageButton3.style("background-image","url(Sprites/Images/Buttons/UnlockedButton.png)");
      StageButton3.style("background-size","120%");
      StageButton3.style("border-radius","80px");
      StageButton3.style("border-color","white");
  
       
  
        StageButton3.mouseClicked(()=>{
          StageButton1.hide();
          StageButton2.hide();
          StageButton3.style("background","pink")
          StageButton3.size(80,50)
          StageButton3.style("background-image","url(Sprites/Images/Buttons/Stage3_Button (1).png)");
          StageButton3.style("background-size","200%");
          StageButton3.style("border-radius","50px");
          StageButton3.style("border-color","yellow");
          StageButton3.style("background-repeat","no-repeat");
          StageButton3.style("background-position","center");
          StageButton4.hide();
          StageButton5.hide();
          StageScreen.visible = true
          StageScreen.visibility = 100
          StageButton3.position(displayWidth/2,displayHeight-200);
          StageScreen.addImage(StageScreen_Img);
          
          robo = createSprite(displayWidth/2-300,displayHeight/2)
          robo.addImage(RoboImg);
          robo.scale = 0.9
  
          Enemy_img.visible = true;
          Enemy_img.addAnimation("Idle",ZombieM_Img)
          Enemy_img.changeAnimation("Idle",ZombieM_Img);
          Enemy_img.scale = 0.4
        //  Stage1Screen.visible = false
          CancelButton.show();
          CancelButton.mousePressed(()=>{
              StageScreen.visible = false
              StageButton3.position(238,387);
              robo.visible              = false
              Enemy_img.visible         = false;
              CancelButton.hide();
              StageButton1.show();
              StageButton2.show();
              StageButton3.show();
              StageButton4.show();
              StageButton5.show();
          })
          StageButton3.mouseClicked(()=>{
  
            map.visible = false
           
            StageButton2.hide();
            StageScreen.visible = false
        
            robo.visible              = false;
            Enemy_img.visible         = false;
            gameState = PLAY
            this.stage2();
            CancelButton.hide();
          })
      
  
        })
  
    })
    WinButton.position(width/2,height/2);
   

    gameState = "winS2"
   /*
*/

}
stage3(){
  gameState = "Stage3"
  Stage3Screen = createSprite()
}
}

