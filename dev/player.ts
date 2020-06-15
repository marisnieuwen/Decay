class Player{

    private x : number = 0;
    private y : number = 0;
    private jumpy: number = 0

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

    private element : HTMLElement;


    public getSpeed() : number {
        return this.speed;
    }

    public setSpeed(speed : number): void{
        this.speed = speed;
    }


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

    public gravity() {
        this.y += this.speed;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getFutureRectangle(){
        let rect = this.element.getBoundingClientRect()
        rect.x += this.speed
        return rect
     }

    public getPlayerRectangle() {
        return this.element.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:    // jump with up key
                if(!this.jumping) {
                    this.jumping = true
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

    // update player if there is movement

    public move(){
        let newY = this.y - this.upSpeed + this.downSpeed
        if (newY > 0 && newY < window.innerHeight) this.y = newY

        let newX = this.x - this.leftSpeed + this.rightSpeed
        if (newX > 0 && newX < window.innerWidth) this.x = newX

        if (this.jumping) {
            this.jumpy += this.jumpGravity
            this.y += this.jumpy
        }

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    
    public stopMove(){
        this.downSpeed = 0
    }

    public update(){
        this.x += this.speed;
    }
}
