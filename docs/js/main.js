"use strict";
class Game {
    constructor() {
        this.gameObjects = [];
        for (let i = 0; i < 3; i++) {
            this.gameObjects.push(new Tank());
        }
        this.update();
    }
    update() {
        for (let g of this.gameObjects) {
            g.update();
        }
        requestAnimationFrame(() => this.update());
    }
}
window.addEventListener("load", () => new Game());
class GameObject {
    constructor(tag) {
        this.div = document.createElement(tag);
        document.body.appendChild(this.div);
        this.position = new Vector2(Math.random() * window.innerWidth - 100, Math.random() * window.innerHeight - 100);
        this.speed = 0;
        this.direction = new Vector2(1, 1);
        this.offset = new Vector2(this.div.clientWidth / 2, this.div.clientHeight / 2);
    }
    update() {
    }
    draw() {
        this.position = Vector2.add(this.position, Vector2.multiply(this.direction, this.speed));
        let angle = Vector2.getAngleDegrees(this.direction);
        this.div.style.transform = `translate(${this.position.x - this.offset.x}px, ${this.position.y - this.offset.y}px) rotate(${angle}deg)`;
    }
}
class Tank extends GameObject {
    constructor() {
        super("tank");
        this.behaviour = new FollowMouse(this);
    }
    update() {
        this.behaviour.update();
        this.draw();
    }
}
class FollowMouse {
    constructor(g) {
        this.gameobject = g;
        this.targetPosition = new Vector2(200, 200);
        this.randomModifier = Math.random() * 10;
        this.callback = (e) => this.onMouseMove(e);
        window.addEventListener("mousemove", this.callback);
    }
    onMouseMove(e) {
        this.targetPosition = new Vector2(e.clientX, e.clientY);
        this.gameobject.direction = Vector2.getDistance(this.targetPosition, this.gameobject.position).normalize();
    }
    update() {
        this.gameobject.speed = Vector2.getDistance(this.targetPosition, this.gameobject.position).magnitude() / 35;
        this.gameobject.speed /= this.randomModifier;
    }
}
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static getDistance(v1, v2) {
        return new Vector2(v1.x - v2.x, v1.y - v2.y);
    }
    static getAngleDegrees(v) {
        return Math.atan2(v.y, v.x) * 180 / Math.PI;
    }
    static add(v1, v2) {
        return new Vector2(v1.x + v2.x, v1.y + v2.y);
    }
    static multiply(v, n) {
        return new Vector2(v.x * n, v.y * n);
    }
    static difference(v1, v2) {
        return new Vector2(v1.x - v2.x, v1.y - v2.y);
    }
    magnitude() {
        return Math.max(Math.sqrt(this.x * this.x + this.y * this.y), 0.0001);
    }
    normalize() {
        let mag = this.magnitude();
        return new Vector2(this.x / mag, this.y / mag);
    }
}
//# sourceMappingURL=main.js.map