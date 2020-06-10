class Game{

    private player : Player
    private platform : Platform[] = []
    private worm : Worm[] = []
    private spit : Spit[] = []

    constructor(){

        //create platforms
        for (let i = 0; i < 7; i++) {
            this.platform.push(new Platform())
        }

        //create player
        this.player = new Player()

        //create worm
        for (let i = 0; i < 1; i++){
            this.worm.push(new Worm(i, -48))
        }

        //create spit
        for (let i = 0; i < 5; i++){
            this.spit.push(new Spit(i, -48))
        }

        this.gameloop()
    }
    
    private gameloop(){

        //what happens when there is collision between platforms and player
        for (const platform of this.platform) {
            platform.placement()
            if (this.checkCollision(platform.getRectangle(), this.player.getRectangle())){
                this.player.stopMove()
            }
        }

        //what happens when there is collision between player and worm
        for (const worm of this.worm){
            if(this.checkCollision(worm.getRectangle(), this.player.getRectangle())){
                worm.die()
            }
        }

        //move spit and what happens when collision between player and spit
        for (const spit of this.spit){
            spit.move()
            if(this.checkCollision(spit.getRectangle(), this.player.getRectangle())){
                this.player.die()
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
