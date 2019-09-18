class Game {

    public gameObjects : GameObject[] = []

    constructor() {
        for(let i = 0;i<10;i++){
            this.gameObjects.push(new Tank())
        }
        this.update()
    }

    private update() : void {
        for(let g of this.gameObjects) {
            g.update()
        }        

        requestAnimationFrame(() => this.update())
    }
}

window.addEventListener("load", () => new Game())