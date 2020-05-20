class Game {
    constructor() {
        let player = new Player;
    }
}
window.addEventListener("load", () => new Game());
class Player {
    constructor() {
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.rightSpeed = 0;
        this.leftSpeed = 0;
        this.player = document.createElement("player");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.player);
        this.x += 3;
        this.y += 10;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    onKeyDown(e) {
        switch (e.keyCode) {
            case 38:
                this.upSpeed = 10;
                break;
            case 40:
                this.downSpeed = 10;
                break;
            case 39:
                this.rightSpeed = 10;
                break;
            case 37:
                this.leftSpeed = 10;
                break;
        }
    }
    onKeyUp(e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case 38:
                this.upSpeed = 0;
                break;
            case 40:
                this.downSpeed = 0;
                break;
            case 39:
                this.rightSpeed = 0;
                break;
            case 37:
                this.leftSpeed = 0;
                break;
        }
    }
    update() {
        this.player.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
class Pineapple {
    constructor() {
        console.log("Hallo!");
        this.element = document.createElement("pineapple");
        this.changePosition();
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
    }
    changePosition() {
        let x = Math.random() * (window.innerWidth - this.element.clientWidth);
        let y = Math.random() * (window.innerHeight - this.element.clientHeight);
        this.element.style.transform = `translate(${x}px, ${y}px)`;
    }
}
//# sourceMappingURL=main.js.map