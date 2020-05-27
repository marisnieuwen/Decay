
class Player {
    
    private player : HTMLElement
    
    private x: number
    private y: number 

    private downkey: number = 0
    private upkey: number = 0
    private rightkey: number = 0
    private leftkey: number = 0

    private downSpeed: number = 0
    private upSpeed: number = 0
    private rightSpeed: number = 0
    private leftSpeed: number = 0 

    constructor(){
        this.player = document.createElement("player")
        
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.player)

        this.upkey = 38 
        this.downkey = 40
        this.rightkey = 39
        this.leftkey = 37

        this.x = 200
        this.y = 200

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public getRectangle(){
        return this.player.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 3
                break
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
    }

    public update(){
        let newY = this.y - this.upSpeed + this.downSpeed
        if (newY > 0 && newY + 100 < window.innerHeight) this.y = newY

        let newX = this.x - this.leftSpeed + this.rightSpeed
        if (newX > 0 && newX + 100 < window.innerHeight) this.x = newX

        this.player.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public update2(){
        this.downSpeed = 0
    }
}