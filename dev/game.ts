class Game{

    private player : Player
    private platform : Platform[] = []
    private worm : Worm[] = []

    constructor(){

        //create platforms
        for (let i = 0; i < 7; i++) {
            this.platform.push(new Platform())
        }

        //create player
        this.player = new Player()

        //create worm
        for (let i = 0; i < 1; i++){
            this.worm.push(new Worm(i * 45, -47))
        }

        this.gameloop()

        requestAnimationFrame(()=>this.gameloop())
    }
    
    private gameloop(){

        //what to do when there is collision between platforms and player
        for (const platform of this.platform) {
            platform.placement()
            if (this.checkCollision(platform.getRectangle(), this.player.getRectangle())){
                this.player.stopMove()
            }
        }

        for (const worm of this.worm){
            if(this.checkCollision(worm.getRectangle(), this.player.getRectangle())){
                console.log("yoink")
                worm.die()
            }
        }

        //let the player move within the game
        this.player.move()
        
        requestAnimationFrame(()=>this.gameloop())
    }

    //check collision
    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
     
}

window.addEventListener("load", () => new Game())
