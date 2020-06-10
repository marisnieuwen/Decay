// vertical scrolling//
function loop(){
    let  yPos = 0;
      document.getElementById('background').style.backgroundPosition = yPos + 'px 0px';
  }

var background = URL["Eerstelevelconceptproject4,decay.jpeg"];


 //movement of character
 public move(){
    let newY = background.y - background.upSpeed + this.downSpeed
    if (newY > 0 && newY < window.innerHeight) this.y = newY

    let newX = this.x - this.leftSpeed + this.rightSpeed
    if (newX > 0 && newX < window.innerWidth) this.x = newX

    this.player.style.transform = `translate(${this.x}px, ${this.y}px)`
}      