class Spit{
    private spit : HTMLElement

    private x: number
    private y: number

    private xspeed: number
    private yspeed: number

    constructor(x:number, y:number){
        this.spit = document.createElement("spit")
        let worm = document.getElementsByTagName("worm")[0]
        worm.appendChild(this.spit)

        this.xspeed = Math.floor(Math.random() * 10) || Math.floor(Math.random() * -10) 
        this.yspeed = Math.floor(Math.random() * 10) || Math.floor(Math.random() * -10)

        this.move()
    }

    public move():void{
        this.x += this.xspeed
        this.y += this.yspeed

        this.spit.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}