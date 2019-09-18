/// <reference path="gameobject.ts" />

class Tank extends GameObject {

    public behaviour:FollowMouse

    constructor() {
        super("tank")
        this.behaviour = new FollowMouse(this)
    }

    public update() {
        this.behaviour.update()
        this.draw()
    }
}