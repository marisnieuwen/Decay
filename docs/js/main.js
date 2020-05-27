class Game {
    constructor() {
        this.platform = [];
        for (let i = 0; i < 1; i++) {
            this.platform.push(new Platform());
        }
        this.player = new Player();
        this.gameloop();
    }
    gameloop() {
        for (const platform of this.platform) {
            platform.update();
            if (this.checkCollision(platform.getRectangle(), this.player.getRectangle())) {
                this.player.update2();
            }
        }
        this.player.update();
        requestAnimationFrame(() => this.gameloop());
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
window.addEventListener("load", () => new Game());
class Platform {
    constructor() {
        this.platform = document.createElement("platform");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.platform);
    }
    getRectangle() {
        return this.platform.getBoundingClientRect();
    }
    update() {
        this.platform.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.dy = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.rightSpeed = 0;
        this.leftSpeed = 0;
        this.jumpHeight = -10;
        this.jumping = false;
        this.gravity = 0.2;
        this.player = document.createElement("player");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.player);
        this.upkey = 38;
        this.downkey = 40;
        this.rightkey = 39;
        this.leftkey = 37;
        this.x = 370;
        this.y = 382;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    getRectangle() {
        return this.player.getBoundingClientRect();
    }
    onKeyDown(e) {
        switch (e.keyCode) {
            case this.upkey:
                if (!this.jumping) {
                    this.jumping = true;
                    console.log("jumped");
                    this.dy = this.jumpHeight;
                }
            case this.downkey:
                this.downSpeed = 3;
                break;
            case this.rightkey:
                this.rightSpeed = 3;
                break;
            case this.leftkey:
                this.leftSpeed = 3;
                break;
        }
    }
    onKeyUp(e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
            case this.rightkey:
                this.rightSpeed = 0;
                break;
            case this.leftkey:
                this.leftSpeed = 0;
                break;
        }
    }
    update() {
        let newX = this.x - this.leftSpeed + this.rightSpeed;
        if (newX > 0 && newX + 100 < window.innerHeight)
            this.x = newX;
        if (this.jumping) {
            this.dy += this.gravity;
            this.y += this.dy;
        }
        if (this.y >= window.innerHeight - this.player.clientHeight) {
            this.jumping = false;
            this.dy = 0;
        }
        this.player.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    update2() {
        this.downSpeed = 0;
    }
}
//# sourceMappingURL=main.js.map