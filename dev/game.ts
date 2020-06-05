class Game{

    private player : Player
    private platform : Platform[] = []

    constructor(){

        //create platforms
        for (let i = 0; i < 40; i++) {
            this.platform.push(new Platform())
        }

        //create player
        this.player = new Player()

        this.gameloop()

    }
    
    private gameloop(){

        //what to do when there is collision between platforms and player
        for (const platform of this.platform) {
            platform.placement()
            if (this.checkCollision(platform.getRectangle(), this.player.getRectangle())) {
                this.player.stopMove()
            }
        }

        this.player.move()

        requestAnimationFrame(()=>this.gameloop())
    }

    
    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
     
}

window.addEventListener("load", () => new Game())
