
class Worm {

    //Fields
    private worm : HTMLElement
    
    private x : number
    private y : number

    private game : Game

    constructor(x:number, y:number) {
        this.worm = document.createElement("worm")
        let platform = document.getElementsByTagName("platform")[0]
        platform.appendChild(this.worm)

        this.x = x
        this.y = y
        
        this.worm.style.transform = `translate(${this.x}px, ${this.y}px)`
    }   

    //get the boundaries from the image
    public getWormRectangle(){
        return this.worm.getBoundingClientRect() 
    }

    public die(){
        this.worm.remove()
    }
    
        
}
