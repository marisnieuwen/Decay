/// <reference path="platform.ts"/>

class Game{

    //Fields
    private platform:Platform;
    private player:Player;
    private worm:Worm[] = []
    private spit:Spit[] = [] //werk nog niet?

    constructor() {
        this.player = new Player();
        this.platform = new Platform();

        this.gameLoop();
    }
    
    private gameLoop(){

        this.player.gravity(); 
        this.player.move();
 
        //check for collision met platform
        let Platformhit = this.checkCollision(
            this.player.getPlayerRectangle(),
         this.platform.getPlatformRectangle()
         );
         if(Platformhit == true){
            this.player.setSpeed(0);
        }

        console.log("Player raakt Platform ? " + Platformhit) //console log voor controle collision platform

        let PlatformRect = this.platform.getPlatformRectangle()
        let PlayerRect = this.player.getFutureRectangle()
 
        if(this.checkCollision(PlatformRect, PlayerRect)){ //zou player moeten stoppen door platform te bewegen (WERKT NIET?)
           console.log("deze beweging mag niet, want de player zou dan in het platform bewegen")
           this.player.stopMove();
        } else {
           this.player.updateSpeed();  
        }

        //collision between player and worm (WERKT NIET?)
        for (const worm of this.worm){
            if(this.checkCollision(worm.getWormRectangle(), this.player.getPlayerRectangle())){
                worm.die()
                console.log("worm")
            }
        }

        //collision between player and spit (WERKT NIET?)
        for (const spit of this.spit){
            spit.move()
            if(this.checkCollision(spit.getSpitRectangle(), this.player.getPlayerRectangle())){
                this.player.die()
            }
        }

        requestAnimationFrame(() => this.gameLoop())
    }

    private checkCollision(a: ClientRect, b: ClientRect) { //check collision
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

     
}

window.addEventListener("load", () => new Game())