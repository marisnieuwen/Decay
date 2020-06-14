class Game{

    private platform : Platform;
    private worm : Worm[] = []
    private player : Player;
    private element : any;

    constructor() {
        this.platform = new Platform();
        this.player = new Player();

        this.gameLoop();

    }
    
    private gameLoop(){

        this.player.gravity(); 
        this.player.move()
 

        //check for collision
        let Platformhit = this.checkCollision(
            this.player.getPlayerRectangle(),
         this.platform.getPlatformRectangle()
         );
         if(Platformhit == true){
            this.player.setSpeed(0);
        }

        console.log("Player raakt Platform ? " + Platformhit)

        let PlatformRect = this.platform.getPlatformRectangle()
        let PlayerRect = this.player.getFutureRectangle()
 
        if(this.checkCollision(PlatformRect, PlayerRect)){
           console.log("deze beweging mag niet, want de player zou dan in het platform bewegen")
           this.player.stopMove();
        } else {
           this.player.update();  
        }


        requestAnimationFrame(() => this.gameLoop())
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

     
}

window.addEventListener("load", () => new Game())