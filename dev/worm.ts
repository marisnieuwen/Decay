class Worm {

    div: HTMLElement
    element: HTMLElement

    constructor() {

        this.element = document.createElement("worm")

        this.changePosition()

        let game = document.getElementsByTagName("game")[0]

        game.appendChild(this.element)
    }

    changePosition() {
        let x = Math.random() * (window.innerWidth - this.element.clientWidth)
        let y = Math.random() * (window.innerHeight - this.element.clientHeight)
        this.element.style.transform = `translate(${x}px, ${y}px)`
    }
}