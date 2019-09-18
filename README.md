# Using Vector Math in sprite games

This is an small demo showing how to use Vector math to calculate the position, direction and rotation of a sprite.

[View at https://kokodoko.github.io/VectorTanks/](https://kokodoko.github.io/VectorTanks/)

## Vectors

A Vector is an object with an X and Y coordinate. We use this for the position of the tank and for the target we move towards.

```
let position = new Vector2(200, 200)
let target = new Vector(mouseX, mouseY)
```

A normalised vector contains the *direction* towards that vector. Used for direction of the tank.

```
let direction = target.normalise()
```

Subtract two Vectors to get the distance between them as a Vector:
```
let distance =  Vector2.getDistance(this.targetPosition, this.gameobject.position)
```

Magnitude means the length of a vector as a single number, we use this to reduce the speed of the tank when it closes in on the target.

```
let speed = distance.magnitude()
```

## Drawing the sprite

### Updating the position

We multiply the direction with the speed, and add that to the current position. 
```
this.position = Vector2.add(this.position, Vector2.multiply(this.direction, this.speed))
```


### Calculating sprite rotation

To display the sprite we need an angle. 

```
let angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI
```

### Draw using CSS transform
```
div.style.transform = `translate(${this.position.x}px, ${this.position.y}px) rotate(${angle}deg)`
```


## Project setup

The gameobject class does all the DOM rendering. The followMouse class updates the direction of the tank depending on the mouse position.

## Compiling

Install typescript `npm install typescript -g` and type `tsc`, or press CMD+SHIFT+B in VS Code.
