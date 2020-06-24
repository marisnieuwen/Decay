
/// <reference path="platform.ts"/>

class Game {

    //Fields
    private platform: Platform;
    private player: Player;
    //private worms: Worm[] = []
    private spit: Spit[] = [] //werk nog niet
    private ground: number = 700
    private score : number = 0 

    constructor() {
        this.player = new Player();
        this.platform = new Platform();

        this.gameLoop();
    }

    private gameLoop() {

        let PlatformRect = this.platform.getPlatformRectangle()
        let futurePlayerRect = this.player.getFutureRectangle()

        //collision between player and worms of platform one - elk platform heeft eigen wormen
        for (const worm of this.platform.worms) {
            console.log(worm)
            if (this.checkCollision(worm.getWormRectangle(), this.player.getPlayerRectangle())) {
                console.log("worm")
                worm.die()

                let score = document.getElementsByTagName("score")[0]
                 this.score++
                 score.innerHTML = "Score: "+this.score
            }
        }

        //collision between player and spit (WERKT NOG NIET)
        for (const spit of this.spit) {
            spit.move()
            if (this.checkCollision(spit.getSpitRectangle(), this.player.getPlayerRectangle())) {
                this.player.die()
            }
        }

        // COLLIDE GROUND / PLATFORM
        if (this.checkBottomCollision(PlatformRect, futurePlayerRect) || futurePlayerRect.bottom > this.ground) {
            this.player.collideGround()
        }
        this.player.move()

        requestAnimationFrame(() => this.gameLoop())
    }

    // check player platform collision
    private checkBottomCollision(platform: ClientRect, player: ClientRect) {
        return (platform.top <= player.bottom &&
                player.top <= platform.bottom &&
                platform.left <= player.right &&
                player.left <= platform.right)
    }

    // check worm en spit collision
    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }


}

window.addEventListener("load", () => new Game())