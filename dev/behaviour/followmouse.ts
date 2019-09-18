class FollowMouse {

    private gameobject:GameObject
    private callback:EventListener
    private targetPosition:Vector2
    private randomModifier:number // not needed but fun to give all tanks different speed

    constructor(g: GameObject){
        this.gameobject = g
        this.targetPosition = new Vector2(200,200)

        this.randomModifier = Math.random() * 40

        this.callback = (e: Event) => this.onMouseMove(e as MouseEvent)
        window.addEventListener("mousemove", this.callback)
    }

    private onMouseMove(e : MouseEvent) {
        // set a new target position when the mouse moves
        this.targetPosition = new Vector2(e.clientX, e.clientY)
        // normalize the distance between tank and mouse to get the direction
        this.gameobject.direction = Vector2.getDistance(this.targetPosition, this.gameobject.position).normalize()
    }

    public update() {
        // slow down when we reach the target position
        this.gameobject.speed = Vector2.getDistance(this.targetPosition, this.gameobject.position).magnitude()/35

        this.gameobject.speed /= this.randomModifier // not needed - just for testing 
    }

}