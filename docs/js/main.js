class Game {
    constructor() {
        this.player = Player();
        this.worms = Worms();
        this.background = Background();
        this.platform = Platform();
        this.score = Score();
        this.gameLoop();
    }
    gameLoop() {
        this.player.update();
        this.worms.update();
        this.background.update();
        this.platform.update();
        this.score.update();
        requestAnimationFrame(() => this.gameLoop());
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