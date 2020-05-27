class Player {
    
    private player : HTMLElement
    
    private x: number = 0
    private y: number = 0
    private dy: number = 0

    private downkey: number
    private upkey: number
    private rightkey: number
    private leftkey: number

    private downSpeed: number = 0
    private upSpeed: number = 0
    private rightSpeed: number = 0
    private leftSpeed: number = 0 


    private jumpHeight: number = -10
    private jumping: boolean = false
    private gravity: number = 0.2

    constructor(){
        this.player = document.createElement("player")
        
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.player)

        this.upkey = 38 
        this.downkey = 40
        this.rightkey = 39
        this.leftkey = 37

        this.x = 370
        this.y = 382

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public getRectangle(){
        return this.player.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                if(!this.jumping) {
                    this.jumping = true
                    console.log("jumped")
                    this.dy = this.jumpHeight
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

    public update(){
        // let newY = this.y - this.upSpeed + this.downSpeed
        // // if (newY > 0 && newY + 100 < window.innerHeight) this.y = newY

        let newX = this.x - this.leftSpeed + this.rightSpeed
        if (newX > 0 && newX + 100 < window.innerHeight) this.x = newX

        if (this.jumping) {
            this.dy += this.gravity
            this.y += this.dy
        }
        if (this.y >= window.innerHeight - this.player.clientHeight) {
            this.jumping = false
            this.dy = 0
        }

        this.player.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public update2(){
        this.downSpeed = 0
    }
}