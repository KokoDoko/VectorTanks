class FollowMouse implements Behaviour {

    private gameobject:GameObject
    private callback:EventListener
    private targetPosition:Vector2

    constructor(g: GameObject){
        this.gameobject = g
        this.targetPosition = new Vector2(200,200)

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
    }

}