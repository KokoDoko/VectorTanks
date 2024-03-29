# Using Vector Math in sprite games

This is an small demo showing how to use Vector math to calculate the position, direction and rotation of a sprite. [You can view the demo live at https://kokodoko.github.io/VectorTanks/](https://kokodoko.github.io/VectorTanks/)

## Vectors

A Vector is an object with an X and Y coordinate. 

```typescript
class Vector2 {

    public x: number
    public y: number

    ...
}
```


We use a Vector for the **position** of the tank and the position of the target we move towards.

```typescript
let position = new Vector2(200, 200)
let target = new Vector(mouseX, mouseY)
```

We can subtract two Vectors to get the distance between them (as a Vector)
```typescript
let distance =  Vector2.getDistance(this.targetPosition, this.gameobject.position)
```

A *normalised* vector contains the *direction* towards that vector. Used for direction of the tank towards the target.

```typescript
let direction = distance.normalise()
```

The magnitude converts the distance to a single number. Use this to reduce the speed of the tank when it closes in on the target.

```typescript
let speed = distance.magnitude()
```

## Drawing the sprite

### Updating the position

We multiply the direction with the speed, and add that to the current position. 
```typescript
this.position = Vector2.add(this.position, Vector2.multiply(this.direction, this.speed))
```


### Calculating sprite rotation

To display the sprite we need an angle. 

```typescript
let angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI
```

### Draw using CSS transform
```typescript
div.style.transform = `translate(${this.position.x}px, ${this.position.y}px) rotate(${angle}deg)`
```

# Project setup

The gameobject class does all the DOM rendering. The followMouse class updates the direction of the tank depending on the mouse position.

## DOM element

We're using a DOM elements and CSS to draw sprites. The CSS file contains the image and size of the tank.
```css
tank {
    display:block;
    position:absolute;
    width: 100px; height: 70px;
    background-image: url('../images/tank.png');
    background-size: contain;
}
```

## Game class

Creating a `new Tank()` by code also adds a new `<tank></tank>` element in the DOM, by using `document.createElement("tank")`. Updating the tank instances with a `requestAnimationFrame` causes them to be drawn.

## Compiling

Install typescript `npm install typescript -g` and type `tsc`, or press CMD+SHIFT+B in VS Code.
