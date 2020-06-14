
//class backgroundScroller{
 // private gameloop(){
    
     // let Image = newImage("eersteBackground.jepg");
     // let background = Image
      //let newY = background.y + background.upSpeed - background.downSpeed
     // if (newY > 0 && newY < window.innerHeight) background.y = newY

     // let posy = 0
     // let posx = 0
     // background.transform = `translate(${posx}px, ${posy}px)`//
  
     // background.style.transform = `translate(${background.posx}px, ${background.posy}px)` //
  //}
//}


 function loop(){ 
    let yPos = 0
     yPos--; 
     document.getElementById("Background").style.backgroundPosition = yPos + "px 0px" 
 } 