class Platform {
    private platform : HTMLElement

    private x: number
    private y: number


    constructor(){
        this.platform = document.createElement("platform")
        
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.platform)

        
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
    }

    public getRectangle(){
        return this.platform.getBoundingClientRect()
    }

    public update(){
        this.platform.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}