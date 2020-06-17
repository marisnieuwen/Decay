class Platform {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.worms = [];
        this.element = document.createElement("platform");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        this.speed = Math.random() * 3 + 1;
        this.x = this.x;
        this.y = this.y;
        for (let i = 0; i < Math.random() * 4; i++) {
            this.worms.push(new Worm(i * 100 + 20, -60));
        }
    }
    getPlatformRectangle() {
        return this.element.getBoundingClientRect();
    }
}
class Game {
    constructor() {
        this.spit = [];
        this.ground = 500;
        this.player = new Player();
        this.platform = new Platform();
        this.gameLoop();
    }
    gameLoop() {
        let PlatformRect = this.platform.getPlatformRectangle();
        let futurePlayerRect = this.player.getFutureRectangle();
        for (const worm of this.platform.worms) {
            console.log(worm);
            if (this.checkCollision(worm.getWormRectangle(), this.player.getPlayerRectangle())) {
                console.log("worm");
                worm.die();
            }
        }
        for (const spit of this.spit) {
            spit.move();
            if (this.checkCollision(spit.getSpitRectangle(), this.player.getPlayerRectangle())) {
                this.player.die();
            }
        }
        if (this.checkBottomCollision(PlatformRect, futurePlayerRect) || futurePlayerRect.bottom > this.ground) {
            this.player.collideGround();
        }
        this.player.move();
        requestAnimationFrame(() => this.gameLoop());
    }
    checkBottomCollision(platform, player) {
        return (platform.top <= player.bottom && player.top <= platform.bottom);
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
window.addEventListener("load", () => new Game());
class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.jumpy = 0;
        this.hitsGround = false;
        this.speed = 2;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.rightSpeed = 0;
        this.leftSpeed = 0;
        this.downkey = 0;
        this.upkey = 0;
        this.rightkey = 0;
        this.leftkey = 0;
        this.jumpHeight = -10;
        this.jumping = false;
        this.jumpGravity = 0.2;
        this.element = document.createElement("player");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        this.upkey = 38;
        this.downkey = 40;
        this.rightkey = 39;
        this.leftkey = 37;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    getSpeed() { return this.speed; }
    setSpeed(speed) { this.speed = speed; }
    getFutureRectangle() {
        let rect = this.element.getBoundingClientRect();
        rect.x = rect.x + this.leftSpeed - this.rightSpeed;
        rect.y = rect.y + this.downSpeed - this.upSpeed + this.jumpy;
        return rect;
    }
    getPlayerRectangle() {
        return this.element.getBoundingClientRect();
    }
    onKeyDown(e) {
        switch (e.keyCode) {
            case this.upkey:
                if (!this.jumping && this.hitsGround) {
                    this.jumping = true;
                    this.hitsGround = false;
                    console.log("jumped");
                    this.jumpy = this.jumpHeight;
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
    collideGround() {
        this.jumping = false;
        this.jumpy = 0;
        this.downSpeed = 0;
        this.hitsGround = true;
        console.log("collide");
    }
    move() {
        let newX = this.x - this.leftSpeed + this.rightSpeed;
        let newY = this.y;
        if (this.hitsGround == false) {
            this.jumpy += this.jumpGravity;
            newY += this.jumpy;
        }
        if (newX > 0 && newX < window.innerWidth)
            this.x = newX;
        if (newY > 0 && newY < window.innerHeight)
            this.y = newY;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    die() {
        this.element.remove();
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
    getSpitRectangle() {
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
    getWormRectangle() {
        return this.worm.getBoundingClientRect();
    }
    die() {
        this.worm.remove();
    }
}
//# sourceMappingURL=main.js.map