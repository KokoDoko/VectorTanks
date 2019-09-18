# Vector Math

This is an experiment using Vector math to calculate speed and direction of a sprite. No fiddling around with radians and degrees at all!

## Vectors

- A Vector is an object with an X and Y coordinate. Used for position of the tank and the target we move towards.
- A normalised vector contains the *direction* towards that vector. Used for direction of the tank.
- Magnitude means the distance between two vectors.
- Speed is just a number. We make the speed lower when the magnitude gets lower.

## Updating position

```
let position = position + speed * direction
```

## Calculating sprite rotation

To display the sprite we need an angle. 

```
let angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI
```

## Compiling

Install typescript `npm install typescript -g` and type `tsc`, or press CMD+SHIFT+B in VS Code.
