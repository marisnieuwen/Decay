class Player {
    
    player : HTMLElement

    leftSpeed : number = 0
    rightSpeed : number = 0
    downSpeed : number = 0
    upSpeed : number = 0

    constructor(){
        this.createPlayer()

    }

    createPlayer(){
        this.player = document.createElement("player")
        
        this.player.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        this.player.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
        
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.player)
    }

    onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 65:
            this.upSpeed = 5
            break
        case 68:
            this.downSpeed = 5
            break
        case 87:
            this.leftSpeed = 5
            break
        case 83:
            this.rightSpeed = 5
            break
        }
    }
    
    onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 65:
            this.upSpeed = 0
            break
        case 68:
            this.downSpeed = 0
            break
        case 87:
            this.leftSpeed = 0
            break
        case 83:
            this.rightSpeed = 0
            break
        }
    }
}