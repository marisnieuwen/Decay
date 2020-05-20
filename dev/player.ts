class Player {

    div: HTMLElement
    element: HTMLElement

    constructor() {

        console.log("Er is een worm!")
        this.element = document.createElement("player")

        let x = 100
        let y = 225

        let game = document.getElementsByTagName("game")[0]

        game.appendChild(this.element)

        this.element.style.transform = `translate(${x}px, ${y}px)`
    }
    
}