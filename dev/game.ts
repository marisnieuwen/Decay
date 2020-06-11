
class backgroundScroller{
  private gameloop(){
    
      let Image = newImage("eersteBackground.jepg");
      let background = Image
      let newY = background.y + background.upSpeed - background.downSpeed
      if (newY > 0 && newY < window.innerHeight) background.y = newY

      let posy = 0
      let posx = 0
      background.transform = `translate(${posx}px, ${posy}px)`
  
      background.style.transform = `translate(${background.posx}px, ${background.posy}px)` 
  }
}


// loop(){ //
    // yPos--; //
    // document.getElementById("background").style.backgroundPosition = yPos + "px 0px" //
// } // 