class Platform {
    private platform : HTMLElement

    private x: number
    private y: number


    constructor(){
        this.platform = document.createElement("platform")
        
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.platform)

        
        // this.x = 0
        // this.y = 0
    
    }

    public getRectangle(){
        return this.platform.getBoundingClientRect()
    }

    public update(){
        this.platform.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}