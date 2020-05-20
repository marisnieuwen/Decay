class Player {
    
    private player : HTMLElement
    
    private x: number
    private y: number 

    private downSpeed: number = 0
    private upSpeed: number = 0
    private rightSpeed: number = 0
    private leftSpeed: number = 0



    constructor(){
        this.player = document.createElement("player")
        
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.player)

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case 38:
                this.upSpeed = 10
                break
            case 40:
                this.downSpeed = 10
                break
            case 39:
                this.rightSpeed = 10
                break
            case 37:
                this.leftSpeed = 10
                break
        }
    }

    onKeyUp(e: KeyboardEvent): void {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case 38:
                this.upSpeed = 0
                break
            case 40:
                this.downSpeed = 0
                break
            case 39:
                this.rightSpeed = 0
                break
            case 37:
                this.leftSpeed = 0
                break
        }
    }

    public update(){

        this.player.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}