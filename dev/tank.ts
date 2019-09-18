/// <reference path="gameobject.ts" />

class Tank extends GameObject {

    public behaviour:Behaviour

    constructor() {
        super("tank")
        this.behaviour = new FollowMouse(this)
    }

    public update() {
        this.behaviour.update()
        this.draw()
    }
}