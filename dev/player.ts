class Player {
    private player : HTMLElement
    private div : HTMLElement

    private _x: number = 0
    private _y: number = 0

    private downkey: number = 0
    private upkey: number = 0
    private rightkey: number = 0
    private leftkey: number = 0

    private downSpeed: number = 0
    private upSpeed: number = 0
    private rightSpeed: number = 0
    private leftSpeed: number = 0 

    public get x(): number {
        return this._x
    }
    public set x(value: number) {
        this._x = value
    }
    public get y(): number {
        return this._y
    }
    public set y(value: number) {
        this._y = value
    }

    constructor(){
        //create player element
        this.player = document.createElement("player")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.player)

        //assign keys
        this.upkey = 38 
        this.downkey = 40
        this.rightkey = 39
        this.leftkey = 37

        //temporary placement
        this._x = 200
        this._y = 200

        //key events
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    //get the boundaries from the image
    public getRectangle(){
        return this.player.getBoundingClientRect() 
    }

    //what happens when you push the assigned key
    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 3.5
                break
            case this.downkey:
                this.downSpeed = 3.5
                break
            case this.rightkey:
                this.rightSpeed = 3.5
                break
            case this.leftkey:
                this.leftSpeed = 3.5
                break
        }
    }

    //what happens when you let the assigned key go
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


    //movement of character
    public move(){
        let newY = this._y - this.upSpeed + this.downSpeed
        if (newY > 0 && newY < window.innerHeight) this._y = newY

        let newX = this._x - this.leftSpeed + this.rightSpeed
        if (newX > 0 && newX < window.innerWidth) this._x = newX

        this.player.style.transform = `translate(${this._x}px, ${this._y}px)`
    }

    //stop the downwards movement 
    public stopMove(){
        this.downSpeed = 0
    }
}