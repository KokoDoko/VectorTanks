class Vector2 {

    public x: number
    public y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    public static getDistance(v1:Vector2, v2:Vector2) : Vector2 {
        return new Vector2(v1.x - v2.x, v1.y - v2.y)
    }

    public static getAngleDegrees(v:Vector2) {
        return Math.atan2(v.y, v.x) * 180 / Math.PI
    }

    public static add(v1: Vector2, v2:Vector2): Vector2 {
        return new Vector2(v1.x + v2.x, v1.y + v2.y)
    }

    public static multiply(v: Vector2, n: number): Vector2 {
        return new Vector2(v.x * n, v.y * n)
    }

    public static difference(v1: Vector2, v2:Vector2): Vector2 {
        return new Vector2(v1.x - v2.x, v1.y - v2.y)
    }

    public magnitude(): number {
        return Math.max(Math.sqrt(this.x * this.x + this.y * this.y), 0.0001) // hotfix to prevent dividing by 0
    }

    public normalize(): Vector2 {
        let mag = this.magnitude()
        return new Vector2(this.x / mag, this.y / mag)
    }
}