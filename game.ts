
  class Platform {
    private div:HTMLElement
    
    constructor() {
         this.div = document.createElement("car")
         document.body.appendChild(this.div)
     }
 
     public getRectangle() {
         return this.div.getBoundingClientRect()
     }
 }

 class PlatformCreator {
    constructor(){
       let c1 = new Platform()
       let c2 = new Platform()
       
       let hit = this.checkCollision(c1.getRectangle(), c2.getRectangle())
       console.log("car 1 hits car 2 ? " + hit)
    }
    
    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
  }
class backgroundScroller{
  private gameloop(){
      let downSpeed = 3.5
      
      
      let background = URL["Eerstelevelconceptproject4,decay.jpeg"];
      let newY = background.y - background.upSpeed + this.downSpeed
      if (newY > 0 && newY < window.innerHeight) this.y = newY
  
      let newX = this.x - this.leftSpeed + this.rightSpeed
      if (newX > 0 && newX < window.innerWidth) this.x = newX
  
      this.player.style.transform = `translate(${this.x}px, ${this.y}px)` 
  }
}