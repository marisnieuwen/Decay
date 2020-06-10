class Game {
    constructor() {
        this.platform = [];
        this.worm = [];
        this.spit = [];
        for (let i = 0; i < 7; i++) {
            this.platform.push(new Platform());
        }
        this.player = new Player();
        for (let i = 0; i < 1; i++) {
            this.worm.push(new Worm(i, -48));
        }
        for (let i = 0; i < 5; i++) {
            this.spit.push(new Spit(i, -48));
        }
        this.gameloop();
    }
    gameloop() {
        for (const platform of this.platform) {
            platform.placement();
            if (this.checkCollision(platform.getRectangle(), this.player.getRectangle())) {
                this.player.stopMove();
            }
        }
        for (const worm of this.worm) {
            if (this.checkCollision(worm.getRectangle(), this.player.getRectangle())) {
                worm.die();
            }
        }
        for (const spit of this.spit) {
            spit.move();
            if (this.checkCollision(spit.getRectangle(), this.player.getRectangle())) {
                this.player.die();
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
    }
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
    die() {
        this.player.remove();
    }
}
class Spit {
    constructor(x, y) {
        this.spit = document.createElement("spit");
        let worm = document.getElementsByTagName("worm")[0];
        worm.appendChild(this.spit);
        this.x = x;
        this.y = y;
        this.xspeed = Math.floor(Math.random() * 10) || Math.floor(Math.random() * -10);
        this.yspeed = Math.floor(Math.random() * 10) || Math.floor(Math.random() * -10);
        this.move();
    }
    getRectangle() {
        return this.spit.getBoundingClientRect();
    }
    move() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.spit.style.transform = `translate(${this.x}px, ${this.y}px)`;
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
    getRectangle() {
        return this.worm.getBoundingClientRect();
    }
    die() {
        this.worm.remove();
    }
}
//# sourceMappingURL=main.js.map