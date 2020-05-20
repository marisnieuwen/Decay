class Worm {

    div: HTMLElement
    element: HTMLElement

    constructor() {

        console.log("Er is een worm!")
        this.element = document.createElement("worm")
        this.element.addEventListener("click", () => this.killWorm())

        this.changePosition()

        let game = document.getElementsByTagName("game")[0]

        game.appendChild(this.element)
    }

    changePosition() {
        let x = 700
        let y = 476
        this.element.style.transform = `translate(${x}px, ${y}px)`
    }

    killWorm() {
        this.element.remove()
    }
    
}