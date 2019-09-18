class Game {

    public gameObjects : GameObject[] = []

    constructor() {
        this.gameObjects.push(new Tank())
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