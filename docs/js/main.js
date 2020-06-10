class Game {
    constructor() {
        this.platform = [];
<<<<<<< HEAD
        for (let i = 0; i < 1; i++) {
            this.platform.push(new Platform());
        }
        this.player = new Player();
=======
        this.worm = [];
        for (let i = 0; i < 7; i++) {
            this.platform.push(new Platform());
        }
        this.player = new Player();
        for (let i = 0; i < 1; i++) {
            this.worm.push(new Worm(i * 45, -47));
        }
>>>>>>> db80a2449a2bea7753a3f0c518edf4538537daa5
        this.gameloop();
    }
    gameloop() {
        for (const platform of this.platform) {
<<<<<<< HEAD
            platform.update();
            if (this.checkCollision(platform.getRectangle(), this.player.getRectangle())) {
                this.player.update2();
            }
        }
        this.player.update();
=======
            platform.placement();
            if (this.checkCollision(platform.getRectangle(), this.player.getRectangle())) {
                this.player.stopMove();
            }
        }
        for (const worm of this.worm) {
            if (this.checkCollision(worm.getRectangle(), this.player.getRectangle())) {
                console.log("yoink");
                worm.die();
            }
        }
        this.player.move();
>>>>>>> db80a2449a2bea7753a3f0c518edf4538537daa5
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
<<<<<<< HEAD
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
        this.jumpy = 0;
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
    update() {
        let newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        let newX = this.x - this.leftSpeed + this.rightSpeed;
        if (newX > 0 && newX + 100 < window.innerHeight)
            this.x = newX;
        if (this.jumping) {
            this.jumpy += this.gravity;
            this.y += this.jumpy;
        }
        if (this.y >= window.innerHeight - this.player.clientHeight) {
            this.jumping = false;
            this.jumpy = 0;
        }
        this.player.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    update2() {
        this.downSpeed = 0;
=======
    constructor() {
        this.worms = [];
        this.platform = document.createElement("platform");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.platform);
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
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
    getRectangle() {
        return this.worm.getBoundingClientRect();
    }
    die() {
        this.worm.remove();
>>>>>>> db80a2449a2bea7753a3f0c518edf4538537daa5
    }
}
//# sourceMappingURL=main.js.map