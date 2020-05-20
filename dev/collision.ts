//collision for platform//

class Platform {
    private div:HTMLElement
    
    constructor() {
         this.div = document.createElement("platform")
         let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
     }
 
     public getRectangle() {
         return this.div.getBoundingClientRect()
     }
 }
 // two objects collide with eachother//

 class CollisionObjects {
    constructor(){
       let c1 = new Platform()
       let c2 = new Platform()
       
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
