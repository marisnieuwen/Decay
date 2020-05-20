//collision for platform//

class platform {
    private div:HTMLElement
    
    constructor() {
         this.div = document.createElement("car")
         document.body.appendChild(this.div)
     }
 
     public getRectangle() {
         return this.div.getBoundingClientRect()
     }
 }
 // two objects collide with eachother//

 class Game {
    constructor(){
       let c1 = new platform()
       let c2 = new platform()
       
       let hit = this.checkCollision(c1.getRectangle(), c2.getRectangle())
       console.log("platform 1 hits platform 2 ? " + hit)
    }
    
    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
  }