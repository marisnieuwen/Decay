class Game {

    player : Player 
    worms : Worms 
    background : Background
    platform : Platform
    score : Score

    constructor() {
        this.player = Player()
        this.worms = Worms() 
        this.background = Background() 
        this.platform = Platform() 
        this.score = Score()

        this.gameLoop() 
    }

    gameLoop(){
        this.player.update()
        this.worms.update()
        this.background.update()
        this.platform.update()
        this.score.update()
        requestAnimationFrame(() => this.gameLoop())
    }
}