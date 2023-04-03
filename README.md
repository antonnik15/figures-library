# lib-figure-implementation

> lib-figure-implementation - a library that allows you to create and work with various geometric shapes.
> The library architecture allows you to draw shapes in HTML using the canvas element
>
## Features

- Full TypeScript support
- Support all platforms
- Easy to use

## Table of contents

### Classes

- [Circle](docs/classes/Circle.md)
- [Rectangle](docs/classes/Rectangle.md)
- [Shape](docs/classes/Shape.md)
- [Square](docs/classes/Square.md)
- [Triangle](docs/classes/Triangle.md)

### Type Aliases

- [InitialPointType](docs/modules.md#initialpointtype)

## Type Aliases

### InitialPointType

Ƭ **InitialPointType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[features/shape/coordinates-type.ts:1](https://github.com/antonnik15/figures-library/blob/6be00a5/src/features/shape/coordinates-type.ts#L1)

## Quick start

### Install

First make sure that you have installed Node.js.

Next install lib-figure-implementation from the command line using yarn or npm:

#### yarn:

```shell
yarn add lib-figure-implementation
```

#### npm:

```shell
npm install lib-figure-implementation --save
```

Ready! Now you can use the lib-figure-implementation library in your project.


#### Example
```TS
const circle = Circle.createCircle({ x: 1190, y: 150 }, 100, 'green');
// => instance of class Circle to the variable circle

const square = Square.createSquare({ x: 850, y: 50 }, 200, 'blue');
// => instance of class Square in square
 
const triangle = Triangle.createTriangle(
  [
    { x: 550, y: 250 },
    { x: 750, y: 250 },
    { x: 650, y: 50 }
  ],
  'black'
);
// => instance of class Triangle to the variable triangle

const rectangle = Rectangle.createRectangle({ x: 150, y: 50 }, 350, 200, 'red');
// => instance of class Rectangle to the variable rectangle

circle.area()
// => circle area value

circle.perimeter()
// => circle perimeter value

circle.draw()
// => draw circle in canvas

rectangle.area()
// => rectangle area value

triangle.area()
// => triangle area value

circle.changeColor("white")
// => change line color of circle
```