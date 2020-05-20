class Game {
    constructor() {
        this.player = new Player();
        this.worm = new Worm();
        this.background = new Background();
        this.platform = new Platform();
        this.score = new Score();
        this.gameLoop();
    }
    gameLoop() {
        this.player.update();
        this.worm.update();
        this.background.update();
        this.platform.update();
        this.score.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    drawGame() {
    }
}
window.addEventListener("load", () => new Game());
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
        let x = Math.random() * (window.innerWidth - this.element.clientWidth);
        let y = Math.random() * (window.innerHeight - this.element.clientHeight);
        this.element.style.transform = `translate(${x}px, ${y}px)`;
    }
    killWorm() {
        this.element.remove();
    }
}
//# sourceMappingURL=main.js.map