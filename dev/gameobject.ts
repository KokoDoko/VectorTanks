/**
 * GameObject
 */
class GameObject {
    public position : Vector2
    public speed: number
    public direction: Vector2
    public div    : HTMLElement
    public offset : Vector2

    constructor(tag: string) {

        this.div = document.createElement(tag)
        document.body.appendChild(this.div)

        this.position = new Vector2(Math.random() * window.innerWidth - 100, Math.random() * window.innerHeight - 100)
        this.speed = 0
        this.direction = new Vector2(1,1)
        
        // half of width and height to calculate center
        this.offset = new Vector2(this.div.clientWidth/2, this.div.clientHeight/2)
    }

    public update(){

    }
    
    public draw() : void {
        this.position = Vector2.add(this.position, Vector2.multiply(this.direction, this.speed))

        // angle is only used for display of image - based on vector
        let angle = Vector2.getAngleDegrees(this.direction)

        // use offset to draw the image at the center instead of left/top
        this.div.style.transform = `translate(${this.position.x - this.offset.x}px, ${this.position.y - this.offset.y}px) rotate(${angle}deg)`
    }
}