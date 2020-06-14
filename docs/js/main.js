"use strict";
var Platform = (function () {
    function Platform() {
        this.div = document.createElement("car");
        document.body.appendChild(this.div);
    }
    Platform.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Platform;
}());
var PlatformCreator = (function () {
    function PlatformCreator() {
        var c1 = new Platform();
        var c2 = new Platform();
        var hit = this.checkCollision(c1.getRectangle(), c2.getRectangle());
        console.log("car 1 hits car 2 ? " + hit);
    }
    PlatformCreator.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return PlatformCreator;
}());
var backgroundScroller = (function () {
    function backgroundScroller() {
    }
    backgroundScroller.prototype.gameloop = function () {
        var Image = newImage("eersteBackground.jepg");
        var background = Image;
        var newY = background.y + background.upSpeed - background.downSpeed;
        if (newY > 0 && newY < window.innerHeight)
            background.y = newY;
        var posy = 0;
        var posx = 0;
        background.transform = "translate(" + posx + "px, " + posy + "px)";
        background.style.transform = "translate(" + background.posx + "px, " + background.posy + "px)";
    };
    return backgroundScroller;
}());
//# sourceMappingURL=main.js.map