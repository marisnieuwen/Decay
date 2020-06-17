class Player {

    //Fields
    private x: number = 0;
    private y: number = 0;
    private jumpy: number = 0
    private hitsGround: boolean = false

    private speed: number = 2;
    private downSpeed: number = 0
    private upSpeed: number = 0
    private rightSpeed: number = 0
    private leftSpeed: number = 0

    private downkey: number = 0
    private upkey: number = 0
    private rightkey: number = 0
    private leftkey: number = 0

    private jumpHeight: number = -10
    private jumping: boolean = false
    private jumpGravity: number = 0.2

    private element: HTMLElement;

    //Properties
    public getSpeed(): number { return this.speed; }
    public setSpeed(speed: number): void { this.speed = speed; }


    constructor() {

        this.element = document.createElement("player");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);

        //assign keys
        this.upkey = 38
        this.downkey = 40
        this.rightkey = 39
        this.leftkey = 37

        //key events
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

    }


    public getFutureRectangle() { //voor de collision detection platform (WERKT NIET?)
        let rect: DOMRect = this.element.getBoundingClientRect() as DOMRect

        rect.x = rect.x + this.leftSpeed - this.rightSpeed
        rect.y = rect.y + this.downSpeed - this.upSpeed + this.jumpy

        return rect
    }


    public getPlayerRectangle() {
        return this.element.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:    // jump with up key
                if (!this.jumping && this.hitsGround) {
                    this.jumping = true
                    this.hitsGround = false
                    console.log("jumped")
                    this.jumpy = this.jumpHeight
                }
            case this.downkey:
                this.downSpeed = 3
                break
            case this.rightkey:
                this.rightSpeed = 3
                break
            case this.leftkey:
                this.leftSpeed = 3
                break
        }
    }

    // change the speed on key up
    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0
                break
            case this.downkey:
                this.downSpeed = 0
                break
            case this.rightkey:
                this.rightSpeed = 0
                break
            case this.leftkey:
                this.leftSpeed = 0
                break
        }
    }

    public collideGround() {
        this.jumping = false
        this.jumpy = 0
        this.downSpeed = 0
        this.hitsGround = true

        console.log("collide")
    }
    // update player if there is movement
    public move() {

        let newX = this.x - this.leftSpeed + this.rightSpeed
        let newY = this.y //+ this.jumpGravity

        if (this.hitsGround == false) {
            this.jumpy += this.jumpGravity
            newY += this.jumpy
        }

        if (newX > 0 && newX < window.innerWidth) this.x = newX
        if (newY > 0 && newY < window.innerHeight) this.y = newY

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }



    public die() {
        this.element.remove()
    }
}
