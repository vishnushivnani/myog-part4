class Zombie{
    constructor(x,y){
        this.x = x;
        this.y = y
        zombieM = createSprite(this.x,this.y,20,20);
        zombieM.scale= 0.3
        zombieW = createSprite(this.x+50,this.y+150,20,20);
        zombieW.scale = 0.3

       zombieM.addAnimation("Idle",ZombieM_Img);
       zombieM.addAnimation("attack",ZombieM_Attack);
       zombieM.addAnimation("dead",ZombieM_Dead);
       zombieM.addAnimation("walk",ZombieM_Walk);

       zombieW.addAnimation("Idle",ZombieW_Img);
       zombieW.addAnimation("attack",ZombieW_Attack);
       zombieW.addAnimation("dead",ZombieW_Dead);
       zombieW.addAnimation("walk",ZombieW_Walk);

       

    }
    walk(){
        zombieM.changeAnimation("walk",ZombieM_Walk);
    }
    attack(){
        zombieM.changeAnimation("attack",ZombieM_Attack);
    }
    dead(){
        zombieM.changeAnimation("dead",ZombieM_Dead);
    }
    idle(){
        zombieM.changeAnimation("Idle",ZombieM_Img);
    }
    run(){
        zombieM.velocityX = -7
    }
    resetPosition(){
        zombieM.x = this.x
        zombieM.y = this.y
    }
    attackW(){
        zombieW.changeAnimation("attack",ZombieW_Attack);
       
        zombieW.velocityX = -1
        zombieW.velocityY = -1.5
        setInterval(this.StopZombie,5500)
        zombieM.velocityX = 0

    }
    StopZombie(){
        zombieW.velocityX = 0
        zombieW.velocityY = 0
        zombieW.x = displayWidth/2+300+50
        zombieW.y = displayHeight-370+150
       
        zombieW.changeAnimation("Idle",ZombieW_Img)
    }
  
}