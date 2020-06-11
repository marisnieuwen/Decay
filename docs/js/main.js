class Platform {
    constructor() {
        this.div = document.createElement("car");
        document.body.appendChild(this.div);
    }
    getRectangle() {
        return this.div.getBoundingClientRect();
    }
}
class PlatformCreator {
    constructor() {
        let c1 = new Platform();
        let c2 = new Platform();
        let hit = this.checkCollision(c1.getRectangle(), c2.getRectangle());
        console.log("car 1 hits car 2 ? " + hit);
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
class backgroundScroller {
    gameloop() {
        let background = URL["../images/eersteyeetjpeg"];
        let newY = background.y + background.upSpeed - background.downSpeed;
        if (newY > 0 && newY < window.innerHeight)
            background.y = newY;
        let posy = 0;
        let posx = 0;
        c.style.transform = `translate(${posx}px, ${posy}px)`;
        background.style.transform = `translate(${background.posx}px, ${background.posy}px)`;
    }
}
//# sourceMappingURL=main.js.map