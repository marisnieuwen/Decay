class Platform {
    private platform : HTMLElement

    private x: number
    private y: number


    constructor(){
        //create platforms
        this.platform = document.createElement("platform")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.platform)

        //give x and y random values
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
    }

    //get the boundaries from the pic for collision
    public getRectangle(){
        return this.platform.getBoundingClientRect()
    }

    //place the platforms 
    public placement(){
        this.platform.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}