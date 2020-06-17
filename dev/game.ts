
/// <reference path="platform.ts"/>

class Game {

    //Fields
    private platform: Platform;
    private player: Player;
    //private worms: Worm[] = []
    private spit: Spit[] = [] //werk nog niet?
    private ground: number = 500

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
            }
        }

        //collision between player and spit (WERKT NIET?)
        for (const spit of this.spit) {
            spit.move()
            if (this.checkCollision(spit.getSpitRectangle(), this.player.getPlayerRectangle())) {
                this.player.die()
            }
        }

        // COLLIDE GROUND / PLATFORM
        if (this.checkBottomCollision(PlatformRect, futurePlayerRect) || futurePlayerRect.bottom > this.ground) { //zou player moeten stoppen door platform te bewegen (WERKT NIET?)
            this.player.collideGround()
        }
        this.player.move()

        requestAnimationFrame(() => this.gameLoop())
    }

    // check player platform bottom collision only
    // probleem : je moet nog wel checken of je het platform links of rechts raakt!!
    private checkBottomCollision(platform: ClientRect, player: ClientRect) { //check collision
        return (platform.top <= player.bottom && player.top <= platform.bottom)
    }
    // check worm en spit collision
    private checkCollision(a: ClientRect, b: ClientRect) { //check collision
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }


}

window.addEventListener("load", () => new Game())