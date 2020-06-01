class Game{

    private player : Player
    private platform : Platform[] = []

    private xPos : number

    constructor(){

        //Platforms
        for (let i = 0; i < 5; i++) {
            this.platform.push(new Platform())
        }

        //Player
        this.player = new Player()

        this.gameloop()
        this.loop()
    }
    
    private gameloop(){
        for (const platform of this.platform) {
            platform.update()

            if (this.checkCollision(platform.getRectangle(), this.player.getRectangle())) {
                this.player.update2()
            }
        }

        this.player.update()

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
