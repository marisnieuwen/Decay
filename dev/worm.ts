class Pineapple {

    div: HTMLElement
    element: HTMLElement

    constructor() {

        console.log("Hallo!")
        this.element = document.createElement("pineapple")

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