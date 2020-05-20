class Game {
    // Global variables
    private player : Player 
    private worm : Worm 
    // private background : Background
    // private platform : Platform
    // private score : Score

    constructor() {
        // Makes new objects
        this.player = new Player()
        this.worm = new Worm() 
        // this.background = new Background() 
        // this.platform = new Platform() 
        // this.score = new Score()

        // Update frames
        // this.gameLoop() 
    }

    // gameLoop(){
    //     // Updates the screen 
    //     this.player.update()
    //     this.worm.update()
    //     this.background.update()
    //     this.platform.update()
    //     this.score.update()

    //     // Resfreshes the screen
    //     requestAnimationFrame(() => this.gameLoop())
    // }

}

// Creates new Game

window.addEventListener("load", () => new Game())