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
      
      let background = URL["Eerstelevelconceptproject4,decay.jpeg"];
      let newY = background.y + background.upSpeed - background.downSpeed
      if (newY > 0 && newY < window.innerHeight) background.y = newY

      let posy = 0
      let posx = 0
      CSS.style.transform = `translate(${posx}px, ${posy}px)`
  
      background.style.transform = `translate(${background.posx}px, ${background.posy}px)` 
  }
}