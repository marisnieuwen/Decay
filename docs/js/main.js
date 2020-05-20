class Game {
    constructor() {
        this.player = new Player();
        this.worm = new Worm();
    }
}
window.addEventListener("load", () => new Game());
class Player {
    constructor() {
        console.log("Er is een worm!");
        this.element = document.createElement("player");
        let x = 100;
        let y = 225;
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        this.element.style.transform = `translate(${x}px, ${y}px)`;
    }
}
class Worm {
    constructor() {
        console.log("Er is een worm!");
        this.element = document.createElement("worm");
        this.element.addEventListener("click", () => this.killWorm());
        this.changePosition();
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
    }
    changePosition() {
        let x = 700;
        let y = 476;
        this.element.style.transform = `translate(${x}px, ${y}px)`;
    }
    killWorm() {
        this.element.remove();
    }
}
//# sourceMappingURL=main.js.map