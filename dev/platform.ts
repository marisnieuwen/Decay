class Platform{

    //Fields
    private element : HTMLElement;

    private x : number = 0
    private y : number = 0

    private speed : number = 0
    public worms : Worm[] = [] // lelijk , kan mooier met getWorms()



    constructor(){

        this.element = document.createElement("platform"); 
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);

        this.speed = Math.random() * 3 + 1
        this.x = this.x
        this.y = this.y

        for (let i = 0; i < Math.random() * 4; i++) { //zet wormen op platform
            this.worms.push(new Worm(i * 100 + 20, -60))
            
        }
        
    }

    public getPlatformRectangle() {
        return this.element.getBoundingClientRect()
    }
}