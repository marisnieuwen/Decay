class Platform {
    private platform : HTMLElement

    private x: number
    private y: number

    private worms : Worm[] = []
    
    public get worm(): HTMLElement {return this.worm}

    constructor(){
        //create platforms
        this.platform = document.createElement("platform")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.platform)

        //give x and y random values
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight

        //sommige platformen hebben wormen nodig
        for (let i = 0; i < Math.random(); i++){
            this.worms.push(new Worm(i * this.x, i * this.y -48))
        }
    }

    //get the boundaries from the image
    public getRectangle(){
        return this.platform.getBoundingClientRect()
    }

    //place the platforms 
    public placement(){
        this.platform.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}