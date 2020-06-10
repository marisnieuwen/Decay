class Game {
    constructor() {
        this.platform = [];
        for (let i = 0; i < 7; i++) {
            this.platform.push(new Platform());
        }
        this.player = new Player();
        this.gameloop();
    }
    gameloop() {
        for (const platform of this.platform) {
            platform.placement();
            if (this.checkCollision(platform.getRectangle(), this.player.getRectangle())) {
                this.player.stopMove();
            }
        }
        this.player.move();
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
        this.worms = [];
        this.platform = document.createElement("platform");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.platform);
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        for (let i = 0; i < Math.random(); i++) {
            this.worms.push(new Worm(i * this.x, i * this.y - 48));
        }
    }
    get worm() { return this.worm; }
    getRectangle() {
        return this.platform.getBoundingClientRect();
    }
    placement() {
        this.platform.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
class Player {
    constructor() {
        this.downkey = 0;
        this.upkey = 0;
        this.rightkey = 0;
        this.leftkey = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.rightSpeed = 0;
        this.leftSpeed = 0;
        this.player = document.createElement("player");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.player);
        this.upkey = 38;
        this.downkey = 40;
        this.rightkey = 39;
        this.leftkey = 37;
        this.x = 200;
        this.y = 200;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    getRectangle() {
        return this.player.getBoundingClientRect();
    }
    onKeyDown(e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 3.5;
                break;
            case this.downkey:
                this.downSpeed = 3.5;
                break;
            case this.rightkey:
                this.rightSpeed = 3.5;
                break;
            case this.leftkey:
                this.leftSpeed = 3.5;
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
    move() {
        let newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY < window.innerHeight)
            this.y = newY;
        let newX = this.x - this.leftSpeed + this.rightSpeed;
        if (newX > 0 && newX < window.innerWidth)
            this.x = newX;
        this.player.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    stopMove() {
        this.downSpeed = 0;
    }
}
class Worm {
    constructor(x, y) {
        this.worm = document.createElement("worm");
        let platform = document.getElementsByTagName("platform")[0];
        platform.appendChild(this.worm);
        this.x = x;
        this.y = y;
        this.worm.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=main.js.map