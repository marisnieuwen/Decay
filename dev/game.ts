class Game{

    // global variables
    private player : Player
    private platform : Platform[] = []

    constructor(){
        // create platform
        for (let i = 0; i < 1; i++) {
            this.platform.push(new Platform())
        }


        // create player
        this.player = new Player()

        this.gameloop()
    }
    
    private gameloop(){
            for (const platform of this.platform) {
                platform.update()

                //collision check and update
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