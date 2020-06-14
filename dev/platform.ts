class Platform{

    private element : HTMLElement;

    private x : number = 0
    private y : number = 0

    constructor(){

        this.element = document.createElement("platform"); 
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        
    }

    public getPlatformRectangle() {
        return this.element.getBoundingClientRect()
    }
}